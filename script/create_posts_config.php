<?php

$config = [];
$postsContent = file_get_contents('../posts.json');
$posts = json_decode($postsContent);

foreach ($posts as $post) {
    $config[] = [
        'id' => $post->id,
        'link' => $post->link,
        'publish' => $post->publish,
        'title' => $post->title
    ];
}

file_put_contents('../posts_config.json', json_encode($config));
