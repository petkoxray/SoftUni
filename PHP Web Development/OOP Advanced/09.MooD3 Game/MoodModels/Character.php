<?php

namespace MoodModels;

abstract class Character implements CharacterInterface
{
    protected $username;
    protected $level;
    protected $hashedPassword;
    protected $specialPoints;

    public function __construct(string $username, int $level, $specialPoints)
    {
        $this->setUsername($username);
        $this->setLevel($level);
        $this->setSpecialPoints($specialPoints);
        $this->generateHashedPassword();
    }

    public function getUsername(): string
    {
        return $this->username;
    }

    public function setUsername(string $username)
    {
        $this->username = $username;
    }

    public function getLevel(): int
    {
        return $this->level;
    }

    public function setLevel(int $level)
    {
        $this->level = $level;
    }

    public function getSpecialPoints()
    {
        return $this->specialPoints;
    }

    public function setSpecialPoints($specialPoints)
    {
        $this->specialPoints = $specialPoints;
    }

    abstract function generateHashedPassword();

    public function getHashedPassword(): string
    {
        return $this->hashedPassword;
    }

    private function getClassName(): string
    {
        return basename(get_class($this));
    }

    public function __toString(): string
    {
        return "\"{$this->getUsername()}\" | \"{$this->getHashedPassword()}\""
            . " -> {$this->getClassName()}" . PHP_EOL
            . $this->getSpecialPoints() * $this->getLevel();
    }
}