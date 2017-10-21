<?php

include "Models/Cymric.php";
include "Models/Siamese.php";
include "Models/StreetExtraordinaire.php";

class App
{
    private $cats = [];

    public function start()
    {
        while ("End" !== $input = trim(fgets(STDIN))) {
            list($catType, $name, $arg) = explode(" ", $input);
            $this->processInput($catType, $name, $arg);
        }

        $this->printResult();
    }

    private function processInput($catType, $name, $arg)
    {
        $cat = new $catType($name, $arg);
        $this->addCat($cat, $name);
    }

    private function addCat($cat, $name)
    {
        $this->cats[$name] = $cat;
    }

    private function printResult()
    {
        $catToPrint = trim(fgets(STDIN));
        echo $this->cats[$catToPrint];
    }
}