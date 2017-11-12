<?php

require_once "common.php";
$reasonRepo = new \MyMoney\Repository\ReasonRepository($db);
$reasonService = new \MyMoney\Service\ReasonService($reasonRepo);
$reasonHandler = new \MyMoney\Http\ReasonHttpHandler($template, $dataBinder, $reasonService);
$reasonHandler->statistics();