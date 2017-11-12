<?php

namespace MyMoney\Service;


use MyMoney\DTO\UserDTO;

interface UserServiceInterface
{
    public function getCurrentUser(): UserDTO;

    public function login(string $username, string $password): bool;

    public function register(UserDTO $user, string $confirmPassword): bool;
}