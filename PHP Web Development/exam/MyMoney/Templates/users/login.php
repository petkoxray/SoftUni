<?php /** @var $data \MyMoney\DTO\LoginUserDTO|null */ ?>
<h1>Login</h1>
<?php foreach ($errors as $error): ?><p style="color:red"><?=$error;?></p>
<?php endforeach; ?>
<?php if(isset($_SESSION['success'])): ?>
    <p style="color:green"><?php echo $_SESSION['success'];unset($_SESSION['success']);?></p><?php endif; ?><form method="post">
    Username: <input type="text" value="<?=$data != null ? $data->getUsername() : ""; ?>" name="username" required="required"/><br/>
    Password: <input type="password" name="password" required="required"/><br/>
    <input type="submit" name="login" value="Login Now!"/>
</form>
