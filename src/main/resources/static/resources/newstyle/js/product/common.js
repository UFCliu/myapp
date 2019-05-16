//校验企业是否冻结
function validIsFreeze(){
	var flag = false;
	$.ecpost({
		url : "/product/validIsFreeze.ajax",
		async: false,
		success : function(msg) {
			flag = msg;
			if(!msg){
				openMessage("您的企业资质已经过期，请更新资质信息后再进行操作。");
			}
		}
	});
	return flag;
}

//重置按钮
function resetClick(){
	//供应商是否被冻结
	if(!validIsFreeze()){
		return false;
	}
	return true;
}

//校验商品是否冻结
function validProductIsFreeze(normDrugId){
	var flag = true;
	$.ecpost({
		url : "/normDrug/validProductIsFreeze.ajax",
		data: {normDrugId : normDrugId},
		async: false,
		success : function(msg) {
			flag = msg;
			/*if(!msg){
				openMessage("该商品资质已经过期，请更新资质信息后再进行操作。");
			}*/
		}
	});
	return flag;
}


/**
 * 上传图片增加删除功能  点击后清除上传信息
 * @param _this
 */
function delPicture(_this){
	var _parent = $(_this).parent();
	//删除图片信息
	$(_parent).children("img").attr("src","/resources/images/uploadNew.jpg");
	$(_parent).children("[name$='productPicValue']").attr("value","");
	$(_parent).children("[name$='id']").attr("value","");
	$(_parent).children("[name$='productPic']").attr("value","");
	$(_parent).children("[data-lightbox='image2']").attr("href","javascript:void(0);");
	
}