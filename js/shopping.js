//-------------购物车
$(function(){
//给add按钮加单击事件
	$('.add').each(function(){
		$(this).click(() => {
			add($(this));
		})
	})
//给expect按钮加单击事件
	$('.expect').each(function(){
		$(this).click(() => {
			expect($(this));
		})
	})
//给删除按钮加单击事件
	$('.delete').each(function(){
		$(this).click(() => {
			del($(this));
		})
	})
	
//每件商品的小计 = 数量(goodCount)  * 单价(goodUnit)
	function getEveryGoodsAllPrices(goodsCount, goodsPrice) {
		return parseInt(goodsCount) * parseFloat(goodsPrice);
	}
//购物车所有商品的总价 = 每个商品小计的和
	function getSummaryMoney() {
		var everyGoodsAllPrices = $('.everyGoodsAllPrice');
		var res = 0;
		everyGoodsAllPrices.each(function(){
			res += parseFloat($(this).html())
		})
		return res;
	}

//单击+按钮导致的商品数量,商品小计,商品总价
	function add(btn) {
		var num = btn.prev();   
		var n = parseInt(num.val());    //个数
		num.val(++n);
		var everyGoodsAllPrices = btn.parent().parent().find('.everyGoodsAllPrice');
		var goodsPrice = btn.parent().parent().find('.goodsPrice');
		everyGoodsAllPrices.html(getEveryGoodsAllPrices(num.val(),goodsPrice.html()));
		$('.summaryMoney').html(getSummaryMoney());
	}
//单击-按钮导致的商品数量,商品小计,商品总价
	function expect(btn) {
		var num = btn.next();   
		var n = parseInt(num.val());    //个数
		if (parseInt(num.val()) > 0) {
			num.val(--n);
			var everyGoodsAllPrices = btn.parent().parent().find('.everyGoodsAllPrice');
			var goodsPrice = btn.parent().parent().find('.goodsPrice');
			everyGoodsAllPrices.html(getEveryGoodsAllPrices(num.val(),goodsPrice.html()));
			$('.summaryMoney').html(getSummaryMoney());
		}
		
	}


//单击删除按钮导致的商品数量,商品小计,商品总价
	function del(btn){
		if(confirm("您确定不购买该商品吗？")){
			btn.parent().parent().remove();
		}
	}
	
})	





