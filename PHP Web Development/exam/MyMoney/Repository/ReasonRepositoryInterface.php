<?php

namespace MyMoney\Repository;


use MyMoney\DTO\ReasonDTO;

interface ReasonRepositoryInterface
{
    public function findAll(): \Generator;

    public function findOne(int $id): ReasonDTO;

    public function findReasonsPerGroup(int $id): \Generator;
}