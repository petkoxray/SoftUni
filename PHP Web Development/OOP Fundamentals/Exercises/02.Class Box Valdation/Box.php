<?php

class Box
{
    private $length;
    private $width;
    private $height;

    public function __construct(float $length, float $width, float $height)
    {
        $this->setLength($length);
        $this->setWidth($width);
        $this->setHeight($height);
    }

    public function getSurfaceArea(): float
    {
        return number_format((2 * $this->length * $this->width
            + 2 * $this->length * $this->height
            + 2 * $this->width * $this->height), 2);
    }

    public function getLateralSurfaceArea(): float
    {
        return number_format((2 * $this->length * $this->height
            + 2 * $this->width * $this->height), 2);
    }

    public function getVolume(): float
    {
        return number_format($this->length * $this->height * $this->width, 2);
    }

    private function setLength(float $length)
    {
        if ($length <= 0) {
            throw new Exception('Length cannot be zero or negative');
        }
        $this->length = $length;
    }

    private function setWidth(float $width)
    {
        if ($width <= 0) {
            throw new Exception('Width cannot be zero or negative');
        }
        $this->width = $width;
    }

    private function setHeight(float $height)
    {
        if ($height <= 0) {
            throw new Exception('Height cannot be zero or negative');
        }
        $this->height = $height;
    }

    public function __toString()
    {
        return "Surface Area - " . $this->getSurfaceArea() . PHP_EOL .
            "Lateral Sruface Area - " . $this->getLateralSurfaceArea() . PHP_EOL .
            "Volume - " . $this->getVolume();
    }
}