var checkTrSelected = function(errorMess){
  var selectedcount = 0;
   //validate at least one selected in the list
   $("tr").each(function(item,i) {
      if ($(this).hasClass('selected')) {
         selectedcount ++;
      }
    });

   if(selectedcount === 0){
        return false;
   }

   return true;
}

//supply check
function memberInquirySuperviseCheck(){	

	if (!checkTrSelected()){
		openPopup('view');
		return false;
	}else{
		$('#member_supply_info_check_btn').prop("href", "supply_check_info.html");
	}
}
//supply check
function memberInquirySuperviseCheck(){	
	if (!checkTrSelected()){
		openPopup('alert');
	}else{
		openPopup('view');
	}
}
//supply check
function memberInquirySupervisePriceCheck(){	
	if (!checkTrSelected()){
		openPopup('alert');
	}else{
		openPopup('price');
	}
}
var openPopup = function(flag)
{
	var windows_w = '540';//弹窗高度赋值
	var wds_l= '34%';
	if(flag=='alert'){
		var title = '提示';
		var html = "<ul class='select_down'><li><p>请选择至少一条供应商信息!</p></li></ul>";
	}else if('price'){
		var title = '询价管理-报价';
		var html = $("#pricecontent").html();
	}else{
		var title = '询价管理-查看';
		var html = $("#realcontent").html();
	//弹窗高度赋值
	$("#light").css('width', windows_w);
	$("#light").css('left', wds_l);
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
var closePopup = function()
{
   $("#light").hide();
   $("#fade").hide();
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

//validate active account
function ActiveAccount(){
  if (!checkTrSelected(null)){
     $("#messHereSel").text("请选择要启用的数据");
     $("#supply-info-invalid-popup").show();
   }else{
      $("#messHere").text("账号启用成功");
      $("#supply-info-valid-popup").show();
   }  
}

//validate inactive account
function InactiveAccount(){
  if (!checkTrSelected(null)){
    $("#messHereSel").text("请选择要停用的数据");
      $("#supply-info-invalid-popup").show();
   }else{
      $("#messHere").text("账号停用成功");
      $("#supply-info-valid-popup").show();
   }
}

function supplyInfoPopConfirm()
{
  $("#supply-info-invalid-popup").hide();
}

function validSupplyInfoPopConfirm(){
  $("#supply-info-valid-popup").hide();
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


// Paging functionality
  var restoreStyleofPages = function(){
    $(".badoo a").each(function(index){
      $(this).removeClass( "page_current" );
    });
  }

  var sortFunctionality = function(){
    $(".badoo").children().click(function(){
      restoreStyleofPages()
      $(this).addClass( "page_current" );
    });
  };

  sortFunctionality();

  (function(){ 
      var changeSupplyList = function(selectedPageNum){
        $("#supply_tb tr").hide();
        $("#supply_tb tr").each(function(index){
            if(index <= selectedPageNum){
              $(this).show();
              return;
            }
        })
      };

      var selectedPageNum = 1;
      $('#supply_info_drop_page h4 em').hover(
        function () {
          //do nothing
        }, function () {
          selectedPageNum = $(this).text();
          var hideFlag = $('#supply_info_drop_page h4').is(':visible');
          
          if (!hideFlag){
              changeSupplyList(selectedPageNum);
          }
      });
  })();

  // Paging functionality

  //select drop down auto
 
  $('#danweileixing1').change(function(){
    var seledval = $( "#danweileixing1 option:selected").val()
    if (seledval > -1){
      //("#danweileixing2 select").val(seledval);
      $("#danweileixing2").val(seledval);
    } 
  })

});