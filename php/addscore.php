<?php
        if(isset($_POST['submit'])) {
            $servername = "mysql4.000webhost.com";
            $username = "a7385043_2910";
            $password = "Scholours16";
            $db = "a7385043_2910";

            $conn = new mysqli($servername,$username,$password, $db);

            $name = $_POST['name'];
            $time = $_POST['time'];
            $shape = $_POST['shape'];
            $difficulty = $_POST['difficulty'];

            $sql = "INSERT INTO leaderboard (id, name, time, shape, difficulty) VALUES ( NULL, '$name', '$time', '$shape', '$difficulty')";

            $result = $conn->query($sql);

            mysqli_close($conn);
            header("Location: http://scholours.net23.net/php/scholoursdatabase.php");
                
        }

?>
