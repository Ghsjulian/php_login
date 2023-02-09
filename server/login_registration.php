<?php
include('../database/database.php');
$db = new Database();
$message = array();

if ($_POST['action'] == 'Registration') {
  
  $name =$_POST['user_name'];
  $email = $_POST['user_email'];
  $password = $_POST['user_password'];
  
  if ($name && $email && $password) {
    $sql = "SELECT * FROM users WHERE user_name = '$name' AND user_email = '$email'";
    if($db->selectData($sql)){
      $message = array(
      "stattus" =>false,
      "message"=>"User Already Registered !"
      );
    } else {
    $sql_insert = "INSERT INTO users(user_id,user_name,user_email,user_password)VALUES('','$name','$email','$password')";
    if($db->insertData($sql_insert)){
    $message = array(
      "stattus" =>"Registration",
      "message"=>"Registration Successfully!"
      );
    } else {
      $message = array(
      "stattus" =>false,
      "message"=>"Registration Failed!"
      );
    }
    }
  } else {
    $message = array(
      "stattus"=>false,
      "message"=>"Please Fill Out the Form !"
      );
  }
echo json_encode($message);
}


if ($_POST['action'] == 'Login') {
  
  $name =$_POST['user_name'];
  $password = $_POST['user_password'];

  if ($name && $password) {
   $sql = "SELECT * FROM users WHERE user_name = '$name' AND user_password =
    '$password'";
   if($db->selectData($sql)){
      $message = array(
      "stattus" =>"Login",
      "message"=>"Login Successfully !"
      );
    } else {
 $message = array(
      "stattus"=>false,
      "message"=>"Invalid Username And Password !"
      );
    }
  }
 echo json_encode($message);
}

?>