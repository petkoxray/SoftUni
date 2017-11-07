<?php

namespace App\Service;


use App\Data\ContactDTO;
use App\Repository\ContactRepository;
use App\Repository\ContactRepositoryInterface;

class ContactService implements ContactServiceInterface
{

    /**
     * @var $contactRepository ContactRepositoryInterface
     */
    private $contactRepository;

    public function __construct(ContactRepositoryInterface $contactRepository)
    {
        $this->contactRepository = $contactRepository;
    }

    public function viewAll(int $userId): \Generator
    {
        return $this->contactRepository->getAllByUserId($userId);
    }

    public function createContact(ContactDTO $contact): bool
    {
        return $this->contactRepository->insert($contact);
    }

    public function deleteContact($contactId): bool
    {
        return $this->contactRepository->delete($contactId);
    }
}