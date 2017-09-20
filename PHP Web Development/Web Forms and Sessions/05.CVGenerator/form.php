<?php
include('data.php');
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Enter CV data</title>
</head>
<body>
<form action="result.php" method="post">
    <fieldset>
        <input type="text" name="fname" placeholder="First Name"><br/>
        <input type="text" name="lname" placeholder="Last Name"/><br/>
        <input type="text" name="mail" placeholder="Email"/><br/>
        <input type="text" name="phone" placeholder="Phone Number"/><br/>
        <label for="female">Female</label>
        <input type="radio" name="gender" value="Female"/>
        <label for="male">Male</label>
        <input type="radio" name="gender" value="Male"/><br/>
        <label for="birthdate">Birth Date</label><br/>
        <input type="date" name="birthdate"/><br/>
        <label for="nation">Nationality</label><br/>
        <select name="nation">
            <option value="Bulgarian">Bulgarian</option>
            <option value="English">English</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="American">American</option>
        </select>
    </fieldset>
    <fieldset>
        <label for="company">Company Name</label>
        <input type="text" name="company"/><br/>
        <label for="from">From</label>
        <input type="date" name="from"/><br/>
        <label for="to">To</label>
        <input type="date" name="to"/>
    </fieldset>
    <fieldset>
        <label for="pc-languages">Programming Languages</label><br/>
        <input type="text" name="pc-lang[]" id="pc-languages"/>
        <select name="pc-level[]">
            <option value="Beginner">Beginner</option>
            <option value="Programmer">Programmer</option>
            <option value="Ninja">Ninja</option>
        </select><br/>
        <div id="pclang-box">
        </div>
        <button type="button" onclick="removePcLanguage('pc-lang'+nextId)">Remove Language</button>
        <button type="button" onclick="addPcLanguage()">Add Language</button>
    </fieldset>
    <fieldset>
        <label for="languages">Languages</label><br/>
        <input type="text" name="lang[]" id="languages"/>
        <select name="compr-level[]">Comprehension
            <option selected>-Comprehension-</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
        </select>
        <select name="read-level[]">
            <option selected>-Reading-</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
        </select>
        <select name="write-level[]">
            <option selected>-Writing-</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
        </select><br/>
        <div id="lang-box">
        </div>
        <button type="button" onclick="removeLanguage('lang' + nextId2)">Remove Language</button>
        <button type="button" onclick="addLanguage()">Add Language</button>
        <br/>
        <span>Driver License</span><br/>
        <label for="b">B</label>
        <input type="checkbox" name="category[]" value="B" id="b"/>
        <label for="a">A</label>
        <input type="checkbox" name="category[]" value="A" id="a"/>
        <label for="c">C</label>
        <input type="checkbox" name="category[]" value="C" id="c"/>
    </fieldset>
    <input type="submit" value="Generate"/>
</form>
<script type="text/javascript" src="js/buttons.js"></script>
</body>
</html>