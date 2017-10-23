<?php

use Models\{Car, Truck};

class App
{
    public function start()
    {
        list($c, $fuelCar, $litersPerKmCar) = explode(" ", $this->readLine());
        $car = new Car($fuelCar, $litersPerKmCar);
        list($t, $fuelTruck, $litersPerKmTruck) = explode(" ", $this->readLine());
        $truck = new Truck($fuelTruck, $litersPerKmTruck);

        $lines = intval($this->readLine());
        $this->processInput($lines, $car, $truck);
    }

    private function processInput($lines, $car, $truck)
    {
        while($lines--) {
            list($action, $vehicle, $arg) = explode(" ", $this->readLine());
            $action= strtolower($action);

            if ($vehicle === "Car") {
                $car->$action(floatval($arg));
            } else {
                $truck->$action(floatval($arg));
            }
        }

        echo $car . PHP_EOL . $truck;
    }

    private function readLine(): string
    {
        return trim(fgets(STDIN));
    }
}