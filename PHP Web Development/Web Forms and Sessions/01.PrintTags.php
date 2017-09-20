<form action="" method="get">
    <div>
        <label for="">Enter Tags:</label>
    </div>
    <div>
        <input type="text" name="text" checked>
    </div>
    <input type="submit" name="submit" value="Submit">
</form>

<?php
if (isset($_GET['submit'])) {
    $tags = explode(", ", $_GET['text']);
    echo "<ol>";
    foreach ($tags as $tag) {
        echo "<li>$tag</li>";
    }
    echo "</ol>";
}
