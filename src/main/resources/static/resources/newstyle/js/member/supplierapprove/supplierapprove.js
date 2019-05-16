!function(){
	var approveState =  $("#approveState").val();
	if(approveState=='QA_HEAD_AUDIT' || approveState=='OPERATION_AUDIT'||approveState=='QC_AUDIT'){
		$("input[name=approveStateEnum]:eq(0)").attr("checked",'checked');
		$("#remark").hide();
	}else{
		$("input[name=approveStateEnum]:eq(1)").attr("checked",'checked');
		$("#operateStartDate").attr("disabled", true);
		$("#operateEndDate").attr("disabled", true);
		$(".operateDate_em").hide();
		
	}
	//加载时间控件
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
	//审核历史是否显示
	var isshow = false;
	$("#approveLog").click(function(){
		if(isshow == false) {
			$("#appHis").show();
			isshow = true;
		} else {
			$("#appHis").hide();
			isshow = false;
		}
	});
}();



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
		$("#enterpriseCodePre").val("");
		$("#enterpriseCode").val("");
		$("#endCode").val("");
	}else {
		$("#approveRemarkSpan").show();
		$("#operateStartDate").attr("disabled", false);
		$("#operateEndDate").attr("disabled", false);
		$(".operateDate_em").show();
		$("#remark").hide();
		var enterpriseCodePreInit = $("#enterpriseCodePreInit").val();
		$("#enterpriseCodePre").val(enterpriseCodePreInit);
		var enterpriseCodeInit = $("#enterpriseCodeInit").val();
		$("#enterpriseCode").val(enterpriseCodeInit);
		var endCodeInit = $("#endCodeInit").val();
		$("#endCode").val(endCodeInit);
	
		
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
//校验企业编码
function checkenterpriseCode(){
	var flag = true;
	var enterpriseCodePre = $("#myform input[name='enterpriseCodePre']").val();
	var enterpriseCode = $("#myform input[name='enterpriseCode']").val();
	var endCode = $("#myform input[name='endCode']").val();
	var code = enterpriseCodePre + enterpriseCode + endCode;
	if ((enterpriseCode == null || enterpriseCode == '')
			&& (enterpriseCodePre == null || enterpriseCodePre == '')
			&& (endCode == null || endCode == '')) {
		openMessage(member_message_00007);//请输入企业编码
		return;
	} else if (code.length != 15) {
		openMessage(member_message_00008);//企业编码须为15位,请重新输入
		return;
	}
	var checkEnterpriseCode = false;
	// 如果现有企业编码为空,则为第一次审核通过,校验流水号重复
	// 校验企业编码是否重复

	if (code != null && code != "") {
		$.ecpost({
			url : "/member/approve/checkEnterpriseCode.ajax?enterpriseCode="
					+ encodeURI(code),
			dataType : "json",
			cache : false,
			success : function(data) {
				if (data) {
					openMessage(member_message_00009);//企业编码重复
					checkEnterpriseCode=true;
					flag = false;
				}
			}
		});
	}
	if(flag== false){
		return false;
	}
	return true;
}