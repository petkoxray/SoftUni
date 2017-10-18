<?php

$users = [];

while('login' !== $input = trim(fgets(STDIN))) {
    list($user, $password) = explode(' -> ', $input);
    $users[$user] = $password;
}

$count = 0;

while('end' !== $input = trim(fgets(STDIN))) {
    list($user, $password) = explode(' -> ', $input);
    if (!array_key_exists($user, $users) || $users[$user] !== $password) {
        $count++;
        continue;
    }

    echo "$user: logged in successfully\n";
}

echo "unsuccessful login attempts: $count";
