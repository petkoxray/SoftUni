<?php
/**
 * Created by PhpStorm.
 * User: petko
 * Date: 7.11.2017 г.
 * Time: 15:29
 */

namespace App\Service;


use App\Data\ContactDTO;

interface ContactServiceInterface
{
    public function viewAll(int $userId): \Generator;

    public function createContact(ContactDTO $contact): bool;

    public function deleteContact($contactId): bool;
}