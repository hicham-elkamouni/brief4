<?php
    include 'connect.php'; 

    if(isset($_POST['save'])){

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
        
        // inserting email & password in the table visitor
         $query_visitor = "INSERT INTO visitor(email, login_password) values ('$email', '$password')";
         mysqli_query($connection, $query_visitor);
 
        // storing the last generated id from visitor table in $visitor_id
        $visitor_search = mysqli_query ($connection, "SELECT idV FROM visitor ORDER BY visitor.idV DESC LIMIT 1");
        $visitor_fetch= mysqli_fetch_array($visitor_search);
        $visitor_id = $visitor_fetch['idV'];

        // inserting student details in the table student
        $query_student = "INSERT INTO student(full_name, gender, age, adress, parent_phone, class, idV) values ('$name', '$gender', '$age', '$adress', '$phone', '$class', '$visitor_id')";
        mysqli_query($connection, $query_student);

        // storing the last generated id from student table in $student_id
        $student_search = mysqli_query ($connection, "SELECT idStu FROM student ORDER BY student.idStu DESC LIMIT 1");
        $student_fetch= mysqli_fetch_array($student_search);
        $student_id = $student_fetch['idStu'];

        // inserting student marks in the table marks
        $query_marks = "INSERT INTO marks(idStu, idSub, mark) values ('$student_id', 1, '$math_mark') , ('$student_id', 2, '$english_mark')";
        mysqli_query($connection, $query_marks);

        header("Location:../admin-profile.php");

        }else{
            header("Location:../admin-profile.php?error?Please Fill the Form#fill-form");
        }
}

?>