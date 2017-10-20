<?php

class GoldenEditionBook extends Book
{
    public function __construct($title, $author, $price)
    {
        parent::__construct($title, $author, $price);
    }

    public function getPrice(): float
    {
        return parent::getPrice() * 1.3;
    }
}