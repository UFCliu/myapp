$(function(){
	//初始化省仓库地址信息
	addressAjax("proList.ajax",null,"s_addr_province","addrPrvoince");
	//初始化市仓库地址信息
	addressAjax("cityList.ajax",$("#addrPrvoince").val(),"s_addr_city","addrCity");
	//初始化区仓库地址信息
	addressAjax("areaList.ajax",$("#addrCity").val(),"s_addr_area","addrArea");
	
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
 		$("#stockAddressProName").val($("#s_addr_province").find("option:selected").text());
 		$("#stockAddressCityName").val($("#s_addr_city").find("option:selected").text());
 		$("#stockAddressAreaName").val($("#s_addr_area").find("option:selected").text());
 		$.ecpost({
			url:'/member/purchaser/savePurchaserData.ajax',
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
		orgTelNo:{required:true,telno:true},
		orgFax:{required:true,telno:true},
		orgContact:'required',
		orgContactCard:{required:true,isIdCardNo:false}, //测试缺陷 #3771暂时改成不校验 因为有台湾客户
		orgContactNo:{required:true,telno:true},
		orgContactMail:{required:true,email:true},
		orgWebsite:{webUrl:true},
		orgRegAddress:'required',
		postcode:{required:true,isZipCode:true},
		stockAddressProCode:'required',
		stockAddressCityCode:'required',
		stockAddressAreaCode:'required',
		stockAddressOther:'required'
	}, 
    messages: {
    	orgTelNo:{required:member_message_00043,//请填写固定电话
    		telno:member_message_00044},//请填写正确的固定电话,例如格式：18900000000或010-1234567,0101234567
    	orgFax:{required:member_message_00045,//请填写单位传真号码
    		telno:member_message_00046},//请填写正确的单位传真号码,例如格式：18900000000或010-1234567,0101234567
    	orgContact:member_message_00047,//请填写被委托人
    	orgContactCard:{required:member_message_00048,//请填写身份证号码
    		isIdCardNo:member_message_00049},//请填写正确的身份证号码
    	orgContactNo:{required:member_message_00050,//请填写手机号码
    		telno:member_message_00051},//输入手机号码格式不正确
    	orgContactMail:{required:member_message_00052,//请填写联系邮箱
    		email:member_message_00053},//请填写正确的联系邮箱
    	orgWebsite:{required:member_message_00054,//请填写单位注册网址
    		webUrl:member_message_00055},//网址格式：http://www.XXXXX.com
    	orgRegAddress:member_message_00056,//请填写注册地址
    	postcode:{required:member_message_00057,//请填写邮政编码
			isZipCode:member_message_00058},//请填写正确的邮政编码
		stockAddressProCode:member_message_00038,//请选择省
		stockAddressCityCode:member_message_00039,//请选择市
		stockAddressAreaCode:member_message_00040,//请选择区
		stockAddressOther:member_message_00059//请填写仓库地址的详细地址
    }
	
});