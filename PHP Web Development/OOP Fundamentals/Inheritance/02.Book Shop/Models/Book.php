<?php

class Book
{
    protected $title;
    protected $author;
    protected $price;

    public function __construct(string $title, string $author, float $price)
    {
        $this->setPrice($price);
        $this->setAuthor($author);
        $this->setTitle($title);
    }

    public function setTitle(string $title)
    {
        if (strlen($title) < 3) {
            throw new Exception('Title not valid!');
        }
        $this->title = $title;
    }

    public function setAuthor(string $author)
    {
        list($firstName, $secondName) = explode(' ', $author);
        if (is_numeric($secondName[0])) {
            throw new Exception('Author not valid!');
        }
        $this->author = $author;
    }

    public function setPrice(float $price)
    {
        if ($price <= 0) {
            throw new Exception('Price cannot be zero or negative');
        }
        $this->price = $price;
    }

    public function getPrice(): float
    {
        return $this->price;
    }

    public function __toString()
    {
        return "OK" . PHP_EOL . $this->getPrice();
    }
}