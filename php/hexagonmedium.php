<?php
        $servername = "mysql4.000webhost.com";
        $username = "a7385043_2910";
        $password = "Scholours16";
        $db = "a7385043_2910";

        $conn = new mysqli($servername,$username,$password, $db);
        // mysql_select_db('a7385043_2910') or die( "Unable to select database");

        $sql = "SELECT name, time, shape, difficulty FROM leaderboard WHERE shape='hexagon' AND difficulty='medium' ORDER BY time ASC LIMIT 5"; 
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            echo "<table><tr>".str_repeat("&nbsp;", 4)."<th>Rank</th>".str_repeat("&nbsp;", 10)."<th>Name</th>".str_repeat("&nbsp;", 10)."<th>Time</th></tr>";
            // output data of each row
            $rank = 1;
            while($row = $result->fetch_assoc()) {
                echo "<tr><td>".$rank."</td><td>".$row["name"]."</td><td>".$row["time"]."</td></tr>";
                $rank++;
            }
            echo "</table>";
        } else {
            echo "0 results";
        }
        $conn->close();
?>