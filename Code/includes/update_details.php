<?php
    include 'connect.php';
    session_start();

    // storing session in variable
    $update_stud = $_SESSION['EDIT_Std'];
    
    if(isset($_POST['update'])){

        //storing inputs into variables
        $email = $_POST['std-email'];
        $password = $_POST['std-password'];
        $name = $_POST['std-name'];
        $gender= $_POST['std-gender'];
        $age = $_POST['std-age'];
        $adress = $_POST['std-adress'];
        $phone = $_POST['std-phone'];
        $class = $_POST['std-class'];
        $math_mark = $_POST['math-mark'];
        $english_mark = $_POST['english-mark'];

        // check if the input fields are empty
        if(!empty($email) && !empty($password) && !empty($name) && !empty($gender) && !empty($age) && !empty($adress) && !empty($phone) && !empty($class) && !empty($math_mark) && !empty($english_mark)){

        // updating student details in database

         $query_update = "UPDATE visitor, student, subjects, marks
         SET visitor.email = '$email', visitor.login_password = '$password', student.full_name = '$name', student.gender = '$gender', student.age = $age, student.adress = '$adress', student.parent_phone = $phone, student.class = '$class', marks.mark = $math_mark
         WHERE visitor.idV = $update_stud AND visitor.idV = student.idV AND student.idStu = marks.idStu AND subjects.idSub = marks.idSub AND subjects.subject_name = 'math'";
         mysqli_query($connection, $query_update);
         
         $query_update_eng = "UPDATE visitor, student, subjects, marks
         SET marks.mark = $english_mark
         WHERE visitor.idV = $update_stud AND visitor.idV = student.idV AND student.idStu = marks.idStu AND subjects.idSub = marks.idSub AND subjects.subject_name = 'english'";
         mysqli_query($connection, $query_update_eng);

         header("Location:../admin-profile.php");

        } else{
            header("Location:../admin-profile.php?error?Please Fill the Form#fill-form-update");
        }
    }

?>