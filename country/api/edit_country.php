<?php

error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);
require_once './utility/validation.php';
require_once './utility/utility.php';
require_once './utility/read_file.php';
require_once './utility/send_res.php';

$fileData = read_file();
$data = json_decode(file_get_contents('php://input'), true);
$data = trim_val($data, ["country", "newCountry", "newCapital"]);

//Response
if (!isset($data["newCountry"]) && !isset($data["newCapital"])) {
    send_res(array('error' => 'new country or capital should be added'), 422);
} 
elseif (!check_missed_val($data, ["country"])
    || !check_empty_val($data, ["country", "newCountry", "newCapital"])
    || !check_length($data, ["newCountry", "newCapital"])
    || !check_unique_val($fileData, $data["newCountry"], "country")
    || !check_method('PUT')) {
    return false;
}
elseif (!check_current_val($fileData, $data["country"], "country")) {
    send_res(array('error' => "invalid current country"), 422);
    return false;
}
else {
    $index = get_index($fileData, "country", $data["country"]);
    if (isset($data["newCountry"])) $fileData[$index]["country"] = $data["newCountry"];
    if (isset($data["newCapital"])) $fileData[$index]["capital"] = $data["newCapital"];
    
    file_put_contents('./data/country.json', json_encode($fileData));
    send_res(array("message" => "country has been edited"), 200);
}