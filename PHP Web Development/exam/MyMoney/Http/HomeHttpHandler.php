<?php

namespace MyMoney\Http;


class HomeHttpHandler extends HttpHandlerAbstract
{
    public function index()
    {
        if (!$this->isAuthorized()) {
            $this->render("home/index");
        } else {
            $this->redirect("operations.php");
        }
    }
}