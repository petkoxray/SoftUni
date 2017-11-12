<?php

require_once "common.php";
$operationRepo = new \MyMoney\Repository\OperationRepository($db, $dataBinder);
$operationService = new \MyMoney\Service\OperationService($operationRepo);
$operationHandler = new \MyMoney\Http\OperationHttpHandler($template, $dataBinder, $operationService);
$reasonRepo = new \MyMoney\Repository\ReasonRepository($db);
$reasonService = new \MyMoney\Service\ReasonService($reasonRepo);
$userService = new \MyMoney\Service\UserService(new \MyMoney\Repository\UserRepository($db));

$operationHandler->edit($userService, $reasonService, $_POST, $_GET);