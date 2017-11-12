<?php

namespace MyMoney\Service;


use MyMoney\DTO\UserDTO;
use MyMoney\Repository\UserRepositoryInterface;

class UserService implements UserServiceInterface
{
    /**
     * @var UserRepositoryInterface
     */
    private $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }


    public function login(string $username, string $password): bool
    {
        $user = $this->userRepository->findOneByUsername($username);

        if (null === $user) {
            throw new \Exception("Username not found!");
        }

        $passwordHash = $user->getPassword();
        if (!password_verify($password, $passwordHash)) {
            throw new \Exception("Wrong password.\nDid you forget it?");
        }

        $_SESSION['id'] = $user->getId();

        return true;
    }

    public function register(UserDTO $user,
                             string $confirmPassword): bool
    {
        if ($user->getPassword() !== $confirmPassword) {
            throw new \Exception("Passwords mismatch!");
        }

        $userFromDb = $this->userRepository
            ->findOneByUsername($user->getUsername());
        if (null !== $userFromDb) {
            throw new \Exception("Username already taken!");
        }

        $plainPassword = $user->getPassword();
        $passwordHash = password_hash($plainPassword, PASSWORD_BCRYPT);
        $user->setPassword($passwordHash);

        return $this->userRepository->insert($user);
    }

    public function getCurrentUser(): UserDTO
    {
        if (!isset($_SESSION['id'])) {
            throw new \Exception("No current user!");
        }

        return $this->userRepository->findOne(intval($_SESSION['id']));
    }
}