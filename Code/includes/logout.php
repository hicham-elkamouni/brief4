<?php
    
    include 'connect.php';
    
session_start();
// $_SESSION['ID_Admin'];
// echo ($test);
session_unset();

header("Location:../login.php");
?>