<tr>
	<#if manager ??>
		<td height="20" colspan="21"><span style="font-weight: bold;">${summary.beginDate?string('yyyy年MM月')}至${summary.endDate?string('yyyy年MM月')}五险缴费情况
		</span><br></td>
	<#else>
		<td height="20" colspan="20"><span style="font-weight: bold;">${summary.beginDate?string('yyyy年MM月')}至${summary.endDate?string('yyyy年MM月')}五险缴费情况
		</span><br></td>
	</#if>
</tr>
<tr>
	<#if manager ??>
		<td height="20" colspan="6">累计缴费月数</td>
	<#else>
		<td height="20" colspan="5">累计缴费月数</td>
	</#if>
	<td height="20" colspan="9">当前单位累计缴费月数</td>
	<td height="20" colspan="6">累计欠费月数</td>
</tr>
<tr>
	<#if manager ??>
		<td height="20" colspan="6">${summary.months}（${summary.year}年<#if summary.yearMonth gt 0>${summary.yearMonth}月<#else>整</#if>）</td>
	<#else>
		<td height="20" colspan="5">${summary.months}（${summary.year}年<#if summary.yearMonth gt 0>${summary.yearMonth}月<#else>整</#if>）</td>
	</#if>
	<td height="20" colspan="9">${summary.months}</td>
	<td height="20" colspan="6">0</td>
</tr>