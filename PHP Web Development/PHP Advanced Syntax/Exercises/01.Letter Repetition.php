<?php
$input = trim(fgets(STDIN));
$result = [];

for ($i = 0; $i < strlen($input); $i++) {
    if (!array_key_exists($input[$i], $result)) {
        $result[$input[$i]] = 0;
    }

    $result[$input[$i]]++;
}

printResult($result);

function printResult(array $letters){
    foreach ($letters as $key => $value) {
        echo $key . ' -> ' . $value . "\n";
    }
}