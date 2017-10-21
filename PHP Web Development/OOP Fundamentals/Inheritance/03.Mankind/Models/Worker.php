<?php

include_once "Human.php";

class Worker extends Human
{
    private $weekSalary;
    private $workHoursPerDay;
    private $salaryPerHour;

    public function __construct(
        string $firstName,
        string $lastName,
        int $weekSalary,
        int $workHoursPerDay
    ) {
        parent::__construct($firstName, $lastName);
        $this->setWeekSalary($weekSalary);
        $this->setWorkHoursPerDay($workHoursPerDay);
    }

    public function setWeekSalary(int $weekSalary)
    {
        if ($weekSalary < 10) {
            throw new Exception("Expected value mismatch!Argument: weekSalary");
        }
        $this->weekSalary = $weekSalary;
    }

    public function setWorkHoursPerDay(int $workHoursPerDay)
    {
        if ($workHoursPerDay < 1 || $workHoursPerDay > 12) {
            throw  new Exception("Expected value mismatch!Argument: workHoursPerDay");
        }
        $this->workHoursPerDay = $workHoursPerDay;
    }

    public function getWeekSalary()
    {
        return number_format($this->weekSalary, 2);
    }

    public function getWorkHoursPerDay()
    {
        return number_format($this->workHoursPerDay, 2);
    }

    public function getSalaryPerHour(): float
    {
        return number_format(
            ($this->weekSalary / $this->workHoursPerDay) / 7, 2);
    }

    public function __toString()
    {
        return parent::__toString()
            . "Week salary: " . $this->getWeekSalary() . PHP_EOL
            . "Hours per day: " . $this->getWorkHoursPerDay() . PHP_EOL
            . "Salary per hour: " . $this->getSalaryPerHour();
    }
}