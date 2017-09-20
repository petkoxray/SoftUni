<form>
    <input type="text" name="firstname[]" placeholder="First Name" required><br>
    <input type="text" name="firstname[]" placeholder="First Name" required><br>
    <input type="text" name="firstname[]" placeholder="First Name" required><br>
    <input type="submit" name="submit" value="Generate CV">
</form>

<?php
if (isset($_GET['submit'])) {
    $firstName = $_GET['firstname'];
    var_dump($firstName);
}