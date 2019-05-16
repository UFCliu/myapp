$(function(){
	//仓库地址省
	addressAjax("proList.ajax",null,"w_province","wprvoince");
	//初始化市
	addressAjax("cityList.ajax",$("#wprvoince").val(),"w_city","wcity");
	//初始化区
	addressAjax("areaList.ajax",$("#wcity").val(),"w_area","warea");
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
 		$("#wareProvincename").val($("#w_province").find("option:selected").text());
 		$("#wareCityname").val($("#w_city").find("option:selected").text());
 		$("#wareAreaname").val($("#w_area").find("option:selected").text());
		$.ecpost({
			url:'/supplier/saveSupplierData.ajax',
			data:$("#myform").serialize()+"&page="+page,
			success:function(result){
				if(result.result  == "success"){
					$("#id").val(result.id);
					$("#modifyTimeMillis").val(result.modifyTimeMillis);
					$("#paramModifyTimeMillis").val(result.paramModifyTimeMillis);
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
		orgTelNo:{required:true,telno:true},//固定电话
		orgFax:{required:true,telno:true},//单位传真号码
		orgContact:'required',//被委托人
		orgContactCard:{required:true,isIdCardNo:false},//身份证号码 测试缺陷 #3771暂时改成不校验 因为有台湾客户
		orgContactNo:{required:true,telno:true},//手机号码
		orgContactMail:{required:true,email:true},//联系邮箱
		orgWebsite:{webUrl:true},//单位网址
		orgRegAddress:'required',//注册地址
		postcode:{required:true,isZipCode:true},//邮政编码
		wareProvincecode:'required',//仓库地址省
		wareCitycode:'required',//仓库地址市
		wareAreacode:'required',//仓库地址区
		wareAddress:'required',//仓库地址详细地址
		foodSafeMemberName:'required',//食品安全人员姓名
		foodSafeMemberContactNo:{required:true,telno:true}//食品安人员联系方式
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
		wareProvincecode:member_message_00061,//请选择省
		wareCitycode:member_message_00062,//请选择市
		wareAreacode:member_message_00063,//请选择区
		wareAddress:member_message_00064,//请填写仓库地址的详细地址
		foodSafeMemberName:member_message_00067,//请填写食品安全人员姓名
		foodSafeMemberContactNo:{required:member_message_00068,//请填写食品安全人员联系方式
			telno:member_message_00069}//请填写正确的联系方式,例如格式：18900000000或010-1234567,0101234567
    }
	
});