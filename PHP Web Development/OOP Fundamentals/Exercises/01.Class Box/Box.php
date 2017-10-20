<?php

class Box
{
    private $length;
    private $width;
    private $height;

    public function __construct(float $length, float $width, float $height)
    {
        $this->length = $length;
        $this->width = $width;
        $this->height = $height;
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
}