<?php
/**
 * Created by PhpStorm.
 * User: petko
 * Date: 12.11.2017 г.
 * Time: 12:56
 */

namespace MyMoney\Service;


use MyMoney\DTO\OperationDTO;

interface OperationServiceInterface
{
    public function add(OperationDTO $task): bool;

    public function getAll(): \Generator;

    public function edit(OperationDTO $task, int $id): bool;

    public function remove(int $id): bool;

    public function view(int $id): OperationDTO;
}