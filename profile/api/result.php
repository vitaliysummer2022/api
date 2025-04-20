<?php
error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);

$method = $_SERVER['REQUEST_METHOD'];
$file_data = json_decode(file_get_contents('./data.json'), true);

switch ($method) {
    case 'GET':
        if (!isset($_GET['id']) || empty($_GET['id'])) {
            send_res(['error' => 'Missing required parameter'], 400);
        } elseif ($_GET['id'] != 1) {
            send_res(['error' => 'Access denied'], 403);
        } else {
            send_res($file_data, 200);
        }
        break;
    default:
        send_res(array('error' => 'incorrect method'), 405);
}

function send_res($data, $status) {
    http_response_code($status);
    header('Content-Type: application/json');
    print json_encode($data);
}