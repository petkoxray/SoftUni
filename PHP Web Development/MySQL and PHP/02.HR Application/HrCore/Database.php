<?php

namespace HrCore;

class Database implements DatabaseInterface
{
    private $db;

    public function __construct()
    {
        try {
            $this->db = new \PDO(
                DbConfig::DB_HOST . ';dbname=' . DbConfig::DB_NAME,
                DbConfig::DB_USER,
                DbConfig::DB_PASS,
                DbConfig::DB_OPTIONS
            );
        } catch (\PDOException $e) {
            die($e->getMessage());
        }
    }

    public function prepare(string $query): DatabaseStatementInterface
    {
        $stmt = $this->db->prepare($query);
        return new PDOStatement($stmt);
    }

    public function getLastId(string $name = null)
    {
        return $this->db->lastInsertId($name);
    }

    public function __destruct()
    {
        $this->db = null;
    }
}