<?php
    $servername = "mysql4.000webhost.com";
    $username = "a7385043_2910";
    $password = "Scholours16";
    $db = "a7385043_2910";

    $conn = new mysqli($servername,$username,$password, $db);
    // mysql_select_db('a7385043_2910') or die( "Unable to select database");

    $sql = "SELECT id, name, time, shape, difficulty FROM leaderboard"; 
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Time: " . $row["time"]."<br>";
        }
    } else {
        echo "0 results";
    }

    $conn->close();

?>
