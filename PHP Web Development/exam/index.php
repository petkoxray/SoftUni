<?php
require_once 'common.php';
$homeHandler = new \MyMoney\Http\HomeHttpHandler($template, $dataBinder);
$homeHandler->index();