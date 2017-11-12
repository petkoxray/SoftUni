<?php

namespace MyMoney\DTO;


class RegisterUserDTO
{
    private $username;
    private $password;
    private $full_name;
    private $born_on;
    /**
     * @return mixed
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * @param mixed $username
     */
    public function setUsername($username)
    {
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
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    /**
     * @return mixed
     */
    public function getFullName()
    {
        return $this->full_name;
    }

    /**
     * @param mixed $full_name
     */
    public function setFullName($full_name)
    {
        $this->full_name = $full_name;
    }

    /**
     * @return mixed
     */
    public function getBornOn()
    {
        return $this->born_on;
    }

    /**
     * @param mixed $born_on
     */
    public function setBornOn($born_on)
    {
        $this->born_on = $born_on;
    }
}