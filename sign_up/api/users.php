<?php
error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);
require_once './utility/utility.php';
require_once './utility/validation.php';
require_once './utility/send_res.php';

$method = $_SERVER['REQUEST_METHOD'];
$file_data = json_decode(file_get_contents('./data/data.json'), true);

switch ($method) {
    case 'GET':
        get_user($file_data);
        break;
    case 'POST':
        add_user($file_data);
        break;
    case 'DELETE':
        delete_user($file_data);
        break;
    default:
        send_res(array('error' => 'incorrect method'), 405);
}