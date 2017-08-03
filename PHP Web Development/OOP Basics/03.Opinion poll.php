<?php

class Person
{
    public $name;
    public $age;

    function __construct(string $name, int $age)
    {
        $this->name = $name;
        $this->age = $age;
    }
}

$lines = intval(fgets(STDIN));
$persons = [];

while($lines--) {
    $args = explode(" ", fgets(STDIN));
    $persons[] = new Person($args[0], intval($args[1]));
}

usort($persons, 'sortByName');

foreach($persons as $person) {
    if ($person->age > 30) {
        echo "$person->name - $person->age\n";
    }
}

function sortByName($a, $b)
{
    return strcmp($a->name, $b->name);
}

