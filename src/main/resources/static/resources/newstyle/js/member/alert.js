var openFinish = function(message,action){
	$("body").append(getHtmlFinish(message,action));
	$("#confirmFade").css('z-index', 3000).show();
	$("#confirmLight").css('z-index', 3001).show();
}

var openPopup = function(flag,message)
		{
			
			if(flag=='edit'){
				$("#fade").show();
				$("#editcontent").css('z-index', 3000).show();
				return ;
			}
			if(flag="message"){
				$("body").append(getMessageHtml(message,"message",null));
				$("#messageLight").css('z-index', 4000).show();
				$("#messageFade").show()
			}
			
		}
var showPopupById = function(id){
	
	//div[id=light]的高度大于400px就top：5%;小于250px就top:20%
	
	/*if(box_height>400){
		$("#" + id).css('top', '5%');
	}else{
		$("#" + id).css('top', '20%');
	}*/
	/*if(box_height>=windows_h){
		$("#fade").css('height', box_height);
	}else{
		$("#fade").css('height', windows_h);
	}*/

	$("#fade").show();
	
	var box_height = $("#" + id).height();
	var box_width = $("#" + id).width();
	
	var windows_h = $(window).height();//浏览器时下窗口文档的高度
	var document_h = $(document).height();
	
	var windows_w = $(window).width();
	var document_w = $(document).width();
	
	var margin_height = box_height/2;
	var margin_width = box_width/2;
	
	var margin_height_document = (document_h-box_height)/2;
	var margin_width_document = (document_w-box_width)/2;
	
	if(box_height >= windows_h && box_height <= document_h){
		$("#"+id).css('position', "absolute");
		$("#"+id).css('top', margin_height_document);
	}else if(box_height < windows_h){
		$("#"+id).css('position', "fixed");
		$("#"+id).css('margin-top', "-"+margin_height+"px");
		$("#"+id).css('top', "50%");
	}else{
		$("#"+id).css('position', "absolute");
		$("#"+id).css('top', '20px');
	}
	
	if(box_width >= windows_w && box_width <= document_w){
		$("#"+id).css('left', margin_width_document);
	}else if(box_width < windows_w){
		$("#"+id).css('margin-left', "-"+margin_width+"px");
		$("#"+id).css('left', "50%");
	}else{
		$("#"+id).css('left', '20px');
	}
	$("#"+id).css('z-index', 3000).show();
}
var closePopupById = function(id){
	
	$("#"+id).css('position','');
	$("#"+id).css('margin-top','');
	$("#"+id).css('top','');
	$("#"+id).css('margin-left','');
	$("#"+id).css('left','');
	
	 $("#"+id).hide();
	 $("#fade").hide();
}
var closeMessage = function()
		{
			
		   $("#messageLight").remove();
		   $("#messageFade").remove();
		}
var closePopup = function()
		{
		   $("#light").hide();
		   $("#fade").hide();
		}
var closeConfirm = function()
{
	
   $("#confirmLight").remove();
   $("#confirmFade").remove();
}
var closeEdit = function()
		{
			$("#editcontent").hide();
			$("#fade").hide();
		}
var openMessage =  function(message)
		{
			$("body").append(getMessageHtml(message,"message",null));
			$("#messageLight").css('z-index', 4000).show();
			$("#messageFade").css('z-index', 3999).show()
		}
var displayInformation =  function(title, message)
{
	$("body").append(getInfoHtml(title,message,"message",null));
	$("#messageLight").css('z-index', 4000).show();
	$("#messageFade").css('z-index', 3999).show()
}
var openError =  function(message)
{
	$("body").append(getMessageHtml(message,"message",null));
	$("#messageLight").css('z-index', 9999).show();
	$("#messageFade").css('z-index', 9998).show();
}	
var openMessage1 =  function(message,scrollTop)
{
	$("body").append(getMessageHtml(message,"message",null));
	// 滚动条滚动距离
	if(scrollTop != null){
		//IE下不好用
		//$("#confirmLight").css('top', scrollTop + $("#confirmLight").css('top').replace("%","")/100* $(window).height());
		$("#messageLight").css('top', scrollTop + 18/100 * $(window).height());
		$("#messageFade").css('top', scrollTop);
	}
	$("#messageLight").css('z-index', 4000).show();
	$("#messageFade").show()
}	
var openHref = function(message,target,scrollTop)
		{
			$("body").append(getHtml(message,"alert",target));
			
			// 滚动条滚动距离
			if(scrollTop != null){
				//IE下不好用
				//$("#confirmLight").css('top', scrollTop + $("#confirmLight").css('top').replace("%","")/100* $(window).height());
				$("#confirmLight").css('top', scrollTop + 18/100 * $(window).height());
				$("#confirmFade").css('top', scrollTop);
			}
			
			$("#confirmLight").css('z-index', 3000).show();
			$("#confirmFade").show()
		}
		
		
var openConfirm = function(message,target)
		{
			
			$("body").append(getHtml(message,"confirm",target));
			$("#confirmFade").css('z-index', 3000).show();
			$("#confirmLight").css('z-index', 3001).show();
		}
var loading = function (msg){
	$("body").append(loadingHtml(msg));
	$("#loading").show();
	$("#fade_loading").show();
	$("#loading").css("z-index",4001);
	$("#fade_loading").css("z-index",4000);
}
function closeLoading(){
	$("#loading").hide();
	$("#fade_loading").hide();
}
			
function getMessageHtml(message,type,target){
	var html = '<div id="messageLight" style="width:440px;margin:0 auto;position:fixed; z-index:3000; left: 50%;margin-left:-270px; top: 50%;margin-top:-100px;" class="white_content color1" > <b class="b1"></b><b class="b2"></b><b class="b3"></b><b class="b4"></b>';
	html += ' <div class="popup_title content ">';
	html += '  <h2 class="details_title_popup" id="popup_title">提示</h2>';
	html += '<a href="#" onclick="closeMessage();"><img src="../resources/newstyle/images/icon_popup.png" width="14" height="14"/></a> <span class="popup_b"></span> </div>';
	html += '<div  class="search_bar_popup content">';
	html += '<div class="condition content" id="popup_content"><ul class="select_down"><li><p>'+message+'</p></li></ul> </div>';
	if(type == "message"){
		html += '  <div class="button_toolbar"> <span class="fr"><a href="javascript:void(0);" onclick="closeMessage();">关闭</a></span> </div>';
	}
	html += '</div>';
	html += ' <b class="b5"></b><b class="b6"></b><b class="b7"></b><b class="b8"></b> ';
	html += '</div>	';
	html += '<div id="messageFade" class="black_overlay"></div>';
	return html;
}
function getHtml(message,type,target){
	var html = '<div id="confirmLight" class="white_content color1" style="width:440px;margin:0 auto;position:fixed; z-index:3000; left: 50%;margin-left:-270px; top: 50%;margin-top:-100px;" > <b class="b1"></b><b class="b2"></b><b class="b3"></b><b class="b4"></b>';
	html += ' <div class="popup_title content ">';
	html += '  <h2 class="details_title_popup" id="popup_title">提示</h2>';
	html += '<a href="#" onclick="closeConfirm();"><img src="../resources/newstyle/images/icon_popup.png" width="14" height="14"/></a> <span class="popup_b"></span> </div>';
	html += '<div  class="search_bar_popup content">';
	html += '<div class="condition content" id="popup_content"><ul class="select_down"><li><p>'+message+'</p></li></ul> </div>';
	if(type == "message"){
		html += '  <div class="button_toolbar"> <span class="fr"><a href="#" onclick="closeConfirm();">关闭</a></span> </div>';
	}else if(type == "alert"){
		html += '  <div class="button_toolbar"> <span class="fr"><a href="'+target+'" >关闭</a></span> </div>';
	}else if(type == "confirm"){
		html += ' <div class="button_toolbar"><span class="fr"><a id="notSure" href="#" onclick="closeConfirm();">取消</a></span>  <span class="fr"><a id="sure" href="#" onclick="'+target+'">确定</a></span></div>';
	}else{
		html += '  <div class="button_toolbar"> <span class="fr"><a href="#" onclick="closeConfirm();">确定</a></span><span class="fr"><a href="#" onclick="closeConfirm();">取消</a></span> </div>';
	}
	html += '</div>';
	html += ' <b class="b5"></b><b class="b6"></b><b class="b7"></b><b class="b8"></b> ';
	html += '</div>	';
	html += '<div id="confirmFade" class="black_overlay"></div>';
	return html;
}
function loadingHtml(msg){
	var html = '<div class="loading" id="loading">';
	html += ' <img src="/resources/images/loading.gif" alt="" />';
	html += '  <span>'+msg+'</span>';
	html += '</div>	';
	html += '<div id="fade_loading" class="black_overlay"></div>';
	return html;
}
function getHtmlFinish(message,action){
	var html = '<div id="confirmLight" class="white_content color1" style="width:540px;margin:0 auto;position:fixed; z-index:3000; left: 50%;margin-left:-270px; top: 50%;margin-top:-100px;" > <b class="b1"></b><b class="b2"></b><b class="b3"></b><b class="b4"></b>';
	html += ' <div class="popup_title content ">';
	html += '  <h2 class="details_title_popup" id="popup_title">提示</h2>';
	html += '<a href="javascript:void(0);" onclick="'+action+'"><img src="/resources/newstyle/images/icon_popup.png" width="14" height="14"/></a> <span class="popup_b"></span> </div>';
	html += '<div  class="search_bar_popup content">';
	html += '<div class="condition content" id="popup_content"><ul class="select_down"><li><p>'+message+'</p></li></ul> </div>';
	html += ' <div class="button_toolbar"><span class="fr"><a id="sure" href="javascript:void(0);" onclick="'+action+'">确定</a></span></div>';
	html += '</div>';
	html += ' <b class="b5"></b><b class="b6"></b><b class="b7"></b><b class="b8"></b> ';
	html += '</div>	';
	html += '<div id="confirmFade" class="black_overlay"></div>';
	return html;
}

var openConfirmSupportCancel = function(message,okTarget,cancelTarget)
{
	$("body").append(getHtmlSupportCancel(message,"confirm",okTarget,cancelTarget));
	$("#confirmFade").css('z-index', 3000).show();
	$("#confirmLight").css('z-index', 3001).show();
}

function getHtmlSupportCancel(message,type,target,cancelTarget){
	var html = '<div id="confirmLight" class="white_content color1" style="width:540px;margin:0 auto;position:fixed; z-index:3000; left: 50%;margin-left:-270px; top: 50%;margin-top:-100px;" > <b class="b1"></b><b class="b2"></b><b class="b3"></b><b class="b4"></b>';
	html += ' <div class="popup_title content ">';
	html += '  <h2 class="details_title_popup" id="popup_title">提示</h2>';
	html += '<a href="#" onclick="closeConfirm();"><img src="/resources/newstyle/images/icon_popup.png" width="14" height="14"/></a> <span class="popup_b"></span> </div>';
	html += '<div  class="search_bar_popup content">';
	html += '<div class="condition content" id="popup_content"><ul class="select_down"><li><p>'+message+'</p></li></ul> </div>';
	html += ' <div class="button_toolbar"><span class="fr"><a id="notSure" href="#" onclick="'+cancelTarget+'">取消</a></span>  <span class="fr"><a id="sure" href="#" onclick="'+target+'">确定</a></span></div>';
	html += '</div>';
	html += ' <b class="b5"></b><b class="b6"></b><b class="b7"></b><b class="b8"></b> ';
	html += '</div>	';
	html += '<div id="confirmFade" class="black_overlay"></div>';
	return html;
}

//例 openModal("页面数据已经修改，是否保存。",["不保存","gotoHref()","保存","changeToSave()"])  倒序漂移排列
function openModal(message,button){
	$("body").append(getModalHtml(message,button));
	$("#confirmFade").css('z-index', 3000).show();
	$("#confirmLight").css('z-index', 3001).show();
}
function getModalHtml(message,button){
	var html = '<div id="confirmLight" class="white_content color1" style="width:540px;margin:0 auto;position:fixed; z-index:3000; left: 50%;margin-left:-270px; top: 50%;margin-top:-100px;" > <b class="b1"></b><b class="b2"></b><b class="b3"></b><b class="b4"></b>';
	html += ' <div class="popup_title content ">';
	html += '  <h2 class="details_title_popup" id="popup_title">提示</h2>';
	html += '<a href="#" onclick="closeConfirm();"><img src="/resources/newstyle/images/icon_popup.png" width="14" height="14"/></a> <span class="popup_b"></span> </div>';
	html += '<div  class="search_bar_popup content">';
	html += '<div class="condition content" id="popup_content"><ul class="select_down"><li><p>'+message+'</p></li></ul> </div>';
	html += ' <div class="button_toolbar"> ';
	for(var i = 0 ; i < button.length;i++){
		html += '<span class="fr"><a id="notSure" href="#" onclick="'+button[i+1]+'">'+button[i]+'</a></span>';
		i++;
	}
	html += '</div>';
	html += '</div>';
	html += ' <b class="b5"></b><b class="b6"></b><b class="b7"></b><b class="b8"></b> ';
	html += '</div>	';
	html += '<div id="confirmFade" class="black_overlay"></div>';
	return html;
}

function getInfoHtml(title,message,type,target){
	var html = '<div id="messageLight" style="width:540px;margin:0 auto;position:fixed; z-index:3000; left: 50%;margin-left:-270px; top: 50%;margin-top:-100px;" class="white_content color1" > <b class="b1"></b><b class="b2"></b><b class="b3"></b><b class="b4"></b>';
	html += ' <div class="popup_title content ">';
	html += '  <h2 class="details_title_popup" id="popup_title">'+ title +'</h2>';
	html += '<a href="#" onclick="closeMessage();"><img src="/resources/newstyle/images/icon_popup.png" width="14" height="14"/></a> <span class="popup_b"></span> </div>';
	html += '<div  class="search_bar_popup content">';
	html += '<div class="condition content" id="popup_content"><ul class="select_down"><li><p>'+message+'</p></li></ul> </div>';
	if(type == "message"){
		html += '<div class="button_toolbar"> <span class="fr"><a href="javascript:void(0);" onclick="closeMessage();">关闭</a></span> </div>';
	}
	html += '</div>';
	html += ' <b class="b5"></b><b class="b6"></b><b class="b7"></b><b class="b8"></b> ';
	html += '</div>	';
	html += '<div id="messageFade" class="black_overlay"></div>';
	return html;
}