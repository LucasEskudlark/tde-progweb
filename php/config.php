<?php
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $email = $_POST["email"];
    $userPassword = $_POST["password"];
    $phone = $_POST["phone"];

    $con =  mysqli_connect("localhost:8889", "root", "root", "tde_web");

    mysqli_query($con, "INSERT INTO users (First_Name, Last_Name, Email, User_Password, Phone) VALUES('$firstname','$lastname','$email','$userPassword', '$phone')");

?>