<?php

class DbConfig
{
    const DB_HOST = 'mysql:host=localhost';
    const DB_NAME = "php_course";
    const DB_USER = "root";
    const DB_PASS = "";
    const DB_OPTIONS = [\PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION];
}