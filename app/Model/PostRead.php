<?php

declare(strict_types = 1);

namespace App\Model;

use DateTime;
use Nette;
use Nette\Database\Explorer;
use Nette\Database\Table\ActiveRow;

final class PostRead
{
    use Nette\SmartObject;

    public const POST_CATEGORY_TABLE = 'post_category';
    public const POST_TABLE = 'post';

    public function __construct(private readonly Explorer $database)
    {
    }

    /**
     * @param array<string, string> $search
     * @return array<int, mixed>
     */
    public function getPosts(
        int $limit = 20,
        int $offset = 0,
        string $orderBy = 'DESC',
        array $search = []
    ): array {
        return $this->database->table(self::POST_TABLE)
            ->where('date_published < ?', new DateTime())
            ->where('deleted', 0)
            ->whereOr($search)
            ->order(sprintf('date_published %s', $orderBy))
            ->limit($limit, $offset)
            ->fetchAll();
    }

    /**
     * @param array<string, string> $search
     */
    public function getPublishedArticlesCount(array $search): int
    {
        return $this->database->table(self::POST_TABLE)
            ->where('date_published < ?', new DateTime)
            ->whereOr($search)
            ->limit(1)
            ->count('id');
    }

    public function getPost(string $link): ?ActiveRow
    {
        return $this->database->table(self::POST_TABLE)
            ->where('deleted', 0)
            ->where('link', $link)
            ->fetch();
    }

    /**
     * @return array<int, string>
     */
    public function getCategories(): array
    {
        return $this->database->table(self::POST_CATEGORY_TABLE)
            ->fetchPairs('id', 'category');
    }

    /**
     * @return array<int, mixed>
     */
    public function getRelatedPosts(string $actualLink, ?int $categoryId = null, int $limit = 5): array
    {
        return $this->database->table(self::POST_TABLE)
            ->where('deleted', 0)
            ->where('date_published < ?', new DateTime)
            ->where($categoryId ? ['category' => $categoryId] : [])
            ->where('link !=', $actualLink)
            ->limit($limit)
            ->order('RAND()')
            ->fetchAll();
    }
}
