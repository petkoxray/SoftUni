<?php

$phoneBook = [];

while(true) {
    $input = explode(' : ', trim(fgets(STDIN)));
    var_dump($input);
    if ($input[0] === 'Over')
        break;
    
    if (is_numeric($input[0])) {
        $phoneBook[$input[1]] = $input[0];
    } else {
        $phoneBook[$input[0]] = $input[1];
    }
}

foreach ($phoneBook as $name => $number) {
    echo "$name -> $number\n";
}

