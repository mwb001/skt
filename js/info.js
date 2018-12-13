
//function $(str){
//	if(str.charAt(0) == "#"){
//		return document.getElementById(str.substring(1));
//	}else if(str.charAt(0) == "."){
//		return document.getElementsByClassName(str.substring(1));
//	}else{
//		return docu.getElementsByTagName(str);
//	}
//}
//
//function scale1(evt){
//	
//		//1、数据（放大镜的left和top）mirrorBox
//		let left1 = evt.pageX-$(".bigBox")[0].offsetLeft-$('#mirrorBox').offsetWidth/2;
//		let top1 = evt.pageY-$(".bigBox")[0].offsetTop-$('#mirrorBox').offsetHeight/2;
//		
//		if(left1<0){
//			left1=0;
//		}else if(left1>$(".bigBox")[0].offsetWidth-$('#mirrorBox').offsetWidth){
//			left1 = $(".bigBox")[0].offsetWidth-$('#mirrorBox').offsetWidth;
//		}
//		if(top1<0){
//			top1=0;
//		}else if(top1>$(".bigBox")[0].offsetHeight-$('#mirrorBox').offsetHeight){
//			top1 = $(".bigBox")[0].offsetHeight-$('#mirrorBox').offsetHeight;
//		}
//		
//		
//		//2、外观
//		$("#mirrorBox").style.left = left1+"px";
//		$("#mirrorBox").style.top = top1+"px";
//		
//		$("#showBox").style.backgroundPosition = (-3*left1)+"px "+(-3*top1)+"px";
//}	
//
//window.onload = function(){
//	$(".bigBox")[0].onmouseover = function(){
//		$("#mirrorBox").style.display = "block";
//		$("#showBox").style.display = "block";
//	}
//	
//	$(".bigBox")[0].onmouseout = function(){
//		$("#mirrorBox").style.display = "none";
//		$("#showBox").style.display = "none";
//	}
//
//	$(".bigBox")[0].onmousemove = function(event){
//		let evt = event || window.event;
//		scale1(evt);
//	}
//	
//	let liDoms = $(".imgs_B")[0].children;
//	for(let i=0;i<liDoms.length;i++){
//		liDoms[i].onclick = function(){
//			let bgImg = getStyle(this,"backgroundImage");
//			$("#bigBox").style.backgroundImage = bgImg;
//			$("#showBox").style.backgroundImage = bgImg;
//		}
//	}
//}








//----------------放大镜
$(function(){
//	获取所有li,获取每个li的背景图赋值给bigBox和showBox
	let lis = $('.imgs_B li');
	lis.each(function(){
		$(this).click(function(){
			let bgImg = $(this).css('backgroundImage');
			$(".bigBox").css('backgroundImage',bgImg);
			$("#showBox").css('backgroundImage',bgImg);
		})
	})
	
	$(".bigBox").mouseenter(function(){
		$("#mirrorBox").css({
			'display':'block',
			'cursor' : 'pointer'
		});
		$("#showBox").css('display','block');
	});
	$(".bigBox").mouseleave(function(){
		$("#mirrorBox").css('display','none');
		$("#showBox").css('display','none');
	});
	$(".bigBox").mousemove(function(ev){
		scale(ev);
	});
	function scale(ev){
//		1----值的变化
		let x = ev.pageX - $(".bigBox")[0].offsetLeft - $("#mirrorBox")[0].offsetWidth/2;
		let y = ev.pageY - $(".bigBox")[0].offsetTop - $("#mirrorBox")[0].offsetWidth/2;
//		2----边界处理
		if (x < 0) {
			x = 0;
		}else if(x > $(".bigBox")[0].offsetWidth - $("#mirrorBox")[0].offsetWidth){
			x = $(".bigBox")[0].offsetWidth - $("#mirrorBox")[0].offsetWidth;
		}
		if (y < 0) {
			y= 0;
		}else if(y > $(".bigBox")[0].offsetHeight - $("#mirrorBox")[0].offsetHeight){
			y = $(".bigBox")[0].offsetHeight - $("#mirrorBox")[0].offsetHeight;
		}
//		3----外观样式
		$("#mirrorBox").css({
			'left' : x+'px',
			'top' : y+'px'
		});
//		算出遮罩层左侧距离和小图之间的比例
		let scaleX = x/($(".bigBox")[0].offsetWidth - $("#mirrorBox")[0].offsetWidth);
		let scaleY = y/($(".bigBox")[0].offsetHeight - $("#mirrorBox")[0].offsetHeight);
		$("#showBox").css({
			'backgroundPositionX' : -scaleX*(1320-$("#showBox")[0].offsetWidth) + 'px',
			'backgroundPositionY' : -scaleY*(1600-$("#showBox")[0].offsetHeight) + 'px'
		})
	}
})
