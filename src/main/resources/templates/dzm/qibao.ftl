<div id="qibao_content" style="display:none;margin-top: 20px;margin-left: 10px;border:0px solid;width:850px;float:left;">
	<div style="margin-left: 10px;margin-top: 10px;margin-bottom: 20px;">
		奇宝数据查询：
	</div>
	<form id="qibaoForm">
		<div style="margin-left: 10px;margin-bottom: 20px;margin-top: 20px;">
			主属性：
			<select name="mainPropertyName" type="text" style="font-size:10px;height:25px;">
				<option value="">--请选择--</option>		
				<option value="攻">攻</option>			
				<option value="防">防</option>
				<option value="血">血</option>
				<option value="内">内</option>
				<option value="破刃">破刃</option>
			</select>
			<input type="button" id="qibaoQuery" value="查询" style="width:60px;">
		</div>
	</form>
	<table id="qibao_list" style="width:800px;margin-left: 10px !important;margin-bottom: 40px !important;" border="0" cellspacing="0" cellpadding="0" class="tb2">
		<tbody>
			<tr>
				<td height="20">奇宝名称</td>
				<td height="20" colspan='2'>主属性</td>
				<td height="20" colspan='4'>附属性</td>
				<td height="20" colspan='2'>二级属性</td>
			</tr>
			<#if zhenqiList ??>
				<#list zhenqiList as oil>
					<tr id="tr_${oil_index}">
						<td height="20"><#if oil.name ??>${oil.name}</#if></td>
						<td height="20"><#if oil.property ??>${oil.property}</#if></td>
					</tr>
		        </#list>			
		    <#else>
		    	<tr id='tr_none'><td height='20' colspan='2'>暂无数据！！！</td></tr>
		    </#if>
		</tbody>
	</table>
</div>