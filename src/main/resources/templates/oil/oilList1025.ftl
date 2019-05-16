<!DOCTYPE html>
<html>
	<head>
		<meta charset="GBK">
		<title>加油记录清单</title>
		<link href="../css/head.css" rel="stylesheet">
		<link href="../css/tab.css" rel="stylesheet">
		<#include "/common/include_newstyle_css.ftl" >、
	</head>
	<body>
		<div class="box_top">
			<div class="subpage_box" style="width:800px;">
				<h1 class="subpage_title"><span>&nbsp;</span>加油记录清单
					<!--	<input type="button" style="width:50px;" name="Submit" value="打印">	-->
					<input type="button" style="width:50px;" name="Submit" value="记录" id="add">
				</h1>
			</div>
		</div>
		
		<table id="list" style="width:800px;" border="0" cellspacing="0" cellpadding="0" class="tb2">
			<tbody>
				<tr>
					<td height="25">序号</td>
					<td height="20">加油时间</td>
					<td height="20">加油金额</td>
					<td height="20">油价</td>
					<td height="20">操作</td>
					<!--	<td height="20">车牌</td>	-->
				</tr>
				<#list oilList as oil>
					<tr>
						<td height="25">${oil_index+1}</td>
						<td height="20"><#if oil.date ??>${oil.date?string('yyyy/MM/dd')}</#if></td>
						<td height="20"><#if oil.money ??>${oil.money}￥</#if></td>
						<td height="20"><#if oil.price ??>${oil.price}￥/升</#if></td>
						<td height="20" width="150">
							<input type="button" style="width:50px;" name="Submit" value="修改"  onclick="updateOil(${oil.id})">
							<input type="button" style="width:50px;" name="Submit" value="删除"  onclick="deleteOil(${oil.id})">
						</td>
						<!--	<td height="20"><#if oil.platenumber ??>${oil.platenumber}</#if></td>	-->
					</tr>
		        </#list>				
			</tbody>
		</table>
		
		<form id="saveForm">
			<table id="saveTable" style="display:none;width:800px;" border="0" cellspacing="0" cellpadding="0" class="tb2">
				<tbody>
					<tr>
						<td height="30">加油时间：</td>
						<td height="30">
							<input type="hidden" name="id" style="width:100px;">
							<!--	<input type="input" name="date" style="width:100px;">	-->
							<input class="Wdate" name="date" style="width:100px;" type="text" onClick="WdatePicker({el:this,dateFmt:'yyyy-MM-dd'})">
						</td>
						<td height="30">加油金额：</td>
						<td height="30"><input type="input" name="money" style="width:100px;"></td>
						<td height="30">油价：</td>
						<td height="30"><input type="input" name="price" style="width:100px;">￥/升</td>
					</tr>
					<tr>
						<td height="30" colspan="6">
							<h1 class="subpage_title">
								<input type="button" style="width:50px;" name="Submit" value="保存" id="save">
							</h1>
						</td>
					</tr>
				</tbody>
			</table>
		</form>
		
		<div style="margin: 0 auto;width:800px;">
			<br/>
			<div style="color:#000000;font-size:12px;font-weight:bold;">本月加油费用：${oil.monthTotal}</div>
			<div style="color:#000000;font-size:12px;font-weight:bold;">当年加油费用：${oil.yearTotal}</div>
			<br/>
		</div>
	</body>
<#include "/common/include_newstyle_js.ftl" >  
<script language="javascript" type="text/javascript" src="../My97DatePicker/WdatePicker.js"></script>
<script type="text/javascript">
	$(function(){
	    
	    $("#add").click(function(){
	    	$("#saveTable").toggle();
	    	$("#list").toggle();
			//openMessage("独孤求败！！！");
		});
		
		$("#save").click(function(){
	    	//$("#saveTable").toggle();
	    	//$("#list").toggle();
			//openMessage("独孤求败！！！");
			
			$.ecpost({
			   url: "save",
			   data: $("#saveForm").serializeArray(),
			   success: function(msg){
			   		if(msg > 0) 
			   			openHref("保存成功！","oilList");
			   		else {
			   			openMessage("保存失败！");
			   		}
			   },
			   berror:function(){
			   		openMessage("登录名重复，不允许添加");
			   }
			});
		});
	});
	
	function deleteOil(oil_id){
		openConfirm("是否确认删除该记录？","confirmDelete("+oil_id+")");
	}
	
	function confirmDelete(oil_id){
		closeConfirm();
		$.ecpost({
		   url: "delete",
		   data: {id:oil_id},
		   success: function(msg){
		   		if(msg > 0) 
		   			openHref("删除成功！","oilList");
		   		else {
		   			openMessage("删除失败！");
		   		}
		   },
		   berror:function(){
		   		openMessage("删除失败！");
		   }
		});	
	}
	
	function updateOil(oil_id){
		$("#add").click();
		$.ecpost({
		   url: "get",
		   data: {id:oil_id},
		   success: function(msg){
		   		$("input[name='id']").val(msg.id);
		   		if (msg.date != null) {
		   			$("input[name='date']").val(new Date(msg.date).format("yyyy-MM-dd"));
		   		}
		   		$("input[name='money']").val(msg.money);
		   		$("input[name='price']").val(msg.price);
		   },
		   berror:function(){
		   		openMessage("删除失败！");
		   }
		});	
	}
    
</script>
</html>