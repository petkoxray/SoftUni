<?php /**
 * @var $data \MyMoney\DTO\OperationDTO[]
 */
?>
<h1>All Operations</h1>
<table border="1">
    <thead>
    <tr>
        <th>Date</th>
        <th>Type</th>
        <th>Reason</th>
        <th>Sum</th>
        <th>Notes</th>
        <th>Edit</th>
        <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    <?php foreach ($data

                   as $operation): ?>
        <?php if (isset($_GET['highlight_id']) && $_GET['highlight_id'] == $operation->getId()): ?>
            <tr style="background-color:lightgreen">
        <?php else: ?>
            <tr>
        <?php endif; ?>
        <td><?= $operation->getForDate(); ?></td>
        <td><?= $operation->getType(); ?></td>
        <td><?= $operation->getReason()->getName() ?></td>
        <td><?= $operation->getSum(); ?></td>
        <td><?= $operation->getNotes(); ?></td>
        <td><a href="edit_operation.php?id=<?= $operation->getId(); ?>">edit</a></td>
        <td><a href="delete_operation.php?id=<?= $operation->getId(); ?>">delete</a></td>
        </tr>
    <?php endforeach; ?>
    </tbody>
</table>
<ul>
    <li><a href="add_operation.php">Add new operation</a></li>
    <li><a href="statistics.php">Statistics</a></li>
    <li><a href="logout.php">Logout</a></li>
</ul>