<?php

namespace AnimalApp\Models;

abstract class Animal implements ISoundProducible
{
    const INVALID_INPUT_MSG = "Invalid input!";
    const SOUND = '';

    private $name;
    private $age;
    private $gender;

    public function __construct(string $name, int $age, string $gender)
    {
        $this->name = $name;
        $this->age = $age;
        $this->gender = $gender;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name)
    {
        if (empty(trim($name))) {
            throw new \Exception(self::INVALID_INPUT_MSG);
        }
        $this->name = $name;
    }

    public function getAge(): int
    {
        return $this->age;
    }

    public function setAge(int $age)
    {
        if (empty(trim($age))) {
            throw new \Exception(self::INVALID_INPUT_MSG);
        }
        $this->age = $age;
    }

    public function getGender(): string
    {
        return $this->gender;
    }

    public function setGender(string $gender)
    {
        if (empty(trim($gender))) {
            throw new \Exception(self::INVALID_INPUT_MSG);
        }

        $this->gender = $gender;
    }

    public function produceSound()
    {
        return static::SOUND;
    }

    public function __toString()
    {
        return explode("\\", static::class)[2] . " {$this->name} {$this->age} {$this->gender}" . "\n" . $this->produceSound();
    }
}