<?php

error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);
require_once './utility/validation.php';
require_once './utility/utility.php';
require_once './utility/token.php';

if (check_token()) edit_profile();

function edit_profile() {
    $fileData = read_file();
    $data = json_decode(file_get_contents('php://input'), true);
    $data_field = ['firstName', 'lastName'];

    //Response
    if (!check_missed($data, $data_field)
        || !check_empty($data, $data_field)
        || !check_length($data, $data_field, 20)
        || !check_method('PUT')) {
        return false;
    } else {
        $fileData['data']['firstName'] = trim($data['firstName']);
        $fileData['data']['lastName'] = trim($data['lastName']);

        file_put_contents('./data/profile.json', json_encode($fileData));
        send_res(array("message" => "profile has been edited"), 200);
    }
}