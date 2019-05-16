$.extend({
	
	/**
	 * url转义
	 */
	urlEncode:function(data){
		return encodeURIComponent(data);
	}
});

/**
 * js拼装字符串转义
 */
$.fn.jsHtmlEncode=function(){
	$(this).text($(this).html());
};