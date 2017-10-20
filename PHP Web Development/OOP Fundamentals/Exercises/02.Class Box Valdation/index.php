<?php
include "Box.php";

$length = floatval(fgets(STDIN));
$width = floatval(fgets(STDIN));
$height = floatval(fgets(STDIN));

$box = new Box($length, $width, $height);
echo $box;