<!DOCTYPE html>
<html>
	<head>
		<meta charset="GBK">
		<title>个人征缴明细</title>
		<link href="../css/head.css" rel="stylesheet">
		<link href="../css/table.css" rel="stylesheet">
		<#include "/common/include_newstyle_css.ftl" >
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
			<table id="saveTable" style="display:none;width:600px;" border="0" cellspacing="0" cellpadding="0" class="tb2">
				<tbody>
					<tr>
						<td height="30" colspan="4">
							<input type="hidden" name="id" style="width:150px;">
							缴纳月份：
							<input class="Wdate" name="pay_date" style="width:100px;" type="text" onClick="WdatePicker({el:this,dateFmt:'yyyy-MM-dd'})">
						</td>
					</tr>
					<tr>
						<td height="30">缴费基数：</td>
						<td height="30"><input type="input" name="base" style="width:100px;"></td>
						<td height="30">缴费单位名称：</td>
						<td height="30"><input type="input" name="company" style="width:150px;"></td>
					</tr>
					<tr>
						<td height="30" colspan="6">
							养老保险（是否到账：<input type="checkbox" name="yanglao_confirm" value="1">）
						</td>
					</tr>
					<tr>
						<td height="30">单位缴纳金额：</td>
						<td height="30">
							<input type="input" name="yanglao_company" style="width:100px;">
						</td>
						<td height="30">个人缴纳金额：</td>
						<td height="30"><input type="input" name="yanglao_self" style="width:100px;"></td>
					</tr>
					<tr>
						<td height="30" colspan="6">
							医疗保险（是否到账：<input type="checkbox" name="yiliao_confirm" value="1">）
						</td>
					</tr>
					<tr>
						<td height="30">单位缴纳金额：</td>
						<td height="30">
							<input type="input" name="yiliao_company" style="width:100px;">
						</td>
						<td height="30">个人缴纳金额：</td>
						<td height="30"><input type="input" name="yiliao_self" style="width:100px;"></td>
					</tr>
					<tr>
						<td height="30" colspan="6">
							失业保险（是否到账：<input type="checkbox" name="shiye_confirm" value="1">）
						</td>
					</tr>
					<tr>
						<td height="30">单位缴纳金额：</td>
						<td height="30">
							<input type="input" name="shiye_company" style="width:100px;">
						</td>
						<td height="30">个人缴纳金额：</td>
						<td height="30"><input type="input" name="shiye_self" style="width:100px;"></td>
					</tr>
					<tr>
						<td height="30" colspan="6">
							工商保险（是否到账：<input type="checkbox" name="gongshang_confirm" value="1">）
						</td>
					</tr>
					<tr>
						<td height="30">单位缴纳金额：</td>
						<td height="30">
							<input type="input" name="gongshang_company" style="width:100px;">
						</td>
						<td height="30">个人缴纳金额：</td>
						<td height="30"><input type="input" name="" style="width:100px;"></td>
					</tr>
					<tr>
						<td height="30" colspan="6">
							生育保险（是否到账：<input type="checkbox" name="shengyu_confirm" value="1">）
						</td>
					</tr>
					<tr>
						<td height="30">单位缴纳金额：</td>
						<td height="30">
							<input type="input" name="shengyu_company" style="width:100px;">
						</td>
						<td height="30">个人缴纳金额：</td>
						<td height="30"><input type="input" name="" style="width:100px;"></td>
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
		
		<table id="listTitle" border="0" cellpadding="0" cellspacing="0" class="tab1">
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
		
		<table id="listDetail" width="1300" border="0" cellspacing="0" cellpadding="0" class="tb2">
			<tbody>
				<#include "/shebao/include/list_table_head.ftl" >  
				<!--
				<tr>
					<#if manager ??>
						<td height="20" colspan="21"><strong>${summary.beginDate?string('yyyy年MM月')}至${summary.endDate?string('yyyy年MM月')}五险缴费情况</strong></td>
					<#else>
						<td height="20" colspan="20"><strong>${summary.beginDate?string('yyyy年MM月')}至${summary.endDate?string('yyyy年MM月')}五险缴费情况</strong></td>
					</#if>
				</tr>
				-->
				<tr>
					<td rowspan="2">缴费<br>月份
					</td>
					<td height="20" colspan="4">养老保险</td>
					<td height="20" colspan="4">医疗保险</td>
					<td height="20" colspan="4">失业保险</td>
					<td height="20" colspan="3">工伤保险</td>
					<td height="20" colspan="3">生育保险</td>
					<td rowspan="2">缴费单位名称</td>
					<#if manager ??>
						<td rowspan="2">操作</td>
					</#if>
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
							<td height="20"><#if ba.yanglao_company ?? && ba.yanglao_confirm ?? && ba.yanglao_confirm==1>√</#if></td>
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
						<td height="20">
							${ba.company}
							<#if manager ??>
								<!--
								<h1 class="subpage_opt" style="">
									<input type="button" style="width:50px;height:20px;font-size: 10px;" name="Submit" value="修改"  onclick="updateOil(${ba.id})">
									<input type="button" style="width:50px;height:20px;font-size: 10px;" name="Submit" value="删除"  onclick="deleteOil(${ba.id})">
								</h1>
								-->
							</#if>		
						</td>
						<#if manager ??>
							<td height="20" width="60">
								<img src="../images/shebao/modify.png" width="25.6" onclick="updateOil(${ba.id})">
								<img src="../images/shebao/delete.png" width="25.6" onclick="deleteOil(${ba.id})">
							</td>
						</#if>
						
					</tr>
		        </#list>				
				<#include "/shebao/include/list_table_head.ftl" >  
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
	    	$("#listTitle").toggle();
	    	$("#listDetail").toggle();
		});
		
		$("#manager").click(function(){
	    	window.location.href="managerInsurance";
		});
		
		$("#save").click(function(){
			$.ecpost({
			   url: "save",
			   data: $("#saveForm").serializeArray(),
			   success: function(msg){
			   		if(msg > 0) 
			   			<#if manager ??>
			   				openHref("保存成功！","managerInsurance");
			   			<#else>
			   				openHref("保存成功！","detail");
			   			</#if>
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
		   			<#if manager ??>
		   				openHref("删除成功！","managerInsurance");
		   			<#else>
		   				openHref("删除成功！","detail");
		   			</#if>
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
		   		if (msg.pay_date != null) {
		   			$("input[name='pay_date']").val(new Date(msg.pay_date).format("yyyy-MM-dd"));
		   		}
		   		$("input[name='base']").val(msg.base);
		   		$("input[name='company']").val(msg.company);
		   		$("input[name='yanglao_company']").val(msg.yanglao_company);
		   		$("input[name='yanglao_self']").val(msg.yanglao_self);
		   		$("input[name='yiliao_company']").val(msg.yiliao_company);
		   		$("input[name='yiliao_self']").val(msg.yiliao_self);
		   		$("input[name='shiye_company']").val(msg.shiye_company);
		   		$("input[name='shiye_self']").val(msg.shiye_self);
		   		$("input[name='gongshang_company']").val(msg.gongshang_company);
		   		$("input[name='shengyu_company']").val(msg.shengyu_company);
		   		
		   		if (msg.yanglao_confirm==1){$("input[name='yanglao_confirm']").attr("checked", 'checked');}
		   		if (msg.yiliao_confirm==1){$("input[name='yiliao_confirm']").attr("checked", 'checked');}
		   		if (msg.shiye_confirm==1){$("input[name='shiye_confirm']").attr("checked", 'checked');}
		   		if (msg.gongshang_confirm==1) {$("input[name='gongshang_confirm']").attr("checked", 'checked');}
		   		if (msg.shengyu_confirm==1){$("input[name='shengyu_confirm']").attr("checked", 'checked');}
		   },
		   berror:function(){
		   		openMessage("删除失败！");
		   }
		});	
	}
    
</script>
</html>