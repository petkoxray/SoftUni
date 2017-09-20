<form method="get">
    <label for=""> Enter tags: <br></label>
    <input type="text" name="tags">
    <input type="submit" name="add" value="Submit">
    <input type="submit" name="clear" value="Clear">
</form>

<?php
session_start();
if (isset($_GET['add'])) {
    if (!isset($_SESSION['tags'])) {
        $_SESSION['tags'] = [];
    }
    $input = explode(", ", $_GET['tags']);

    foreach ($input as $tag) {
        if (!array_key_exists($tag, $_SESSION['tags'])) {
            $_SESSION['tags'][$tag] = 0;
        }

        $_SESSION['tags'][$tag]++;
    }

    arsort($_SESSION['tags']);
    echo "<ul>";
    foreach ($_SESSION['tags'] as $tag => $count) {
        echo "<li>$tag : $count </li>";
    }
    echo "</ul>";
}

if (isset($_GET['clear'])) {
    $_SESSION['tags'] = [];
}
