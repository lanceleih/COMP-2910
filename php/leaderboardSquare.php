<?php
    $servername = "mysql4.000webhost.com";
    $username = "a7385043_2910";
    $password = "Scholours16";
    $db = "a7385043_2910";

    mysql_connect($servername,$username,$password);
    mysql_select_db('a7385043_2910') or die( "Unable to select database");

    SELECT * 
    FROM  `leaderboard` 
    LIMIT 0 , 200



?>
