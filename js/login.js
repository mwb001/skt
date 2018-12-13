$(function(){
	//登录方式切换
	let login_fs = $('.login_fs a');
	let forms = $('.forms').children();
	for(var i=0;i<login_fs.length;i++){
		login_fs[i].index=i;
		console.log(login_fs[i]);
		login_fs[i].onclick = function(){
			for(var j=0;j<login_fs.length;j++){
				login_fs[j].className="";
				forms[j].style.display='none';
			}
			login_fs[this.index].className = 'foucs';
			forms[this.index].style.display = 'block';
		}
	}
	
	
	//	点击按钮获取随机验证码
	$('.login_phone em').click(function(){
		$(this).css({
			color : getColor(),
			background : getColor()
		});
		$(this).html(getRandom());
	})
	
	//	获取短信验证码
	$('.get_yzm').click(function(){
		alert('验证码已发送');
		setTimeout(()=>{
			$(this).prev().val(getRandom());
		},Math.floor(Math.random()*30)*100);
	})
})