<?php

$names = [];

while ('filter base' !== $input = trim(fgets(STDIN))) {
    list($name, $arg) = explode(' -> ', $input);

    if (filter_var($arg, FILTER_VALIDATE_INT)) {
        $names[$name]['Age'] = intval($arg);
    } else if (filter_var($arg, FILTER_VALIDATE_FLOAT)) {
        $names[$name]['Salary'] = floatval($arg);
    } else {
        $names[$name]['Position'] = $arg;
    }
}

$filter = trim(fgets(STDIN));

foreach ($names as $name => $value) {
    if (isset($value[$filter]))
        echo "$name -> $value[$filter]\n";
}