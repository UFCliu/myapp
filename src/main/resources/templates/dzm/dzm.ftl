<!DOCTYPE html>
<html>
	<head>
		<meta charset="GBK">
		<title>大掌门</title>
		<link href="../css/head.css" rel="stylesheet">
		<link href="../css/table.css" rel="stylesheet">
		<link href="../css/tab.css" rel="stylesheet">
		<#include "/common/include_newstyle_css.ftl" >
		<#include "/common/icon.ftl" >
	</head>
	<body>
	
	<div class="subpage_box" style="width:1400px;">
		<h1 class="subpage_title"><span>&nbsp;</span>大掌门武林谱
		</h1>
	</div>

	<div class="tab_table">
	    <ul class="tab_ul">
	        <li  class="active">
	            <a class="active_a" onclick="queryData('shengxing_content','shengxingQuery')">升星</a>
	        </li>
	        <li>
	            <a class="active_a" onclick="queryData('zhenqi_content','zhenqiQuery')">真气</a>
	        </li>
	        <li>
	            <a class="active_a" onclick="queryData('tupo_content','tupoQuery')">突破</a>
	        </li>
	        <li>
	            <a class="active_a" onclick="queryData('qibao_content','qibaoQuery')">奇宝</a>
	        </li>
	        <li>
	            <a class="active_a" onclick="queryData('dunJiaFu_content','dunJiaFuQuery')">遁甲符</a>
	        </li>
	        <li>
	            <a class="active_a" onclick="queryData('qishi_content','qishiQuery')">奇石</a>
	        </li>
	    </ul>
	    <div class="tab_content">
			
			<#include "/dzm/shengxing.ftl" >  
			
			<#include "/dzm/zhenqi.ftl" >
			
			<#include "/dzm/tupo.ftl" >
			
			<#include "/dzm/qibao.ftl" >
			
			<#include "/dzm/dunjiafu.ftl" >
		
			<#include "/dzm/qishi.ftl" >
			
	    </div>
	</div>
		
		
	</body>
<#include "/common/include_newstyle_js.ftl" >  
<script language="javascript" type="text/javascript" src="../My97DatePicker/WdatePicker.js"></script>
<script type="text/javascript">
	$(function(){
		
		$(".tab_table li").click(function(){
	        $(".tab_table li").removeClass("active");
	        $(this).addClass("active");
	    })
	    
		$("#tupoQuery").click(function(){
			$("#tupo_list").find('tr[id^=tr_]').remove();
			$.ecpost({
			   url: "tupoQuery",
			   data: $("#tupoForm").serializeArray(),
			   success: function(data){
			   		var total = 0;
			   		$.each(data, function(i, n) {
					   	$("#tupo_list").append("<tr id='tr_"+i+"'><td height='20'>"+n.tupoNumber+"</td><td height='20'>"+n.tupoAmount+"</td></tr>");
					   	total += n.tupoAmount;
					});
					if (total > 0) {
						$("#total").html(total);
						$("#total_div").show();
					} else {
						$("#tupo_list").append("<tr id='tr_none'><td height='20' colspan='2'>暂无数据！！！</td></tr>");
						$("#total_div").hide();
					}
			   },
			   berror:function(){
			   		openMessage("系统出现异常！！！");
			   }
			});
		});
		
		$("#zhenqiQuery").click(function(){
			$("#zhenqi_list").find('tr[id^=tr_]').remove();
			$.ecpost({
			   url: "zhenqiQuery",
			   data: $("#zhenqiForm").serializeArray(),
			   success: function(data){
			   		$.each(data, function(i, n) {
					   	$("#zhenqi_list").append("<tr id='tr_"+i+"'><td height='20'>"+n.name+"</td><td height='20'>"+n.remark+"</td></tr>");
					});
					if (data.size == 0 || data=='') {
						$("#zhenqi_list").append("<tr id='tr_none'><td height='20' colspan='2'>暂无数据！！！</td></tr>");
					} 
			   },
			   berror:function(){
			   		openMessage("系统出现异常！！！");
			   }
			});
		});
		
		$("#qibaoQuery").click(function(){
			$("#qibao_list").find('tr[id^=tr_]').remove();
			$.ecpost({
			   url: "qibaoQuery",
			   data: $("#qibaoForm").serializeArray(),
			   success: function(data){
			   		$.each(data, function(i, n) {
			   			var qibao_tr;
			   			if (n.mainPropertyName=='攻') {
			   				qibao_tr = "<tr id='tr_"+i+"'><td height='20' style='background:lightgray;'>"+n.name+"</td>";
			   			} else if (n.mainPropertyName=='防') {
			   				qibao_tr = "<tr id='tr_"+i+"'><td height='20' style='background:lightgreen;'>"+n.name+"</td>";
			   			} else if (n.mainPropertyName=='血') {
			   				qibao_tr = "<tr id='tr_"+i+"'><td height='20' style='background:purple;'>"+n.name+"</td>";
			   			} else if (n.mainPropertyName=='内') {
			   				qibao_tr = "<tr id='tr_"+i+"'><td height='20' style='background:lightblue;'>"+n.name+"</td>";
			   			} else {
			   				qibao_tr = "<tr id='tr_"+i+"'><td height='20'>"+n.name+"</td>";
			   			}
			   			
			   			var mainProperty = n.mainProperty;
			   			if (mainProperty < 10) {
			   				mainProperty += '%';
			   			}
			   			qibao_tr += "<td height='20' width='60'>"+n.mainPropertyName+"</td><td height='20'>"+mainProperty+"</td>";
			   			qibao_tr += "<td height='20' width='60'>"+n.secondaryPropertyName1+"</td><td height='20'>"+n.secondaryProperty1+"</td>";
			   			qibao_tr += "<td height='20' width='60'>"+n.secondaryPropertyName2+"</td><td height='20'>"+n.secondaryProperty2+"</td>";
			   			qibao_tr += "<td height='20'>"+n.secondLevelPropertyName+"</td><td height='20'>"+n.secondLevelProperty+"</td>";
			   			qibao_tr += "</tr>";
					   	$("#qibao_list").append(qibao_tr);
					});
					if (data.size == 0 || data=='') {
						$("#qibao_list").append("<tr id='tr_none'><td height='20' colspan='2'>暂无数据！！！</td></tr>");
					} 
			   },
			   berror:function(){
			   		openMessage("系统出现异常！！！");
			   }
			});
		});
		
		$("#dunJiaFuQuery").click(function(){
			$("#dunJiaFu_list").find('tr[id^=tr_]').remove();
			$.ecpost({
			   url: "dunJiaFuQuery",
			   data: $("#dunJiaFuForm").serializeArray(),
			   success: function(data){
			   		$.each(data, function(i, n) {
			   			var qibao_tr;
			   			if (n.mainPropertyName=='攻') {
			   				qibao_tr = "<tr id='tr_"+i+"'><td height='20' style='background:lightgray;'>"+n.name+"</td>";
			   			} else if (n.mainPropertyName=='防') {
			   				qibao_tr = "<tr id='tr_"+i+"'><td height='20' style='background:lightgreen;'>"+n.name+"</td>";
			   			} else if (n.mainPropertyName=='血') {
			   				qibao_tr = "<tr id='tr_"+i+"'><td height='20' style='background:purple;'>"+n.name+"</td>";
			   			} else if (n.mainPropertyName=='内') {
			   				qibao_tr = "<tr id='tr_"+i+"'><td height='20' style='background:lightblue;'>"+n.name+"</td>";
			   			} else {
			   				qibao_tr = "<tr id='tr_"+i+"'><td height='20'>"+n.name+"</td>";
			   			}
			   			
			   			var mainProperty = n.mainProperty;
			   			if (mainProperty < 10) {
			   				mainProperty += '%';
			   			}
			   			qibao_tr += "<td height='20' width='60'>"+n.mainPropertyName+"</td><td height='20'>"+mainProperty+"</td>";
			   			qibao_tr += "<td height='20' width='60'>"+n.secondaryPropertyName+"</td><td height='20'>"+n.secondaryProperty+"</td>";
			   			qibao_tr += "</tr>";
					   	$("#dunJiaFu_list").append(qibao_tr);
					});
					if (data.size == 0 || data=='') {
						$("#dunJiaFu_list").append("<tr id='tr_none'><td height='20' colspan='2'>暂无数据！！！</td></tr>");
					} 
			   },
			   berror:function(){
			   		openMessage("系统出现异常！！！");
			   }
			});
		});
		
		$("#shengxingQuery").click(function(){
			$("#shengxing_list").find('tr[id^=tr_]').remove();
			$.ecpost({
			   url: "shengxingQuery",
			   data: $("#shengxingForm").serializeArray(),
			   success: function(data){
			   		//alert(data.pozhao);
			   		var tr_str = "<tr id='tr_asdasd'>";
					tr_str += "<td height='20'>"+data.shanbi+"</td><td height='20'>"+data.mingzhong+"</td>";
					tr_str += "<td height='20'>"+data.gedang+"</td><td height='20'>"+data.pozhao+"</td>";
					tr_str += "<td height='20'>"+data.baoji+"</td><td height='20'>"+data.fangbao+"</td>";
					tr_str += "</tr>";
					
					$("#shengxing_list").append(tr_str);
					
					if (data.size == 0) {
						$("#shengxing_list").append("<tr id='tr_none'><td height='20' colspan='2'>暂无数据！！！</td></tr>");
					} 
			   },
			   berror:function(){
			   		openMessage("系统出现异常！！！");
			   }
			});
		});
		
		$("#qishiQuery").click(function(){
			$("#qishi_list").find('tr[id^=tr_]').remove();
			$.ecpost({
			   url: "qiShiQuery",
			   data: $("#qishiForm").serializeArray(),
			   success: function(data){
			   		$.each(data, function(i, n) {
			   			var qishi_tr;
			   			if (n.color=='白') {
			   				qishi_tr = "<tr id='tr_"+i+"'><td height='20'>"+n.name+"</td>";
			   			} else if (n.color=='黄') {
			   				qishi_tr = "<tr id='tr_"+i+"'><td height='20' style='background:yellow;'>"+n.name+"</td>";
			   			} else if (n.color=='红') {
			   				qishi_tr = "<tr id='tr_"+i+"'><td height='20' style='background:red;'>"+n.name+"</td>";
			   			} else if (n.color=='绿') {
			   				qishi_tr = "<tr id='tr_"+i+"'><td height='20' style='background:green;'>"+n.name+"</td>";
			   			} else {
			   				qishi_tr = "<tr id='tr_"+i+"'><td height='20'>"+n.name+"</td>";
			   			}
			   			
			   			var mainProperty = n.mainProperty;
			   			if (mainProperty < 10) {
			   				mainProperty += '%';
			   			}
			   			qishi_tr += "<td height='20' width='60'>"+n.property+"</td><td height='20'>"+n.firstLevel+"</td>";
			   			qishi_tr += "<td height='20' width='60'>"+n.secondLevel+"</td><td height='20'>"+n.thirdLevel+"</td>";
			   			qishi_tr += "<td height='20' width='60'>"+n.fourthLevel+"</td><td height='20'>"+n.fifthLevel+"</td>";
			   			qishi_tr += "</tr>";
					   	$("#qishi_list").append(qishi_tr);
					});
					if (data.size == 0 || data=='') {
						$("#qishi_list").append("<tr id='tr_none'><td height='20' colspan='7'>暂无数据！！！</td></tr>");
					} 
			   },
			   berror:function(){
			   		openMessage("系统出现异常！！！");
			   }
			});
		});
		
		$("#tupoQuery").click();
		//$("#zhenqiQuery").click();
		//$("#shengxingQuery").click();
		//$("#qibaoQuery").click();
		
		
	});
	
	function queryData(tab_content, query){
		$(".tab_content").children().hide();
		$("#"+tab_content).show();
		$("#"+query).click();
	}
	
	queryData('shengxing_content');
	
	
    
</script>
</html>