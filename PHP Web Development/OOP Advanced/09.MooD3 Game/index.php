<?php

use MoodModels\Archangel;
use MoodModels\Demon;

spl_autoload_register(function ($className) {
    require_once "{$className}.php";
});

$input = explode(" | ", trim(fgets(STDIN)));

if ($input[1] === "Archangel") {
    $character = new Archangel($input[0], intval($input[2]), intval($input[3]));
} else {
    $character = new Demon($input[0], intval($input[2]), floatval($input[3]));
}

echo $character;