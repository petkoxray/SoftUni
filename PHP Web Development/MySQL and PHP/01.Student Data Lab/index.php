<?php

include "Core\App.php";

$app = new App();

$args = explode(" ", trim(fgets(STDIN)));
list($fist_name, $last_name, $student_number, $phone_number) = $args;

$app->addStudent($fist_name, $last_name, $student_number, $phone_number);


var_dump($app->getStudent(5));
$app->deleteStudent(5);
var_dump($app->getStudent(5));
