//判断是否选择table的tr
var checkTrSelected = function(errorMess){
	var selectedcount = 0;
	$("tr").each(function(item,i) {
		if ($(this).hasClass('currSelected')) {
			selectedcount ++;
		}
	});

	if(selectedcount === 0){
		return false;
	}

	return true;
}
//验证后跳页
function checkToPage(btn,page_name){
	
	if (!checkTrSelected()){
		openAlertPopup('alert');//提示
		return false;
	}else{
		if(page_name){
			$('#'+btn).prop("href", page_name);
		}
	}
}
//验证后弹窗【确认删除】
function checkToDelete(btn,page_name){	
	if (!checkTrSelected()){
		openAlertPopup('alert');//提示
		return false;
	}else{
		openAlertPopup('delete');//弹窗有内容
	}
}
//验证后弹窗【弹出内容】
function checkToWindow(btn,div_id){	

	if (!checkTrSelected()){
		openAlertPopup('alert');//提示
		return false;
	}else{
		openAlertPopup('window',div_id);//弹窗有内容
	}
}
//打开弹窗
var openAlertPopup = function(flag,div_id){
	
	var win_height = $(document).height();
	new_win_height = win_height + 100;
	//alert(win_height);
	if(flag=='alert'){
		var title = '提示';
		var html = "<ul class='select_down'><li><p>请选择至少一条供应商信息!</p></li></ul>";
		// alert(win_height);
		$("#fade").css('height', win_height);
		$("#fade").show();
	}else if (flag=='delete'){
		var title = '提示';
		var html = "<ul class='select_down'><li><p>确认删除这条数据吗？</p></li></ul>";
		// alert(win_height);
		$("#fade").css('height', win_height);
		$("#fade").show();
	}
	else{
		var title = $('#'+div_id+' .details_title_popup').text();
		var html = $('#'+div_id+' .condition').html();
		var div_height = $('#light').height();
		if(div_height < 200){
			//alert('wagaga');
            		$("#light").addClass('top','28%');
                      	}
                      	if(div_height > 200){
                      		alert('bengkakas');
            		$("#light").addClass('top','5%');
                      	}
		// var div_height = $('.search_bar_popup').height();
		var new_div_height = div_height +win_height;
		// alert(div_height);
		// alert(new_div_height);
		$("#light #popup_title").text(title);
		$("#light #popup_content").html(html);	
		$("#light").css('z-index', 3000).show();
		$("#fade").css('height', new_div_height);
		$("#fade").show();
	}
	$("#light #popup_title").text(title);
	$("#light #popup_content").html(html);	
	$("#light").css('z-index', 3000).show();
	// var win_height = $(window).height();
	// win_height = win_height + 30;
	// alert(win_height);
	// $("#fade").css('height', new_win_height);
	// $("#fade").show();
}
//关闭弹窗
var closePopup = function()
{
   $("#light").hide();
   $("#fade").hide();
}