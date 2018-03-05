/**
 * Created by kroyo on 2017/12/5.
 * 自定义组件js
 * version  0.0.1
 * 
 *
 * 1.自定义组件  select  
 *	-- 使用方法
 *		(1).html 定义<div class="kro-select-wrapper"></div>
 *		(2).js  $('.kro-select-wrapper').select(); select初始化
 **/



$.fn.extend({
	//自定义select  
	select: function() {
		var selOff = true,
			_this = this,
			$select_input = this.find('.kro-select-input'),
			$select_sellist = this.find('.kro-select-listdown'),
			$select_selli = this.find('.kro-select-listdown .li');
		
		//下拉框动画
		var selectAnimate = function(){
			if(selOff){
				_this.addClass('active');
				$select_sellist.slideDown();
				selOff = false;
			}else{
				_this.removeClass('active');
				$select_sellist.slideUp();
				selOff = true;
			}
		}
		
		_this.on('click',function(e){
			selectAnimate();
			e.stopPropagation();
		});
		
		//1.2选中选项
		$select_selli.on('click',function(e){
			//1.2.1切换选中状态
			$(this).parent().find('li').removeClass('selected');
			$(this).addClass('selected');
		
			//1.2.2.切换input中的文本
			$select_input.val($(this).text());
		
			//1.2.3.收起下拉列表
			selectAnimate();
		
			e.stopPropagation();
		});
		
		//1.3页面滚动时,收起下拉列表
		$(window).scroll(function(){
			selOff = false;
			selectAnimate();
		});
		//1.4点击页面其他位置时,  收起下拉列表
		$(document).click(function(){
			selOff = false;
			selectAnimate();
		});
	}
	//end  自定义select
})