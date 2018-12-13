	
	
	
	$(function(){
		$(".hea_R a:first-child").click(function(){
			if($('.uls').css('display') == 'block'){
				$('.uls').css('display','none');
			}else{
				$('.uls').css('display','block');
			}
			if($(this).find('span').css('display') == 'block'){
				$(this).find('span').css('display','none');
			}else{
				$(this).find('span').css('display','block');
			}
		})
	})
	
	