<?php

abstract class Human
{
    protected $firstName;
    protected $lastName;

    public function __construct(string $firstName, string $lastName)
    {
        $this->setFirstName($firstName);
        $this->setLastName($lastName);
    }

    public function setFirstName(string $firstName)
    {
        if (!ctype_upper($firstName[0]) || strlen($firstName) < 3) {
            throw new Exception('Invalid firstname');
        }
        $this->firstName = $firstName;
    }

    public function setLastName(string $lastName)
    {
        if (!ctype_upper($lastName[0]) || strlen($lastName) < 3) {
            throw new Exception('Invalid last name');
        }
        $this->lastName = $lastName;
    }

    public function __toString()
    {
        return "First Name: " . $this->firstName . PHP_EOL .
            "Second Name: " . $this->lastName . PHP_EOL;
    }
}