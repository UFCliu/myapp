<!DOCTYPE html>
<html>
	<head>
		<meta charset="GBK">
		<title>加油记录清单</title>
		<link href="../css/head.css" rel="stylesheet">
		<link href="../css/tab.css" rel="stylesheet">
		<#include "/common/include_newstyle_css.ftl" >
	</head>
	<body>
		<div class="box_top">
			<div class="subpage_box" style="width:800px;">
				<h1 class="subpage_title"><span>&nbsp;</span>弟子突破表
				</h1>
			</div>
		</div>
		
		<div style="margin-left: 10px;border:1px solid;width:600px;">
			<form id="queryForm">
				<div style="margin-left: 100px;margin-bottom: 20px;margin-top: 20px;">
					<input type="text" name="minTupo" value="1" size="3">
					~
					<input type="text" name="maxTupo" value="30" size="3">
					<input type="button" id="tupoQuery" value="查询" style="width:60px;">
				</div>
			</form>
			<div id="total_div" style="margin-left: 100px;margin-bottom: 20px;display:none;">
				需要的魂魄（万能）总数：<span id="total"></span>
			</div>
			<table id="list" style="width:400px;margin-left: 100px !important;margin-bottom: 40px !important;" border="0" cellspacing="0" cellpadding="0" class="tb2">
				<tbody>
					<tr>
						<td height="20" width="120">突破数</td>
						<td height="20">突破需要的魂魄（万能）数</td>
					</tr>
					<#if tuPoList ??>
						<#list tuPoList as oil>
							<tr id="tr_${oil_index}">
								<td height="20"><#if oil.tupoNumber ??>${oil.tupoNumber}</#if></td>
								<td height="20"><#if oil.tupoAmount ??>${oil.tupoAmount}</#if></td>
							</tr>
				        </#list>			
				    <#else>
				    	<tr id='tr_none'><td height='20' colspan='2'>暂无数据！！！</td></tr>
				    </#if>
				</tbody>
			</table>
		</div>
	</body>
<#include "/common/include_newstyle_js.ftl" >  
<script language="javascript" type="text/javascript" src="../My97DatePicker/WdatePicker.js"></script>
<script type="text/javascript">
	$(function(){
		$("#tupoQuery").click(function(){
			$("#list").find('tr[id^=tr_]').remove();
			$.ecpost({
			   url: "tupoQuery",
			   data: $("#queryForm").serializeArray(),
			   success: function(data){
			   		var total = 0;
			   		$.each(data, function(i, n) {
					   	$("#list").append("<tr id='tr_"+i+"'><td height='20'>"+n.tupoNumber+"</td><td height='20'>"+n.tupoAmount+"</td></tr>");
					   	total += n.tupoAmount;
					});
					if (total > 0) {
						$("#total").html(total);
						$("#total_div").show();
					} else {
						$("#list").append("<tr id='tr_none'><td height='20' colspan='2'>暂无数据！！！</td></tr>");
						$("#total_div").hide();
					}
			   },
			   berror:function(){
			   		openMessage("系统出现异常！！！");
			   }
			});
		});
	});
	
    
</script>
</html>