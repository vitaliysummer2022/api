<?php

function getParam($param) {
    if (isset($param)) return trim($param);
    else return '';
}

function trim_val($data, $arr) {
    for ($i = 0; $i < count($arr); $i++) {
        if (isset($data[$arr[$i]])) {
            $data[$arr[$i]] = trim($data[$arr[$i]]);
        } 
    }
    return $data;
}

function get_index($arr, $key, $val) {
    for ($i = 0; $i < count($arr); $i++) {
        if (strtolower($arr[$i][$key]) === strtolower($val)) {
            $index = $i;
            break;
        } 
    }
    return $index;
}