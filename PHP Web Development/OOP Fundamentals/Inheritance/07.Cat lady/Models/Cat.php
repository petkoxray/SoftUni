<?php

abstract class Cat
{
    protected $name;

    public function __construct($name)
    {
        $this->setName($name);
    }

    public function setName(string $name)
    {
        $this->name = $name;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function __toString()
    {
        return $this->getName();
    }
}