<?php
    require_once('config.php');

    // Connect to server and select database.
    mysql_connect(DB_HOST, DB_USER, DB_PASSWORD)or die("cannot connect");
	mysql_select_db(DB_DATABASE)or die("cannot select DB");
    $table_name="a7385043_2910"; // Table name

    $sql="SELECT * FROM $table_name ORDER BY id DESC";
    // ORDER BY id DESC is order result be descending
    $result=mysql_query($sql);
?>

<table width="90%" border="0" align="center" cellpadding="3" cellspacing="1" bgcolor="#CCCCCC">
<tr>
<td width="6%" align="center" bgcolor="#E6E6E6"><strong>Rank</strong></td>
<td width="53%" align="center" bgcolor="#E6E6E6"><strong>Name</strong></td>
<td width="13%" align="center" bgcolor="#E6E6E6"><strong>Time</strong></td>
</tr>

<?php
    $rank = 0;
    while($rows=mysql_fetch_array($result)){ // Start looping table row
?>

<tr>
<td bgcolor="#FFFFFF"><?php echo $rank++; ?></td>
<td bgcolor="#FFFFFF"><?php echo $rows['name']; ?><BR></td>
<td align="center" bgcolor="#FFFFFF"><?php echo $rows['time']; ?></td>
</tr>

<?php
// Exit looping and close connection
}
mysql_close();
?>
</table>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Leaderboard Test</title>
    </head>
    <body>
        <form method="POST"  id="add">
            Name:<br>
            <input type="text" name="name" id="name"><br>
            Time:<br>
            <input type="text" name="time" id="time">
            <input type="submit" value="Submit">
        </form>

        <script>

</script>
        
        
    </body>
</html>
