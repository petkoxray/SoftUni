<?php

use Models\App;

spl_autoload_register(function ($className) {
    require_once "index.php";
});

$radio = new App();
$radio->start();

