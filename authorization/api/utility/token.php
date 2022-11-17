<?php

require_once './utility/utility.php';

function check_token() {
    $headers = apache_request_headers();

    if (isset($headers['Authorization']) 
        && isset($_COOKIE['profile_token_test'])
        && substr($headers['Authorization'], 7) === $_COOKIE['profile_token_test']) {
        return true;
    }
    else {
        send_res(array('error'=>'authentication failed'), 401);
    }
}

//Create token
function create_token($token) {
    $header = encode_token(json_encode(['typ' => 'JWT', 'alg' => 'HS256']));
    $payload = encode_token(json_encode($token));
    $signature = encode_token(hash_hmac('sha256', $header . '.' . $payload, 'profile_token_test', true));
    
    return  $header . '.' . $payload . '.' . $signature;
}

function encode_token($data) {
    return str_replace(['+', '/', '='], ['', '', ''], base64_encode($data));
}