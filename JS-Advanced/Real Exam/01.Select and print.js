<!DOCTYPE html>
<html>
<head>
<title>Select and Print</title>
<style>
select { width: 100px }
.block { display: inline-block; vertical-align: top; text-align: center }
button { width: 60px }
#btnRight { display: block; margin-top: 20px }
#btnLeft { display: block; margin-top: 5px }
#btnPrint { display: block; margin-top: 5px }
</style>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    </head>
    <body>
    <div class="block">
    <div>Available towns</div>
<select id="available-towns" size="5">
    <option>Sofia</option>
    <option>Varna</option>
    <option>Pleven</option>
    </select>
    </div>
    <div class="block">
    <button id="btnRight" onclick="move('right')">&rightarrow;</button>
<button id="btnLeft" onclick="move('left')">&leftarrow;</button>
<button id="btnPrint" onclick="move('print')">Print</button>
    </div>
    <div class="block">
    <div>Selected towns</div>
<select id="selected-towns" size="5">
    <option>Plovdiv</option>
    <option>Ruse</option>
    </select>
    </div>
    <div id="output"></div>
    <script>
    function move(command) {
        // TODO
    }
    </script>
    </body>
    </html>
