<?php
include "Box.php";

$length = floatval(fgets(STDIN));
$width = floatval(fgets(STDIN));
$height = floatval(fgets(STDIN));

$box = new Box($length, $width, $height);
echo $box->getSurfaceArea() . PHP_EOL;
echo $box->getLateralSurfaceArea() . PHP_EOL;
echo $box->getVolume();