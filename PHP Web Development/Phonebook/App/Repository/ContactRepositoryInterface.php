<?php
/**
 * Created by PhpStorm.
 * User: petko
 * Date: 7.11.2017 г.
 * Time: 16:26
 */

namespace App\Repository;


use App\Data\ContactDTO;

interface ContactRepositoryInterface
{
    public function getAllByUserId(int $userId): \Generator;

    public function insert(ContactDTO $contact): bool;

    public function delete($contactId): bool;
}