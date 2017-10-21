<?php

include_once "Cat.php";

class Siamese extends Cat
{
    private $earSize;

    public function __construct(string $name, float $earSize)
    {
        parent::__construct($name);
        $this->setEarSize($earSize);
    }

    public function getEarSize(): float
    {
        return $this->earSize;
    }

    public function setEarSize(float $earSize)
    {
        $this->earSize = $earSize;
    }

    public function __toString()
    {
        return self::class . " "
            . parent::__toString() . " "
            . $this->getEarSize() . PHP_EOL;
    }
}