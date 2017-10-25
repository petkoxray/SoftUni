<?php

namespace HrModels;

use HrCore\Database;
use HrCore\DatabaseInterface;

class Employee
{
    private $db;
    private $employee_id;
    private $first_name;
    private $middle_name;
    private $last_name;
    private $department;
    private $position;
    private $passport_id;
//
//    public function __construct(
//        DatabaseInterface $db,
//        string $first_name,
//        string $middle_name,
//        string $last_name,
//        string $department,
//        string $position,
//        string $passport_id
//    ) {
//        $this->setDb($db);
//        $this->setFirstName($first_name);
//        $this->setMiddleName($middle_name);
//        $this->setLastName($last_name);
//        $this->setDepartment($department);
//        $this->setPosition($position);
//        $this->setPassportId($passport_id);
//    }

    public function insertEmployee(): void
    {
        $stm = $this->db->prepare("INSERT INTO geography.employees 
            (first_name, middle_name, last_name, department, position, passport_id) VALUES (
                        ?,
                        ?,
                        ?,
                        ?,
                        ?,
                        ?)"
        );

        $result = $stm->execute([
            $this->getFirstName(),
            $this->getMiddleName(),
            $this->getLastName(),
            $this->getDepartment(),
            $this->getPosition(),
            $this->getPassportId()
        ]);

        if ($result) {
            echo "New employee " . $this->getFirstName() . " saved." . PHP_EOL;
        } else {
            echo "Something get wrong..."  . PHP_EOL;
        }
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }


    /**
     * @return DatabaseInterface
     */
    public function getDb(): DatabaseInterface
    {
        return $this->db;
    }

    /**
     * @param DatabaseInterface $db
     */
    public function setDb(DatabaseInterface $db)
    {
        $this->db = $db;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getFirstName(): string
    {
        return $this->first_name;
    }

    /**
     * @param string $first_name
     */
    public function setFirstName(string $first_name)
    {
        $this->first_name = $first_name;
    }

    /**
     * @return string
     */
    public function getMiddleName(): string
    {
        return $this->middle_name;
    }

    /**
     * @param string $middle_name
     */
    public function setMiddleName(string $middle_name)
    {
        $this->middle_name = $middle_name;
    }

    /**
     * @return string
     */
    public function getLastName(): string
    {
        return $this->last_name;
    }

    /**
     * @param string $last_name
     */
    public function setLastName(string $last_name)
    {
        $this->last_name = $last_name;
    }

    /**
     * @return string
     */
    public function getDepartment(): string
    {
        return $this->department;
    }

    /**
     * @param string $department
     */
    public function setDepartment(string $department)
    {
        $this->department = $department;
    }

    /**
     * @return string
     */
    public function getPosition(): string
    {
        return $this->position;
    }

    /**
     * @param string $position
     */
    public function setPosition(string $position)
    {
        $this->position = $position;
    }

    /**
     * @return string
     */
    public function getPassportId(): string
    {
        return $this->passport_id;
    }

    /**
     * @param string $passport_id
     */
    public function setPassportId(string $passport_id)
    {
        $this->passport_id = $passport_id;
    }
}