<?php

namespace App\Http;


use App\Data\ContactDTO;
use App\Service\ContactService;
use App\Service\ContactServiceInterface;
use Core\DataBinderInterface;
use Core\TemplateInterface;

class ContactHttpHandler extends HttpHandlerAbstract
{
    /**
     * @var $contactService ContactServiceInterface
     */
    private $contactService;

    public function __construct(
        TemplateInterface $template,
        DataBinderInterface $dataBinder,
        array $formData,
        ContactServiceInterface $contactService)
    {
        parent::__construct($template, $dataBinder, $formData);
        $this->contactService = $contactService;
    }

    public function index()
    {
        if (!$this->isAuthorized())  {
            $this->redirect('login.php');
        }

        $contacts = $this->contactService->viewAll($_SESSION['user_id']);

        $this->render('phonebook/contacts', $contacts);
    }

    public function create()
    {
        if (!$this->isAuthorized())  {
            $this->redirect('login.php');
        }

        if (isset($this->formData['create'])) {
            $this->handleCreate();
        } else {
            $this->render('phonebook/create');
        }
    }

    private function handleCreate()
    {
        /**
         * @var $contact ContactDTO
         */
        $contact = $this->dataBinder->bind($this->formData, ContactDTO::class);
        $contact->setUserId($_SESSION['user_id']);

        if ($this->contactService->createContact($contact)) {
            $this->redirect('phonebook.php');
        }
    }

    public function delete($contactId)
    {
        $this->contactService->deleteContact($contactId);
        $this->redirect('phonebook.php');
    }
}