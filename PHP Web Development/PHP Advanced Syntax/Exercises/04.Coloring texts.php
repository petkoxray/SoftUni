<?php
if (isset($_GET['sbm'])) {
    $chars = str_split(preg_replace('/\s+/', '', $_GET['input']));
}
?>

<div>
    <form method="get">
        <textarea name="input"></textarea><br/>
        <input type="submit" name="sbm" value="Color text"/>
    </form>
</div>

<?php if (isset($_GET['sbm']) && isset($chars)): ?>
    <div>
            <?php foreach ($chars as $char) {
                if (ord($char) % 2 === 0) {
                    echo "<span style='color: red'>$char </span>";
                } else {
                    echo "<span style='color: blue'>$char </span>";
                }
            } ?>
        <?php ?>
    </div>
<?php endif; ?>
