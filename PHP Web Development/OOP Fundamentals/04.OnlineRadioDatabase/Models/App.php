<?php

namespace Models;

class App
{
    private $playlist;

    public function start()
    {
        $lines = fgets(STDIN);
        $this->playlist = new Playlist();

        for ($i = 0; $i < $lines; $i++) {
            $this->processInput();
        }

        echo $this->playlist;
    }

    private function processInput()
    {
        $args = explode(";", trim(fgets(STDIN)));
        $artist = $args[0];
        $songName = $args[1];
        $duration = explode(":", $args[2]);
        $minutes = intval($duration[0]);
        $seconds = intval($duration[1]);

        try {
            $song = new Song($artist, $songName, $minutes, $seconds);
            $this->playlist->addSong($song);
            echo "Song added.\n";
        } catch (\Exception $ex) {
            echo $ex->getMessage() . "\n";
        }
    }
}
