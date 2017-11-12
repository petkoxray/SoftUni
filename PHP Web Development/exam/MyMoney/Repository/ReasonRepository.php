<?php
/**
 * Created by PhpStorm.
 * User: petko
 * Date: 12.11.2017 г.
 * Time: 12:46
 */

namespace MyMoney\Repository;


use Database\DatabaseInterface;
use MyMoney\DTO\ReasonDTO;
use MyMoney\DTO\StatisticDTO;

class ReasonRepository implements ReasonRepositoryInterface
{

    /**
     * @var DatabaseInterface
     */
    private $db;

    public function __construct(DatabaseInterface $db)
    {
        $this->db = $db;
    }

    public function findAll(): \Generator
    {
        $query = "SELECT id, name FROM reasons";
        return $this->db->query($query)->execute()->fetch(ReasonDTO::class);
    }

    public function findOne(int $id): ReasonDTO
    {
        $query = "SELECT * FROM reasons WHERE id = ?";
        return $this->db->query($query)->execute($id)
            ->fetch(ReasonDTO::class)->current();
    }

    public function findReasonsPerGroup(int $id): \Generator
    {
        $query = "SELECT reasons.name as reason,COUNT(operations.id) as operations, SUM(operations.sum) as sum FROM reasons
                  INNER JOIN operations on reasons.id = operations.reason_id
                  INNER JOIN users on users.id = operations.user_id
                  WHERE operations.user_id = ?
                  GROUP BY(reasons.name)
                  ORDER BY reasons.name";

        return $this->db->query($query)->execute($id)->fetch(StatisticDTO::class);
    }
}