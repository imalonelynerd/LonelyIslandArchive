<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lonely Island</title>
    <link rel="stylesheet/less" type="text/css" href="style.less"/>
    <script src="https://cdn.jsdelivr.net/npm/less"></script>
    <script src="js/theme.js"></script>
    <script defer src="js/timendate.js"></script>
    <meta name="description" content="Welcome back...">
    <link rel="icon" href="im/fav.png">
    <?php

    include_once "php/generateCard.php"

    ?>
</head>
<body>
<div id="main">
    <div>
        <img src="im/eye.png">
        <h1>Lonely Island</h1>
        <p>Welcome back...</p>
    </div>
    <div>
        <p>It is currently...</p>
        <h2 id="time">-</h2>
        <p>and we're the</p>
        <h2 id="date">-</h2>
    </div>
</div>
<div>
    <h2>YunoHost applications</h2>
    <div class="list">
        <?php generateCard("cards/apps",false)?>
    </div>
</div>
<div>
    <h2>Links and bookmarks</h2>
    <div class="list">
        <?php generateCard("cards/links",false)?>
    </div>
</div>
<div>
    <h2>Webapps</h2>
    <div class="list">
        <?php generateCard("cards/web",false)?>
    </div>
</div>
<div>
    <h2>Miscellaneous</h2>
    <div class="list">
        <?php generateCard("cards/misc",false)?>
    </div>
</div>
<footer>
    Copyright © <b>2023 Nerd</b>
</footer>
<a style="display: none" rel="me" href="https://mastodon.social/@imalonelynerd">Mastodon</a>
</body>
</html>