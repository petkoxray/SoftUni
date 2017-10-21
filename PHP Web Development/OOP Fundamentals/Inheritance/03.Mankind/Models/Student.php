<?php

include_once "Human.php";

class Student extends Human
{
    private $facultyNumber;

    public function __construct($firstName, $lastName, int $facultyNumber)
    {
        parent::__construct($firstName, $lastName);
        $this->setFacultyNumber($facultyNumber);
    }

    public function setFacultyNumber(int $facultyNumber)
    {
        if (strlen((string)$facultyNumber) < 5
            || strlen((string)$facultyNumber) > 10) {
            throw new Exception("Invalid faculty number!");
        }
        $this->facultyNumber = $facultyNumber;
    }

    public function __toString()
    {
        return parent::__toString() . "Faculty Number: " . $this->facultyNumber . PHP_EOL;
    }
}