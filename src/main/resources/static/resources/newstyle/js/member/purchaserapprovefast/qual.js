function getCheckBoxValue(checkBoxName){
    var chk_value ="";    
    $('input[name="' + checkBoxName + '"]').each(function(){    
        chk_value = chk_value + "," + $(this).val();    
    });
    return chk_value;
}
QualManager.enterpriseType = 0;
QualManager.getEnterpriseId = function(){
  return $("#id").val();
}; //function 取企业ID
QualManager.getEnterpriseName = function(){
  return $("#orgName").val();
}; //function 取企业名称
QualManager.getQueryData = function(){
  var data = {};
  data.enterpriseType = 0;
  data.mainClass = $("#orgType").val();//主分类
  data.subClass = getCheckBoxValue("orgSubType");//子类,多子类以逗号分隔
  data.isPayoff =  $("input[name='isPayof']").val();//盈利
  return data;
}; //function 取单位类型 


//校验页面必须输入项内容
$("#myform").validate({
	invalidHandler: function(form, validator) {
		
    },
	onfocusout : function(element) {
		$(element).valid();
	},
 	submitHandler: function(form) {
 		if(!QualManager.qualValidate()){
			return ;
		}
 		if(!frwtsValid()){
 			return;
 		}
 		var page = $("#page").val();//当前页数
 		$.ecpost({
			url:'/member/fastApprove/savePurchaserData.ajax',
			data:$("#myform").serialize()+"&page="+page,
			success:function(result){
				if(result.result  == "success"){
					$("#modifyTimeMillis").val(result.modifyTimeMillis);
					refreshPage(member_message_00001);
					//openMessage(member_message_00001);//保存成功
					isChange = 0;
				}else if(result.result  == "yetUpdate"){
					openMessage(member_message_00029);//保存失败，该数据已经被其他人更新，请刷新后重试。
				}else{
					openMessage(member_message_00028);//保存失败
				}
			}
		});
	}
	
});

//法人委托书验证（包含委托）
function frwtsValid(){
	var checkFlage = true;
	// 法人授权委托书(包含被委托人身份证正反面)入力项验证
	if ($(".qual_FRSQWTSBHBWTRSFZZFM").css("display") != 'none') {
		if ($(".qual_FRSQWTSBHBWTRSFZZFM").attr("id") != undefined && $(".qual_FRSQWTSBHBWTRSFZZFM").attr("id") != null 
				&& $(".qual_FRSQWTSBHBWTRSFZZFM").attr("id") !=''){
			var index = $(".qual_FRSQWTSBHBWTRSFZZFM").attr("id").substring(10);
			var hasVal = false;
			// 图片必须上传验证

			if ($("#qual_upload_imageA_" + index).attr("href") == 'javascript:void(0);') {
				$("#qual_filePath_error_" + index).show();
				$("#qual_filePath_error_" + index).html("请上传文件!");
				checkFlage = false;
				hasVal = true;
			}

            if(!hasVal){
                // 被委托人身份证号,必须输入验证
                var reg = /^[a-zA-Z0-9 ]+$/;
                if($("#lincenceCode_" + index).val() == "" || $("#lincenceCode_" + index).val() == null) {
                     $("#qual_lincenceCode_error_" + index).html("请输入被委托人身份证号!");
                     checkFlage = false;
                }
                // 被委托人身份证号,字母和数字验证
                else if (!reg.test($("#lincenceCode_" + index).val())){
                    $("#qual_lincenceCode_error_" + index).html("被委托人身份证号只能输入字母和数字!");
                    checkFlage = false;
                }
                // 被委托人身份证正确性验证
                else if (!isIdCardNo($("#lincenceCode_" + index).val())) {
                    $("#qual_lincenceCode_error_" + index).html("请正确输入被委托人身份证号!");
                    checkFlage = false;
                }
                
                // 委托书有效期-开始日期必须输入验证
                if ($("#lincenceBtime_" + index).val() == "" || $("#lincenceBtime_" + index).val() == null) {
                     $("#qual_lincenceBtime_error_" + index).html("请选择起始时间!");
                     checkFlage = false;
                }

                // 长期有效checkbox没有选中的场合
                if (!$("#infinite_" + index).prop("checked")) {
                    // 身份证有效期-结束日期必须输入验证
                    if ($("#lincenceEtime_" + index).val() == "" || $("#lincenceEtime_" + index).val() == null) {
                         $("#qual_lincenceEtime_error_" + index).html("请选择结束时间!");
                         checkFlage = false;
                    }
                }
			}
		}
	}
	// 法人授权委托书(包含被委托人身份证正反面)入力项验证
	if ($(".qual_FRSFZZFM").css("display") != 'none') {
		if ($(".qual_FRSFZZFM").attr("id") != undefined && $(".qual_FRSFZZFM").attr("id") != null 
				&& $(".qual_FRSFZZFM").attr("id") !=''){
			var index = $(".qual_FRSFZZFM").attr("id").substring(10);
			var hasVal = false;
			// 图片必须上传验证

			if ($("#qual_upload_imageA_" + index).attr("href") == 'javascript:void(0);') {
				$("#qual_filePath_error_" + index).show();
				$("#qual_filePath_error_" + index).html("请上传文件!");
				checkFlage = false;
				hasVal = true;
			}
            if(!hasVal){
                // 被委托人身份证号,必须输入验证
                var reg = /^[a-zA-Z0-9 ]+$/;
                if($("#lincenceCode_" + index).val() == "" || $("#lincenceCode_" + index).val() == null) {
                     $("#qual_lincenceCode_error_" + index).html("请输入被委托人身份证号!");
                     checkFlage = false;
                }
                
                // 被委托人身份证号,字母和数字验证
                else if (!reg.test($("#lincenceCode_" + index).val())){
                    $("#qual_lincenceCode_error_" + index).html("被委托人身份证号只能输入字母和数字!");
                    checkFlage = false;
                }
                // 被委托人身份证正确性验证
                else if (!isIdCardNo($("#lincenceCode_" + index).val())) {
                    $("#qual_lincenceCode_error_" + index).html("请正确输入被委托人身份证号!");
                    checkFlage = false;
                }
                // 长期有效checkbox没有选中的场合
                if (!$("#infinite_" + index).prop("checked")) {
                    // 委托书有效期-结束日期必须输入验证
                    if ($("#lincenceEtime_" + index).val() == "" || $("#lincenceEtime_" + index).val() == null) {
                         $("#qual_lincenceEtime_error_" + index).html("请选择结束时间!");
                         checkFlage = false;
                    }
                }
			}
		}
	}
	// 法人授权委托书(包含被委托人身份证正反面)入力项验证
	if ($(".qual_FRSQWTS").css("display") != 'none') {
		if ($(".qual_FRSQWTS").attr("id") != undefined && $(".qual_FRSQWTS").attr("id") != null 
				&& $(".qual_FRSQWTS").attr("id") !=''){
			var index = $(".qual_FRSQWTS").attr("id").substring(10);
			var hasVal = false;
			// 图片必须上传验证

			if ($("#qual_upload_imageA_" + index).attr("href") == 'javascript:void(0);') {
				$("#qual_filePath_error_" + index).show();
				$("#qual_filePath_error_" + index).html("请上传文件!");
				checkFlage = false;
				hasVal = true;
			}

            if(!hasVal){
                // 被委托人身份证号,必须输入验证
                var reg = /^[a-zA-Z0-9 ]+$/;
                if($("#lincenceCode_" + index).val() == "" || $("#lincenceCode_" + index).val() == null) {
                     $("#qual_lincenceCode_error_" + index).html("请输入被委托人身份证号!");
                     checkFlage = false;
                }
                // 被委托人身份证号,字母和数字验证
                else if (!reg.test($("#lincenceCode_" + index).val())){
                    $("#qual_lincenceCode_error_" + index).html("被委托人身份证号只能输入字母和数字!");
                    checkFlage = false;
                }
                // 被委托人身份证正确性验证
                else if (!isIdCardNo($("#lincenceCode_" + index).val())) {
                    $("#qual_lincenceCode_error_" + index).html("请正确输入被委托人身份证号!");
                    checkFlage = false;
                }

                // 委托书有效期-开始日期必须输入验证
                if ($("#lincenceBtime_" + index).val() == "" || $("#lincenceBtime_" + index).val() == null) {
                     $("#qual_lincenceBtime_error_" + index).html("请选择起始时间!");
                     checkFlage = false;
                }

                // 长期有效checkbox没有选中的场合
                if (!$("#infinite_" + index).prop("checked")) {
                    // 委托书有效期-结束日期必须输入验证
                    if ($("#lincenceEtime_" + index).val() == "" || $("#lincenceEtime_" + index).val() == null) {
                         $("#qual_lincenceEtime_error_" + index).html("请选择结束时间!");
                         checkFlage = false;
                    }
                }
			}
		}
	}
	// 法人身份证正反面入力项验证
	if ($(".qual_FRSQWTSBWTRSFZ").css("display") != 'none') {
		if ($(".qual_FRSQWTSBWTRSFZ").attr("id") != undefined && $(".qual_FRSQWTSBWTRSFZ").attr("id") != null 
				&& $(".qual_FRSQWTSBWTRSFZ").attr("id") !=''){
			var index = $(".qual_FRSQWTSBWTRSFZ").attr("id").substring(10);
			var hasVal = false;
			// 图片必须上传验证
			if ($("#qual_upload_imageA_" + index).attr("href") == 'javascript:void(0);') {
				$("#qual_filePath_error_" + index).show();
				$("#qual_filePath_error_" + index).html("请上传文件!");
				checkFlage = false;
				hasVal = true;
			}
			if(!hasVal){
                // 法人身份证号,必须输入验证
                var reg = /^[a-zA-Z0-9 ]+$/;
                if ($("#lincenceCode_" + index).val() == "" || $("#lincenceCode_" + index).val() == null) {
                     $("#qual_lincenceCode_error_" + index).html("请输入法人身份证号!");
                     checkFlage = false;
                }
                // 法人身份证号,字母和数字验证
                else if (!reg.test($("#lincenceCode_" + index).val())){
                    $("#qual_lincenceCode_error_" + index).html("法人身份证号只能输入字母和数字!");
                    checkFlage = false;
                }
                // 法人身份证正确性验证
                else if (!isIdCardNo($("#lincenceCode_" + index).val())) {
                    $("#qual_lincenceCode_error_" + index).html("请正确输入法人身份证号!");
                    checkFlage = false;
                }
                if (!$("#infinite_" + index).prop("checked")) {
                    // 身份证有效期-结束日期必须输入验证
                    if ($("#lincenceEtime_" + index).val() == "" || $("#lincenceEtime_" + index).val() == null) {
                         $("#qual_lincenceEtime_error_" + index).html("请选择结束时间!");
                         checkFlage = false;
                    }
                }
			}
		}
	}
	return checkFlage;
}



//身份证号验证
function isIdCardNo(num) {
  var factorArr = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1);
  var parityBit = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
  var varArray = new Array();
  var intValue;
  var lngProduct = 0;
  var intCheckDigit;
  var intStrLen = num.length;
  var idNumber = num;
  // initialize
  if ((intStrLen != 15) && (intStrLen != 18)) {
      return false;
  }
  // check and set value
  for (i = 0; i < intStrLen; i++) {
      varArray[i] = idNumber.charAt(i);
      if ((varArray[i] < '0' || varArray[i] > '9') && (i != 17)) {
          return false;
      } else if (i < 17) {
          varArray[i] = varArray[i] * factorArr[i];
      }
  }
  if (intStrLen == 18) {
      //check date
      var date8 = idNumber.substring(6, 14);
      if (isDate8(date8) == false) {
          return false;
      }
      // calculate the sum of the products
      for (i = 0; i < 17; i++) {
          lngProduct = lngProduct + varArray[i];
      }
      // calculate the check digit
      intCheckDigit = parityBit[lngProduct % 11];
      // check last digit
      if (varArray[17] != intCheckDigit) {
          return false;
      }
  }
  else {        //length is 15
      //check date
      var date6 = idNumber.substring(6, 12);
      if (isDate6(date6) == false) {
          return false;
      }
  }
  return true;
}
$().ready(function(){
	if ($(".qual_FRSQWTSBHBWTRSFZZFM").attr("id") != undefined && $(".qual_FRSQWTSBHBWTRSFZZFM").attr("id") != null 
			&& $(".qual_FRSQWTSBHBWTRSFZZFM").attr("id") !=''){
		// 法人授权委托书(包含被委托人身份证正反面)入力项验证
		var index1 = $(".qual_FRSQWTSBHBWTRSFZZFM").attr("id").substring(10);
		
		$("#lincenceCode_" + index1).blur(function (){
			var reg = /^[a-zA-Z0-9 ]+$/;
			// 被委托人身份证号,必须输入验证
			if ($("#lincenceCode_" + index1).val() == "" || $("#lincenceCode_" + index1).val() == null) {
				 $("#qual_lincenceCode_error_" + index1).html("请输入被委托人身份证号!");
			}
			// 被委托人身份证号,字母和数字验证
			else if (!reg.test($("#lincenceCode_" + index1).val())){
	            $("#qual_lincenceCode_error_" + index1).html("被委托人身份证号只能输入字母和数字!");
	      	}
	      	// 被委托人身份证正确性验证
	        else if (!isIdCardNo($("#lincenceCode_" + index1).val())) {
	      		$("#qual_lincenceCode_error_" + index1).html("请正确输入被委托人身份证号!");
	            checkFlage = false;
	      	}
			
		})
		
		$("#lincenceCode_" + index1).focus(function (){ 
			$("#qual_lincenceCode_error_" + index1).html("");
		})
		
	  	$("#lincenceBtime_" + index1).blur(function (){
	  		// 委托书有效期-开始日期必须输入验证
	      	if ($("#lincenceBtime_" + index1).val() == "" || $("#lincenceBtime_" + index1).val() == null) {
				 $("#qual_lincenceBtime_error_" + index1).html("请选择起始时间!");
			}
		})
		
		$("#lincenceBtime_" + index1).focus(function (){
			$("#qual_lincenceBtime_error_" + index1).html("");
		})
		
		$("#lincenceEtime_" + index1).blur(function (){
			// 长期有效checkbox没有选中的场合
			if (!$("#infinite_" + index1).prop("checked")) {
				// 委托书有效期-结束日期必须输入验证
				if ($("#lincenceEtime_" + index1).val() == "" || $("#lincenceEtime_" + index1).val() == null) {
					 $("#qual_lincenceEtime_error_" + index1).html("请选择结束时间!");
				}
			}
		})
		
		$("#lincenceEtime_" + index1).focus(function (){
			$("#qual_lincenceEtime_error_" + index1).html("");
		})
	}
	
	if ($(".qual_FRSFZZFM").attr("id") != undefined && $(".qual_FRSFZZFM").attr("id") != null 
			&& $(".qual_FRSFZZFM").attr("id") !=''){
		// 法人授权委托书(包含被委托人身份证正反面)入力项验证
		var index2 = $(".qual_FRSFZZFM").attr("id").substring(10);
		
		$("#lincenceCode_" + index2).blur(function (){
			var reg = /^[a-zA-Z0-9 ]+$/;
			// 被委托人身份证号,必须输入验证
			if ($("#lincenceCode_" + index2).val() == "" || $("#lincenceCode_" + index2).val() == null) {
				 $("#qual_lincenceCode_error_" + index2).html("请输入被委托人身份证号!");
			}
			// 被委托人身份证号,字母和数字验证
			else if (!reg.test($("#lincenceCode_" + index2).val())){
	            $("#qual_lincenceCode_error_" + index2).html("被委托人身份证号只能输入字母和数字!");
	      	}
	      	// 被委托人身份证正确性验证
	        else if (!isIdCardNo($("#lincenceCode_" + index2).val())) {
	      		$("#qual_lincenceCode_error_" + index2).html("请正确输入被委托人身份证号!");
	            checkFlage = false;
	      	}
			
		})
		
		$("#lincenceCode_" + index2).focus(function (){
			$("#qual_lincenceCode_error_" + index2).html("");
		})
		
		$("#lincenceEtime_" + index2).blur(function (){	
			// 长期有效checkbox没有选中的场合
			if (!$("#infinite_" + index2).prop("checked")) {
				// 委托书有效期-结束日期必须输入验证
				if ($("#lincenceEtime_" + index2).val() == "" || $("#lincenceEtime_" + index2).val() == null) {
					 $("#qual_lincenceEtime_error_" + index2).html("请选择结束时间!");
				}
			}
		})
		
		$("#lincenceEtime_" + index2).focus(function (){
			$("#qual_lincenceEtime_error_" + index2).html("");
		})
	}
	
	if ($(".qual_FRSQWTS").attr("id") != undefined && $(".qual_FRSQWTS").attr("id") != null 
					&& $(".qual_FRSQWTS").attr("id") !=''){
		// 法人授权委托书(包含被委托人身份证正反面)入力项验证
		var index3 = $(".qual_FRSQWTS").attr("id").substring(10);
		
		$("#lincenceCode_" + index3).blur(function (){
			var reg = /^[a-zA-Z0-9 ]+$/;
			// 被委托人身份证号,必须输入验证
			if ($("#lincenceCode_" + index3).val() == "" || $("#lincenceCode_" + index3).val() == null) {
				 $("#qual_lincenceCode_error_" + index3).html("请输入被委托人身份证号!");
			}
			// 被委托人身份证号,字母和数字验证
			else if (!reg.test($("#lincenceCode_" + index3).val())){
	            $("#qual_lincenceCode_error_" + index3).html("被委托人身份证号只能输入字母和数字!");
          	}
          	// 被委托人身份证正确性验证
	        else if (!isIdCardNo($("#lincenceCode_" + index3).val())) {
          		$("#qual_lincenceCode_error_" + index3).html("请正确输入被委托人身份证号!");
	            checkFlage = false;
          	}
			
		})
		
		$("#lincenceCode_" + index3).focus(function (){
			$("#qual_lincenceCode_error_" + index3).html("");
		})
		
	  	$("#lincenceBtime_" + index3).blur(function (){
	  		// 委托书有效期-开始日期必须输入验证
	      	if ($("#lincenceBtime_" + index3).val() == "" || $("#lincenceBtime_" + index3).val() == null) {
				 $("#qual_lincenceBtime_error_" + index3).html("请选择起始时间!");
			}
		})
		
		$("#lincenceBtime_" + index3).focus(function (){
			$("#qual_lincenceBtime_error_" + index3).html("");
		})
		
		$("#lincenceEtime_" + index3).blur(function (){	
			// 长期有效checkbox没有选中的场合
			if (!$("#infinite_" + index3).prop("checked")) {
				// 委托书有效期-结束日期必须输入验证
				if ($("#lincenceEtime_" + index3).val() == "" || $("#lincenceEtime_" + index3).val() == null) {
					 $("#qual_lincenceEtime_error_" + index3).html("请选择结束时间!");
				}
			}
		})
		
		$("#lincenceEtime_" + index3).focus(function (){
			$("#qual_lincenceEtime_error_" + index3).html("");
		})
	}
	
	if ($(".qual_FRSQWTSBWTRSFZ").attr("id") != undefined && $(".qual_FRSQWTSBWTRSFZ").attr("id") != null 
					&& $(".qual_FRSQWTSBWTRSFZ").attr("id") !=''){
		// 法人身份证正反面入力项验证
		var index4 = $(".qual_FRSQWTSBWTRSFZ").attr("id").substring(10);
	
		$("#lincenceCode_" + index4).blur(function (){
			var reg = /^[a-zA-Z0-9 ]+$/;
			// 法人身份证号,必须输入验证
			if ($("#lincenceCode_" + index4).val() == "" || $("#lincenceCode_" + index4).val() == null) {
				 $("#qual_lincenceCode_error_" + index4).html("请输入法人身份证号!");
			}
			// 被委托人身份证号,字母和数字验证
			else if (!reg.test($("#lincenceCode_" + index4).val())){
	            $("#qual_lincenceCode_error_" + index4).html("法人身份证号只能输入字母和数字!");
          	}
          	// 法人身份证正确性验证
          	else if (!isIdCardNo($("#lincenceCode_" + index4).val())) {
          		$("#qual_lincenceCode_error_" + index4).html("请正确输入法人身份证号!");
	            checkFlage = false;
          	}
			
	  	})
	  	
	  	$("#lincenceCode_" + index4).focus(function (){
			$("#qual_lincenceCode_error_" + index4).html("");
		})
		
		$("#lincenceEtime_" + index4).blur(function (){	
			if (!$("#infinite_" + index4).prop("checked")) {
				// 身份证有效期-结束日期必须输入验证
				if ($("#lincenceEtime_" + index4).val() == "" || $("#lincenceEtime_" + index4).val() == null) {
					 $("#qual_lincenceEtime_error_" + index4).html("请选择结束时间!");
				}
			}
		})
		
		$("#lincenceEtime_" + index4).focus(function (){
			$("#qual_lincenceEtime_error_" + index4).html("");
		})
	}
})
