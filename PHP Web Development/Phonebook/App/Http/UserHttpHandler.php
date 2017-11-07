<?php
/**
 * Created by IntelliJ IDEA.
 * User: RoYaL
 * Date: 11/3/2017
 * Time: 8:23 PM
 */

namespace App\Http;


use App\Data\ErrorDTO;
use App\Data\UserDTO;
use App\Service\UserServiceInterface;
use Core\DataBinderInterface;
use Core\TemplateInterface;

class UserHttpHandler extends HttpHandlerAbstract
{
    /**
     * @var $userService UserServiceInterface
     */
    private $userService;

    public function __construct(
        TemplateInterface $template,
        DataBinderInterface $dataBinder,
        array $formData,
        UserServiceInterface $userService)
    {
        parent::__construct($template, $dataBinder, $formData);
        $this->userService = $userService;
    }

    public function all()
    {
        $this->render("users/all", $this->userService->viewAll());
    }

    public function profile()
    {
        $currentUser = $this->userService->getCurrentUser();

        if (null === $currentUser) {
            $this->redirect("login.php");
        }

        if (isset($this->formData['edit'])) {
            $this->handleEditProfile();
        } else {
            $this->render("users/profile", $currentUser);
        }
    }

    public function login()
    {
        if (isset($this->formData['login'])) {
            $this->handleLoginProcess();
        } else {
            $this->render("users/login");
        }
    }

    public function register()
    {
        if (isset($this->formData['register'])) {
            $this->handleRegisterProcess();
        } else {
            $this->render("users/register");
        }
    }

    public function logout()
    {
        session_destroy();
        $this->redirect('login.php');
    }
    
    private function handleRegisterProcess(): void
    {
        $user = $this->dataBinder->bind($this->formData, UserDTO::class);

        if ($this->userService->register(
            $user,
            $this->formData['confirm_password']
        )) {
            $this->redirect("login.php");
        } else {
            $this->render("app/error",
                new ErrorDTO("Cannot register, maybe username is already 
                taken or password mismatch"));
        }
    }

    private function handleLoginProcess()
    {
        $loggedUser = $this->userService->login($this->formData['username'], $this->formData['password']);

        if (null !== $loggedUser) {
            $_SESSION['user_id'] = $loggedUser->getId();
            $this->redirect("profile.php");
        } else {
            $this->render("app/error",
                new ErrorDTO("Username does not exist or
                 password mismatch."));
        }
    }

    private function handleEditProfile()
    {
        $user = $this->dataBinder->bind($this->formData, UserDTO::class);
        if ($this->userService->editProfile($user)) {
            $this->redirect("profile.php");
        } else {
            $this->render("app/error",
                new ErrorDTO("Error editing the profile."));
        }
    }

    public function index()
    {
        $currentUser = $this->userService->getCurrentUser();
        if (null === $currentUser) {
            $this->render("home/index");
        } else {
            $this->render("users/profile", $currentUser);
        }
    }
}