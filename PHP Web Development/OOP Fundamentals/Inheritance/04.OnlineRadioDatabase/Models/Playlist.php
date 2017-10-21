<?php

namespace Models;

class Playlist
{
    private $songs;
    private $duration;

    public function addSong(Song $song)
    {
        $this->songs[] = $song;
        $this->duration += $song->getDuration();
    }

    private function getMediaDuration(): array
    {
        return [
            "hours" => floor(floor($this->duration / 60) / 60),
            "minutes" => str_pad(floor($this->duration / 60) % 60, 2, "0", STR_PAD_LEFT),
            "seconds" => str_pad($this->duration % 60, 2, "0", STR_PAD_LEFT)
        ];
    }

    public function totalSongs(): int
    {
        return count($this->songs);
    }

    public function __toString(): string
    {
        $duration = $this->getMediaDuration();
        $output = "Songs added: {$this->totalSongs()}" . PHP_EOL;
        $output .= "Playlist length: {$duration["hours"]}h {$duration["minutes"]}m {$duration["seconds"]}s";
        return $output;
    }
}