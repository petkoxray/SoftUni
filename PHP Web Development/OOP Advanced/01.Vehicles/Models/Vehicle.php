<?php

namespace Models;

abstract class Vehicle
{
    protected $fuelQuantity;
    protected $fuelConsumption;

    public function __construct(float $fuelQuantity, float $fuelConsumption)
    {
        $this->fuelQuantity = $fuelQuantity;
        $this->fuelConsumption = $fuelConsumption;
    }

    public function drive(float $distance)
    {
        if ($distance * $this->fuelConsumption > $this->fuelQuantity)  {
            echo "{$this->getClassName()} needs refueling" . PHP_EOL;
        } else {
            $this->fuelQuantity -= $distance * $this->fuelConsumption;
            echo "{$this->getClassName()} travelled {$distance} km" . PHP_EOL;
        }
    }

    public function refuel(float $liters)
    {
        $this->fuelQuantity += $liters;
    }

    private function getClassName(): string
    {
        return basename(get_class($this));
    }

    public function __toString()
    {
        return $this->getClassName() . ": " . number_format($this->fuelQuantity, 2);
    }
}