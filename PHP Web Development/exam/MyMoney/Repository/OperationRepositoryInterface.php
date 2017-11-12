<?php

namespace MyMoney\Repository;


use MyMoney\DTO\OperationDTO;

interface OperationRepositoryInterface
{
    public function insert(OperationDTO $task): bool;

    public function delete(int $id): bool;

    public function findById(int $id): OperationDTO;

    public function update(int $id): bool;

    public function findAll(): \Generator;
}