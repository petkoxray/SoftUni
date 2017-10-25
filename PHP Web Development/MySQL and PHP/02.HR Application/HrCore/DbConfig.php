<?php

namespace HrCore;

class DbConfig
{
    const DB_HOST = 'mysql:host=localhost';
    const DB_NAME = "geography";
    const DB_USER = "root";
    const DB_PASS = "";
    const DB_OPTIONS = [\PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION];
}