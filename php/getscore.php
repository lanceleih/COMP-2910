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
            echo "<table><tr>".str_repeat("&nbsp;", 10)."<th>ID</th>".str_repeat("&nbsp;", 10)."<th>Name</th>".str_repeat("&nbsp;", 10)."<th>Time</th></tr>";
            // output data of each row
            while($row = $result->fetch_assoc()) {
                if(strcmp($row[shape],"square") == 0  && strcmp($row[difficulty],"easy") == 0) {
                    echo "<tr><td>".$row["id"].str_repeat("&nbsp;", 10)."</td><td>".$row["name"].str_repeat("&nbsp;", 10)."</td><td>".$row["time"]."</td></tr>";
                }
            }
            echo "</table>";
        } else {
            echo "0 results";
        }
        $conn->close();
    ?>