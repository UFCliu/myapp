$(function(){
	$('#markRangeAll').on("click","li", function(){
        $('#markRangeAll li').each(function(){
            $(this).removeClass("selected");
        });

        $(this).toggleClass("selected");
        });
		$("#markRangeAll li").attr('class', 'selected');
    
    	$('#markRange').on("click","li", function(){
        $('#markRange li').each(function(){
            $(this).removeClass("selected");
        });

        $(this).toggleClass("selected");
   		 });
		$("#markRange li").attr('class', 'selected');
		
		
		$("#addAllRange").click(function(){
				
				$("#markRange").append($("#markRangeAll li").clone());
				$("#markRangeAll li").remove();
		});
		
		$("#addRange").click(function(){
			if(valieRand()){
				$("#markRange").append($("#markRangeAll li.selected").clone());
				$("#markRange li").removeClass("selected");
				$("#markRangeAll li.selected").remove();
			}
		});
		
		$("#delRange").click(function(){
			if(valieRand()){
				$("#markRangeAll").append($("#markRange li.selected").clone());
				$("#markRange li.selected").remove();
				
			}
		});
		$("#delAllRange").click(function(){
				$("#markRangeAll").append($("#markRange li").clone());
				$("#markRange li").remove();
		});
		$('#markRangeAll').dblclick(function(){ 
			if(valieRand()){
				$("#markRange").append($("#markRangeAll li.selected").clone());
				$("#markRange li").removeClass("selected");
				$("#markRangeAll li.selected").remove();
			}
	    });
	    $('#markRange').dblclick(function(){
	    	$("#markRangeAll").append($("#markRange li.selected").clone());
	    	$("#markRangeAll li").removeClass("selected");
			$("#markRange li.selected").remove();
	    });
});

function valieRand(){
	var returnFlag = true;
	$("#markRange li").each(function() {
		if ($(this).val() == $("#markRangeAll li.selected").val()) {
			returnFlag = false;
			return returnFlag;
		}
	});
	return returnFlag;
}


//验证备注信息
function validRemark(){
	var flag = true;
	var checkapproveStateEnum = $("#myform input[name='approveStateEnum']:checked").val();
	if(checkapproveStateEnum=='NO') {
		var approveRemark = $("#approveRemark").val();
		if(approveRemark == null ||approveRemark =='' ){
				openMessage(member_message_00010);//请输入审核意见
				return false;
		}
		if(approveRemark.length >= 2000){
			openMessage(member_message_00011);//审核意见必须小于2000个字符
			return false;
		}	
	}
	return flag;
	
}

//根据审核结果的改变隐藏或显示审核备注后的红星
$("input[name='approveStateEnum']").change(function(){
	var value = $("input[name='approveStateEnum']:checked").val();
	if(value == "NO"){
		$("#approveRemarkSpan").show();
		$("#operateStartDate").attr("disabled", true);
		$("#operateEndDate").attr("disabled", true);
		$(".operateDate_em").hide();
		$("#remark").show();
		//备注
	}else {
		$("#approveRemarkSpan").show();
		$("#operateStartDate").attr("disabled", false);
		$("#operateEndDate").attr("disabled", false);
		$(".operateDate_em").show();
		$("#remark").hide();
	}
});


//校验页面必须输入项内容
$("#myform").validate({
	invalidHandler: function(form, validator) {
		
    },
	onfocusout : function(element) {
		$(element).valid();
	},
 	submitHandler: function(form) {
		var page = $("#page").val();//当前页数
		$("#memberMarketRangeCodes").empty();
 		$("#markRange li").each(function(){
 			$("#memberMarketRangeCodes").append('<option selected="true" value="'+$(this).val()+'">'+$(this).val()+'</option>');
 		});
		//验证企业编号
		if($("#sourcePage").val() == "PURCHASER_UPDATE"){
			if(!checkenterpriseCode()){
				return;
			}
		}
		
		if(!validRand()){
			return ;
		}
		
		$.ecpost({
			url:'/member/fastApprove/savePurchaserData.ajax',
			data:$("#myform").serialize()+"&page="+page,
			success:function(result){
				if(result.result  == "success"){
					$("#modifyTimeMillis").val(result.modifyTimeMillis);
					openMessage(member_message_00001);//保存成功	
					isChange = 0;
				}else if(result.result  == "yetUpdate"){
					openMessage(member_message_00029);//保存失败，该数据已经被其他人更新，请刷新后重试。
					
				}else{
					openMessage(member_message_00028);//保存失败
				}
			}
		});
		
		
	},
	rules: {
		marketRangeDetail:'required'
    },
    messages: {
    	marketRangeDetail:{required:member_message_00032}//请输入详细经营范围
    }
	
});

//验证备注信息
function validRemark(){
	var flag = true;
	var checkapproveStateEnum = $("#myform input[name='approveStateEnum']:checked").val();
	if(checkapproveStateEnum=='NO') {
		var approveRemark = $("#approveRemark").val();
		if(approveRemark == null ||approveRemark =='' ){
				openMessage(member_message_00010);//请输入审核意见
				return false;
		}
		if(approveRemark.length >= 2000){
			openMessage(member_message_00011);//审核意见必须小于2000个字符
			return false;
		}	
	}
	return flag;
	
}

//验证仓储类别
function checkStocktype() {
	var returnFlag = true ;
	var ckbSelectedNumber = $("#stockType").find("input[type='checkbox']:checked").size();
	if(ckbSelectedNumber == 0){
		openMessage(member_message_00060);//请至少选择一个仓储类别！
		returnFlag = false ;
		return returnFlag ;
	}	
	return returnFlag ;	
}

//生产经营范围
function validRand(){
	var flag = true;
	if($("#markRange li").size() == 0 ){
		flag = false;
		openMessage(member_message_00022);//请选择生产经营范围！
	}
	return flag;
}

var isshow = false;
//审核日志显示
$("#approveLog").click(function(){
	if(isshow == false) {
		$("#appHis").show();
		isshow = true;
	} else {
		$("#appHis").hide();
		isshow = false;
	}
});

//校验企业编码是否重复
function checkenterpriseCode() {
	var flag = true;
	var id =$("#id").val();
	var enterpriseCodePre = $("#myform input[name='enterpriseCodePre']").val();
	var enterpriseCode = $("#myform input[name='enterpriseCode1']").val();
	var endCode = $("#myform input[name='endCode']").val();
	var code = enterpriseCodePre+enterpriseCode+endCode;
	if((enterpriseCode==null || enterpriseCode =='')&&(enterpriseCodePre==null || enterpriseCodePre =='')&&(endCode==null || endCode =='')){
		openMessage(member_message_00007);//请输入企业编码
		return;
	}else if(code.length != 15){
		openMessage(member_message_00008);//企业编码须为15位,请重新输入
		return;
	}
	var checkEnterpriseCode=false;
		//如果现有企业编码为空,则为第一次审核通过,校验流水号重复
		//校验企业编码是否重复
	if(code != null && code != ""){
		$.ecpost({
			url: "/member/fastApprove/checkCode.ajax?enterpriseCode=" + encodeURI(code)+"&id="+encodeURI(id),
			dataType: "json",
			cache: false,
			success: function(data) {
				if(data) {
					openMessage(member_message_00009);//企业编码重复！
					checkEnterpriseCode=true;
					flag = false;
				}  else {
					$("#enterpriseCode").val(code);
				}
			}
		});				
	}
	if(flag== false){
		return false;
	}
	return true;	
}

!function(){
	laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
	laydate({elem: '#operateStartDate',
		choose: function(datas){ //选择日期完毕的回调
			if($("#operateEndDate").val() != ""){
				//check大小
				if($("#operateEndDate").val() < datas){
					$("#operateStartDate").val("");
					openMessage(member_message_00012);//合同期限(经营开始)时间选择不合理，请重新选择！
				}
			}
	    }
	});//绑定元素
	laydate({elem: '#operateEndDate',
		choose: function(datas){ //选择日期完毕的回调
			if($("#operateStartDate").val() != ""){
				//check大小
				if($("#operateStartDate").val() > datas){
					$("#operateEndDate").val("");
					openMessage(member_message_00013);//合同期限(经营结束)时间选择不合理，请重新选择！
				}
			}
	    }
	});//绑定元素
	
}();
