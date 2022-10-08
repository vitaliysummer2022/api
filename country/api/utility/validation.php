<?php

require_once './data/static_data.php';

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

function check_length($data, $arr) {
    $result = true;
    for ($i = 0; $i < count($arr); $i++) {
        if (strlen($data[$arr[$i]]) > 20) {
            $result = false;
            send_res(array('error' => "max length of $arr[$i] is 20 chars"), 422);
            break;
        }
    }
    return $result;
}

function check_region($val) {
    if (!in_array(strtolower($val), REGIONS)) {
        send_res(array('error' => 'invalid region value'), 422);
        return false;
    } else {
        return true;
    }
}

function check_region_param($arr) {
    $result = true;
    if ($arr[0] !== '' && $arr[0] !== 'all') {
        for ($i = 0; $i < count($arr); $i++) {
            if (!in_array($arr[$i], REGIONS)) {
                $result = false;
                send_res(array('error' => 'invalid region value'), 400);
                break;
            }
        }
    }
    return $result;
}

function check_unique_val($data, $val, $old_val) {
    $result = true;
    for ($i = 0; $i < count($data); $i++) {
        if (strtolower($data[$i][$old_val]) === trim(strtolower($val))) {
            $result = false;
            send_res(array('error' => "$old_val already exists"), 422);
            break;
        }
    }
    return $result;
}

function check_current_val($data, $val, $old_val) {
    $result = false;
    for ($i = 0; $i < count($data); $i++) {
        if (strtolower($data[$i][$old_val]) === trim(strtolower($val))) {
            $result = true;
            break;
        }
    }
    return $result;
}

function check_exist($data, $val, $val_name) {
    $result = false;
    for ($i = 0; $i < count($data); $i++) {
        if (strtolower($data[$i][$val_name]) === trim(strtolower($val))) {
            $result = true;
            break;
        }
    }
    
    if (!$result) send_res(array('error' => $val_name .' isn\'t found'), 404);
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