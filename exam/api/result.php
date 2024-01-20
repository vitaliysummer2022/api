<?php
error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);
require_once './utility/utility.php';
require_once './utility/validation.php';

$method = $_SERVER['REQUEST_METHOD'];
$file_data = json_decode(file_get_contents('./data/data.json'), true);

switch ($method) {
    case 'GET':
        if (empty($file_data)) {
            send_res(array('message' => 'no results found'));
        } else {
            send_res($file_data);
        }
        break;
    case 'POST':
        add_result($file_data);
        break;
    default:
        send_res(array('error' => 'incorrect method'), 405);
}