var num = 0;
$(document).ready(function(){
	
	$("#provincesByChoose option[value='38000']").remove(); // [省市]下拉框去掉[全国]
	
	var sellRangeSpan = $("#sellRangeSpan").val(); // 取得销售区域的字符串
	if(sellRangeSpan != null && sellRangeSpan != ''){ // 如果销售区域的字符串不为空
		if (sellRangeSpan.length >= 25) { // 如果销售区域的字符串长度大于25
			$("#sellRangeSpan").val(sellRangeSpan.substring(0, 25) + '...'); // 截取25位，其余省略
		}
		$("#sellRangeSpan").attr("title", sellRangeSpan); // 把原字符串放入title
		
		var productId = -1;
		//var productId = $("#productId").val();
		// 取得该供应商即存的配送范围list
		$.ajax({
			url : "/agent/getAgentAreaList.ajax",
			type: "post",
			async : false,
			data :{
				userId : $("#userId").val()
			},
			success : function(data) {
				// 如果该供应商即存的配送范围是[全国]
				if(data.length > 0 && data[0].provinceId == -1){
					 //配送范围编辑画面的全国checkbox勾选
					$("#wholeCountry").attr("checked", "checked");
				}else {
					// 不是[全国]
					// 配送范围编辑画面的全国checkbox取消勾选
					$("#wholeCountry").removeAttr("checked");
					//$("#wholeCountry").attr("disabled", true);
					// 把即存的配送范围显示到配送范围编辑画面的配送范围table里
					var html = '';
					for(var i = 0; i < data.length; i++){
						html += '<tr class="delCl">';
						if(data[i].provinceId != "" && data[i].provinceId != null){
							html += '<th class="thS shengCss"><input style="width:70px;display:none" type="text" id="provinceId' + num + '" name ="tranAndSellRangeModelList[' + num + '].provinceId" value="' + data[i].provinceId + '" readonly/>'+
									'<p style="font-weight: normal;">'+ data[i].provinceName +'</p>'+
									'<input type="hidden" value="'+data[i].provinceName+'" name="tranAndSellRangeModelList['+num+'].provinceName">'+
									'</th>';
						}else{
							html += '<th class="thS shengCss"><input style="width:70px;display:none" type="text" id="provinceId' + num + '" name ="tranAndSellRangeModelList[' + num + '].provinceId" value="" readonly/>'+
									'<p>-</p>'+
									'</th>';
						}
						
						if(data[i].cityId != "" && data[i].cityId != null){
							html += '<th class="thS shiCss"><input style="width:70px;display:none" type="text" id="cityId' + num + '" name ="tranAndSellRangeModelList[' + num + '].cityId" value="' + data[i].cityId + '" readonly/>'+
									'<p style="font-weight: normal;">'+ data[i].cityName +'</p>'+
									'<input type="hidden" value="'+data[i].cityName+'" name="tranAndSellRangeModelList['+num+'].cityName">'+
									'</th>';
						}else{
							html += '<th class="thS shiCss"><input style="width:70px;display:none" type="text" id="cityId' + num + '" name ="tranAndSellRangeModelList[' + num + '].cityId" value="" readonly/>'+
									'<p>-</p>'+
									'</th>';
						}
						if(data[i].areaId != "" && data[i].areaId != null){
							html += '<th class="thS xianCss"><input style="width:70px;display:none" type="text" id="streetId' + num + '" name ="tranAndSellRangeModelList[' + num + '].streetId" value="'+data[i].areaId+'" readonly/>'+
									'<p style="font-weight: normal;">'+ data[i].areaName +'</p>'+
									'<input type="hidden" value="'+data[i].areaName+'" name="tranAndSellRangeModelList['+num+'].areaName">'+
									'</th>';
						}else{
							html += '<th class="thS xianCss"><input style="width:70px;display:none" type="text" id="streetId' + num + '" name ="tranAndSellRangeModelList[' + num + '].streetId" value="" readonly/>'+
									'<p>-</p>'+
									'</th>';
						}
						
						html += '<th class="thS"><a id="delete" href="javascript:void(0);" onclick="delete_tr(this)" style="font-weight: normal;">删除</a></th>';
						html += '</tr>';
						
						num = num + 1;
					}
					$("#tranRangeTable").append(html);
				}
			},
			error:function(){
				openMessage("网络异常或系统异常，请联系管理员！");
			}
		})
	} 
	// 如果配送范围的字符串为空
	else {
		if($("#wholeCountry").attr("checked")=='checked'){
			$("#sellRangeSpan").attr("title", "全国");
			$("#sellRangeSpan").val("全国");
			
			// 克隆的全国checkbox删除
			if (document.getElementById("wholeCountryClone")) {
				$("#wholeCountryClone").remove();
			}
			
			$("#tranRangeCloneForm").append($("#wholeCountry").clone()); // 克隆全国checkbox
			$("#tranRangeCloneForm").find("input").attr("id", "wholeCountryClone"); // 修改克隆的全国checkbox的id
		}
	}
	
	
	// 克隆的全国checkbox删除
	if (document.getElementById("wholeCountryClone")) {
		$("#wholeCountryClone").remove();
	}
	
	// 克隆的配送范围table删除
	if (document.getElementById("tranRangeTableClone")) {
		$("#tranRangeTableClone").remove();
	}
	
	// 如果配送范围编辑popup中，全国checkbox被选中，克隆全国checkbox。
	if ($("#wholeCountry").attr("checked")=='checked') {
		$("#tranRangeCloneForm").append($("#wholeCountry").clone()); // 克隆全国checkbox
		$("#tranRangeCloneForm").find("input").attr("id", "wholeCountryClone"); // 修改克隆的全国checkbox的id
	} else {
		// 克隆配送范围table
		$("#tranRangeCloneForm").append($("#tranRangeTable").clone()); // 克隆配送范围table
		$("#tranRangeCloneForm").find("table").attr("id", "tranRangeTableClone"); // 改克隆的配送范围table的id
	}
});

// 配送范围编辑画面点击关闭事件
function closePopupByIdNew(){
	closePopupById('viewModal1');
}

//全国选择事件
function wholeCountryCh() {
	if($("#wholeCountry").attr("checked")=='checked'){
		wholeCountryChecked();

		// 勾选全国提示信息显示
		$("#tranRangeTableDiv2").css("display", "block");
	}else{
		wholeCountryUnChecked();

		// 提示信息显示
		var html = '<tr id="msgTr"><td>请选择销售区域!</td></tr>';
		$("#tranRangeTable").append(html);
	}
}

//全国checkbox选中
function wholeCountryChecked () {
	$("#provincesByChoose").attr("disabled", "disabled");
	$("#provincesByChoose").css("background-color", "#F0F0F0");
	$("#provincesByChoose option:first").attr("selected", "selected");
	
	$("#cityByChoose").attr("disabled", "disabled");
	$("#cityByChoose").css("background-color", "#F0F0F0");
	$("#cityByChoose option:first").attr("selected", "selected");
	
	$("#countryByChoose").attr("disabled", "disabled");
	$("#countryByChoose").css("background-color", "#F0F0F0");
	$("#countryByChoose option:first").attr("selected", "selected");
	
	$("#addTranRange").attr("disabled", "disabled");
	$("#addTranRange").css("background-color", "#F0F0F0");
	
	// 配送范围table隐藏
	$("#tranRangeTableDiv1").css("display", "none");
	// table清空
	$("#tranRangeTable tbody").find("tr").each(function(){
		$(this).remove();
	})
}

//全国checkbox未选中
function wholeCountryUnChecked () {
	// 省/市 下拉框可用
	$("#provincesByChoose").removeAttr("disabled");
	$("#provincesByChoose").css("background-color", "#fff");
	$("#provincesByChoose option:first").attr("selected", "selected");
	
	// 市 下拉框可用
	$("#cityByChoose").removeAttr("disabled");
	$("#cityByChoose").css("background-color", "#fff");
	$("#cityByChoose option").remove();
	$("#cityByChoose").append("<option value='' selected=selected>请选择</option>");
	
	// 市 下拉框可用
	$("#countryByChoose").removeAttr("disabled");
	$("#countryByChoose").css("background-color", "#fff");
	$("#countryByChoose option").remove();
	$("#countryByChoose").append("<option value='' selected=selected>请选择</option>");
	
	// 追加按钮可用
	$("#addTranRange").removeAttr("disabled");
	$("#addTranRange").css("background-color", "#0a7");
	
	// 配送范围table显示
	$("#tranRangeTableDiv1").css("display", "block");

	// 勾选全国提示信息隐藏
	$("#tranRangeTableDiv2").css("display", "none");
}

//省选中事件
function provincesCh() {
	var provincesId = $("#provincesByChoose").val(); //取得选中的值
	var str = "";
	str += "<option value='' selected=selected>请选择</option>";
	if (provincesId != "") {
		url = "/product/getCityByProvinces.ajax";
		$.ecpost({
			url : url,
			data : {
				parentId : provincesId,
				sellerId : $("#supplierId").val()
			},
			dataType : "json",
			success : function(data) {
				$.each(data, function(index, item) {
					str += "<option value='" + item.id + "'>"
							+ item.name + "</option>";
				});
				$("#cityByChoose").html(str);
			}
		});
		$("#countryByChoose").html("<option value='' selected=selected>请选择</option>");
	}else{
		$("#cityByChoose").html(str);
		$("#countryByChoose").html(str);
	}
}

// 市选中事件
function citysCh() {
	var citysId = $("#cityByChoose").val(); //取得选中的值
	var str = "";
	str += "<option value='' selected=selected>请选择</option>";
	if (citysId != "") {
		url = "/product/getCountryByCity.ajax";
		$.ecpost({
			url : url,
			data : {
				parentId : citysId
			},
			dataType : "json",
			success : function(data) {
				$.each(data, function(index, item) {
					str += "<option value='" + item.id + "'>"
							+ item.name + "</option>";
				});
				$("#countryByChoose").html(str);
			}
		});
	}else{
		$("#countryByChoose").html(str);
	}
}

//销售区域追加按钮事件
function addTranRangeBt() {
	
	var provincesId = $("#provincesByChoose option:selected").val(); // 取得选择的省ID
	var provincesName = $("#provincesByChoose option:selected").text(); // 取得选择的省名称
	
	var cityId = $("#cityByChoose option:selected").val(); // 取得选择的市ID
	var cityName = $("#cityByChoose option:selected").text(); // 取得选择的市名称
	
	var countryId = $("#countryByChoose option:selected").val(); // 取得选择的县ID
	var countryName = $("#countryByChoose option:selected").text(); // 取得选择的县名称
	
	// 省/市是否选择验证
	if(provincesId == "" || provincesId == null){
		openMessage("请选择省/市！");
		return;
	}

	var lineNum = 0;
	var flag = true;
	$("#tranRangeTable").find("tr").each(function (){ // 按行循环表
		lineNum++;
		if (lineNum > 1) { // 从第一行开始check (跳过table第一行的标题)
			var provincesIdForTable = $(this).find(".shengCss").find("input").val(); // 取得table行的省ID
			var provincesNameForTable = $(this).find(".shengCss").find("p").text(); // 取得table行的省名称
			
			var cityIdForTable = $(this).find(".shiCss").find("input").val(); // 取得table行的市ID
			var cityNameForTable = $(this).find(".shiCss").find("p").text(); // 取得table行的市名称
			
			var countryIdForTable = $(this).find(".xianCss").find("input").val(); // 取得table行的县ID
			
			// 如果没有选择县/区
			if(countryId == null || countryId == ""){
				// 如果没有选择市
				if (cityId == null || cityId == "") {
					// 如果选择的省和table里的省相同，则要添加的范围大于table里的范围，提示不能添加信息。
					if (provincesIdForTable == provincesId) {
						openMessage("该销售区域不能添加，原因：该销售区域已存在。");
						flag = false;
						return false;
					}
				} 
				// 如果有选择市
				else {
					// 如果选择的省和table里的省相同并且选择的市与table里的市相同，则该配送范围已存在，提示不能添加信息。
					if (provincesIdForTable == provincesId && cityIdForTable == cityId) {
						openMessage("该销售区域不能添加，原因：该销售区域已存在。");
						flag = false;
						return false;
					}
					
					// 如果选择的省和table里的省相同并且table里该数据没有市，则要添加的范围小于table里的范围，提示不能添加信息。
					if (provincesIdForTable == provincesId && (cityIdForTable == null || cityIdForTable == "")) {
						openMessage("该销售区域不能添加，原因：已存在范围大于该销售区域的数据。销售区域:[" + provincesNameForTable + "]");
						flag = false;
						return false;
					}
				}
			}
			// 如果有选择县/区
			else {
				// 如果选择的省,市，县和table里的相同，则该配送范围已存在，提示不能添加信息。
				if (provincesIdForTable == provincesId && cityIdForTable == cityId && countryIdForTable == countryId){
					openMessage("该销售区域不能添加，原因：该销售区域已存在。");
					flag = false;
					return false;
				}
				
				// 如果选择的省,市和table里的相同并且table里该数据没有县，则要添加的范围小于table里的范围，提示不能添加信息。
				if(provincesIdForTable == provincesId && cityIdForTable == cityId && (countryIdForTable == null || countryIdForTable == "")){
					openMessage("该销售区域不能添加，原因：已存在范围大于该销售区域的数据。销售区域:[" + provincesNameForTable + ":" + cityNameForTable + "]");
					flag = false;
					return false;
				}
				
				// 如果选择的省和table里的省相同并且table里该数据没有市,县，则要添加的范围小于table里的范围，提示不能添加信息。
				if (provincesIdForTable == provincesId && (cityIdForTable == null || cityIdForTable == "") && (countryIdForTable == null || countryIdForTable == "")){
					openMessage("该销售区域不能添加，原因：已存在范围大于该销售区域的数据。销售区域:[" + provincesNameForTable + "]");
					flag = false;
					return false;
				}
			}
		}
	})

	if (flag == false) {
		return;
	}

	// 提示信息删除
	$("#msgTr").remove();

	var html = '<tr class="delCl">';
	if(provincesId != "" && provincesId != null){
		html += '<th class="thS shengCss"><input style="width:70px;display:none" type="text" id="provinceId' + num + '" name ="tranAndSellRangeModelList[' + num + '].provinceId" value="' + provincesId + '" readonly/>'+
				'<p style="font-weight: normal;">'+ provincesName +'</p>'+
				'<input type="hidden" value="'+provincesName+'" name="tranAndSellRangeModelList['+num+'].provinceName">'+
				'</th>';
	}else{
		html += '<th class="thS shengCss"><input style="width:70px;display:none" type="text" id="provinceId' + num + '" name ="tranAndSellRangeModelList[' + num + '].provinceId" value="" readonly/>'+
				'<p>-</p>'+
				'</th>';
	}
	
	if(cityId != "" && cityId != null){
		html += '<th class="thS shiCss"><input style="width:70px;display:none" type="text" id="cityId' + num + '" name ="tranAndSellRangeModelList[' + num + '].cityId" value="' + cityId + '" readonly/>'+
				'<p style="font-weight: normal;">'+ cityName +'</p>'+
				'<input type="hidden" value="'+cityName+'" name="tranAndSellRangeModelList['+num+'].cityName">'+
				'</th>';
	}else{
		html += '<th class="thS shiCss"><input style="width:70px;display:none" type="text" id="cityId' + num + '" name ="tranAndSellRangeModelList[' + num + '].cityId" value="" readonly/>'+
				'<p>-</p>'+
				'</th>';
	}
	
	if(countryId != "" && countryId != null){
		html += '<th class="thS xianCss"><input style="width:70px;display:none" type="text" id="streetId' + num + '" name ="tranAndSellRangeModelList[' + num + '].streetId" value="' + countryId + '" readonly/>'+
				'<p style="font-weight: normal;">'+ countryName +'</p>'+
				'<input type="hidden" value="'+countryName+'" name="tranAndSellRangeModelList['+num+'].areaName">'+
				'</th>';
	}else{
		html += '<th class="thS xianCss"><input style="width:70px;display:none" type="text" id="streetId' + num + '" name ="tranAndSellRangeModelList[' + num + '].streetId" value="" readonly/>'+
				'<p>-</p>'+
				'</th>';
	}
	
	html += '<th class="thS"><a id="delete" href="javascript:void(0);" onclick="delete_tr(this)" style="font-weight: normal;">删除</a></th>';
	html += '</tr>';
	
	$("#tranRangeTable").append(html);
	
	num = num + 1;
}

//销售区域删除事件
function delete_tr(t){
	$(t).parents('.delCl').remove();
}

//点击销售区域编辑按钮
$("#editDistribution").click(function(){
	// 弹出销售区域编辑页面
	showPopupById("viewModal1");
	
	// 如果克隆的全国checkbox存在
	if (document.getElementById("wholeCountryClone")) {
		//alert(1);
		$("#wholeCountry").attr("checked", "checked");
		
		// 勾选全国提示信息显示
		$("#tranRangeTableDiv2").css("display", "block");
	}  
	// 如果克隆的配送范围table存在
	else if (document.getElementById("tranRangeTableClone")) {
		//alert(2);
		$("#wholeCountry").removeAttr("checked");
		
		$("#tranRangeTable").remove();
		$("#tranRangeTableOldDiv").append($("#tranRangeTableClone").clone());
		$("#tranRangeTableOldDiv").find("table").attr("id", "tranRangeTable");
	} else {
		//alert(3);
		if ($("#tranRangeTableOldDiv tr").length <= 1) {
			$("#wholeCountry").attr("checked", "checked");
			// 勾选全国提示信息显示
			$("#tranRangeTableDiv2").css("display", "block");
		}
		
	}
	
	if($("#wholeCountry").attr("checked")=='checked'){
		wholeCountryChecked();
	} else {
		wholeCountryUnChecked();
	}
});

//销售区域确定事件
$("#queBtn").click(function(){	
	
	var checkResult = compareArea();
	if(checkResult != 'success'){
		openMessage("商品销售区域不在配送范围内,请重新选择。</br>配送范围：" + checkResult);
		return;
	}
	
	$.ajax({
		url : "/product/savetranRangeInfo.ajax",
		type: "post",
		data : $("#tranAndSellRangeEditModel").serialize(),
		success : function(data) {
			var result = data.result;
			if (result == 'nullError') {
				openMessage("销售区域不能为空，请选择全国或具体省市区县。");
			} else if (result == 'dataError') {
				openMessage("录入内容存在不整合数据，请重新再试。");
			} else {
				$("#sellRangeSpan").attr("title", result);
				if (result.length >= 12) {
					$("#sellRangeSpan").val(result.substring(0, 12) + '...');
				} else {
					$("#sellRangeSpan").val(result);
				}
				

				// 克隆的全国checkbox删除
				if (document.getElementById("wholeCountryClone")) {
					$("#wholeCountryClone").remove();
				}
				
				// 克隆的配送范围table删除
				if (document.getElementById("tranRangeTableClone")) {
					$("#tranRangeTableClone").remove();
				}
				
				// 如果配送范围编辑popup中，全国checkbox被选中，克隆全国checkbox。
				if ($("#wholeCountry").attr("checked")=='checked') {
					$("#tranRangeCloneForm").append($("#wholeCountry").clone()); // 克隆全国checkbox
					$("#tranRangeCloneForm").find("input").attr("id", "wholeCountryClone"); // 修改克隆的全国checkbox的id
				} else {
					// 克隆配送范围table
					$("#tranRangeCloneForm").append($("#tranRangeTable").clone()); // 克隆配送范围table
					$("#tranRangeCloneForm").find("table").attr("id", "tranRangeTableClone"); // 改克隆的配送范围table的id
				}
				closePopupById('viewModal1');
				//点击确定按钮后清空未关联列表
				$("#markRangeAll").html("");
			}
		},
		error:function(){
			openMessage("网络异常或系统异常，请联系管理员！");
		}
	})
});

//销售区域是否在配送区域内
function compareArea(){
	var result;
	$.ajax({
		url : "/product/compareArea.ajax",
		type: "post",
		async : false,
		data : $("#tranAndSellRangeEditModel").serialize()+"sellerId="+$("#supplierId").val(),
		success : function(data) {
			result = data.result;
			return;
		},
		error:function(){
			openMessage("网络异常或系统异常，请联系管理员！");
		}
	});
	return result;
}