<?php

include "DbConfig.php";

class Db
{
    public static function make()
    {
        try {
            return new \PDO(
                DbConfig::DB_HOST . ';dbname=' . DbConfig::DB_NAME,
                DbConfig::DB_USER,
                DbConfig::DB_PASS,
                DbConfig::DB_OPTIONS
            );
        } catch (\PDOException $e) {
            die($e->getMessage());
        }
    }
}
