/**
 * 
 */
$(function(){
	$("div .input").each(function(){
		$(this).attr("title"," "+$.trim($(this).text())+" ");
	});
//	$("div .textarea").each(function(){
//		$(this).attr("title"," "+$.trim($(this).text())+" ");
//	});
});

