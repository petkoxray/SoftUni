<?php

namespace HrCore;

interface DatabaseInterface
{
    public function prepare(string $query): DatabaseStatementInterface;

    public function getLastId(string $name = null);
}