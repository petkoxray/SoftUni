<?php

namespace App\Repository;


use App\Data\ContactDTO;
use Database\DatabaseInterface;

class ContactRepository implements ContactRepositoryInterface
{
    /**
     * @var DatabaseInterface
     */
    private $db;

    public function __construct(DatabaseInterface $db)
    {
        $this->db = $db;
    }

    public function getAllByUserId(int $userId): \Generator
    {
        return $this->db->query(
            'SELECT phone_number as phoneNumber,
                         name,
                         user_id as userId,
                         id
                            FROM contacts
                            WHERE user_id = ?'
        )->execute([$userId])->fetch(ContactDTO::class);
    }

    public function insert(ContactDTO $contact): bool
    {
        $this->db->query('
        INSERT INTO contacts
        (phone_number, name, user_id) VALUES (?, ?, ?)
        ')->execute([
            $contact->getPhoneNumber(),
            $contact->getName(),
            $contact->getUserId()
        ]);

        return true;
    }

    public function delete($contactId): bool
    {
        $this->db->query('DELETE FROM contacts WHERE id = ?')->
            execute([$contactId]);

        return true;
    }
}