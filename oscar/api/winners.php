<?php
error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);
require_once './utility/utility.php';
require_once './utility/validation.php';
require_once './utility/send_res.php';

$fileData = json_decode(file_get_contents('./data/data.json'), true);
$category = getCategory('category', $fileData);
$search = getSearch('search', $category);

if (!check_method('GET')) return false;
else if (!$search) return false;
else send_res(sortData($search));