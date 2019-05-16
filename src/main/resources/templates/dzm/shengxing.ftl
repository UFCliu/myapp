<div id="shengxing_content" style="display:none;margin-top: 20px;margin-left: 10px;border:0px solid;width:450px;float:left;">
	<div style="margin-left: 10px;margin-top: 10px;margin-bottom: 20px;">
		升星二级数据查询：
	</div>
	<form id="shengxingForm">
		<div style="margin-left: 10px;margin-bottom: 20px;margin-top: 20px;">
			
			武器：<select name="wuqiXing" type="text" style="font-size:10px;height:25px;">
				<option value="0">0星</option>			
				<option value="1">1星</option>
				<option value="2">2星</option>
				<option value="3">3星</option>
				<option value="4">4星</option>
				<option value="5" selected = "selected">5星</option>
			</select>
			衣服：<select name="yifuXing" type="text" style="font-size:10px;height:25px;">
				<option value="0">0星</option>			
				<option value="1">1星</option>
				<option value="2">2星</option>
				<option value="3">3星</option>
				<option value="4">4星</option>
				<option value="5" selected = "selected">5星</option>
			</select>
			饰品：<select name="shipinXing" type="text" style="font-size:10px;height:25px;">
				<option value="0">0星</option>			
				<option value="1">1星</option>
				<option value="2">2星</option>
				<option value="3">3星</option>
				<option value="4">4星</option>
				<option value="5" selected = "selected">5星</option>
			</select>
			<input type="button" id="shengxingQuery" value="查询" style="width:60px;">
		</div>
	</form>
	<table id="shengxing_list" style="width:400px;margin-left: 10px !important;margin-bottom: 40px !important;" border="0" cellspacing="0" cellpadding="0" class="tb2">
		<tbody>
			<tr>
				<td height="20">闪避</td>
				<td height="20">命中</td>
				<td height="20">格挡</td>
				<td height="20">破招</td>
				<td height="20">暴击</td>
				<td height="20">防爆</td>
			</tr>
			<#if zhenqiList ??>
				<#list zhenqiList as oil>
					<tr id="tr_${oil_index}">
						<td height="20"><#if oil.name ??>${oil.name}</#if></td>
						<td height="20"><#if oil.property ??>${oil.property}</#if></td>
					</tr>
		        </#list>			
		    <#else>
		    	<tr id='tr_none'><td height='20' colspan='6'>暂无数据！！！</td></tr>
		    </#if>
		</tbody>
	</table>
</div>