<?php
/**
 * Created by PhpStorm.
 * User: petko
 * Date: 12.11.2017 г.
 * Time: 12:57
 */

namespace MyMoney\Service;


use MyMoney\DTO\OperationDTO;
use MyMoney\Repository\OperationRepositoryInterface;

class OperationService implements OperationServiceInterface
{
    /**
     * @var OperationRepositoryInterface
     */
    private $operationRepository;

    public function __construct(OperationRepositoryInterface $operationRepository)
    {
        $this->operationRepository = $operationRepository;
    }


    public function add(OperationDTO $operation): bool
    {
        $this->operationRepository->insert($operation);

        return true;
    }

    public function getAll(): \Generator
    {
        return $this->operationRepository->findAll();
    }

    public function edit(OperationDTO $task, int $id): bool
    {
        // TODO: Implement edit() method.
    }

    public function remove(int $id): bool
    {
        $this->operationRepository->delete($id);

        return true;
    }

    public function view(int $id): OperationDTO
    {
        return $this->operationRepository->findById($id);
    }
}