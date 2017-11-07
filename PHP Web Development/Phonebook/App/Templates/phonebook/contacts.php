<?php /** @var \App\Data\ContactDTO[] $data */ ?>

<h1> All Contacts that i have :)</h1>

<table border="1">
    <thead>
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>PhoneNumber</th>
        <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    <?php foreach ($data as $contact): ?>
        <tr>
            <td><?= $contact->getId(); ?></td>
            <td><?= $contact->getName(); ?></td>
            <td><?= $contact->getPhoneNumber(); ?></td>
            <td><a href="delete-contact.php?contactId=<?= $contact->getId(); ?>">Delete</a></td>
        </tr>
    <?php endforeach; ?>
    </tbody>
</table>
If you want you can add new contact from <a href="create-contact.php">here</a>.