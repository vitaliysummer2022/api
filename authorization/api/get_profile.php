<?php

error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);
require_once './utility/validation.php';
require_once './utility/utility.php';
require_once './utility/token.php';

if (check_token()) get_profile();

function get_profile() {
    $fileData = read_file();

    if (!check_method('GET')) {
        return false;
    } else {
        send_res($fileData);
    }
}