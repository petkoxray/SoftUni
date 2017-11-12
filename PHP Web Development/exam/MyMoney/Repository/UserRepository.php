<?php

namespace MyMoney\Repository;


use Database\DatabaseInterface;
use MyMoney\DTO\UserDTO;

class UserRepository implements UserRepositoryInterface
{
    /**
     * @var DatabaseInterface
     */
    private $db;

    public function __construct(DatabaseInterface $db)
    {
        $this->db = $db;
    }


    public function findOneByUsername(string $username): ?UserDTO
    {
        $query = "
            SELECT 
                id, 
                username, 
                password, 
                full_name as fullName
            FROM
                users
            WHERE
                username = ?
             ";

        return $this->db->query($query)
            ->execute($username)
            ->fetch(UserDTO::class)
            ->current();
    }

    public function insert(UserDTO $user): bool
    {
        $query = "
            INSERT INTO
              users
            (
              username,
              password,
              full_name,
              born_on
            )
              VALUES
            (
              ?,
              ?,
              ?,
              ?
            );
        ";

        $this->db->query($query)
            ->execute(
                $user->getUsername(),
                $user->getPassword(),
                $user->getFullName(),
                $user->getBornOn()
            );

        return true;
    }

    public function findOne(int $id): UserDTO
    {
        $query = "
            SELECT 
                id, 
                username, 
                password, 
                full_name as fullName
            FROM
                users
            WHERE
                id = ?
             ";

        return $this->db->query($query)
            ->execute($id)
            ->fetch(UserDTO::class)
            ->current();
    }
}