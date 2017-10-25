<?php

use HrModels\Employee;
use HrCore\Database;

spl_autoload_register(function ($className) {
    require_once "{$className}.php";
});

$db = new Database();

$stm = $db->prepare("SELECT * FROM geography.employees WHERE employee_id = 3");
$stm->execute();
$a = $stm->fetchObj(Employee::class);
var_dump($a);


//$input = explode(", ", trim(fgets(STDIN)));
//
//$e = new Employee($db, ...$input);
//$e->insertEmployee();
