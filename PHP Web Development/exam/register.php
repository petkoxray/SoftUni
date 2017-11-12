<?php
require_once 'common.php';
$userService = new \MyMoney\Service\UserService(new \MyMoney\Repository\UserRepository($db));
$userHandler = new \MyMoney\Http\UserHttpHandler($userService, $template, $dataBinder);

$userHandler->register($_POST);