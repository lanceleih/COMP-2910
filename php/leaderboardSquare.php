<?php
    $servername = "mysql4.000webhost.com";
    $username = "a7385043_2910";
    $password = "Scholours16";
    $db = "a7385043_2910";

    $conn = mysql_connect($servername,$username,$password);
    mysql_select_db('a7385043_2910') or die( "Unable to select database");

    $sql = "SELECT id, name, time, shape, difficulty FROM leaderboard"; 
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // output data of each row
        while($row = mysqli_fetch_assoc($result)) {
            echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Time: " . $row["time"]."<br>";
        }
    } else {
        echo "0 results";
    }

    mysqli_close($conn);
    name, id, time, shape, difficulty

?>
