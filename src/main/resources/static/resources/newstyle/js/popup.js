//打开提示窗
var openPopup = function(title,content_id)
{
	$("#light #popup_title").text(title);
	$("#light #popup_content").html($("#"+content_id).html());
	//div[id=light]的高度大于400px就top：5%;小于250px就top:28%
	var box_height = $("#light").height();
	if(box_height<450){
		$("#light").css('top', '28%');
	}else if(box_height>=450 && box_height<=650){
		$("#light").css('top', '18%');
	}else if(box_height>650){
		$("#light").css('top', '5%');
	}else{
		$("#light").css('top', '10%');
	}
	var windows_h = $(document).height();//浏览器时下窗口文档的高度
	
	if(box_height>=windows_h){
		var fade_height = box_height+50;
		$("#fade").css('height', box_height);
	}else{
		var fade_height = windows_h+50;
	}
	$("#fade").css('height', fade_height);
	$("#light").css('z-index', 3000).show();
	$("#fade").show();
}
//关闭提示窗
var closePopup = function()
{
	$("#light").hide()
	$("#fade").hide();
}