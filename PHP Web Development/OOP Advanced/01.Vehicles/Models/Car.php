<?php

namespace Models;


class Car extends Vehicle
{
    public function __construct($fuelQuantity, $fuelConsumption)
    {
        parent::__construct($fuelQuantity, $fuelConsumption + 0.9);
    }
}