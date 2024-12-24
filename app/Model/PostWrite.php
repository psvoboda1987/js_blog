<?php

declare(strict_types = 1);

namespace App\Model;

use App\Bootstrap;
use Nette;
use Nette\Database\Explorer;
use Nette\Http\IRequest;
use Nette\Utils\ArrayHash;
use Webmozart\Assert\Assert;

final class PostWrite
{
    use Nette\SmartObject;

    public const POST_LIKE_TABLE = 'post_like';
    public const POST_TABLE = 'post';

    public function __construct(
        private readonly Explorer $database,
        private readonly PostRead $postRead
    )
    {
    }

    public function deletePost(string $link): void
    {
        $this->database->table(self::POST_TABLE)
            ->where('link', $link)
            ->where('deleted', 0)
            ->update(['deleted' => 1]);
    }

    public function handleAddLike(IRequest $request, string $link): void
    {
        $headers = $request->getHeaders();
        $post = $this->postRead->getPost($link);
        Assert::notNull($post);

        $this->database->table(self::POST_TABLE)
            ->where('id', $post->offsetGet('id'))
            ->update(['likes+=' => 1]);

        $this->insertUserInfo(
            $post->offsetGet('id'),
            $request->getRemoteAddress(),
            $headers['user-agent'],
            $headers['accept-language']
        );
    }

    private function insertUserInfo(
        int $postId,
        string $remoteAddress,
        ?string $userAgent,
        ?string $acceptLanguage
    ): void
    {
        $this->database->table(self::POST_LIKE_TABLE)->insert([
            'post_id' => $postId,
            'remote_address' => $remoteAddress,
            'user_agent' => $userAgent,
            'accept_language' => $acceptLanguage,
        ]);
    }

    public function handleCreatePost(ArrayHash $values): void
    {
        $values->date_published = date('Y-m-d');

        try {
            $values->link = PostManager::slugify($values->title);
        } catch (\RuntimeException $e) {
            Bootstrap::createLog($e);
        }

        if ($values->id === '') {
            unset($values['id']);
            $this->createPost($values);
            return;
        }

        $this->updatePost($values);
    }

    private function updatePost(ArrayHash $values): void
    {
        $this->database->table(self::POST_TABLE)
            ->where('id', $values->id)
            ->update($values);
    }

    private function createPost(ArrayHash $values): void
    {
        $this->database->table(self::POST_TABLE)
            ->insert($values);
    }
}
