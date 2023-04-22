<?php

function check_method($method) {
    if ($_SERVER['REQUEST_METHOD'] !== $method) {
        send_res(array('error' => 'incorrect method'), 405);
        return false;
    } else {
        return true;
    }
}