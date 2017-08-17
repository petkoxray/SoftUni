<?php

class Employee
{
    private $name;
    private $salary;
    private $position;
    private $department;
    private $email;
    private $age;

    public function __construct(string $name,
                                float $salary,
                                string $position,
                                string $department,
                                string $email,
                                int $age)
    {
        $this->name = $name;
        $this->salary = $salary;
        $this->position = $position;
        $this->department = $department;
        $this->email = $email;
        $this->age = $age;
    }

    public function getSalary(): float
    {
        return $this->salary;
    }

    public function __toString() : string
    {
        $this->salary = number_format($this->salary, 2);
        return "$this->name $this->salary $this->email $this->age";
    }
}

class Department
{
    public $employees = [];

    public function addEmployee(Employee $employee)
    {
        $this->employees[] = $employee;
        usort($this->employees, function(Employee $a, Employee $b) {
            return $a->getSalary() < $b->getSalary();
        });
    }

    public function getAverageSalary() : float
    {
        $sum = 0;
        foreach ($this->employees as $employee) {
            $sum += $employee->getSalary();
        }

        return $sum / count($this->employees);
    }
}

$departments = [];

$lines = intval(fgets(STDIN));
while($lines--) {
    $args = explode(" ", fgets(STDIN));
    $name = $args[0];
    $salary = floatval($args[1]);
    $position = $args[2];
    $department = $args[3];
    $email = 'n/a';
    $age = -1;

    if (isset($args[4])) {
        if (is_numeric($args[4])) {
            $age = intval($args[4]);
        } else {
            $email = $args[4];
        }
    }

    if (isset($args[5])) {
        $age = intval($args[5]);
    }

    $employee = new Employee($name, $salary, $position, $department, $email, $age);

    if (!array_key_exists($department, $departments)) {
        $departments[$department] = new Department();
    }

    $departments[$department]->addEmployee($employee);
}

uasort($departments, "sortBySalary");
echo "Highest Average Salary: " . key($departments) . "\n";
$best = array_shift($departments);
foreach ($best->employees as $employee) {
    echo $employee . "\n" ;
}

function sortBySalary(Department $a, Department $b)
{
    return $a->getAverageSalary() < $b->getAverageSalary();
}


