<?php
	header('Content-type:text/html;charset=utf-8');
?>

<?php
	require_once('public.php');
	require_once('clear.php');
	
	
//	接收前端发来的数据
	$userName = _clear($_POST['phone']);
	$userPwd = _clear($_POST['pwd']);
//	echo $userName.','.$userPwd;
	
//	判断是否是点击注册页面的注册按钮到此页面的
	if($_POST['submit'] == '提交'){
//		继续判断用户输入的用户名是否已经被注册过
		$findRepeat = "select `userName` from usertable where userName = '$userName'";
		$findRepeatRes = $conn->query($findRepeat);
		echo $findRepeatRes->num_rows > 0;
		if($findRepeatRes->num_rows > 0){
			echo "	
				<script>
					alert('该账号已被注册');
					window.location.href = '../register.html';
				</script>
			";
		}else{
			//	向数据库表中插入用户信息
			$insertUser = "insert into usertable (userName,userPwd,riqi) values
				('".$userName."','".$userPwd."',NOW())";
			$insertUserRes = $conn->query($insertUser);
			if($insertUserRes){
				echo "
					<script>
						alert('注册成功，请登录');
						window.location.href = '../login.html';
					</script>
				";
			}else{
				echo "
					<script>
						alert('注册失败');
						window.location.href = '../register.html';
					</script>
				";
			}
		}
	}

?>