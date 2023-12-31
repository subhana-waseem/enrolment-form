<?php
 $firstName = $_POST['enter your Name'];
 $fatherName = $_POST['enter your father's Name'];
 $motherName = $_POST['enter your mother's Name'];
 $email = $_POST['email'];
 $number = $_POST['number'];
 $address = $_POST['permanent address'];
 $qualification = $_POST['qualification'];
 $gender = $_POST['gender'];
 $states = $_POST['states'];

 // Database connection
 $conn = new mysqli('localhost','root','','test');
 if($conn->connect_error){
  echo "$conn->connect_error";
  die("Connection Failed : ". $conn->connect_error);
 } else {
  $stmt = $conn->prepare("insert into registration(enter your Name, enter your father's Name, enter your mother's name, email, number,permanent address,qualification,gender,states) values(?, ?, ?, ?, ?, ?,?,?,?)");
  $stmt->bind_param("sssssi", $enter your Name, $enter your father's Name, $enter your mother's name , $email, $number ,$permanent address , $qualification, $gender, $states);
  $execval = $stmt->execute();
  echo $execval;
  echo "Registration successfully...";
  $stmt->close();
  $conn->close();
 }
?>