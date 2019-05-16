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
 		var page = $("#page").val();//当前页数
 		$.ecpost({
			url:'/member/purchaser/savePurchaserData.ajax',
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
