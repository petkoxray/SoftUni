<?php

class Person
{
    private $name;
    private $money;
    private $bag = [];

    public function __construct(float $money, string $name)
    {
        $this->setMoney($money);
        $this->setName($name);
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name)
    {
        if (empty($name)) {
            throw new Exception("Name cannot be empty");
        }
        $this->name = $name;
    }

    public function getMoney(): float
    {
        return $this->money;
    }

    public function setMoney(float $money)
    {
        if ($money < 0) {
            throw new Exception('Money cannot be negative');
        }
        $this->money = $money;
    }

    public function getBag(): array
    {
        return $this->bag;
    }

    public function buyProduct(Product $product)
    {
        if ($this->getMoney() >= $product->getCost()) {
            $this->setMoney($this->getMoney() - $product->getCost());
            $this->bag[] = $product;
            echo $this->getName() . " bought " . $product->getName() . PHP_EOL;
        } else {
            echo $this->getName() . " can't afford " . $product->getName() . PHP_EOL;
        }
    }

    public function boughtProducts()
    {
        if (count($this->getBag()) > 0) {
            return $this->getName() . " - " . implode(', ', $this->getBag());
        }

        return $this->getName() . " - Nothing bought";
    }
}