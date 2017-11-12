<?php

namespace MyMoney\DTO;


class UserDTO
{
    const FIELDS_MAX_LENGTH = 255;

    const USERNAME_MIN_LENGTH = 4;
    const PASSWORD_MIN_LENGTH = 4;
    const FULL_NAME_MIN_LENGTH = 5;


    private $id;

    private $username;

    private $password;

    private $fullName;

    private $bornOn;

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
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * @param mixed $username
     * @throws \Exception
     */
    public function setUsername($username)
    {
        DTOValidator::validate(
            self::USERNAME_MIN_LENGTH,
            self::FIELDS_MAX_LENGTH,
            $username,
            "Username must be between 4 and 255 characters!"
        );
        $this->username = $username;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param mixed $password
     * @throws \Exception
     */
    public function setPassword($password)
    {
        DTOValidator::validate(
            self::PASSWORD_MIN_LENGTH,
            self::FIELDS_MAX_LENGTH,
            $password,
            "Password must be between 4 and 255 characters!"
        );
        $this->password = $password;
    }

    /**
     * @return mixed
     */
    public function getFullName()
    {
        return $this->fullName;
    }

    /**
     * @param mixed $fullName
     */
    public function setFullName($fullName)
    {
        DTOValidator::validate(
            self::FULL_NAME_MIN_LENGTH,
            self::FIELDS_MAX_LENGTH,
            $fullName,
            "Full Name must be between 5 and 255 characters!"
        );
        $this->fullName = $fullName;
    }

    /**
     * @return mixed
     */
    public function getBornOn()
    {
        return $this->bornOn;
    }

    /**
     * @param mixed $bornOn
     */
    public function setBornOn($bornOn)
    {
        $this->bornOn = $bornOn;
    }
}