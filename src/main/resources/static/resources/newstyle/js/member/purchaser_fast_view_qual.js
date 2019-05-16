$(function(){
    pageInit(); 
});
var enterpriseType= $("#ordinal").val();//物流商固定为5
var enterpriseId = $("#id").val();
var orgName = $("#orgName").val();
var quallist = [];
var qualDataList = [];
var standardMap = {};
var qual_szhy = false;
function pageInit(){
	getQualList();
    getQualStandard();
}
var tempQualData = {};
var qualcount = 0;

var frsqwtsbwtrsfzIndex = ''; // 法人授权委托书被委托人身份证的顺序
var frsqwtsbwtrsfzName = ''; // 法人授权委托书被委托人身份证的名称

var frsfzzfmIndex = ''; // 法人身份证正反面的显示顺序
var frsfzzfmName = ''; // 法人身份证正反面的的名称
    
var frsqwtsIndex = '';//法人授权委托书的显示顺序
var frsqwtsName = '';//法人授权委托书的名称

var frsqwtsbhbwtrsfzzfmIndex = ''; // 法人授权委托书(包含被委托人身份证正反面)的显示顺序
var frsqwtsbhbwtrsfzzfmName = ''; // 法人授权委托书(包含被委托人身份证正反面)的名称

var frsqwtsbwtrsfzShowFlag = 1; // 默认法人授权委托书被委托人身份证正反面不显示
var frsqwtsbhbwtrsfzzfmShowFlag = 1; // 默认法人授权委托书包含被委托人身份证正反面不显示
var frsqwtsShowFlag = 1; // 默认法人授权委托书不显示
var frsfzzfmShowFlag = 1; //默认法人身份证正反面不显示

function getQualData(){
	clearQualList();
	var chk_value = $("#orgSubTypeName").val();
	if (!chk_value || chk_value == "") {
		return;
	}
	var data = {};
	data.enterpriseType = enterpriseType;
	data.enterpriseId = enterpriseId;
	data.mainClass = $("#orgTypeName").val();
	data.subClass = chk_value;
	if ($("#isPayof").val()!=undefined)
		data.isPayoff = $("#isPayof").val();
	var arrayObject = new Array(); // 保存法人授权委托书(包含被委托人身份证正反面)和法人身份证正反面的信息用
	$.ajax({
		url : "/qual/getTemplate.ajax",
		type : "post",
		async : false,
		data : data,
		dataType : "json",
		cache : false,
		success : function(tmpdata) {
			$.each(tmpdata, function(index, dt) {
				var data = {};
				data.index = index;
				data.qual = dt;
				data.standard = standardMap[dt.qualId];
				/*
				 * if(data.standard.qualCode=='SWDJZ' ||
				 * data.standard.qualCode=='ZZJGDMZ'){ qual_szhy=false; }
				 */
				var isHave = false;
				$.each(qualDataList, function(qindex, qdt) {
					if (dt.id != qdt.qualId) {
						return;
					}
					isHave = true;
					if (dt.qualCode == "YYZZ" && qdt.szhy == 1) {
						qual_szhy = true;
					}
					var data = {};
					qualcount = qualcount + 1;
					data.index = qualcount;
					data.qual = qdt;
					data.standard = dt;
					if (!data.qual.qualName || data.qual.qualName == "null") {
						data.qual.qualName = data.standard.qualName;
					}
					data.qual.enterpriseType = enterpriseType;
					data.qual.enterpriseId = enterpriseId;
					data.qual.enterpriseName = orgName;
					data.hasRemove = dt.isRequired == 0;
					tempQualData = data;

				   if (dt.qualCode == 'FRSQWTSBWTRSFZ'){
		            	frsqwtsbwtrsfzShowFlag = 0; // 法人授权委托书被委托人身份证正反面显示
		            	frsqwtsbwtrsfzIndex = qualcount; // 设定显示顺序
		            	frsqwtsbwtrsfzName = dt.qualName; // 设定名称
		            	arrayObject.push(data); // 加入数组
		            }else if (dt.qualCode == 'FRSQWTS'){
		            	frsqwtsShowFlag = 0; // 法人授权委托书显示
		            	frsqwtsIndex = qualcount; // 设定显示顺序
		            	frsqwtsName = dt.qualName; // 设定名称
		            	arrayObject.push(data); // 加入数组
		            }else if (dt.qualCode == 'FRSFZZFM'){
		            	frsfzzfmShowFlag = 0; // 法人身份证正反面显示
		            	frsfzzfmIndex = qualcount; // 设定显示顺序
		            	frsfzzfmName = dt.qualName; // 设定名称
		            	arrayObject.push(data); // 加入数组
		            }else if (dt.qualCode == 'FRSQWTSBHBWTRSFZZFM'){
		            	frsqwtsbhbwtrsfzzfmShowFlag = 0; // 法人授权委托书包含被委托人身份证正反面显示
		            	frsqwtsbhbwtrsfzzfmIndex = qualcount; // 设定显示顺序
		            	frsqwtsbhbwtrsfzzfmName = dt.qualName; // 设定名称
		            	arrayObject.push(data); // 加入数组
		            }else {	
		            	insertQual(data);
		            }

				});

				if (!isHave && dt.isRequired == 1 && dt.qualCode != "YYZZNB") {
					var qualStandardId = dt.id;
					var qualData = {};
					qualcount = qualcount + 1;
					qualData.index = qualcount;
					qualData.standard = dt;
					qualData.qual = {};
					qualData.qual.enterpriseType = enterpriseType;
					qualData.qual.enterpriseId = enterpriseId;
					qualData.qual.enterpriseName = orgName;
					qualData.qual.qualId = qualStandardId;
					qualData.qual.qualName = qualData.standard.qualName;
					qualData.hasRemove = false;
					
					if (dt.qualCode == 'FRSQWTSBWTRSFZ'){
		            	frsqwtsbwtrsfzIndex = qualcount;
		            	frsqwtsbwtrsfzName = dt.qualName;
		            	arrayObject.push(qualData);
		            }else if (dt.qualCode == 'FRSQWTS'){
		            	frsqwtsIndex = qualcount;
		            	frsqwtsName = dt.qualName;
		            	arrayObject.push(qualData);
		            }else if (dt.qualCode == 'FRSFZZFM'){
		            	frsfzzfmIndex = qualcount;
		            	frsfzzfmName = dt.qualName;
		            	arrayObject.push(qualData);
		            }else if (dt.qualCode == 'FRSQWTSBHBWTRSFZZFM'){
		            	frsqwtsbhbwtrsfzzfmIndex = qualcount;
		            	frsqwtsbhbwtrsfzzfmName = dt.qualName;
		            	arrayObject.push(qualData);
		            }else {
		            	insertQual(qualData);
		            }
				};
			});
			if (arrayObject.length == 1){
	        	insertQual(arrayObject[0]);
	        } else if (arrayObject.length > 1){
	        	var showQual = "";
	         	if(frsqwtsbhbwtrsfzzfmShowFlag == 0){
	         		showQual = "FRSQWTSBHBWTRSFZZFM";
	         	}else if(frsfzzfmShowFlag == 0){
	         		showQual = "FRSFZZFM";
	         	}else if(frsqwtsShowFlag == 0){
	         		showQual = "FRSQWTS";
	         	}else{
	         		showQual = "FRSQWTSBHBWTRSFZZFM";
	         	}
	        	for (var index = 0; index < arrayObject.length; index++){
	        		if (arrayObject[index].standard.qualCode == 'FRSQWTSBHBWTRSFZZFM'){//法人授权委托书包含被委托人身份证正反面
	        			arrayObject[index].frsqwtsbhbwtrsfzzfmIndex = frsqwtsbhbwtrsfzzfmIndex;
	        			arrayObject[index].frsqwtsbhbwtrsfzzfmName = frsqwtsbhbwtrsfzzfmName;
	        			if(showQual == "FRSQWTSBHBWTRSFZZFM" ){
	        				arrayObject[index].showFlage = 0;
	        			}else{
	        				arrayObject[index].showFlage = 1;
	        			}
	        		}
	        		if (arrayObject[index].standard.qualCode == 'FRSFZZFM'){//法人身份证正反面
	        			arrayObject[index].frsfzzfmIndex = frsfzzfmIndex;
	        			arrayObject[index].frsfzzfmName = frsfzzfmName;
	        			if(showQual == "FRSFZZFM" ){
	        				arrayObject[index].showFlage = 0;
	        			}else{
	        				arrayObject[index].showFlage = 1;
	        			}     		
	        		}
	        		if (arrayObject[index].standard.qualCode == 'FRSQWTS'){//法人授权委托书
	        			arrayObject[index].frsqwtsIndex = frsqwtsIndex;
	        			arrayObject[index].frsqwtsName = frsqwtsName;
	         			if(showQual == "FRSQWTS" ){
	        				arrayObject[index].showFlage = 0;
	        			}else{
	        				arrayObject[index].showFlage = 1;
	        			}
	        		}
	        		if (arrayObject[index].standard.qualCode == 'FRSQWTSBWTRSFZ'){//法人授权委托书被委托人身份证
	        			arrayObject[index].frsqwtsbwtrsfzIndex = frsqwtsbwtrsfzIndex;
	        			arrayObject[index].frsqwtsbwtrsfzName = frsqwtsbwtrsfzName;
	        			if(showQual == "FRSQWTS" ){
	        				arrayObject[index].showFlage = 0;
	        			}else{
	        				arrayObject[index].showFlage = 1;
	        			}
	        		}
	        		insertQualNew(arrayObject[index]);
	        	}
	        }
		}
	});
}

function getQualStandard(){
    
    // var enterpriseId = ${logisticsAddModel.logisticsModel.id};
    var url ="/qual/standardlist.ajax?enterpriseType=" + enterpriseType + "&enterpriseId=" + enterpriseId;
    $.getJSON(url).success(function(data){
        $("#choose_qualStandard").html("");
        $.each(data,function(index,dt){
            standardMap[dt.id] = dt;
            var op = "<option value='" + dt.id + "'>" + dt.qualName + "</option>";
            $("#choose_qualStandard").append(op);
        });
        getQualData();
    });
}

function getQualList(){
	 var chk_value = $("#orgSubTypeName").val();
	if (!chk_value || chk_value == "") {
		return;
	}
	var Qualdata = {};
	Qualdata.enterpriseType = enterpriseType;
	Qualdata.enterpriseId = enterpriseId;
	Qualdata.mainClass = $("#orgTypeName").val();
	Qualdata.subClass = chk_value;
	$.ajax({
		url : "/qual/quallist.ajax",
		type : "post",
		async : false,
		data : Qualdata,
		dataType : "json",
		cache : false,
		success : function(rtndata) {
			qualDataList = rtndata;
		}
	});
}
function insertQual(qualData){
    var bt=baidu.template;
    bt.LEFT_DELIMITER='{%';
    bt.RIGHT_DELIMITER='%}';
    qualcount = qualData.index;
    var html=bt('qual_template',qualData);
    $(html).insertBefore($("#qual_add"));
    //$("#qual_list").append(html);
    //var element_id = "#qual_item_" + qualData.index;
    //$(element_id).data("qualData", qualData);
}

function insertQualNew(qualData){
	var bt = baidu.template;
	bt.LEFT_DELIMITER = '{%';
	bt.RIGHT_DELIMITER = '%}';
	qualcount = qualData.index;
	var html = bt('qual_template2', qualData);
	$(html).insertBefore($("#qual_add"));
}

//法人授权委托书(包含被委托人身份证正反面)和法人身份证正反面的radio点击事件
function showFun(hideIndex, showIndex, checkRadionId, uncheckRadionId,isShow){
	$("#" + checkRadionId).attr("checked", "checked"); // 点击一个radio时，把另一个radio设成选中
	$("#" + uncheckRadionId).removeAttr("checked"); // 点击一个radio时，把点击的radio设成未选中
	$("#qual_item_" + hideIndex).hide(); 
	$("#qual_item_" + showIndex).show();
	if(isShow == "1"){
		$(".qual_FRSQWTSBWTRSFZ").show();
	}else{
		$(".qual_FRSQWTSBWTRSFZ").hide();
	}
  }

function clearQualList(){
    $(".qual_item").remove();
}
