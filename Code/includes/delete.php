<?php
    include 'connect.php';

    //Get visitor id
    $delete_stud = $_GET['delete'];

    //delete student from database
    $query = mysqli_query($connection,"DELETE FROM visitor WHERE visitor.idV = $delete_stud");

    header("Location:../admin-profile.php");
?>