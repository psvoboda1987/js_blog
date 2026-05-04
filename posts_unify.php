<?php

$dirs = glob('pages/*');
echo '<pre>';
// var_dump($dirs);
foreach ($dirs as $dir) {
    $files = glob("$dir/*.md");
    foreach ($files as $file) {
        if (str_contains($file, 'parsed.md')) {
            var_dump(unlink($file));
            var_dump($file);
        }
    }
    // break;
}
