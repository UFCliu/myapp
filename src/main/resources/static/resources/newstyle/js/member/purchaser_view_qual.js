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
					insertQual(data);

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
					insertQual(qualData);
				};
			});
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

function clearQualList(){
    $(".qual_item").remove();
}
