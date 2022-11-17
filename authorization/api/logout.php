<?php

error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);
require_once './utility/validation.php';
require_once './utility/token.php';

if (!check_method('DELETE')) {
    return false;
} elseif (check_token()) {
    setcookie('profile_token_test', '', time() - 3600, '/');
    http_response_code(204);
}