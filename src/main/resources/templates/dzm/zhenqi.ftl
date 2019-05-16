<div id="zhenqi_content" style="display:none;margin-top: 20px;margin-left: 10px;border:0px solid;width:450px;float:left;">
	<div style="margin-left: 10px;margin-top: 10px;margin-bottom: 20px;">
		真气数据查询：
	</div>
	<form id="zhenqiForm">
		<div style="margin-left: 10px;margin-bottom: 20px;margin-top: 20px;">
			基础属性：
			<select name="property" type="text" style="font-size:10px;height:25px;">
				<option value="">--请选择--</option>		
				<option value="攻" selected = "selected">攻</option>			
				<option value="防">防</option>
				<option value="血">血</option>
				<option value="内">内</option>
			</select>
			二级属性：
			<select name="secondLevelProperty" type="text" style="font-size:10px;height:25px;">
				<option value="">--请选择--</option>		
				<option value="命中">命中</option>			
				<option value="暴击">暴击</option>
				<option value="破招">破招</option>
				<option value="闪避">闪避</option>
				<option value="防爆">防爆</option>
				<option value="格挡">格挡</option>
			</select>
			<input type="button" id="zhenqiQuery" value="查询" style="width:60px;">
		</div>
	</form>
	<table id="zhenqi_list" style="width:400px;margin-left: 10px !important;margin-bottom: 40px !important;" border="0" cellspacing="0" cellpadding="0" class="tb2">
		<tbody>
			<tr>
				<td height="20">真气名称</td>
				<td height="20">真气属性</td>
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