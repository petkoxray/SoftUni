<?php
$nums = explode(" ", trim(fgets(STDIN)));
$result = [];
foreach ($nums as $num) {
    if (!array_key_exists($num, $result)) {
        $result[$num] = 0;
    }

    $result[$num]++;
}

ksort($result);

foreach ($result as $key => $val) {
    echo "$key -> $val\n";
}