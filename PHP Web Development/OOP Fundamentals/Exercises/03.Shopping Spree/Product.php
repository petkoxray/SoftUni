<?php

class Product
{
    private $name;
    private $cost;

    public function __construct(string $name, float $cost)
    {
        $this->setName($name);
        $this->setCost($cost);
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name)
    {
        if (empty($name)) {
            throw new Exception('Name cannot be empty');
        }
        $this->name = $name;
    }

    public function getCost(): float
    {
        return $this->cost;
    }

    public function setCost(float $cost)
    {
        if ($cost <= 0) {
            throw new Exception('Cost cannot be zero or negative');
        }
        $this->cost = $cost;
    }

    public function __toString()
    {
        return $this->getName();
    }
}