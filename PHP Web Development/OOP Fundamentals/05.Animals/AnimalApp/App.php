<?php

namespace AnimalApp;

use AnimalApp\Models\Frog;

class App
{
    public function start()
    {
        $animalType = trim(fgets(STDIN));
        
        while ($animalType !== "Beast!") {
            $animalArgs = explode(" ", trim(fgets(STDIN)));
            $this->processInput($animalType, $animalArgs);
            $animalType = trim(fgets(STDIN));
        }
    }

    private function processInput($animalType, $animalArgs)
    {
        switch ($animalType) {
            case "Frog":
                $frog = new Frog($animalArgs[0], intval($animalArgs[1]), $animalArgs[2]);
                echo $frog;
                break;
        }
    }
}