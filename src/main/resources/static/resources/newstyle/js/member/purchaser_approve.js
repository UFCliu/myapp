var isshow = false;
	
	$("#approveRemark").val("");
	var approveRemark = $("#approveRemark").val();//审核备注

		$(function(){
			
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
			
			
			$(".submitBtn").click(function(){
					var value = $("input[name='approveStateEnum']:checked").val();
					if(checkapproveStateEnum=='QC_YES'||checkapproveStateEnum=='QA_HEAD_YES'||checkapproveStateEnum=='OPERATION_YES'){
						var beginTime = $("#operateStartDate").val() ;
						var endTime = $("#operateEndDate").val() ;
						var enterpriseCode = $("#enterpriseCode").val();
						var contactPhone = $("#contactPhone").val();
						var sitesSearch = $("#sitesSearch").val();
						var siteInspection = $("#siteInspection").val();
					}
					
					if(approveState=='QA_HEAD_AUDIT'){
							var checkapproveStateEnum = $("#myform input[name='approveStateEnum']:checked").val();
							if(checkapproveStateEnum!='NO') {
								var enterpriseCodePre = $("#myform input[name='enterpriseCodePre']").val();
								var enterpriseCode = $("#myform input[name='enterpriseCode']").val();
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
										url: "/member/approve/checkEnterpriseCode.ajax?enterpriseCode=" + encodeURI(code),
										dataType: "json",
										cache: false,
										success: function(data) {
											if(data) {
												openMessage(member_message_00009);//企业编码重复！
												checkEnterpriseCode=true;
											}
										}
									});
								}
						} else {
							if(checkapproveStateEnum=='NO') {
								var approveRemark = $("#approveRemark").val();
								if(approveRemark == null ||approveRemark =='' ){
									openMessage(member_message_00010);//请输入审核意见
									return;
								}
								if(approveRemark.length >= 2000){
									openMessage(member_message_00011);//审核意见必须小于2000个字符
									return;
								}
							}
						}
					} else {
						var checkapproveStateEnum = $("#myform input[name='approveStateEnum']:checked").val();
						if(checkapproveStateEnum=='NO') {
								var approveRemark = $("#approveRemark").val();
								if(approveRemark == null ||approveRemark =='' ){
									openMessage(member_message_00010);//请输入审核意见
									return;
								}
								if(approveRemark.length >= 2000){
									openMessage(member_message_00011);//审核意见必须小于2000个字符
									return;
								}
							}
					}
					//设置审核级别
					if(approveState=='OPERATION_AUDIT') {
						$("#approvelevel").val("1");
					} else if (approveState=='QC_AUDIT') {
					   $("#approvelevel").val("2");
					} else if(approveState=='QA_HEAD_AUDIT'){
					   $("#approvelevel").val("3");
					}
					
					
					
					if(checkEnterpriseCode){
						return;
					}else{
						var memberLevel=$("#memberLevel").val();
						var userTypeEnum=$("#userTypeEnum").val();
						$.ecpost({
							url: "/member/approve/updateStatus.ajax?approvelevel="+$("#approvelevel").val()+"&memberLevel=" + encodeURI(memberLevel),
							data: $("#myform").serialize(),
							dataType: "json",
							cache: false,
							success: function(data) {
								if(data.msg == "success") {
									openHref(member_message_00005,"/member/approve/toList.jhtml?userType="+userTypeEnum );//审核完成！
								}
								
								else if(data.msg == "approveStateChange") {
									openMessage("审核状态已变更，请返回列表并刷新重试！");
								}
							}
						});
					}
			});
			
			$(".backBtn").click(function(){
				var userTypeEnum=$("#userTypeEnum").val();
				location.href = "/member/approve/toList.jhtml?userType="+userTypeEnum ;
			});
		});	
		
		$("#approveLog").click(function(){
        	if(isshow == false) {
				$("#appHis").show();
				isshow = true;
			} else {
				$("#appHis").hide();
				isshow = false;
			}
       	});
		function targetFun(){
			var userTypeEnum=$("#userTypeEnum").val();
			location.href = "/member/approve/toList.jhtml?userType="+userTypeEnum ;
		}
		function loadPercentage(percentage){
			$("#percentage").css("width",percentage);
		}
		
		// 资质下载
      function down(baseUrl, realfilePath, filePath){
    		if("" != filePath && filePath != null){
    		location.href=baseUrl + realfilePath + filePath;
    		}else{
        		openMessage(member_message_00006);//对不起，您还没有上传合同文件!
        	}
        };
        //日期控件
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
