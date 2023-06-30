<?php

function get_param($param) {
    if (isset($_GET[$param])) return trim($_GET[$param]);
    else return '';
}

function get_user($file_data) {
    $user_id = get_param('user_id');

    if ($user_id === '') {
        send_res($file_data);
    } else {
        for ($i = 0; $i < count($file_data); $i++) {
            if ($file_data[$i]['id'] == $user_id) {
                send_res($file_data[$i]);
                return;
            }
        }
        send_res(array('message' => 'no user found'));
    }
}

function delete_user($file_data) {
    $user_id = get_param('user_id');

    if (empty($user_id)) send_res(array('error' => 'user_id is missed'), 400);
    elseif(!check_user_id($file_data, $user_id)) return;
    else {
        $index = array_search($user_id, array_column($file_data, 'id'));
        array_splice($file_data, $index, 1);
        file_put_contents('./data/data.json', json_encode($file_data));
        send_res(array('message' => 'user has been deleted'), 200);
    }
}

function add_user($file_data) {
    $data = json_decode(file_get_contents('php://input'), true);
    $user_data = ['first_name','last_name','job','phone','email','country','about'];
    $data = trim_val($data, $user_data);

     if (!check_missed_val($data, $user_data) ||
        !check_empty_val($data, $user_data) ||
        !check_length($data, ['first_name','last_name','job','phone','email'],40) ||
        !check_length($data, ['country'],2) || 
        !check_length($data, ['about'],120) ||
        !check_email($data['email']) ||
        !check_phone($data['phone']) ||
        !check_unique_val($file_data, $data['email'], 'email')) {
        return;
    } else {
        $user_id_arr = get_id_arr($file_data);
        $user_id = array('id' => create_id($user_id_arr));
        $user = array_merge($user_id, $data);

        array_push($file_data, $user);
        file_put_contents('./data/data.json', json_encode($file_data));
        send_res($user, 201);
    }
}

function create_id($user_id_arr) {
    for ($i = 0; $i < 2; $i++) {
        $user_id = rand(1, 999);
        if (!in_array($user_id, $user_id_arr)) return $user_id;
        else $i = 0;
    }
}

function get_id_arr($data) {
    $arr = [];
    for ($i = 0; $i < count($data); $i++) {
        array_push($arr, $data[$i]['id']);
    }
    return $arr;
}

function trim_val($data, $arr) {
    for ($i = 0; $i < count($arr); $i++) {
        if (isset($data[$arr[$i]])) {
            $data[$arr[$i]] = trim($data[$arr[$i]]);
        } 
    }
    return $data;
}