<?php

namespace MoodModels;

class Demon extends Character
{
    public function __construct($username, $level, float $specialPoints)
    {
        parent::__construct($username, $level, $specialPoints);
    }

    function generateHashedPassword()
    {
        $this->hashedPassword = strlen($this->getUsername()) * 217;
    }
}