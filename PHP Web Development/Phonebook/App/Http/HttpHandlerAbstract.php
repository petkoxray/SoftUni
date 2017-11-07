<?php

namespace App\Http;


use Core\DataBinderInterface;
use Core\TemplateInterface;

abstract class HttpHandlerAbstract
{
    /**
     * @var TemplateInterface
     */
    private $template;

    /**
     * @var DataBinderInterface
     */
    protected $dataBinder;

    /**
     * @var
     */
    protected $formData;

    public function __construct(
        TemplateInterface $template,
        DataBinderInterface $dataBinder,
        Array $formData)
    {
        $this->template = $template;
        $this->dataBinder = $dataBinder;
        $this->formData = $formData;
    }

    protected function render(string $templateName, $data = null)
    {
        return $this->template->render($templateName, $data);
    }

    protected function redirect($url)
    {
        header("Location: $url");
        exit;
    }

    protected function isAuthorized(): bool
    {
        return isset($_SESSION['user_id']);
    }
}