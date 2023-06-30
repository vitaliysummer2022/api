<?php

function check_missed_val($data, $arr) {
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

function check_empty_val($data, $arr) {
    $result = true;
    for ($i = 0; $i < count($arr); $i++) {
        if (isset($data[$arr[$i]]) && empty($data[$arr[$i]])) {
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
        if (strlen($data[$arr[$i]]) > $length) {
            $result = false;
            send_res(array('error' => "max length of $arr[$i] is $length chars"), 422);
            break;
        }
    }
    return $result;
}

function check_email($email) {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        send_res(array('error' => 'invalid email format'), 422);
        return false;
    } else {
        return true;
    }
}

function check_phone($phone) {
    if (!preg_match('/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/', $phone)) {
        send_res(array('error' => 'phone format should be XXX-XXX-XXXX'), 422);
        return false;
    } else {
        return true;
    }
}

function check_unique_val($data, $val, $user_val) {
    $result = true;
    for ($i = 0; $i < count($data); $i++) {
        if (strtolower($data[$i][$user_val]) === trim(strtolower($val))) {
            $result = false;
            send_res(array('error' => "$user_val is already taken"), 422);
            break;
        }
    }
    return $result;
}

function check_user_id($file_data, $user_id) {
    for ($i = 0; $i < count($file_data); $i++) {
        if ($file_data[$i]['id'] == $user_id) {
            return true;
        }
    }
    send_res(array('message' => 'user doesn\'t exist'), 404);
    return false;
}