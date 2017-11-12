<?php

require_once "common.php";
$operationRepo = new \MyMoney\Repository\OperationRepository($db, $dataBinder);
$operationService = new \MyMoney\Service\OperationService($operationRepo);
$operationHandler = new \MyMoney\Http\OperationHttpHandler($template, $dataBinder, $operationService);

$operationHandler->all();