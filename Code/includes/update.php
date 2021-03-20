<?php
    include 'connect.php';
    session_start();

    //Get visitor id
    $update_stud = $_GET['update'];

    // storing visitor id in session
    $_SESSION['EDIT_Std'] = $_GET['update']; 

    header("Location:../admin-profile.php#fill-form-update");

    ?>