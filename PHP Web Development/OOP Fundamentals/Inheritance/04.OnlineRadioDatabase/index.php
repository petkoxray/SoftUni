<?php

use Models\App;

spl_autoload_register(function ($className) {
    require_once "{$className}.php";
});

$radio = new App();
$radio->start();

