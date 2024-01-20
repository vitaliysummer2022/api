<?php

function send_res($data, $status = 200) {
    http_response_code($status);
    header('Content-Type: application/json');
    print json_encode($data);
}

function add_result($file_data) {
    $user_data = ['name', 'gender', 'result'];
    $data = trim_val($_POST);

    if (!check_missed_val($data, $user_data) ||
        !check_empty_val($data, $user_data) ||
        !check_length($data, ['name'], 20) ||
        !check_gender($data['gender']) ||
        !check_result($data['result'])) {
        return;
    } else {
        $data['result'] = intval($data['result']);
        array_push($file_data, $data);
        file_put_contents('./data/data.json', json_encode($file_data));
        send_res($data, 201);
    }
}

function trim_val($arr) {
    foreach ($arr as &$value) {
        $value = trim($value);
    }
    return $arr;
}