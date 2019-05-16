$(document).ready(function(){
     (function(){ 
        $('#list_box_l').on("click","li", function(){
        $('#list_box_l li').each(function(){
            $(this).removeClass("selected");
        });

        $(this).toggleClass("selected");
        });

        
        $('#list_box_r').on("click","li", function(){
            $('#list_box_r li').each(function(){
                $(this).removeClass("selected");
            });

            $(this).toggleClass("selected");
        });

        //left to right all
        $(".buttons").find('a').eq(0).click(function(){
            var leftLis = $('#list_box_l li').map(function(){
                return $(this).text();
            })
            .get()
            .join(",");

            $('#list_box_l li').remove();

            $.each(leftLis.split(","), function(key, value){
                $('#list_box_r').append('<li>'+value.replace(/\"/g, "")+'</li>');
            });
        });

        //left to right one
        $(".buttons").find('a').eq(1).click(function(){
           if (!$('#list_box_l li').hasClass("selected")){
                openPopupFromSelect();
                return false;
           }else{
                var removeLiTx = $('#list_box_l li.selected').text();
                $('#list_box_l li.selected').remove();
                $('#list_box_r').append('<li>'+removeLiTx+'</li>');
           }
        });

        //right to left one
        $(".buttons").find('a').eq(2).click(function(){
            if (!$('#list_box_r li').hasClass("selected")){
                openPopupFromSelect();
                return false;
           }else{
                var removeLiTx = $('#list_box_r li.selected').text();
                $('#list_box_r li.selected').remove();
                $('#list_box_l').append('<li>'+removeLiTx+'</li>');
           }
        });

        //right to left all
        $(".buttons").find('a').eq(3).click(function(){
            var rightLis = $('#list_box_r li').map(function(){
                return $(this).text();
            })
            .get()
            .join(",");

            $('#list_box_r li').remove();

            $.each(rightLis.split(","), function(key, value){
                $('#list_box_l').append('<li>'+value.replace(/\"/g, "")+'</li>');
            });
        });
     })();
});
//打开弹窗
var openPopupFromSelect = function(){
	var title = '提示';
		var html = " <div class='condition content'><ul class='select_down'><li><p>请选择至少一条数据!</p></li></ul></div>";
		//html+= " <div class='button_toolbar'> <span class='fr'><a href='#' onclick='closePopup();'>保存</a> <a class='m_15 m_r28' href='#' onclick='closePopup();'>关闭</a></span> </div>";
		
	var windows_w = '540';//弹窗高度赋值
	var wds_l ='34%';
	//弹窗高度赋值
	$("#light").css('width', windows_w);
	$("#light").css('left', wds_l);
	//div[id=light]的高度大于250px就top：5%;小于250px就top:28%
	$("#light #popup_title").text(title);
	$("#light #popup_content").html(html);	
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
//关闭弹窗
var closePopup = function()
{
   $("#light").hide();
   $("#fade").hide();
}