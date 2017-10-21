<?php

include_once "Cat.php";

class StreetExtraordinaire extends Cat
{
    private $decibelsOfMeows;

    public function __construct($name, float $decibelsOfMeows)
    {
        parent::__construct($name);
        $this->setDecibelsOfMeows($decibelsOfMeows);
    }

    public function getDecibelsOfMeows(): float
    {
        return $this->decibelsOfMeows;
    }

    public function setDecibelsOfMeows(float $decibelsOfMeows)
    {
        $this->decibelsOfMeows = $decibelsOfMeows;
    }

    public function __toString()
    {
        return self::class . " "
            . parent::__toString() . " "
            . $this->getDecibelsOfMeows() . PHP_EOL;
    }
}