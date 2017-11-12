<?php

namespace MyMoney\Service;


use MyMoney\DTO\ReasonDTO;

interface ReasonServiceInterface
{
    public function getAll(): \Generator;
    public function view(int $id): ReasonDTO;
    public function statistic(int $id): \Generator;
}