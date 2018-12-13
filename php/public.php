<?php
	header('Content-type:text/html;charset=utf-8');
?>

<!--连接数据库服务器-->
<?php
	define('DB_HOST','localhost');
	define('DB_USER','root');
	define('DB_PASS','root');
	define('DB_NAME','nbyphone');
	
	$conn = new mysqli(DB_HOST,DB_USER,DB_PASS,DB_NAME);
	$conn->query('set names utf8');
	if($conn->connect_error){
		die('连接失败'.$conn->connect_error);
	}
?>
