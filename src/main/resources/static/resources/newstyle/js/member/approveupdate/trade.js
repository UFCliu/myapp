//验证是否选择生产经营范围
	function validRand(){
		var flag = true;
		if($("#markRange li").size() == 0 ){
			flag = false;
			openMessage(member_message_00022);//请选择生产经营范围
		}
		return flag;
	}

$(function(){

	//操作生产经营范围 
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
	
	//仓储类别
	$(".marketRangeAdd img").click(function(){
		marketAddInfo();
	});
	//采购权限
	$(".procscopeAdd img").click(function(){
		procscopeAddInfo();
	});
	// 商业关系
	$(".commercialAdd img").click(function(){
		commercialAddInfo();
	});
	//商业关系checkbox点击事件
	$(".relvalidId").click(function(){
		//取消选中时验证
		if($(this).attr("checked")!="checked"){
		var commId=$(this).next(".relvalidCommId").val();
		var sllerId=$(".relvalidSllerId").val();
		var mythis=$(this);
		$.ecpost({
			url:'/supplier/validrel.ajax',
			type:'post',
			async:false,
			data:{commId:commId,sllerId:sllerId},
			success:function(result){
				if (result=="NO"){
					openMessage("该商业关系已存在采购关系,不可取消选中！");
					mythis.attr("checked","checked");
				}
			}
		});
		}
		
	});
		
	
	//动态添加
    marketbindListener();
    procscopebindListener();
    commercialbindListener();
	//更换经营范围
	var memberId = $("#memberId").val();
	var subType = $("#orgSubType").val();
	$.ecpost({
		url:'/supplier/getMarketRange.ajax',
		data:{memberId:memberId,orgSubType:subType,type:"GYSDWLX_NEW"},
		success:function(result){
			var rightList = result.rightList;
			var leftList = result.leftList;
			$("#markRangeAll").html("");
			$("#markRange").html("");
			
			for(var i = 0 ; i < rightList.length; i++){
				$("#markRange").append('<li value="'+rightList[i].rangCode+'">'+rightList[i].rangName+'</li>');
			}
			for(var i = 0 ; i < leftList.length; i++){
				$("#markRangeAll").append('<li value="'+leftList[i].rangCode+'">'+leftList[i].rangName+'</li>');
			}
		}
	});
	

});
function validateMore(){
	var checkCommercial = $("#commRelList").val();
	var checkMarketNames= $("#stockTypeList").val();
	    var msg = "";  
        if(checkCommercial== undefined || checkCommercial=='')msg+=(member_message_00023) ;//请输入商业关系\r\n
        if(checkMarketNames== undefined || checkMarketNames=='')msg+=(member_message_00024) ;//请输入仓储类别\r\n
        if(msg!=""){
        	openMessage(msg);
       		return false;
        }
        return true ;
}
		
	
function marketbindListener(){
	$(".marketRangediv img").click(function(){
		$(this).parent().prev("input").val("");		
		$(this).parent().parent().hide(); 
	});
	$(".marketRangeDeldiv img").click(function(){
		if(valStockType($(this).next("input").val())){
			$(this).parent().prev("input").val("");		
			$(this).parent().parent().hide(); 
		}
	});
}
function valStockType(id){
	var returnFlag = true ;
	var supId = $("#id").val();
	if(id==null || id ==''){
		return returnFlag ;//没有验证值,可以删除操作
	}
	$.ajax({
		url:'/supplier/valStockType.ajax',
		type:'post',
		async:false,
		data:{stockId:id,supId:supId},
		success:function(result){
			if (result.msg =="true"){
				returnFlag = true ;
			}else{
				returnFlag = false ;
			}
		}
	});
	return returnFlag ;
}
var marketCount = 0; 
marketCount = $.trim($("#stockTypeListSize").val()) ;
function marketAddInfo(){ 
	marketCount++ ;
	$("#stockType").append('<li class="marketRangeDeldiv"><input type="text" id="stockTypeList" name="stockTypeList['+marketCount+'].typeName" value="" class="input_text fl required"  maxlength="20" /><span class="icon"><img src="/resources/newstyle/images/icon_del.gif" /></span><input type="hidden" name="stockTypeList['+marketCount+'].supplierId" value="${model.id?html}"/></li>');
	marketbindListener();
} 
function procscopebindListener(){
	$(".procscopediv img").click(function(){
		$(this).parent().prev("input").val("");		
		$(this).parent().parent().hide(); 
	});
	$(".procscopeDeldiv img").click(function(){
		if(valProcope($(this).next("input").val())){
			$(this).parent().prev("input").val("");		
			$(this).parent().parent().hide(); 
		}
	});
}
function valProcope(id){
	var returnFlag = true ;
	var supId = $("#id").val();
	if(id==null || id ==''){
		return returnFlag ;//没有验证值,可以删除操作
	}
	$.ajax({
		url:'/supplier/valProcope.ajax',
		type:'post',
		async:false,
		data:{procopeId:id,supId:supId},
		success:function(result){
			if (result.msg =="true"){
				returnFlag = true ;
			}else{
				returnFlag = false ;
			}	
		}				
	});
	return returnFlag ;
}
var procscoCount = 0; 
procscoCount = $.trim($("#procscopeListSize").val()) ;
function procscopeAddInfo(){ 
	procscoCount++ ;
	$("#procscope").append('<li class="procscopeDeldiv"><input type="text" id="procscopeList" name="procscopeList['+procscoCount+'].procscopeName" value="" class="input_text fl required"  maxlength="50" /><span class="icon"><img src="/resources/newstyle/images/icon_del.gif" /></span><input type="hidden" name="procscopeList['+procscoCount+'].supplierId" value="${model.id?html}"/></li>');
	procscopebindListener();
} 
function commercialbindListener(){
	$(".commercialdiv img").click(function(){
		$(this).parent().prev("input").val("");		
		$(this).parent().parent().hide(); 
	});
	$(".commercialDeldiv img").click(function(){
	var id = $(this).parent().next("input").val();
		if(valCommercial(id)){
			
			$(this).parent().prev("input").val("");				
			$(this).parent().parent().hide(); 
		}else{
			openMessage(member_message_00025);//该商业关系已经关联商品信息！不能删除！
		}
	});
}
function valCommercial(id){
	var returnFlag = true ;
	var supId = $("#id").val();
	if(id==null || id ==''){
		return returnFlag ;//没有验证值,可以删除操作
	}
	$.ecpost({
			url:'/supplier/valCommercial.ajax',
			type:'post',
			async:false,
			data:{commId:id,supId:supId},
			success:function(result){
				if (result.msg =="true"){
					returnFlag = true ;
				}else{
					returnFlag = false ;
				}
			}
		});
	return returnFlag ;
}
var commerCount = 0; 
commerCount = $.trim($("#commRelListSize").val()) ;
function commercialAddInfo(){ 
	commerCount++ ;
	$("#commercial").append('<li class="commercialDeldiv" ><input type="text" id="commRelList" name="commRelList['+commerCount+'].commercialName" value=""  class="input_text fl required" maxlength="30" /><span class="icon"><img src="/resources/newstyle/images/icon_del.gif" /></span><input type="hidden" name="commRelList['+commerCount+'].supplierId" value="'+$("#id").val()+'"/></li>');
	
	commercialbindListener();
} 
//验证商业关系
function checkRelation() {
	var returnFlag = true ;
	var ckbSelectedNumber = $("#commercial").find("input[type='checkbox']:checked").size();
	if(ckbSelectedNumber == 0){
		openMessage(member_message_00065);//请至少选择一个商业关系！
		returnFlag = false ;
		return returnFlag ;
	}	
	return returnFlag ;	
}

function testCommercial(){
	var flag = true;
	$("#commercial li .input_text").each(function(i) {
		if ($(this).parent().css("display") != "none") {
			var beforeData = $(this).val();
			var beforeIndex = i;
			$("#commercial li .input_text").each(function(j) {
				if ($(this).parent().css("display") != "none") {
					if (i != j) {
						if (beforeData == $(this).val()) {
							flag = false;
						}
					}
				}
			});
		}
	});
	if (flag == false) {
		openMessage(member_message_00026);//商业关系重复，请修改后再提交。
		return false;
	}
	return true;
}
function testStockType(){
	var flag = true;
	$("#stockType li .input_text").each(function(i) {
		if ($(this).parent().css("display") != "none") {
			var beforeData = $(this).val();
			var beforeIndex = i;
			$("#stockType li .input_text").each(function(j) {
				if ($(this).parent().css("display") != "none") {
					if (i != j) {
						if (beforeData == $(this).val()) {
							flag = false;
						}
					}
				}
			});
		}
	});
	if (flag == false) {
		openMessage(member_message_00027);//仓储类别重复，请修改后再提交
		return false;
	}
	return true;
}

function valieRand(){
	var returnFlag = true;
	$("#markRange li").each(function() {
		if ($(this).val() == $("#markRangeAll li.selected").val()) {
			returnFlag = false;
			return returnFlag;
		}
	});
	return returnFlag ;
}

//校验页面必须输入项内容
$("#myform").validate({
	invalidHandler: function(form, validator) {
		
    },
	onfocusout : function(element) {
		$(element).valid();
	},
 	submitHandler: function(form) {
 		$("#memberMarketRangeCodes").empty();
 		$("#markRange li").each(function(){
 			$("#memberMarketRangeCodes").append('<option selected="true" value="'+$(this).val()+'">'+$(this).val()+'</option>');
 		});
 		//验证商业关系
		if(!checkRelation()){
			return;
		}
		
		//验证企业编码
		if($("#sourcePage").val() == "SUPPLIER_UPDATE"){
			if(!checkenterpriseCode()){
				return;
			}
		}
		
		//验证仓储类别
		if($(".submitBtn").css("display") != "none"){
			var ckbSelectedNumber = $("#stockType").find("input[type='checkbox']:checked").size();
			if(ckbSelectedNumber == 0){
				openMessage("请至少选择一个仓储类别！");
				return;
			}
		}
 		//验证生产经营范围
		if(!validRand()){
			return ;
		}
		var page = $("#page").val();//当前页数
		$.ecpost({
			url:'/supplier/saveSupplierData.ajax',
			data:$("#myform").serialize()+"&page="+page,
			success:function(result){
				if(result.result  == "success"){
					$("#id").val(result.id);
					$("#modifyTimeMillis").val(result.modifyTimeMillis);
					$("#paramModifyTimeMillis").val(result.paramModifyTimeMillis);
					//openMessage(member_message_00001);//保存成功
					openHref(member_message_00001, "javascript:gotoPage("+page+")");
					isChange = 0;
				}else if(result.result  == "yetUpdate"){
					openHref(member_message_00029, "javascript:gotoPage("+page+")");
					//openMessage(member_message_00029);//保存失败，该数据已经被其他人更新，请刷新后重试。
				}else{
					openHref(member_message_00028, "javascript:gotoPage("+page+")");
					//openMessage(member_message_00028);//保存失败
				}
			}
		});
 		
	},
	rules: {
		'enterpriseParamList[0].paramValue':{required:true,checkAllNumber:true},
		marketRangeDetail:'required'
    },
    messages: {
    	'enterpriseParamList[0].paramValue':
    	  {required:member_message_00030,//请输入最小配送金额
    		checkAllNumber:member_message_00031},//只能输入最大长度9位的正整数
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
//校验企业编码
function checkenterpriseCode() {
	var flag = true;
	var enterpriseCodePre = $("#myform input[name='enterpriseCodePre']").val();
	var enterpriseCode = $("#myform input[name='enterpriseCode1']").val();
	var endCode = $("#myform input[name='endCode']").val();
	var id = $("#id").val();
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
			url: "/supplier/checkCode.ajax?enterpriseCode=" + encodeURI(code)+"&id="+encodeURI(id),
			dataType: "json",
			cache: false,
			success: function(data) {
				if(data) {
					openMessage(member_message_00009);//企业编码重复
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

