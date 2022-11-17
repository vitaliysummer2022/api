<?php

function check_missed($data, $arr) {
    $result = true;
    for ($i = 0; $i < count($arr); $i++) {
        if (!isset($data[$arr[$i]])) {
            $result = false;
            send_res(array('error' => "$arr[$i] is missed"), 422);
            break;
        }
    }
    return $result;
}

function check_empty($data, $arr) {
    $result = true;
    for ($i = 0; $i < count($arr); $i++) {
        if (isset($data[$arr[$i]]) && strlen(trim($data[$arr[$i]])) === 0) {
            $result = false;
            send_res(array('error' => $arr[$i] . ' can\'t be empty'), 422);
            break;
        }
    }
    return $result;
}

function check_length($data, $arr, $length) {
    $result = true;
    for ($i = 0; $i < count($arr); $i++) {
        if (isset($data[$arr[$i]]) && strlen($data[$arr[$i]]) > $length) {
            $result = false;
            send_res(array('error' => 'max length of ' . $arr[$i] . ' is ' . $length . ' chars'), 422);
            break;
        }
    }
    return $result;
}

function check_method($method) {
    if ($_SERVER['REQUEST_METHOD'] !== $method) {
        send_res(array('error' => 'incorrect method'), 405);
        return false;
    } else {
        return true;
    }
}

function validate_email($email) {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        send_res(array('error' => 'email is invalid'), 422);
        return false;
    } else {
        return true;
    }
}