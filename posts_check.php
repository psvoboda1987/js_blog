<?php

$pages = scandir('./pages');

$listItemsData = json_decode(file_get_contents('./posts.json'));
$listItems = [];
foreach ($listItemsData as $key => $value) {
	$listItems[] = $value->link;
}

$missingPages = [];
foreach ($listItems as $key => $value) {
	if (!in_array($value, $pages)) {
		$missingPages[] = $value;
	}
}

sort($missingPages);
var_dump($missingPages);