<?php
/**
 * Created by PhpStorm.
 * User: petko
 * Date: 12.11.2017 г.
 * Time: 13:00
 */

namespace MyMoney\Service;


use MyMoney\DTO\ReasonDTO;
use MyMoney\Repository\ReasonRepositoryInterface;

class ReasonService implements ReasonServiceInterface
{
    /**
     * @var $reasonRepository ReasonRepositoryInterface
     */
    private $reasonRepository;

    public function __construct(ReasonRepositoryInterface $reasonRepository)
    {
        $this->reasonRepository = $reasonRepository;
    }

    public function getAll(): \Generator
    {
        return $this->reasonRepository->findAll();
    }

    public function view(int $id): ReasonDTO
    {
        return $this->reasonRepository->findOne($id);
    }

    public function statistic(int $id): \Generator
    {
        return $this->reasonRepository->findReasonsPerGroup($id);
    }
}