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

//不验证直接弹窗【新增】
function openWindow(btn,div_id,width){	
	openAlertPopup('window',div_id,width);//弹窗有内容
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
function checkToWindow(btn,div_id,width){

	if (!checkTrSelected()){
		openAlertPopup('alert');//提示
		return false;
	}else{
		openAlertPopup('window',div_id,width);//弹窗有内容
	}
}
//打开弹窗
var openAlertPopup = function(flag,div_id,width){
	var windows_w = '540';//弹窗高度赋值
	
	var wds_l= '34%';
	if(flag=='alert'){
		var title = '提示';
		var html = " <div class='condition content'><ul class='select_down'><li><p>请选择至少一条数据!</p></li></ul></div>";
		html+= " <div class='button_toolbar'> <span class='fr'><a onclick='closePopup();'>保存</a> <a class='m_15 m_r28' onclick='closePopup();'>关闭</a></span> </div>";
		
	}else if (flag=='delete'){
		var title = '提示';
		var html = "<div class='condition content'><ul class='select_down'><li><p>确认删除这条数据吗？</p></li></ul></div>";
		html+= " <div class='button_toolbar'> <span class='fr'><a onclick='closePopup();'>保存</a> <a class='m_15 m_r28' onclick='closePopup();'>关闭</a></span> </div>";
	}else if (flag==="changePasswd"){
		var title = '提示';
		var html = "<div class='condition content'><ul class='select_down'><li><p>您确认为{}修改密码吗？</p></li></ul></div>";
		html+= " <div class='button_toolbar'> <span class='fr'><a onclick='openChangepasswd(";
		html+= "&quot;" +div_id +"&quot;";
		html+=");'>确定</a> <a class='m_15 m_r28'onclick='closePopup();'>关闭</a></span> </div>";
	}
	else{	
		if(width>0){
			var windows_w = width;
			if(windows_w>=800){
				var wds_l= '28%';
			}else{
				var wds_l= '17%';
			}
		}
		var title = $('#'+div_id+' .details_title_popup').text();
		var html = $('#'+div_id+' .search_bar_popup').html();
	}
	$("#light").css('width', windows_w);

	$("#light #popup_title").text(title);
	$("#light .search_bar_popup").html(html);
	//弹窗高度赋值
	//$("#light").css('width', windows_w);
	$("#light").css('left', wds_l);
	//div[id=light]的高度大于250px就top：5%;小于250px就top:28%
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
	$("#fade").show()
}

var openLightWindow = function(title, modify_indicator,width){
	if (modify_indicator === "alter" && !checkTrSelected()){
		openAlertPopup('alert');//提示
		return false;
	};
	var wds_l= '34%';
	var windows_w = '540';//弹窗高度赋值
	if(width>0){
		var windows_w = width;//弹窗高度赋值
		if(windows_w>=800){
			var wds_l= '28%';			
		}
	}
	
	$("#popup_light .details_title_popup").text(title);
	//弹窗高度赋值
	$("#popup_light").css('width', windows_w);
	$("#popup_light").css('left', wds_l);
	//div[id=popup_light]的高度大于250px就top：5%;小于250px就top:28%
	var box_height = $("#popup_light").height();
	if(box_height>650){
		$("#popup_light").css('top', '5%');
	}else if(box_height>450){
		$("#popup_light").css('top', '18%');
	}else{
		$("#popup_light").css('top', '28%');
		}
	var windows_h = $(document).height();//浏览器时下窗口文档的高度
	
	if(box_height>=windows_h){
		var fade_height = box_height+50;
		$("#fade").css('height', box_height);
	}else{
		var fade_height = windows_h+50;
	}
	$("#fade").css('height', fade_height);
	$("#popup_light").css('z-index', 3000).show();
	$("#fade").show()
}

// change password promotion
function openChangepasswdWindow(div_id){
	if (!checkTrSelected()){
		openAlertPopup('alert');//提示
		return false;
	}else{
		openAlertPopup('changePasswd',div_id);//弹窗有内容
	}
}

// change password pane
function  openChangepasswd(div_id){
	openAlertPopup('window',div_id);
}

//关闭弹窗
var closePopup = function()
{
   $("#light").hide();
   $("#fade").hide();
}

var closePopupLight = function(){
	$("#popup_light").hide();
   $("#fade").hide();
}