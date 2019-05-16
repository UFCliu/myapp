<div id="tupo_content" style="display:none;margin-top: 20px;margin-left: 10px;border:0px solid;width:450px;float:left;">
	<div style="margin-left: 10px;margin-top: 10px;margin-bottom: 20px;">
		弟子突破所需的魂魄（万能）数查询：
	</div>
	<form id="tupoForm">
		<div style="margin-left: 10px;margin-bottom: 20px;margin-top: 20px;">
			<input type="text" name="minTupo" value="21" size="3">
			~
			<input type="text" name="maxTupo" value="25" size="3">
			<input type="button" id="tupoQuery" value="查询" style="width:60px;">
		</div>
	</form>
	<div id="total_div" style="margin-left: 10px;margin-bottom: 20px;display:none;">
		需要的魂魄（万能）总数：<span id="total"></span>
	</div>
	<table id="tupo_list" style="width:400px;margin-left: 10px !important;margin-bottom: 40px !important;" border="0" cellspacing="0" cellpadding="0" class="tb2">
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