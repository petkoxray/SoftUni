<?php

include_once "Cat.php";

class Cymric extends Cat
{
    private $furLength;

    public function __construct(string $name, float $furLength)
    {
        parent::__construct($name);
        $this->setFurLength($furLength);
    }

    public function getFurLength(): float
    {
        return $this->furLength;
    }

    public function setFurLength(float $furLength)
    {
        $this->furLength = $furLength;
    }

    public function __toString()
    {
        return self::class . " "
            . parent::__toString() . " "
            . $this->getFurLength() . PHP_EOL;
    }
}