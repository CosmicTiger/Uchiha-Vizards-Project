<?php

mysqli_connect("127.0.0.1", "root", "") or die ("Couldn't connect to database");
mysqli_select_db("simplecounter") or die("Couldn't find database");

$find_counts = mysqli_query("SELECT * FROM user_count");

while($row = mysqli_fetch_assoc($find_counts))
{
    $current_counts = $rows['counts'];
    $new_count = $current_counts + 1;
    $update_count = mysqli_query("UPDATE 'simple counter' . 'user_count' SET 'counts' = $new_count");

    echo $new_count;
}
?>