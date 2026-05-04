<?php

use FastVolt\Helper\Markdown;

require_once '../vendor/autoload.php';
// echo '<pre>';
createPostsJson();

function createPostsJson()
{
    $postsData = [];
    $postsMd = glob('../assets/posts/*/default.md');
    foreach ($postsMd as $p => $postMd) {
        $postContent = file_get_contents($postMd);

        $title = strtok($postContent, "\n\r");
        $title = ltrim($title, '# ');

        $markdown = new Markdown();
        $markdown->setContent($postContent);

        $postsData[] = [
            'id' => ($p + 1),
            'content' => $markdown->getHtml(),
            'title' => $title,
            'link' => getLinkFromTitle($title),

        ];
        // var_dump($postsData);
        // break;
    }

    file_put_contents('../posts_generated.json', json_encode($postsData));
}

function getLinkFromTitle(string $title)
{
    // Převede diakritiku na základní písmena (č -> c) a odstraní ji
    $slug = transliterator_transliterate('Any-Latin; Latin-ASCII; Lower();', $title);
    // Nahradí vše, co není písmeno nebo číslo, pomlčkou
    $slug = preg_replace('/[^a-z0-9]+/', '-', $slug);
    // Odstraní přebytečné pomlčky na začátku a na konci
    return trim($slug, '-');
}
