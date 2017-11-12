<h1>REGISTER NEW USER</h1>
<?php /** @var $data \MyMoney\DTO\RegisterUserDTO|null */ ?>
<?php foreach ($errors as $error): ?>
    <p style="color:red"><?=$error;?></p>
<?php endforeach; ?>
<form method="post">
    Username: <input type="text" value="<?=$data != null ? $data->getUsername() : ""; ?>" name="username" required="required"/><br/>
    Password: <input type="password" name="password" required="required"/><br/>
    Confirm Password: <input type="password" name="confirm_password" required="required"/><br/>
    Full Name: <input type="text" value="<?=$data != null ? $data->getFullName() : ""; ?>" name="full_name" required="required"/><br/>
    Born On: <input type="date" value="<?=$data != null ? $data->getBornOn() : ""; ?>" name="born_on" required="required"/><br/>
    <input type="submit" name="register" value="Register!"/>
</form>