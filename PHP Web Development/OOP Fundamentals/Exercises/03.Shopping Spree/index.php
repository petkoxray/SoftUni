<?php
include "Person.php";
include "Product.php";

$persons = explode(';', trim(fgets(STDIN)));
$products = explode(';', trim(fgets(STDIN)));

$persons = array_filter($persons, function ($p) {
    return $p !== '';
});

$products = array_filter($products, function ($p) {
    return $p !== '';
});

$persons = array_map(function ($args) {
    list($name, $money) = explode('=', $args);
    return new Person($money, $name);
}, $persons);

$products = array_map(function ($args) {
    list($name, $money) = explode('=', $args);
    return new Product($name, $money);
}, $products);

while ("END" !== $input = trim(fgets(STDIN))) {
    list($personName, $productName) = explode(' ', $input);

    $filtredPersons = array_filter($persons, function ($p) use ($personName) {
        return $p->getName() === $personName;
    });

    $person = array_shift($filtredPersons);

    $filtredProducts = array_filter($products, function ($p) use ($productName) {
        return $p->getName() === $productName;
    });

    $product = array_shift($filtredProducts);

    $person->buyProduct($product);
}

foreach ($persons as $person) {
    echo $person->boughtProducts() . PHP_EOL;
}