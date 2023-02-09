<?php
class Database {
public $conn;
public $connection;
public $msg;

public function __construct(){
  $conf = file_get_contents('config.json');
		$conf_data = json_decode($conf, true);
		$host = $conf_data['host_name'];
		$user_name = $conf_data['user_name'];
		$password = $conf_data['user_password'];
		$database = $conf_data['database_name'];
		$db_name = $database;

$this->conn = new mysqli($host, $user_name, $password, $db_name);
  if ($this->conn) {
   $this->connection = true;
   return true;
  } else {
    echo "Database Connected Failed!";
    $this->connection = false;
    return false;
  }
}


public function selectData($sql = null){
  $result = $this->conn->query($sql);
  if ($result->num_rows > 0) {
  $data = $result->fetch_assoc();
  return $data;
  return true;
  } else {
    return false;
  }
}

public function insertData($sql){
  if ($sql) {
  $query = $this->conn->query($sql);
  if ($query) {
    return true;
  } else {
    return false;
  }
  } else {
    return false;
  }
}

}
?>