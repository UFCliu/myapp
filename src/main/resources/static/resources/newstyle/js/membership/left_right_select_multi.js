$(document).ready(function(){
     (function(){ 
        $('#light').on("click","#list_box_l li", function(){
        $('#light #list_box_l li').each(function(){
            $(this).removeClass("selected");
        });

        $(this).toggleClass("selected");
        });

        
        $('#light').on("click","#list_box_r li", function(){
            $('#list_box_r li').each(function(){
                $(this).removeClass("selected");
            });

            $(this).toggleClass("selected");
        });

        //left to right all fixed version for multiple 
        $("#light").on("click", ".commodity_select_buttons a:eq(0)", function(){
            var leftLis = $('#light #list_box_l li').map(function(){
                return $(this).text();
            })
            .get()
            .join(",");

            $('#light #list_box_l li').remove();

            $.each(leftLis.split(","), function(key, value){
                $('#light #list_box_r').append('<li>'+value.replace(/\"/g, "")+'</li>');
            });
        });

        //left to right one
        $("#light").on("click", ".commodity_select_buttons a:eq(1)", function(){
           if (!$('#light #list_box_l li').hasClass("selected")){
                openPopupFromSelect();
                return false;
           }else{
                var removeLiTx = $('#light #list_box_l li.selected').text();
                $('#light #list_box_l li.selected').remove();
                $('#light #list_box_r').append('<li>'+removeLiTx+'</li>');
           }
        });

        //right to left one
        $("#light").on("click", ".commodity_select_buttons a:eq(2)", function(){
            if (!$('#light #list_box_r li').hasClass("selected")){
                openPopupFromSelect();
                return false;
           }else{
                var removeLiTx = $('#light #list_box_r li.selected').text();
                $('#light #list_box_r li.selected').remove();
                $('#light #list_box_l').append('<li>'+removeLiTx+'</li>');
           }
        });

        //right to left all
        $("#light").on("click", ".commodity_select_buttons a:eq(3)", function(){
            var rightLis = $('#light #list_box_r li').map(function(){
                return $(this).text();
            })
            .get()
            .join(",");

            $('#light #list_box_r li').remove();

            $.each(rightLis.split(","), function(key, value){
                $('#light #list_box_l').append('<li>'+value.replace(/\"/g, "")+'</li>');
            });
        });
     })();
});
//打开弹窗
var openPopupFromSelect = function(){
	var title = '提示';
	var html = " <div class='condition content'><ul class='select_down'><li><p>请选择至少一条数据!</p></li></ul></div>";
	html+= " <div class='button_toolbar'> <span class='fr'><a  onclick='closePopupFromSelect();'>保存</a> <a class='m_15 m_r28' onclick='closePopupFromSelect();'>关闭</a></span> </div>";
		
	var windows_w = '540';//弹窗高度赋值
	var wds_l ='28%';
	$("#light_other").css('width', windows_w);
	$("#light_other").css('left', wds_l);
	//div[id=light_other]的高度大于250px就top：5%;小于250px就top:28%
	var box_height = $("#light_other").height();
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

	$("#light_other #popup_title").text(title);
	$("#light_other #popup_content").html(html);	
	$("#light_other").css('z-index', 4001).show();
	$("#fade_other").css('z-index', 4000).show()
}
//关闭弹窗
var closePopupFromSelect = function()
{
   $("#light_other").hide();
   $("#fade_other").hide();
}