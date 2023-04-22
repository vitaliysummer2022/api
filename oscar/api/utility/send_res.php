<?php

function send_res($data, $status=200) {
    http_response_code($status);
    header('Content-Type: application/json');
    print json_encode($data);
}