var num = 0;
$(document).ready(function(){
	$("#provincesByChoose option[value='38000']").remove(); // [省市]下拉框去掉[全国]
	
	var tranRangeSpan = $("#tranRangeSpan").attr("title"); // 取得配送范围的字符串
	if(tranRangeSpan != null && tranRangeSpan != ''){ // 如果配送范围的字符串不为空
		if (tranRangeSpan.length >= 5) { // 如果配送范围的字符串长度大于50
			$("#tranRangeSpan").text(tranRangeSpan.substring(0, 5) + '...'); // 截取50位，其余省略
		}
		$("#tranRangeSpan").attr("title", tranRangeSpan); // 把原字符串放入title
		
		// 取得该供应商即存的配送范围list
		$.ajax({
			url : "/supplier/getTranAreaList.ajax",
			type: "post",
			async : false,
			data :{memberId:$("#supplierId").val()},
			success : function(data) {
				// 如果该供应商即存的配送范围是[全国]
				if(data.length == 1 && data[0].provinceId == -1){
					// 配送范围编辑画面的全国checkbox勾选
					$("#wholeCountry").attr("checked", "checked");
				} else {
					// 不是[全国]
					// 配送范围编辑画面的全国checkbox取消勾选
					$("#wholeCountry").removeAttr("checked");
					
					// 把即存的配送范围显示到配送范围编辑画面的配送范围table里
					var html = '';
					for(var i = 0; i < data.length; i++){
						html += '<tr class="delCl" provinceId="' + data[i].provinceId +'" cityId="' + data[i].cityId + '">';
						if(data[i].provinceId != "" && data[i].provinceId != null){
							html += '<th class="thS shengCss"><input style="width:70px;display:none" type="text" id="provinceId' + num + '" name ="tranAndSellRangeModelList[' + num + '].provinceId" value="' + data[i].provinceId + '" readonly/>'+
									'<p style="font-weight: normal;">'+ data[i].provinceName +'</p>'+
									'</th>';
						}else{
							html += '<th class="thS shengCss"><input style="width:70px;display:none" type="text" id="provinceId' + num + '" name ="tranAndSellRangeModelList[' + num + '].provinceId" value="" readonly/>'+
									'<p>-</p>'+
									'</th>';
						}
						
						if(data[i].cityId != "" && data[i].cityId != null){
							html += '<th class="thS shiCss"><input style="width:70px;display:none" type="text" id="cityId' + num + '" name ="tranAndSellRangeModelList[' + num + '].cityId" value="' + data[i].cityId + '" readonly/>'+
									'<p style="font-weight: normal;">'+ data[i].cityName +'</p>'+
									'</th>';
						}else{
							html += '<th class="thS shiCss"><input style="width:70px;display:none" type="text" id="cityId' + num + '" name ="tranAndSellRangeModelList[' + num + '].cityId" value="" readonly/>'+
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
			$("#tranRangeSpan").attr("title", "全国");
			$("#tranRangeSpan").text("全国");
			
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

// 点击配送范围编辑按钮
$("#editDistribution").click(function(){
	isChange= 1;
	// errorMsg[配送范围为不能为空]隐藏
	$("#tranRangeError").hide();
	// 弹出配送范围编辑页面
	showPopupById("viewModal1");
	
	// 如果克隆的全国checkbox存在
	if (document.getElementById("wholeCountryClone")) {
		$("#wholeCountry").attr("checked", "checked");
		
		// 勾选全国提示信息显示
		$("#tranRangeTableDiv2").css("display", "block");
	}  
	// 如果克隆的配送范围table存在
	else if (document.getElementById("tranRangeTableClone")) {
		$("#wholeCountry").removeAttr("checked");
		
		$("#tranRangeTable").remove();
		$("#tranRangeTableOldDiv").append($("#tranRangeTableClone").clone());
		$("#tranRangeTableOldDiv").find("table").attr("id", "tranRangeTable");
	} else {
		$("#wholeCountry").attr("checked", "checked");
		// 勾选全国提示信息显示
		$("#tranRangeTableDiv2").css("display", "block");
	}
	
	if($("#wholeCountry").attr("checked")=='checked'){
		wholeCountryChecked();
	} else {
		wholeCountryUnChecked();
	}
});

// 配送范围编辑画面点击关闭事件
function closePopupByIdNew(){
	closePopupById('viewModal1');
}

// 全国选择事件
function wholeCountryCh() {
	if($("#wholeCountry").attr("checked")=='checked'){
		wholeCountryChecked();

		// 勾选全国提示信息显示
		$("#tranRangeTableDiv2").css("display", "block");
	}else{
		wholeCountryUnChecked();

		// 提示信息显示
		var html = '<tr id="msgTr"><td>请选择配送范围!</td></tr>';
		$("#tranRangeTable").append(html);
	}
}

// 全国checkbox选中
function wholeCountryChecked () {
	$("#provincesByChoose").attr("disabled", "disabled");
	$("#provincesByChoose").css("background-color", "#F0F0F0");
	$("#provincesByChoose option:first").attr("selected", "selected");
	
	$("#cityByChoose").attr("disabled", "disabled");
	$("#cityByChoose").css("background-color", "#F0F0F0");
	$("#cityByChoose option:first").attr("selected", "selected");
	
	$("#addTranRange").attr("disabled", "disabled");
	$("#addTranRange").css("background-color", "#F0F0F0");
	
	// 配送范围table隐藏
	$("#tranRangeTableDiv1").css("display", "none");
	// table清空
	$("#tranRangeTable tbody").find("tr").each(function(){
		$(this).remove();
	})
}

// 全国checkbox未选中
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
		url = "/supplier/getCityByProvinces.ajax";
		$.ecpost({
			url : url,
			data : {
				parentId : provincesId
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
	}else{
		$("#cityByChoose").html(str);
	}
}

// 配送范围追加按钮事件
function addTranRangeBt() {
	
	var provincesId = $("#provincesByChoose option:selected").val(); // 取得选择的省ID
	var provincesName = $("#provincesByChoose option:selected").text(); // 取得选择的省名称
	
	var cityId = $("#cityByChoose option:selected").val(); // 取得选择的市ID
	var cityName = $("#cityByChoose option:selected").text(); // 取得选择的市名称
	
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
			
			// 如果没有选择市
			if (cityId == null || cityId == "") {
				// 如果选择的省和table里的省相同，则要添加的范围大于table里的范围，提示不能添加信息。
				if (provincesIdForTable == provincesId) {
					openMessage("该配送范围不能添加，原因：该配送范围已存在。");
					flag = false;
					return false;
				}
			} 
			// 如果有选择市
			else {
				// 如果选择的省和table里的省相同并且选择的市与table里的市相同，则该配送范围已存在，提示不能添加信息。
				if (provincesIdForTable == provincesId && cityIdForTable == cityId) {
					openMessage("该配送范围不能添加，原因：该配送范围已存在。");
					flag = false;
					return false;
				}
				
				// 如果选择的省和table里的省相同并且table里该数据没有市，则要添加的范围小于table里的范围，提示不能添加信息。
				if (provincesIdForTable == provincesId && (cityIdForTable == null || cityIdForTable == "")) {
					openMessage("该配送范围不能添加，原因：已存在范围大于该配送范围的数据。配送范围:[" + provincesNameForTable + "]");
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

	var html = '<tr class="delCl" provinceId="' + provincesId +'" cityId="' + cityId +'">';
	if(provincesId != "" && provincesId != null){
		html += '<th class="thS shengCss"><input style="width:70px;display:none" type="text" id="provinceId' + num + '" name ="tranAndSellRangeModelList[' + num + '].provinceId" value="' + provincesId + '" readonly/>'+
				'<p style="font-weight: normal;">'+ provincesName +'</p>'+
				'</th>';
	}else{
		html += '<th class="thS shengCss"><input style="width:70px;display:none" type="text" id="provinceId' + num + '" name ="tranAndSellRangeModelList[' + num + '].provinceId" value="" readonly/>'+
				'<p>-</p>'+
				'</th>';
	}
	
	if(cityId != "" && cityId != null){
		html += '<th class="thS shiCss"><input style="width:70px;display:none" type="text" id="cityId' + num + '" name ="tranAndSellRangeModelList[' + num + '].cityId" value="' + cityId + '" readonly/>'+
				'<p style="font-weight: normal;">'+ cityName +'</p>'+
				'</th>';
	}else{
		html += '<th class="thS shiCss"><input style="width:70px;display:none" type="text" id="cityId' + num + '" name ="tranAndSellRangeModelList[' + num + '].cityId" value="" readonly/>'+
				'<p>-</p>'+
				'</th>';
	}
	html += '<th class="thS"><a id="delete" href="javascript:void(0);" onclick="delete_tr(this)" style="font-weight: normal;">删除</a></th>';
	html += '</tr>';
	
	$("#tranRangeTable").append(html);
	
	num = num + 1;
}

// 配送范围删除事件
function delete_tr(t){
	// 取得要删除行的省id
	var shengId = $(t).parents('.delCl').find('.shengCss input').val();
	// 取得要删除行的市id
	var shiId = $(t).parents('.delCl').find('.shiCss input').val();
	
	$.ajax({
		url : "/supplier/deleteTranRange.ajax",
		type: "post",
		data : {
			provinceId : shengId,
			cityId : shiId,
			memberId : $("#memberId").val()
		},
		success : function(data) {
			if(data == true){
				$(t).parents('.delCl').remove();
			}else{
				openMessage("不可删除，存在该配送范围的商品！");
			}
		},
		error:function(){
			openMessage("网络异常或系统异常，请联系管理员！");
		}
	})
}

//配送范围确定事件
$("#queBtn").click(function(){
	
	$.ajax({
		url : "/supplier/savetranRangeInfo.ajax",
		type: "post",
		data : $("#tranAndSellRangeEditModel").serialize()+"&memberId="+$("#memberId").val(),
		success : function(data) {
			var result = data.result;
			if (result == 'nullError') {
				openMessage("配送范围不能为空，请选择全国或具体省市。");
			} else if (result == 'dataError') {
				openMessage("录入内容存在不整合数据，请重新再试。");
			} else {
				$("#tranRangeSpan").attr("title", result);
				if (result.length >= 5) {
					$("#tranRangeSpan").text(result.substring(0, 5) + '...');
				} else {
					$("#tranRangeSpan").text(result);
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
				openMessage("保存后配送范围会同步至供应商商品数据中！");
			}
		},
		error:function(){
			openMessage("网络异常或系统异常，请联系管理员！");
		}
	})
});

// 画面操作配送区域为非全国时，判断当前配送区域是否全覆盖销售区域
function compareArea(){
	var result;
	$.ajax({
		url : "/supplier/compareArea.ajax",
		type: "post",
		async : false,
		data : $("#tranAndSellRangeEditModel").serialize()+"&memberId="+$("#supplierId").val(),
		success : function(data) {
			var compareResult = data.result;
			if(compareResult == 'compareAreaFail'){
				var messageList = data.messageList;
				result = messageList;
				return;
			} else {
				result = new Array();
				return;
			}
		},
		error:function(){
			openMessage("网络异常或系统异常，请联系管理员！");
		}
	});
	return result;
}