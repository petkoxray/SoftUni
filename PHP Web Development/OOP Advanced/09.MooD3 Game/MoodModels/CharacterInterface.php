<?php

namespace MoodModels;


interface CharacterInterface
{
    public function setUsername(string $username);
    public function getUsername(): string;
    public function setLevel(int $level);
    public function getLevel(): int;
    public function setSpecialPoints($specialPoints);
    public function getSpecialPoints();
    public function generateHashedPassword();
    public function getHashedPassword(): string;
}