<?php

$animals = [
    [ 'name' => 'Waffles', 'type' => 'dog', 'age'  => 12],
    [ 'name' => 'Fluffy', 'type' => 'cat', 'age'  => 14],
    [ 'name' => 'Spelunky', 'type' => 'dog', 'age'  => 4],
    [ 'name' => 'Hank', 'type' => 'dog', 'age'  => 11],
];

$filltredDogs = array_filter($animals, function($dog) {
    return $dog['type'] === 'dog' && $dog['age'] > 10;
});

print_r($filltredDogs);

