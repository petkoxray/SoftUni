<?php

class Person
{
    private $name;
    private $company;
    private $car;
    private $parentsArray;
    private $childs;
    private $pokemons;

    public function __construct($name)
    {
        $this->name = $name;
    }

    public function getCar(): Car
    {
        return $this->car;
    }

    public function setCar(Car $car)
    {
        $this->car = $car;
    }

    public function getCompany(): Company
    {
        return $this->company;
    }

    public function setCompany(Company $company)
    {
        $this->company = $company;
    }

    public function addPokemon(Pokemon $pokemon)
    {
        $this->pokemons[] = $pokemon;
    }

    public function addParent(Parents $parent)
    {
        $this->parentsArray[] = $parent;
    }

    public function addChildren(Children $child)
    {
        $this->childs[] = $child;
    }

    public function __toString()
    {
        $output = $this->name . "\n";
        $output .= "Company: \n" . $this->getCompany()->getName()
            . " " . $this->getCompany()->getSalary()
            . " " . $this->getCompany()->getDepartment().  "\n";
        $output .= "Car: \n" . $this->getCar()->getModel()
            . " " . $this->getCar()->getSpeed() .  "\n";

        return $output;
    }
}

class Company
{
    private $name;
    private $department;
    private $salary;

    public function __construct(string $name, string $department, float $salary)
    {
        $this->name = $name;
        $this->department = $department;
        $this->salary = number_format($salary, 2);
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getSalary(): string
    {
        return $this->salary;
    }

    public function getDepartment(): string
    {
        return $this->department;
    }
}

class Pokemon
{
    private $name;
    private $type;

    public function __construct(string $name, string $type)
    {
        $this->name = $name;
        $this->type = $type;
    }
}

class Parents
{
    private $name;
    private $birthday;

    public function __construct(string $name,string $birthday)
    {
        $this->name = $name;
        $this->birthday = date_create_from_format("dd/mm/YY", $birthday);
    }
}

class Children
{
    private $name;
    private $birthday;

    public function __construct(string $name,string $birthday)
    {
        $this->name = $name;
        $this->birthday = date_create_from_format("dd-mm-YY", $birthday);
    }
}

class Car
{
    private $model;
    private $speed;

    public function __construct(string $model, int $speed)
    {
        $this->model = $model;
        $this->speed = $speed;
    }

    public function getModel(): string
    {
        return $this->model;
    }

    public function getSpeed(): int
    {
        return $this->speed;
    }
}

$input = explode(" ", trim(fgets(STDIN)));
$persons = [];

while ($input[0] !== "End") {
    $name = $input[0];
    if (!array_key_exists($name, $persons)) {
        $persons[$name] = new Person($name);
    }

    switch ($input[1]) {
        case "company":
            $persons[$name]->setCompany(new Company($input[2], $input[3], floatval($input[4])));
            break;
        case "car":
            $persons[$name]->setCar(new Car($input[2], intval($input[3])));
            break;
        case "pokemon":
            $persons[$name]->addPokemon(new Pokemon($input[2], $input[3]));
            break;
        case "parents":
            $persons[$name]->addParent(new Parents($input[2], $input[3]));
            break;
        case "children":
            $persons[$name]->addChildren(new Children($input[2], $input[3]));
            break;
    }

    $input = explode(" ", trim(fgets(STDIN)));
}

$name = trim(fgets(STDIN));
echo $persons[$name];