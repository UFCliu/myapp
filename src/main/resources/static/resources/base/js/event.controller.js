/**
 *	事件控制器
 *	1，用于控制事件的可用状态
 *
 *	evt-c-sign-hjs
 **/

(function($) {
	$.fn.evtController = function(opts) {
		$this = $(this);
		/** 默认参数 点击事件 */
		var defaults = {
				evts: ["click"],
				showTime: 3,
				opacity: 0.3
		};
		var options = $.extend({}, defaults, opts);
		
		$.each(options.evts, function(index, ele) {
			$this.each(function(index, ts) {
				$(ts).on(ele, function(event) {
					var tTop = $(ts).offset().top;
					var tLeft = $(ts).offset().left;
					var tWidth = $(ts).outerWidth();
					var tHeight = $(ts).outerHeight();
					
					var ohtml = "";
					ohtml += "<div style='position: absolute;background: #000;top: "+tTop
						+"px;left: "+tLeft+"px;width: "+tWidth
						+"px;height: "+tHeight+"px;opacity: "+options.opacity+";'></div>";
					$(ts).after(ohtml);
					
					setTimeout(function(){
						$(ts).next().remove();
					}, options.showTime * 1000);
					
				});
			});
		});
		
	};
	
})(jQuery);