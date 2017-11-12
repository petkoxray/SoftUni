<?php /**
 * @var $data \MyMoney\DTO\StatisticDTO[]
 */?>
<h1>Statistics</h1>

<table border="1">
    <thead>
    <tr>
        <th>Reasons</th>
        <th>Operations</th>
        <th>Total</th>
    </tr>
    </thead>
    <tbody>
    <?php foreach ($data as $d): ?>
        <tr>
            <th><?= $d->getReason(); ?></th>
            <th><?= $d->getOperations(); ?></th>
            <th><?= $d->getSum(); ?></th>
        </tr>
    <?php endforeach ?>
    </tbody>
</table>

<ul>
    <li><a href="operations.php">List</a></li>
    <li><a href="add_operation.php">Add new operation</a></li>
    <li><a href="logout.php">Logout</a></li>
</ul>