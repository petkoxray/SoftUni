<?php

class Pokemon
{
    private $name;
    private $element;
    private $health;

    public function __construct(string $name, string $element, int $health)
    {
        $this->name = $name;
        $this->element = $element;
        $this->health = $health;
    }

    public function getElement(): string
    {
        return $this->element;
    }

    public function isAlive(): bool
    {
        return $this->health > 0;
    }

    public function decreaseHealth()
    {
        $this->health -= 10;
    }
}

class Trainer
{
    private $name;
    private $badges;
    private $pokemons;

    public function __construct($name)
    {
        $this->name = $name;
        $this->badges = 0;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getBadges()
    {
        return $this->badges;
    }

    public function increaseBadges()
    {
        $this->badges++;
    }

    public function getPokemons()
    {
        return $this->pokemons;
    }

    public function hasPokemonWithElement($element) : bool
    {
        foreach ($this->pokemons as $pokemon) {
            if ($pokemon->getElement($element) === $element) {
                return true;
            }
        }

        return false;
    }

    public function addPokemon(Pokemon $pokemon)
    {
        $this->pokemons[] = $pokemon;
    }

    public function decreaseHealth()
    {
        foreach ($this->pokemons as $index => $pokemon) {
            $pokemon->decreaseHealth();
            if (!$pokemon->isAlive()) {
                unset($this->pokemons[$index]);
            }
        }
    }

    public function getPokemonCount()
    {
        return count($this->pokemons);
    }

    public function __toString()
    {
        return $this->name . " " . $this->badges . " " . $this->getPokemonCount();
    }
}

$trainers = [];
$input = explode(" ", trim(fgets(STDIN)));

while($input[0] !== "Tournament") {
    if (!array_key_exists($input[0], $trainers)) {
        $trainers[$input[0]] = new Trainer($input[0]);
    }

    $trainers[$input[0]]->addPokemon(new Pokemon($input[1], $input[2], intval($input[3])));
    $input = explode(" ", trim(fgets(STDIN)));
}

$element = trim(fgets(STDIN));

while ($element !== "End") {
    foreach ($trainers as $name => $trainer) {
        if ($trainer->hasPokemonWithElement($element)) {
            $trainer->increaseBadges();
        } else {
            $trainer->decreaseHealth();
        }
    }

    $element = trim(fgets(STDIN));
}

usort($trainers, function($trainer1, $trainer2) {
    return $trainer1->getBadges() < $trainer2->getBadges();
});

foreach ($trainers as $trainer) {
    echo $trainer . PHP_EOL;
}