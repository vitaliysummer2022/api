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

function check_gender($val) {
    if ($val !== 'm' && $val !== 'f') {
        send_res(array('error' => "gender must be m or f"), 422);
        return false;
    } else {
        return true;
    }
}

function check_result($val) {
    if ($val > 0 && $val < 6) {
        return true;
    } else {
        send_res(array('error' => "result must be between 1 and 5"), 422);
        return false;
    }
}