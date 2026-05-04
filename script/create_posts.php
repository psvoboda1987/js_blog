<?php

use FastVolt\Helper\Markdown;

require_once '../vendor/autoload.php';

createPostsJson();
var_dump('DONE');

function createPostsJson()
{
    $postsConfigContent = file_get_contents('../posts_config.json');
    $postsData = json_decode($postsConfigContent, true);
    foreach ($postsData as $p => $post) {
        $markdown = new Markdown();
        $markdown->setContent(file_get_contents(
            '../assets/posts/' . $post['link'] . '.md'
        ));
        $postsData[$p]['content'] = $markdown->getHtml();
    }
    file_put_contents('../posts.json', json_encode($postsData));
}
