<?php

$numbers = explode(' ', trim(fgets(STDIN)));

$result = [];

foreach ($numbers as $number) {
    if (!is_numeric($number))
        continue;

    if (!array_key_exists($number, $result)) {
        $result[$number] = 0;
    }

    $result[$number]++;
}

ksort($result);

foreach ($result as $k => $v) {
    echo "$k -> $v times\n";
}