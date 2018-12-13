<?php
	header('Content-type:text/html;charset=utf-8');
?>

<?php 
	function _clear($str){
		$str = trim($str);
		$str = htmlspecialchars($str);
		return $str;
	}
?>