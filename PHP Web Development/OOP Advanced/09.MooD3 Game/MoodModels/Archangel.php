<?php

namespace MoodModels;

class Archangel extends Character
{
    public function __construct($username, $level, int $specialPoints)
    {
        parent::__construct($username, $level, $specialPoints);
    }

    function generateHashedPassword()
    {
        $this->hashedPassword = strrev($this->getUsername())
            . (strlen($this->getUsername()) * 21);
    }
}