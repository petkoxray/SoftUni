<?php /**
 * @var $data \MyMoney\DTO\ReasonDTO[]
 */
?>

<h1>Add new operation</h1>
<?php foreach ($errors as $error): ?>
    <p style="color:red"><?=$error;?></p>
<?php endforeach; ?>
<form method="post">
    Type: <select name="type_id">
        <option value="1">Expense</option>
        <option value="2">Income</option>
    </select><br/>
    Reason: <select name="reason_id">
        <?php foreach ($data as $reason): ?>
            <option value="<?= $reason->getId(); ?>"><?= $reason->getName(); ?></option>
        <?php endforeach; ?>
    </select><br/>
    Sum: <input type="number" name="sum" required="required"/><br/>
    Notes: <input type="text" name="notes"/><br/>
    For Date: <input type="date" name="for_date"/><br/>
    <input type="submit" name="save" value="Save"/>
</form>
<a href="operations.php">List</a>