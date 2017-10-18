<?php
if (isset($_GET['sbm'])) {
    $pattern = '/\W+/';
    $input = $_GET['input'];
    $words =  explode(' ', preg_replace($pattern, ' ', $input));
    $words = array_filter($words, function ($word) {
        return $word !== '';
    });

    $result = [];

    for ($i = 0; $i < count($words); $i++) {
        $word = strtolower($words[$i]);
        if (!array_key_exists($word, $result)) {
            $result[$word] = 0;
        }

        $result[$word]++;
    }
}

?>

<div>
    <form method="get">
        <textarea name="input"></textarea><br/>
        <input type="submit" name="sbm" value="Count words"/>
    </form>
</div>

<?php if (isset($_GET['sbm']) && isset($result)): ?>
    <div>
        <table>
            <?php foreach ($result as $k => $v) {
                echo "\t\t\t<tr>\n<td>$k</td>\n<td>$v</td>\n\t\t\t</tr>";
            } ?>
        </table>
        <?php ?>
    </div>
<?php endif; ?>
