<?php

error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);
require_once './utility/validation.php';
require_once './utility/utility.php';
require_once './utility/read_file.php';
require_once './utility/send_res.php';

$fileData = read_file();
$data = json_decode(file_get_contents('php://input'), true);
$data = trim_val($data, ["country", "capital", "region"]);

//Response
if (!check_missed_val($data, ["country", "capital", "region"])
    || !check_empty_val($data, ["country", "capital", "region"])
    || !check_length($data, ["country", "capital"])
    || !check_region($data["region"])
    || !check_unique_val($fileData, $data["country"], "country")
    || !check_method('POST')) {
    return false;
}
else {
    array_push($fileData, $data);
    file_put_contents('./data/country.json', json_encode($fileData));
    send_res(array("message" => "country has been added"), 201);
}