<?php

namespace Models;

class Truck extends Vehicle
{
    public function __construct($fuelQuantity, $fuelConsumption)
    {
        parent::__construct($fuelQuantity, $fuelConsumption + 1.6);
    }

    public function refuel(float $liters)
    {
        $this->fuelQuantity = parent::refuel($liters) * 0.95;
    }
}