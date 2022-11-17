<?php

error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);
require_once './utility/validation.php';
require_once './utility/utility.php';
require_once './utility/token.php';

$email = 'test@test.com';
$pwd = '1';

$data = json_decode(file_get_contents('php://input'), true);
$data_field = ['email', 'password'];

//Response
if (!check_missed($data, $data_field)
    || !check_empty($data, $data_field)
    || !check_length($data, $data_field, 20)
    || !check_method('POST')
    || !validate_email($data['email'])) {
    return false;
} 
elseif (trim($data['email']) !== $email
    || trim($data['password']) !== $pwd) {
    send_res(array('error' => 'authentication failed'), 401);
}
else {
    $fileData = read_file();
    $user_id = $fileData['data']['userId'];
    $expiration = time() + (86400 * 90);
    $token = create_token(array('userId' => $user_id, 'expiresAt' => $expiration));

    $user_data = array(
        'userId' => $user_id,
        'firstName' => $fileData['data']['firstName'],
        'lastName' => $fileData['data']['lastName'],
    );

    $access = array(
        'jwt' => $token,
        'expiresAt' => gmdate("Y-m-d\TH:i:s\Z", $expiration)
    );

    setcookie('profile_token_test', $token, $expiration, '/');
    send_res(array('data' => $user_data, 'access' => $access), 201);
}