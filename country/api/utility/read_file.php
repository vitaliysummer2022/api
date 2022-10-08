<?php

function read_file() {
    return json_decode(file_get_contents('./data/country.json'), true);
}