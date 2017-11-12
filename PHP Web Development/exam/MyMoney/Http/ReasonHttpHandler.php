<?php
/**
 * Created by PhpStorm.
 * User: petko
 * Date: 12.11.2017 г.
 * Time: 14:09
 */

namespace MyMoney\Http;


use Core\DataBinderInterface;
use Core\TemplateInterface;
use MyMoney\Service\ReasonServiceInterface;

class ReasonHttpHandler extends HttpHandlerAbstract
{
    /**
     * @var ReasonServiceInterface
     */
    private $reasonService;

    public function __construct(TemplateInterface $template, DataBinderInterface $dataBinder, ReasonServiceInterface $reasonService)
    {
        parent::__construct($template, $dataBinder);
        $this->reasonService = $reasonService;
    }

    public function statistics()
    {
        $data = $this->reasonService->statistic(intval($_SESSION['id']));

        $this->render('statistics', $data);
    }
}