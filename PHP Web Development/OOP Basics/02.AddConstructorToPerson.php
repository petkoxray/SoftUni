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