//获取随机色a-f A-F 0-9
function getColor(){
	let bgColor = '#';
	let str = 'abcdefABCDEF0123456789';
	for (var i=0;i<6;i++){
		let n = Math.floor(Math.random()*str.length);
		bgColor += str[n];
	}
	return bgColor;
}

//获取随机数a-z A-Z 0-9
function getRandom(){
	let htmlStr = '';
	let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	for (var i=0;i<6;i++){
		let n = Math.floor(Math.random()*str.length);
		htmlStr += str[n];
	}
	return htmlStr;
}






	


	

	