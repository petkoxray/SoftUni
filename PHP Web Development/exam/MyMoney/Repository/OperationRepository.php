<?php
/**
 * Created by PhpStorm.
 * User: petko
 * Date: 12.11.2017 г.
 * Time: 12:42
 */

namespace MyMoney\Repository;


use Core\DataBinderInterface;
use Database\DatabaseInterface;
use MyMoney\DTO\OperationDTO;
use MyMoney\DTO\ReasonDTO;
use MyMoney\DTO\UserDTO;

class OperationRepository implements OperationRepositoryInterface
{
    /**
     * @var DatabaseInterface
     */
    private $db;
    /**
     * @var DataBinderInterface
     */
    private $dataBinder;


    public function __construct(DatabaseInterface $db, DataBinderInterface $dataBinder)
    {
        $this->db = $db;
        $this->dataBinder = $dataBinder;
    }

    public function insert(OperationDTO $operation): bool
    {
        $query = "INSERT INTO operations
                  (type, reason_id, sum, notes, for_date, user_id) 
                  VALUES (?, ?, ?, ?, ?, ?)";

        $this->db->query($query)->execute(
            $operation->getType(),
            $operation->getReason()->getId(),
            $operation->getSum(),
            $operation->getNotes(),
            $operation->getForDate(),
            $operation->getAuthor()->getId()
        );

        return true;
    }

    public function delete(int $id): bool
    {
        $query = "DELETE FROM operations WHERE operations.id = ?";
        $this->db->query($query)->execute($id);

        return true;
    }

    public function findById(int $id): OperationDTO
    {
        $query = "SELECT operations.id as operation_id, type, reasons.id as reason_id, reasons.name as 'reason_name', sum, operations.notes, operations.for_date FROM operations
                    INNER JOIN reasons ON operations.reason_id = reasons.id
                    ORDER BY operations.for_date, operations.id";

        $result = $this->db->query($query)->execute()->fetch()->current();
        $operation = $this->dataBinder->bind($result, OperationDTO::class);
        $operation->setId($result['operation_id']);
        $reason = new ReasonDTO();
        $reason->setName($result['reason_name']);
        $reason->setId($result['reason_id']);
        $operation->setReason($reason);

        return $operation;
    }

    public function update(int $id): bool
    {
        // TODO: Implement update() method.
    }

    public function findAll(): \Generator
    {
        $query = "SELECT operations.id as operation_id, type, reasons.id as reason_id, reasons.name as 'reason_name', sum, operations.notes, DATE_FORMAT(operations.for_date,'%d/%m/%Y') as for_date
                    FROM operations
                    INNER JOIN reasons ON operations.reason_id = reasons.id
                    ORDER BY operations.for_date, operations.id";

        $lazyTasksResult = $this->db->query($query)->execute()->fetch();

        foreach ($lazyTasksResult as $row) {
            /**
             * @var OperationDTO $operation
             * @var ReasonDTO $reason
             */
            $operation = $this->dataBinder->bind($row, OperationDTO::class);
            $operation->setId($row['operation_id']);

            $reason = new ReasonDTO();
            $reason->setName($row['reason_name']);
            $reason->setId($row['reason_id']);

            $operation->setReason($reason);

            yield $operation;
        }
    }
}