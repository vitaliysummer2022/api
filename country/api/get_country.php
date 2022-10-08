<?php

error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);
require_once './data/static_data.php';
require_once './utility/utility.php';
require_once './utility/validation.php';
require_once './utility/read_file.php';
require_once './utility/send_res.php';

$country = getParam($_GET['country']);
$capital = getParam($_GET['capital']);
$region = explode(',', trim(getParam($_GET['region'])));
$region = array_map('strtolower', $region);

$fileData = read_file();
$result = [];

//Response
if (!check_region_param($region) 
    || !check_method('GET')) {
    return false;
}
else {
    if (strtolower($region[0]) === 'all') {
        send_res($fileData);
    }
    else {
        for ($i = 0; $i < count($fileData); $i++) {
            if (strtolower($country) === strtolower($fileData[$i]["country"]) 
            || strtolower($capital) === strtolower($fileData[$i]["capital"]) 
            || in_array(strtolower($fileData[$i]["region"]), $region)) {
                array_push($result, $fileData[$i]);
            }
        }
        ($result === []) ? send_res(array('message' => 'no results found'))
        : send_res($result);
    }
}