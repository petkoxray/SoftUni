<?php

use AnimalApp\App;

spl_autoload_register(function ($className) {
    require_once "{$className}.php";
});

$zoo = new App();
$zoo->start();
