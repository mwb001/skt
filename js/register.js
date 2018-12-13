$(function(){
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
	
	
	//	❤表单验证
	let inputs = $('form input');
	console.log(inputs);
	inputs.each(function(){
//		console.log($(this).attr('type'));	//text,passsword,text,text	
		if ($(this).attr('type') == 'text' || $(this).attr('type') == 'password') {
			$(this).on('blur',()=>{
				testBlur($(this));
			})
		}
	})
	function testBlur(obj){
		let str = '';
		let txt = obj.val();
		let pattern;
		switch (obj.attr('name')){
			case 'phone' : 
				pattern = /^[1][35789][\d]{9}$/g;
				str = '请填写正确的手机号码';
				break;
			case 'pwd' : 
				pattern = /^[\w\_\@\%\.]{6,16}$/g;
				str = '6-16位，可以是数字，字母和符号的组合';
				break;
			case 'yzm' :
				if (obj.attr('value') != obj.next().html()) {
					console.log(obj.parent().children().last());
					obj.parent().children().last().html('验证码不正确，请重新输入');
				}else{
					obj.parent().children().last().html('');
				}
				break;
			
		}
		if (pattern != undefined) {
			if (!pattern.test(txt)) {
				obj.parent().children().last().html(str);
			} else{
				obj.parent().children().last().html('');
			}
		}
		
	}
//	如果复选框未选中阻止提交
	$('form input[type=submit]').click(function(){
		if ($('form input[type=checkbox]').attr('checked') == undefined) {
			alert('请阅读《用户协议和隐私政策》');
			return false;
		}
	})
	
	
})
