<!DOCTYPE html>
<html>
	<head>
		<meta charset="GBK">
		<title>社会保险缴费清单</title>
		<link href="../css/head.css" rel="stylesheet">
		<link href="../css/table.css" rel="stylesheet">
		<#include "/common/icon.ftl" >
	</head>
	<body>
		<div class="box_top" style=""border: 1px solid;>
			<div class="subpage_box">
				<h1 class="subpage_title"><span>&nbsp;</span>社会保险缴费清单</h1>
			</div>
		</div>
		
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
		<div style="text-align:center;margin-bottom: 10px;">
			<span style="color:#000000;font-size:12px;font-weight:bold;">${summary.beginDate?string('yyyy年MM月')}至${summary.endDate?string('yyyy年MM月')}&nbsp;&nbsp;累计缴费年限</span>
			<br/>
		</div>
		<table width="1000" border="0" cellspacing="0" cellpadding="0" class="tb2">
			<tbody>
				<tr>
					<td height="20">险种</td>
					<td height="20">养老</td>
					<td height="20">医疗</td>
					<td height="20">失业</td>
					<td height="20">工伤</td>
					<td height="20">生育</td>
				</tr>
				<tr>
					<td height="20">累计缴费月数</td>
					<td height="20">${summary.months}（${summary.year}年<#if summary.yearMonth gt 0>${summary.yearMonth}月<#else>整</#if>）</td>
					<td height="20">${summary.months-2}</td>
					<td height="20">${summary.months}</td>
					<td height="20">${summary.months-2}</td>
					<td height="20">${summary.months-2}</td>
				</tr>
			</tbody>
		</table>
	
		<div style="height:20px;">
		
		</div>
		<table width="1000" border="0" cellspacing="0" cellpadding="0" class="tb2">

			<tbody><tr>
				<td height="20" width="4%">序号</td>
				<td width="10%">缴费起止年月</td>
				<td width="6%">月缴费<br>基数</td>
				<td width="4%">养老</td>
				<td width="4%">医疗</td>
				<td width="4%">失业</td>
				<td width="4%">工伤</td>
				<td width="4%">生育</td>
				<td width="9%">单位代码</td>
				<td width="1%" border="0"></td>
				<td height="20" width="4%">序号</td>
				<td width="10%">缴费起止年月</td>
				<td width="6%">月缴费<br>基数</td>
				<td width="4%">养老</td>
				<td width="4%">医疗</td>
				<td width="4%">失业</td>
				<td width="4%">工伤</td>
				<td width="4%">生育</td>
				<td width="9%">单位代码</td>
			</tr>
			
			<tr>
				<td height="20">1</td>
				<td height="20">2009/07-2009/08</td>
				<td height="20">1455.00</td>
				<td height="20">√</td>
				<td height="20"></td>
				<td height="20">√</td>
				<td height="20"></td>
				<td height="20"></td>
				<td height="20">10018051</td>
				<td height="20">&nbsp;</td>
				<td height="20">2</td>
				<td height="20">2009/09-2010/04</td>
				<td height="20">1455.00</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">10018051</td>
			</tr>
			
			<tr>
				<td height="20">3</td>
				<td height="20">2010/08-2010/09</td>
				<td height="20">1455.00</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">00055346</td>
				<td height="20">&nbsp;</td>
				<td height="20">4</td>
				<td height="20">2010/10-2011/05</td>
				<td height="20">1583.00</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">10028442</td>
			</tr>
			
			<tr>
				<td height="20">5</td>
				<td height="20">2011/06-2011/06</td>
				<td height="20">1583.00</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">10025840</td>
				<td height="20">&nbsp;</td>
				<td height="20">6</td>
				<td height="20">2011/07-2012/06</td>
				<td height="20">1794.00</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">10025840</td>
			</tr>
			
			<tr>
				<td height="20">7</td>
				<td height="20">2012/07-2013/06</td>
				<td height="20">2000.00</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">10025840</td>
				<td height="20">&nbsp;</td>
				<td height="20">8</td>
				<td height="20">2013/07-2014/06</td>
				<td height="20">2200.00</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">10025840</td>
			</tr>
			<tr>
				<td height="20">9</td>
				<td height="20">2014/07-2014/08</td>
				<td height="20">2391.00</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">10025840</td>
				<td height="20">&nbsp;</td>
				<td height="20">10</td>
				<td height="20">2014/09-2015/01</td>
				<td height="20">2400.00</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">10025840</td>
			</tr>
			<tr>
				<td height="20">10</td>
				<td height="20">2015/03-2015/06</td>
				<td height="20">2391.00</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">10025840</td>
				<td height="20">&nbsp;</td>
				<td height="20">11</td>
				<td height="20">2015/07-2015/07</td>
				<td height="20">2400.00</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">10025840</td>
			</tr>
			<tr>
				<td height="20">12</td>
				<td height="20">2015/08-2018/06</td>
				<td height="20">4000.00</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">10025840</td>
				<td height="20">&nbsp;</td>
				<td height="20">13</td>
				<td height="20">2018/07-2018/12</td>
				<td height="20">5000.00</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">√</td>
				<td height="20">10025840</td>
			</tr>
			
		</tbody></table>
	</body>
</html>