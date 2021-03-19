<?php
    
    include 'connect.php';
    if (isset($_REQUEST['email']) && isset($_REQUEST['password'])){

        if(!empty($_REQUEST['email'])&&!empty($_REQUEST['password'])){
        // prevent from sql injection
        $email = mysqli_real_escape_string($connection,$_REQUEST['email']);
        $password = mysqli_real_escape_string($connection,$_REQUEST['password']);
        
        // searching if email & password exists in database
        $query = mysqli_query($connection,"SELECT * FROM visitor where email= '".$email."' and login_password= '".$password."'");      
        
        if(mysqli_num_rows($query)>0){
            $data = mysqli_fetch_assoc($query);
            // storing id of visitor in session
            $_SESSION['user_data']= $data['idV'];

            // Redirecting admin to admin dashboard      
            if($data['idV'] == 1){
                session_start();
                header("Location:../admin-profile.php");
            
            // Redirecting student to student dashboard
            }else if($data['idV'] != 1){
                session_start();
                $_SESSION['ID_Std']=  $data['idV'];
                header("Location:../stud-profile.php");
            }

        }else{
            header("Location:../login.php?error?Invalid Login Deatails");
        }
    }else
    header("Location:../login.php?error?Please Enter Email and Password");

    }

// unset($_SESSION['user_data'])

?>