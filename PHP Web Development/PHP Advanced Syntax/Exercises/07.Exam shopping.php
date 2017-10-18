<?php

$products = [];

while('shopping time' !== $input = trim(fgets(STDIN))) {
    list($command, $product, $quantity) = explode(' ', $input);
    if (!array_key_exists($product, $products)) {
        $products[$product] = 0;
    }

    $products[$product] += intval($quantity);
}

while ('exam time' !== $input = trim(fgets(STDIN))) {
    list($command, $product, $quantity) = explode(' ', $input);
    if (!array_key_exists($product, $products)) {
        echo "$product doesn't exist!\n";
        continue;
    }

    if ($products[$product] <= 0) {
        echo "$product out of stock!\n";
        continue;
    }

    $products[$product] -= intval($quantity);
}

foreach ($products as $product => $quantity) {
    if ($quantity > 0)
        echo "$product -> $quantity\n";
}