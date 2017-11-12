<?php
/**
 * Created by PhpStorm.
 * User: petko
 * Date: 12.11.2017 г.
 * Time: 12:38
 */

namespace MyMoney\DTO;


class OperationDTO
{
    private $id;

    private $type;

    /**
     * @var ReasonDTO
     */
    private $reason;

    /**
     * @var UserDTO
     */
    private $author;

    private $sum;

    private $notes;

    /**
     * @return mixed
     */
    public function getNotes()
    {
        return $this->notes;
    }

    /**
     * @param mixed $notes
     */
    public function setNotes($notes)
    {
        $this->notes = $notes;
    }

    private $onDate;

    private $forDate;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param mixed $type
     */
    public function setType($type)
    {
        $this->type = $type;
    }

    /**
     * @return ReasonDTO
     */
    public function getReason(): ReasonDTO
    {
        return $this->reason;
    }

    /**
     * @param ReasonDTO $reason
     */
    public function setReason(ReasonDTO $reason)
    {
        $this->reason = $reason;
    }

    /**
     * @return UserDTO
     */
    public function getAuthor(): UserDTO
    {
        return $this->author;
    }

    /**
     * @param UserDTO $author
     */
    public function setAuthor(UserDTO $author)
    {
        $this->author = $author;
    }

    /**
     * @return mixed
     */
    public function getSum()
    {
        return $this->sum;
    }

    /**
     * @param mixed $sum
     */
    public function setSum($sum)
    {
        if (doubleval($sum) > 1000000 || doubleval($sum) < 0    ) {
            throw new \Exception('Sum must be between 0 and 99999,99');
        }

        $this->sum = $sum;
    }

    /**
     * @return mixed
     */
    public function getOnDate()
    {
        return $this->onDate;
    }

    /**
     * @param mixed $onDate
     */
    public function setOnDate($onDate)
    {
        $this->onDate = $onDate;
    }

    /**
     * @return mixed
     */
    public function getForDate()
    {
        return $this->forDate;
    }

    /**
     * @param mixed $forDate
     */
    public function setForDate($forDate)
    {
        $this->forDate = $forDate;
    }


}