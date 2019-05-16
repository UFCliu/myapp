//approval.html date picker
function relationSuperviseApprove(){
   var selectedcount = 0;
   //validate at least one selected in the list
   $("tr").each(function(item,i) {
      if ($(this).hasClass('selected')) {
         selectedcount ++;
      }
    });

   if(selectedcount === 0){
      openPopup('view');
      return;
   }

  $('#rela_supervise_btn').prop("href", "auditing/relation_supervise_info.html");

}
var openPopup = function(flag)
{
	$("#light #popup_title").text('提示');
	if(flag=='view'){
		var html = "<ul class='select_down'><li><p>请选择至少一条客户关系信息!</p></li></ul>";
		
	}
	
	$("#light #popup_content").html(html);
	var windows_w = '540';//弹窗高度赋值
	var wds_l = '34%';
	$("#light").css('width', windows_w);
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
var closePopup = function()
{
   $("#light").hide();
   $("#fade").hide();
}
$(document).ready(function(){
  var removeOtherSelected = function(){
    $("tr").each(function(item,i) {
      $(this).removeClass('selected');
      $(this).children().removeClass('selectedtd');
    })
  },
  selectOne = function(thisObj){
    thisObj.addClass('selected');
    thisObj.children().addClass('selectedtd');
  }

  $("tr").not(':first').click(
    function () {
      removeOtherSelected();
      selectOne($(this));
    }
  );

  $("tr").not(':first').hover(
  function () {
    $(this).children().addClass('tbhover');
  }, 
  function () {
    $(this).children().removeClass('tbhover');
  }
  );

  (function(){
  $('#relation_supervise-from-datepicker').datetimepicker({
    time24h: true,
    dateFormat: 'yy-mm-dd',
    timeFormat: "HH-mm"
  });
   $('#relation_supervise-to-datepicker').datetimepicker({
    time24h: true,
    dateFormat: 'yy-mm-dd',
    timeFormat: "HH-mm"
  });
    //$('#member-approval--datepicker').timepicker();
  })();
});