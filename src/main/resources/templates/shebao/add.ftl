<!DOCTYPE html>
<html>
	<head>
		<meta charset="GBK">
		<title>个人征缴明细</title>
		<link href="../css/head.css" rel="stylesheet">
		<link href="../css/table.css" rel="stylesheet">
		<#include "/common/icon.ftl" >
	</head>
	<body>
		<div class="box_top" style=""border: 1px solid;>
			<div class="subpage_box">
				<h1 class="subpage_title"><span>&nbsp;</span>个人征缴明细
				<#if manager ??>
						<input type="button" style="width:50px;" name="Submit" value="记录" id="add">
					<#else>
						<input type="button" style="width:100px;" name="Submit" value="维护缴费记录" id="manager">
					</#if>
				</h1>
			</div>
		</div>
		
		<form id="saveForm">
			<table id="saveTable" style="width:1000px;" border="0" cellspacing="0" cellpadding="0" class="tb2">
				<tbody>
					<tr>
						<td height="30">缴费月份：</td>
						<td height="30">
							<input type="hidden" name="id" style="width:100px;">
							<!--	<input type="input" name="date" style="width:100px;">	-->
							<input class="Wdate" name="date" style="width:100px;" type="text" onClick="WdatePicker({el:this,dateFmt:'yyyy-MM-dd'})">
						</td>
						<td height="30">缴费基数：</td>
						<td height="30"><input type="input" name="money" style="width:100px;"></td>
						<td height="30">缴费单位名称：</td>
						<td height="30"><input type="input" name="price" style="width:150px;"></td>
					</tr>
					<tr>
						<td height="30" colspan="6">养老保险</td>
					</tr>
					<tr>
						<td height="30">单位缴纳金额：</td>
						<td height="30">
							<input type="input" name="date" style="width:100px;">
						</td>
						<td height="30">个人缴纳金额：</td>
						<td height="30"><input type="input" name="money" style="width:100px;"></td>
						<td height="30">是否到账：</td>
						<td height="30"><input type="input" name="price" style="width:100px;"></td>
					</tr>
					<tr>
						<td height="30" colspan="6">医疗保险</td>
					</tr>
					<tr>
						<td height="30">单位缴纳金额：</td>
						<td height="30">
							<input type="input" name="date" style="width:100px;">
						</td>
						<td height="30">个人缴纳金额：</td>
						<td height="30"><input type="input" name="money" style="width:100px;"></td>
						<td height="30">是否到账：</td>
						<td height="30"><input type="input" name="price" style="width:100px;"></td>
					</tr>
					<tr>
						<td height="30" colspan="6">失业保险</td>
					</tr>
					<tr>
						<td height="30">单位缴纳金额：</td>
						<td height="30">
							<input type="input" name="date" style="width:100px;">
						</td>
						<td height="30">个人缴纳金额：</td>
						<td height="30"><input type="input" name="money" style="width:100px;"></td>
						<td height="30">是否到账：</td>
						<td height="30"><input type="input" name="price" style="width:100px;"></td>
					</tr>
					<tr>
						<td height="30" colspan="6">工商保险</td>
					</tr>
					<tr>
						<td height="30">单位缴纳金额：</td>
						<td height="30">
							<input type="input" name="date" style="width:100px;">
						</td>
						<td height="30">个人缴纳金额：</td>
						<td height="30"><input type="input" name="money" style="width:100px;"></td>
						<td height="30">是否到账：</td>
						<td height="30"><input type="input" name="price" style="width:100px;"></td>
					</tr>
					<tr>
						<td height="30" colspan="6">生育保险</td>
					</tr>
					<tr>
						<td height="30">单位缴纳金额：</td>
						<td height="30">
							<input type="input" name="date" style="width:100px;">
						</td>
						<td height="30">个人缴纳金额：</td>
						<td height="30"><input type="input" name="money" style="width:100px;"></td>
						<td height="30">是否到账：</td>
						<td height="30"><input type="input" name="price" style="width:100px;"></td>
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
		
		<table border="0" cellpadding="0" cellspacing="0" class="tab1">
			<tbody>
				<tr>
					<td width="26%" align="left">姓名:刘广清</td>
					<td width="27%" align="left">身份证号:32072119**0*142*10</td>
					<td width="24%" align="left">验证码：40X9JOGB1A</td>
				</tr>
				<tr>
					<td width="23%" align="left">社会保障卡号:100239**64</td>
					<td width="26%" align="left">参保状态：暂时中止</td>
					<td align="left">打印方式：网站</td>
				</tr>
			</tbody>
		</table>
		
		<table width="1000" border="0" cellspacing="0" cellpadding="0" class="tb2">
			<tbody>
				<tr>
					<td height="20" colspan="20"><strong>${summary.beginDate?string('yyyy年MM月')}至${summary.endDate?string('yyyy年MM月')}五险缴费情况</strong></td>
				</tr>
				<tr>
					<td rowspan="2">缴费<br>月份
					</td>
					<td height="20" colspan="4">养老保险</td>
					<td height="20" colspan="4">医疗保险</td>
					<td height="20" colspan="4">失业保险</td>
					<td height="20" colspan="3">工伤保险</td>
					<td height="20" colspan="3">生育保险</td>
					<td rowspan="2">缴费单位名称</td>
				</tr>
				<tr>
					<td width="3%" height="20">到<br>账</td>
					<td width="5%">缴费基数</td>
					<td width="5%" height="20">单位缴纳</td>
					<td width="5%" height="20">个人缴纳</td>
					<td width="2%" height="20">到<br>账</td>
					<td width="5%">缴费基数</td>
					<td width="5%" height="20">单位缴纳</td>
					<td width="5%" height="20">个人缴纳<br>(含大病)</td>
					<td width="3%" height="20">到<br>账</td>
					<td width="5%">缴费基数</td>
					<td width="5%" height="20">单位缴纳</td>
					<td width="5%" height="20">个人缴纳</td>
					<td width="3%" height="20">到<br>账</td>
					<td width="5%" height="20">缴费基数</td>
					<td width="5%" height="20">单位缴纳</td>
					<td width="3%" height="20">到<br>账</td>
					<td width="5%" height="20">缴费基数</td>
					<td width="5%" height="20">单位缴纳</td>
				</tr>
				<#list baoXianList as ba>
					<tr>
						<td height="20">${ba.pay_date?string('yyyy/MM')}</td>
						
						<#if ba.yanglao_company ??>
							<td height="20"><#if ba.yanglao_company ?? && ba.yanglao_confirm==1>√</#if></td>
							<td height="20"><#if ba.base ??>${ba.base?string('0.00')}</#if></td>
							<td height="20"><#if ba.yanglao_company ??>${ba.yanglao_company?string('0.00')}</#if></td>
							<td height="20"><#if ba.yanglao_self ??>${ba.yanglao_self?string('0.00')}</#if></td>
							<td height="20"><#if ba.yiliao_confirm ?? && ba.yiliao_confirm==1>√</#if></td>
							<td height="20"><#if ba.yiliao_company ??>${ba.base?string('0.00')}</#if></td>
							<td height="20"><#if ba.yiliao_company ??>${ba.yiliao_company?string('0.00')}</#if></td>
							<td height="20"><#if ba.yiliao_self ??>${ba.yiliao_self?string('0.00')}</#if></td>
							<td height="20"><#if ba.shiye_confirm ?? && ba.shiye_confirm==1>√</#if></td>
							<td height="20"><#if ba.shiye_company ??>${ba.base?string('0.00')}</#if></td>
							<td height="20"><#if ba.shiye_company ??>${ba.shiye_company?string('0.00')}</#if></td>
							<td height="20"><#if ba.shiye_self ??>${ba.shiye_self?string('0.00')}</#if></td>
							<td height="20"><#if ba.gongshang_confirm ?? && ba.gongshang_confirm==1>√</#if></td>
							<td height="20"><#if ba.gongshang_company ??>${ba.base?string('0.00')}</#if></td>
							<td height="20"><#if ba.gongshang_company ??>${ba.gongshang_company?string('0.00')}</#if></td>
							<td height="20"><#if ba.shengyu_confirm ?? && ba.shengyu_confirm==1>√</#if></td>
							<td height="20"><#if ba.shengyu_company ??>${ba.base?string('0.00')}</#if></td>
							<td height="20"><#if ba.shengyu_company ??>${ba.shengyu_company?string('0.00')}</#if></td>
						<#else>
							<td height="20" colspan="18">未缴纳</td>
						</#if>
						
						
						
						
						<td height="20">${ba.company}</td>
					</tr>
		        </#list>				
				<tr>
					<td height="20" colspan="20"><span style="font-weight: bold;">${summary.beginDate?string('yyyy年MM月')}至${summary.endDate?string('yyyy年MM月')}养老保险缴费情况
					</span><br></td>
				</tr>
				<tr>
					<td height="20" colspan="5">累计缴费月数</td>
					<td height="20" colspan="9">当前单位累计缴费月数</td>
					<td height="20" colspan="6">累计欠费月数</td>
				</tr>
				<tr>
					<td height="20" colspan="5">${summary.months}（${summary.year}年<#if summary.yearMonth gt 0>{summary.yearMonth}月<#else>整</#if>）</td>
					<td height="20" colspan="9">${summary.months}</td>
					<td height="20" colspan="6">0</td>
				</tr>
	
			</tbody>
		</table>
		<div style="height:100px;">
		</div>
	</body>
<#include "/common/include_newstyle_js.ftl" >  
<script language="javascript" type="text/javascript" src="../My97DatePicker/WdatePicker.js"></script>
<script type="text/javascript">
	$(function(){
	    
	    $("#add").click(function(){
	    	$("#saveTable").toggle();
	    	$("#list").toggle();
		});
		
		$("#manager").click(function(){
	    	window.location.href="managerOilList";
		});
		
		$("#save").click(function(){
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