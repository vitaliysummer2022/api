<?php

function send_res($data, $status = 200) {
    http_response_code($status);
    header('Content-Type: application/json');
    print json_encode($data);
}

function read_file() {
    return json_decode(file_get_contents('./data/profile.json'), true);
}