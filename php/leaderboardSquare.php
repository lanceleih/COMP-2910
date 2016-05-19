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
        echo "<table><tr><th>ID</th><th>Name</th><th>Time</th></tr>";
        // output data of each row
        while($row = mysqli_fetch_assoc($result)) {
            if($row[shape] ==  && $row[difficulty == ])
                echo "<tr><td>".$row["id"]."</td><td>".$row["name"]." ".$row["time"]."</td></tr>";
    }
    echo "</table>";
    } else {
        echo "0 results";
    }

    mysqli_close($conn);
?>
