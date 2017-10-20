<?php
class Person
{
    private $name;
    private $age;

    public function __construct(string $name, int $age)
    {
        $this->setName($name);
        $this->setAge($age);
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name)
    {
        if (strlen($name) < 3) {
            throw new Exception("Name’s length should not be less than 3 symbols");
        }
        $this->name = $name;
    }

    public function getAge(): int
    {
        return $this->age;
    }

    public function setAge(int $age)
    {
        if ($age < 1) {
            throw new Exception("Age must be positive!");
        }

        $this->age = $age;
    }
}

class Child extends Person
{
    public function setAge(int $age)
    {
        if ($age > 16) {
            throw new Exception("Child’s age must be less than 16!");
        }

        Parent::setAge($age);
    }
}

$person = new Person('Gosho', 10);
$child = new Child('Petiufi', 15);

var_dump($person);
var_dump($child);