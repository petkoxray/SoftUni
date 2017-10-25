<?php

include "Db.php";

class App
{
    private $db;

    public function __construct()
    {
        $this->db = DB::make();
    }

    public function addStudent($first_name, $last_name, $student_number, $phone_number)
    {
        $stmt = $this->db->prepare("INSERT INTO php_course.students 
                          (first_name, last_name, student_number, phone_number)
                   VALUES (?, ?, ?, ?)");

        $stmt->execute([$first_name, $last_name, $student_number, $phone_number]);
    }

    public function deleteStudent($student_number)
    {
        $stmt = $this->db->prepare(
            "DELETE FROM php_course.students
                        WHERE student_number = ?");
        $stmt->execute([$student_number]);
    }

    public function getStudent($studentNumber)
    {
        $stmt = $this->db->prepare(
            "SELECT * FROM php_course.students
                        WHERE student_number = ?"
        );
        $stmt->execute([$studentNumber]);

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}