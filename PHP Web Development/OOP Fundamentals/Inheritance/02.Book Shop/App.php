<?php

include 'Models/Book.php';
include 'Models/GoldenEditionBook.php';

class App
{
    public function start()
    {
        $this->processInput();
    }

    private function processInput()
    {
        $author = trim(fgets(STDIN));
        $title = trim(fgets(STDIN));
        $price = floatval(trim(fgets(STDIN)));
        $type = trim(fgets(STDIN));

        if ($type === "GOLD") {
            $book = new GoldenEditionBook($title, $author, $price);
        } else if ($type === "STANDARD") {
            $book = new Book($title, $author, $price);
        } else {
            throw new Exception('Type is not valid!');
        }

        echo $book;
    }
}