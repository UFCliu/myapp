$(function(){
	//初始化省
	addressAjax("proList.ajax",null,"s_province","prvoince");
	//初始化市
	addressAjax("cityList.ajax",$("#prvoince").val(),"s_city","city");
	//初始化区
	addressAjax("areaList.ajax",$("#city").val(),"s_area","area");
	
	var orgType= $("#m_orgType").val();
	if(orgType =="hospital" || orgType =="clinic"){
		$("#payof").show();
	}else {
		$("#payof").hide();	
	}

});


function onsel(val){
	if(val =="hospital" || val =="clinic"){
		if(val =="hospital"){
			$("#medicalLevelLi").show();
		} else {
			$("#medicalLevelLi").hide();
		}
		$("#payof").show();
	}else{
		$("#medicalLevelLi").hide();
		$("#payof").hide();	
	}
	if (val != '') {
		$.ecpost({
			url : '/member/fastApprove/childic.ajax',
			data : {
				code : val
			},
			success : function(result) {

				// 填充相应数据
				var s = "<label></label>";
				$.each(result, function(index, item) {
					if ((index) % 4 == 0 && index != 0) {
						s = s + '</br><label></label>';
					}
					s = s + '<input  type="checkbox" name="orgSubType" value="'
							+ item.code + '"/><span class="">' + item.name
							+ '</span> ';
				});

				$("#m_orgSubType").html(s);

			}
		});
	} else {
		$("#m_orgSubType").html("");
	}

}


//校验页面必须输入项内容
$("#myform").validate({
	invalidHandler: function(form, validator) {
		
    },
	onfocusout : function(element) {
		$(element).valid();
	},
 	submitHandler: function(form) {
 		var page = $("#page").val();//当前页数
 		$("#provinceName").val($("#s_province").find("option:selected").text());
 		$("#cityName").val($("#s_city").find("option:selected").text());
 		$("#areaName").val($("#s_area").find("option:selected").text());
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
		orgType:'required',
		orgSubType:'required',
		orgName : {
			required : true,
			remote : {
				url : '/member/fastApprove/validOrgName.ajax',
				type : "post",
				data : {
					"orgName" : function() {
						return $("#orgName").val();
					},
					"id" : function() {
						return $("#id").val();
					}
				}
			}
		},
		legalName:'required',
		provinceCode:'required',
		cityCode:'required',
		areaCode:'required',
		purchaserAddress:{required: true}
	}, 
    messages: {
		orgType:member_message_00033,//请选择企业类型
		orgSubType:member_message_00034,//请选择单位子类型
		orgName:{
       		required: member_message_00035,//请填写企业名称
       		remote:member_message_00036//该企业名称已经存在！
   		},
		legalName:member_message_00037,//请填写企业法人
		provinceCode:member_message_00038,//请选择省
		cityCode:member_message_00039,//请选择市
		areaCode:member_message_00040,//请选择区
		purchaserAddress: member_message_00041,//请输入单位详细地址
    }
	
});