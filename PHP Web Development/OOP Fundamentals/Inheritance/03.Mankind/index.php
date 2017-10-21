<?php

include "Models/Student.php";
include "Models/Worker.php";

try {
    $argsStudent = explode(" ", trim(fgets(STDIN)));
    list($firstNameStudent, $lastNameStudent, $facNumber) = $argsStudent;
    $student = new Student($firstNameStudent, $lastNameStudent, $facNumber);
    echo $student;

    $argsWorker = explode(" ", trim(fgets(STDIN)));
    list($firstNameWorker, $lastNameWorker, $weekSalary, $workHoursPerDay) = $argsWorker;
    $worker = new Worker($firstNameStudent, $lastNameStudent, $weekSalary, $workHoursPerDay);
    echo $worker;

} catch (Exception $exception) {
    echo $exception->getMessage();
}