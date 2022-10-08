<?php

error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);
require_once './utility/validation.php';
require_once './utility/utility.php';
require_once './utility/read_file.php';
require_once './utility/send_res.php';

$fileData = read_file();
$country = getParam($_GET['country']);

//Response
if ($country === '') {
    send_res(array('error' => 'country is missed'), 400);
}
elseif (!check_method('DELETE')
        || !check_exist($fileData, $country, "country")) {
    return false;
}
else {
    $index = get_index($fileData, "country", $country);
    array_splice($fileData, $index, 1);
    file_put_contents('./data/country.json', json_encode($fileData));
    send_res(array("message" => "country has been deleted"), 200);
}