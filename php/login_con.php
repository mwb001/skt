<?php
	header('Content-type:text/html;charset=utf-8');
?>

<?php
	require_once('public.php');
	require_once('clear.php');
	
	$userName = $_POST['phone'];
	$userPwd = $_POST['pwd']; 
	
//	判断是哪种方式登录
	if($_POST['pwd']){
		$findUser = "select `userName` from usertable where userName = '$userName'";
		$findUserRes = $conn->query($findUser);
		
		$findUserPwd = "select `userPwd` from usertable where userName = '$userName' and userPwd = '$userPwd'";
		$findUserPwdRes = $conn->query($findUserPwd);
		
//		判断数据库中有没有输入的该账号
		if($findUserRes->num_rows > 0){
//			如果有的话再判断数据库中的密码和用户输入的密码是否一致
			if($findUserPwdRes->num_rows > 0){
				echo "
					<script>
						alert('登录成功');
						window.location.href = '../index.html';
					</script>
				";
			}else{
				echo "
					<script>
						alert('用户名或密码有误，请重新输入');
						window.location.href = '../login.html';
					</script>
				";
			}
			}else{
				echo "
					<script>
						alert('您还没有注册，请前往注册');
						window.location.href = '../register.html';
					</script>
				";
			}
		}else{
			$findUser = "select `userName` from usertable where userName = '$userName'";
			$findUserRes = $conn->query($findUser);
	//		判断数据库中有没有输入的该账号
			if($findUserRes->num_rows > 0){
				if($_POST['yzm'] != ''){
					echo "
						<script>
							alert('登录成功');
							window.location.href = '../index.html';
						</script>
					";
				}else{
					echo "
						<script>
							alert('请先填写验证码后再登录');
							window.location.href = '../login.html';
						</script>
					";
				}
			}else{
				echo "
					<script>
						alert('您还没有注册，请前往注册');
						window.location.href = '../register.html';
					</script>
				";
			}
		
		}
	
?>