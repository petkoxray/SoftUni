<?php
/**
 * Created by PhpStorm.
 * User: petko
 * Date: 12.11.2017 г.
 * Time: 14:06
 */

namespace MyMoney\Http;

use MyMoney\DTO\OperationDTO;
use MyMoney\DTO\OperationErrorDTO;
use MyMoney\Service\ReasonServiceInterface;
use MyMoney\Service\UserServiceInterface;

class OperationHttpHandler extends \MyMoney\Http\HttpHandlerAbstract
{
    /**
     * @var \MyMoney\Service\OperationServiceInterface
     */
    private $operationService;

    public function __construct(
        \Core\TemplateInterface $template,
        \Core\DataBinderInterface $dataBinder,
        \MyMoney\Service\OperationServiceInterface $operationService
    ) {
        parent::__construct($template, $dataBinder);
        $this->operationService = $operationService;
    }

    public function all()
    {
        $operations = $this->operationService->getAll();

        $this->render('operations/operations', $operations);
    }

    public function add(UserServiceInterface $userService,ReasonServiceInterface $reasonService, $formData)
    {
        if (isset($formData['save'])) {
            $this->handleAddProcces($userService,$reasonService, $formData);
        } else {
            $reasons = $reasonService->getAll();
            $this->render('operations/add_operation', $reasons);
        }
    }

    public function edit(UserServiceInterface $userService,ReasonServiceInterface $reasonService, $formData, $getData)
    {
        if (isset($formData['edit'])) {
            $this->handleEditProcess($userService,$reasonService, $formData);
        } else {
            $reasons = $reasonService->getAll();
            $operations = $this->operationService->view(intval($getData['id']));
            var_dump($operations);
            exit();
            $this->render('operations/edit_operation', $operations);
        }
    }


    public function handleAddProcces(UserServiceInterface $userService, ReasonServiceInterface $reasonService, $formData)
    {
        try {
            $operation = $this->binder->bind($formData, OperationDTO::class);
            $author = $userService->getCurrentUser();
            $reason = $reasonService->view($formData['reason_id']);
            $operation->setAuthor($author);
            $operation->setReason($reason);
            $this->operationService->add($operation);
            $this->redirect('operations.php');
        } catch (\Exception $e) {
            $dto = $this->binder($formData, OperationErrorDTO::class);
            $this->render("operations/add_operation", $dto, [$e->getMessage()]);
        }
    }

    private function handleEditProcess($userService, $reasonService, $formData)
    {
    }
}