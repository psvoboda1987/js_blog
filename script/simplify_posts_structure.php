<?php

$postDirs = glob('../assets/posts/*');
echo '<pre>';
// var_dump($postDirs);
foreach ($postDirs as $postDir) {
    $oldPath = "$postDir/default.md";
    $newPath = "$postDir.md";
    var_dump(
        // $oldPath
        // $newPath
        rename($oldPath, $newPath)
    );
    // break;
}
