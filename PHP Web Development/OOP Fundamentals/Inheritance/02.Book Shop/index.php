<?php

include "App.php";

$app = new App();

try {
    $app->start();
} catch(Exception $exception) {
    echo $exception->getMessage();
}