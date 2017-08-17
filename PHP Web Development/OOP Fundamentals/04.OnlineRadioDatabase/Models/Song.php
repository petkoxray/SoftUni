<?php

namespace Models;

use Exceptions\InvalidArtistNameException;
use Exceptions\InvalidSongNameException;
use Exceptions\InvalidSongMinutesException;
use Exceptions\InvalidSongSecondsException;


class Song
{
    private $artist;
    private $name;
    private $duration;

    public function __construct(string $artist, string $name, int $minutes, int $seconds)
    {
        $this->setArtist($artist);
        $this->setName($name);
        $this->setDuration($minutes, $seconds);
    }

    public function getArtist(): string
    {
        return $this->artist;
    }

    public function setArtist(string $artist)
    {
        if (strlen($artist) < 3 || strlen($artist) > 20) {
            throw new InvalidArtistNameException ("Artist name should be between 3 and 20 symbols.");
        }
        $this->artist = $artist;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name)
    {
        if (strlen($name) < 3 || strlen($name) > 30) {
            throw new InvalidSongNameException("Song name should be between 3 and 30 symbols.");
        }
        $this->name = $name;
    }

    public function getDuration(): int
    {
        return $this->duration;
    }

    public function setDuration(int $minutes, int $seconds)
    {
        if ($minutes > 14 || $minutes < 0) {
            throw new InvalidSongMinutesException("Song minutes should be between 0 and 14.");
        } else if ($seconds > 59 || $seconds < 0) {
            throw new InvalidSongSecondsException("Song seconds should be between 0 and 59.");
        }
        $this->duration = $seconds + $minutes * 60;
    }
}