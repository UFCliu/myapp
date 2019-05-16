var checkTrSelected = function(){
  var selectedcount = 0;
   //validate at least one selected in the list
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

function memberCheck(){
   if (!checkTrSelected()){
	   openPopup('view');
	   return false;
   }else{
      $('#member_check_btn').prop("href", "check_info.html");
   }
}
//打开提示窗
var openPopup = function(flag)
{	var windows_w = '540';//弹窗高度赋值
	var wds_l =  '34%';
	//弹窗高度赋值
	$("#light").css('width', windows_w);
	$("#light").css('left', wds_l);
	$("#light #popup_title").text('提示');
	if(flag=='view'){
		var html = $("#viewOnclick").html();
	}else if(flag=='appro'){
		var html = $("#viewOnclick2").html();
	}
	
	$("#light #popup_content").html(html);
	//div[id=light]的高度大于250px就top：5%;小于250px就top:28%
	var box_height = $("#light").height();//弹窗高度
	if(box_height<450){
		$("#light").css('top', '28%');
	}else if(box_height>=450 && box_height<=650){
		$("#light").css('top', '18%');
	}else if(box_height>650){
		$("#light").css('top', '5%');
	}else{
		$("#light").css('top', '10%');
	}
	$("#light").css('z-index', 3000).show();

	var windows_h = $(document).height();//浏览器时下窗口文档的高度
	
	if(box_height>=windows_h){
		var fade_height = box_height+50;
		$("#fade").css('height', box_height);
	}else{
		var fade_height = windows_h+50;
	}
	$("#fade").css('height', fade_height);
	
	$("#fade").show()
}
var closePopup = function()
{
   $("#light").hide();
   $("#fade").hide();
}
//approval.html date pickert
function memberApprove(){
   if (!checkTrSelected()){
        openPopup('view');
		return false;
   }

   var checked_supply = $('input[id=app_supply_radio]:checked', '#member-approval').val();
   var checked_purchase = $('input[id=app_purchase_radio]:checked', '#member-approval').val();
   if (checked_supply === undefined && checked_purchase === undefined ){
      openPopup('appro');
      return;
   }

   if (checked_supply === "on"){
      //supply - approval_supply_info.html
      $('#member_approve_btn').prop("href", "approval_supply_info.html");

   }else if (checked_purchase === "on"){
      //purchase - approval_purchase_info.html
      $('#member_approve_btn').prop("href", "approval_purchase_info.html");
   }
}
//supply modify
function memberSupplyInfoModify(){
   if (!checkTrSelected()){
        openPopup('view');
		return false;
   }else{
      $('#member_supply_info_modify_btn').prop("href", "supply_alter_info.html");
   }
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
  };

  (function(){
    $('#member-approval--datepicker').datetimepicker({
      time24h: true,
      dateFormat: 'yy-mm-dd',
      timeFormat: "HH-mm"
    });
    //$('#member-approval--datepicker').timepicker();
  })();


  $("tr").not(':first').hover(
    function () {
      $(this).children().addClass('tbhover');
    }, 
    function () {
      $(this).children().removeClass('tbhover');
    }
  );

  $("tr").not(':first').click(
    function () {
      removeOtherSelected();
      selectOne($(this));
    }
  );
});