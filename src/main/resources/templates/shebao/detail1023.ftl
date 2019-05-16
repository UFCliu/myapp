<!DOCTYPE html>
<html>
	<head>
		<meta charset="GBK">
		<title>个人征缴明细</title>
		<link href="./css/head.css" rel="stylesheet">
		<link href="./css/table.css" rel="stylesheet">
		<#include "/common/icon.ftl" >
	</head>
	<body>
		<div class="box_top" style=""border: 1px solid;>
			<div class="subpage_box">
				<h1 class="subpage_title"><span>&nbsp;</span>个人征缴明细</h1>
			</div>
		</div>
		
		<table border="0" cellpadding="0" cellspacing="0" class="tab1">
			<tbody>
				<tr>
					<td width="26%" align="left">姓名:刘广清</td>
					<td width="27%" align="left">身份证号:320721198807142810</td>
					<td width="24%" align="left">验证码：40X9JOGB1A</td>
				</tr>
				<tr>
					<td width="23%" align="left">社会保障卡号:1002390064</td>
					<td width="26%" align="left">参保状态：暂时中止</td>
					<td align="left">打印方式：网站</td>
				</tr>
			</tbody>
		</table>
		
		<table width="1000" border="0" cellspacing="0" cellpadding="0" class="tb2">
			<tbody>
				<tr>
					<td height="20" colspan="20"><strong>2009年07月至2018年09月五险缴费情况</strong></td>
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
						<td height="20"><#if ba.yanglao_confirm==1>√</#if></td>
						<td height="20">${ba.base?string('0.00')}</td>
						<td height="20">${ba.yanglao_company?string('0.00')}</td>
						<td height="20">${ba.yanglao_self?string('0.00')}</td>
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
						
						<td height="20">${ba.company}</td>
					</tr>
					<div style="font-size:12px;text-align:center;">${ba.id}-${ba.pay_date?string('yyyy/MM')}</div>
		        </#list>
				
				
				<tr>
					<td height="20">2009/07</td>
					<td height="20">√</td>
					<td height="20">1455.00</td>
					<td height="20">305.55</td>
					<td height="20">116.40</td>
					<td height="20"></td>
					<td height="20"></td>
					<td height="20"></td>
					<td height="20"></td>
					<td height="20">√</td>
					<td height="20">1455.00</td>
					<td height="20">14.55</td>
					<td height="20">14.55</td>
					<td height="20"></td>
					<td height="20"></td>
					<td height="20"></td>
					<td height="20"></td>
					<td height="20"></td>
					<td height="20"></td>
					<td height="20">(补)南京弈米互动网络科技有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2009/08</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">305.55</td>
					<td height="20">116.40</td>
					<td height="20">
						
					</td>
					
					<td height="20"></td>
					<td height="20"></td>
					<td height="20"></td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">14.55</td>
					<td height="20">14.55</td>
					<td height="20">
						
					</td>
					
					<td height="20"></td>
					<td height="20"></td>
					<td height="20">
						
					</td>
					
					<td height="20"></td>
					<td height="20"></td>
					<td height="20">(补)南京弈米互动网络科技有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2009/09</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">305.55</td>
					<td height="20">116.40</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">123.68</td>
					<td height="20">39.10</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">14.55</td>
					<td height="20">14.55</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">5.82</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">10.19</td>
					<td height="20">南京弈米互动网络科技有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2009/10</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">305.55</td>
					<td height="20">116.40</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">123.68</td>
					<td height="20">39.10</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">14.55</td>
					<td height="20">14.55</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">5.82</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">10.19</td>
					<td height="20">南京弈米互动网络科技有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2009/11</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">305.55</td>
					<td height="20">116.40</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">123.68</td>
					<td height="20">39.10</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">14.55</td>
					<td height="20">14.55</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">5.82</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">10.19</td>
					<td height="20">南京弈米互动网络科技有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2009/12</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">305.55</td>
					<td height="20">116.40</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">123.68</td>
					<td height="20">39.10</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">14.55</td>
					<td height="20">14.55</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">5.82</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">10.19</td>
					<td height="20">南京弈米互动网络科技有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2010/01</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">305.55</td>
					<td height="20">116.40</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">123.68</td>
					<td height="20">39.10</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">14.55</td>
					<td height="20">14.55</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">5.82</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">10.19</td>
					<td height="20">南京弈米互动网络科技有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2010/02</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">305.55</td>
					<td height="20">116.40</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">123.68</td>
					<td height="20">39.10</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">14.55</td>
					<td height="20">14.55</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">5.82</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">10.19</td>
					<td height="20">南京弈米互动网络科技有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2010/03</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">305.55</td>
					<td height="20">116.40</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">123.68</td>
					<td height="20">39.10</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">14.55</td>
					<td height="20">14.55</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">5.82</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">10.19</td>
					<td height="20">南京弈米互动网络科技有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2010/04</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">305.55</td>
					<td height="20">116.40</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">123.68</td>
					<td height="20">39.10</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">14.55</td>
					<td height="20">14.55</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">5.82</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">10.19</td>
					<td height="20">南京弈米互动网络科技有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2010/08</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">305.55</td>
					<td height="20">116.40</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">123.68</td>
					<td height="20">39.10</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">14.55</td>
					<td height="20">14.55</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">5.82</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">10.19</td>
					<td height="20">(补)深圳市金华业软件系统有限公司南京办事处</td>
				</tr>
				
				<tr>
					<td height="20">2010/09</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">305.55</td>
					<td height="20">116.40</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">123.68</td>
					<td height="20">39.10</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">14.55</td>
					<td height="20">14.55</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">5.82</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1455.00</td>
					<td height="20">10.19</td>
					<td height="20">深圳市金华业软件系统有限公司南京办事处</td>
				</tr>
				
				<tr>
					<td height="20">2010/10</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">332.43</td>
					<td height="20">126.64</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">134.56</td>
					<td height="20">41.66</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">15.83</td>
					<td height="20">15.83</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">6.33</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">11.08</td>
					<td height="20">(补)南京中软资源科技服务有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2010/11</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">332.43</td>
					<td height="20">126.64</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">134.56</td>
					<td height="20">41.66</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">15.83</td>
					<td height="20">15.83</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">6.33</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">11.08</td>
					<td height="20">南京中软资源科技服务有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2010/12</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">332.43</td>
					<td height="20">126.64</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">134.56</td>
					<td height="20">41.66</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">15.83</td>
					<td height="20">15.83</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">6.33</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">11.08</td>
					<td height="20">南京中软资源科技服务有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2011/01</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">316.60</td>
					<td height="20">126.64</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">142.47</td>
					<td height="20">41.66</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">31.66</td>
					<td height="20">15.83</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">7.92</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">12.66</td>
					<td height="20">南京中软资源科技服务有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2011/02</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">316.60</td>
					<td height="20">126.64</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">142.47</td>
					<td height="20">41.66</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">31.66</td>
					<td height="20">15.83</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">7.92</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">12.66</td>
					<td height="20">南京中软资源科技服务有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2011/03</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">316.60</td>
					<td height="20">126.64</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">142.47</td>
					<td height="20">41.66</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">31.66</td>
					<td height="20">15.83</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">7.92</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">12.66</td>
					<td height="20">南京中软资源科技服务有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2011/04</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">316.60</td>
					<td height="20">126.64</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">142.47</td>
					<td height="20">41.66</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">31.66</td>
					<td height="20">15.83</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">7.92</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">12.66</td>
					<td height="20">南京中软资源科技服务有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2011/05</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">316.60</td>
					<td height="20">126.64</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">142.47</td>
					<td height="20">41.66</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">31.66</td>
					<td height="20">15.83</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">7.92</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">12.66</td>
					<td height="20">南京中软资源科技服务有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2011/06</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">316.60</td>
					<td height="20">126.64</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">142.47</td>
					<td height="20">41.66</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">31.66</td>
					<td height="20">15.83</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">7.92</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1583.00</td>
					<td height="20">12.66</td>
					<td height="20">(补)南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2011/07</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">358.80</td>
					<td height="20">143.52</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">161.46</td>
					<td height="20">45.88</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">35.88</td>
					<td height="20">17.94</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">8.97</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">14.35</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2011/08</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">358.80</td>
					<td height="20">143.52</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">161.46</td>
					<td height="20">45.88</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">35.88</td>
					<td height="20">17.94</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">8.97</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">14.35</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2011/09</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">358.80</td>
					<td height="20">143.52</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">161.46</td>
					<td height="20">45.88</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">35.88</td>
					<td height="20">17.94</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">8.97</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">14.35</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2011/10</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">358.80</td>
					<td height="20">143.52</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">161.46</td>
					<td height="20">45.88</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">35.88</td>
					<td height="20">17.94</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">8.97</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">14.35</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2011/11</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">358.80</td>
					<td height="20">143.52</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">161.46</td>
					<td height="20">45.88</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">35.88</td>
					<td height="20">17.94</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">8.97</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">14.35</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2011/12</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">358.80</td>
					<td height="20">143.52</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">161.46</td>
					<td height="20">45.88</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">35.88</td>
					<td height="20">17.94</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">8.97</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">14.35</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2012/01</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">358.80</td>
					<td height="20">143.52</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">161.46</td>
					<td height="20">45.88</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">35.88</td>
					<td height="20">17.94</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">8.97</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">14.35</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2012/02</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">358.80</td>
					<td height="20">143.52</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">161.46</td>
					<td height="20">45.88</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">35.88</td>
					<td height="20">17.94</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">8.97</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">14.35</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2012/03</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">358.80</td>
					<td height="20">143.52</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">161.46</td>
					<td height="20">45.88</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">35.88</td>
					<td height="20">17.94</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">8.97</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">14.35</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2012/04</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">358.80</td>
					<td height="20">143.52</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">161.46</td>
					<td height="20">45.88</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">35.88</td>
					<td height="20">17.94</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">8.97</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">14.35</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2012/05</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">358.80</td>
					<td height="20">143.52</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">161.46</td>
					<td height="20">45.88</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">35.88</td>
					<td height="20">17.94</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">8.97</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">14.35</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2012/06</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">358.80</td>
					<td height="20">143.52</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">161.46</td>
					<td height="20">45.88</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">35.88</td>
					<td height="20">17.94</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">8.97</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">1794.00</td>
					<td height="20">14.35</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2012/07</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">400.00</td>
					<td height="20">160.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">180.00</td>
					<td height="20">50.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">40.00</td>
					<td height="20">20.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">10.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">16.00</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2012/08</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">400.00</td>
					<td height="20">160.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">180.00</td>
					<td height="20">50.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">40.00</td>
					<td height="20">20.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">10.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">16.00</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2012/09</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">400.00</td>
					<td height="20">160.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">180.00</td>
					<td height="20">50.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">40.00</td>
					<td height="20">20.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">10.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">16.00</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2012/10</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">400.00</td>
					<td height="20">160.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">180.00</td>
					<td height="20">50.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">40.00</td>
					<td height="20">20.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">10.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">16.00</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2012/11</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">400.00</td>
					<td height="20">160.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">180.00</td>
					<td height="20">50.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">40.00</td>
					<td height="20">20.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">10.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">16.00</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2012/12</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">400.00</td>
					<td height="20">160.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">180.00</td>
					<td height="20">50.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">40.00</td>
					<td height="20">20.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">10.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">16.00</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2013/01</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">400.00</td>
					<td height="20">160.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">180.00</td>
					<td height="20">50.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">40.00</td>
					<td height="20">20.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">10.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">16.00</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2013/02</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">400.00</td>
					<td height="20">160.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">180.00</td>
					<td height="20">50.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">40.00</td>
					<td height="20">20.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">10.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">16.00</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2013/03</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">400.00</td>
					<td height="20">160.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">180.00</td>
					<td height="20">50.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">40.00</td>
					<td height="20">20.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">10.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">16.00</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2013/04</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">400.00</td>
					<td height="20">160.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">180.00</td>
					<td height="20">50.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">40.00</td>
					<td height="20">20.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">10.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">16.00</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2013/05</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">400.00</td>
					<td height="20">160.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">180.00</td>
					<td height="20">50.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">40.00</td>
					<td height="20">20.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">10.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">16.00</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2013/06</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">400.00</td>
					<td height="20">160.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">180.00</td>
					<td height="20">50.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">40.00</td>
					<td height="20">20.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">10.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2000.00</td>
					<td height="20">16.00</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2013/07</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">440.00</td>
					<td height="20">176.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">198.00</td>
					<td height="20">54.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">44.00</td>
					<td height="20">22.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">17.60</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2013/08</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">440.00</td>
					<td height="20">176.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">198.00</td>
					<td height="20">54.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">33.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">17.60</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2013/09</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">440.00</td>
					<td height="20">176.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">198.00</td>
					<td height="20">54.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">33.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">17.60</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2013/10</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">440.00</td>
					<td height="20">176.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">198.00</td>
					<td height="20">54.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">33.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">17.60</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2013/11</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">440.00</td>
					<td height="20">176.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">198.00</td>
					<td height="20">54.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">33.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">17.60</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2013/12</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">440.00</td>
					<td height="20">176.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">198.00</td>
					<td height="20">54.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">33.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">17.60</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2014/01</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">440.00</td>
					<td height="20">176.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">198.00</td>
					<td height="20">54.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">33.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">17.60</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2014/02</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">440.00</td>
					<td height="20">176.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">198.00</td>
					<td height="20">54.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">33.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">17.60</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2014/03</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">440.00</td>
					<td height="20">176.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">198.00</td>
					<td height="20">54.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">33.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">17.60</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2014/04</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">440.00</td>
					<td height="20">176.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">198.00</td>
					<td height="20">54.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">33.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">17.60</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2014/05</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">440.00</td>
					<td height="20">176.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">198.00</td>
					<td height="20">54.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">33.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">17.60</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2014/06</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">440.00</td>
					<td height="20">176.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">198.00</td>
					<td height="20">54.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">33.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">11.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2200.00</td>
					<td height="20">17.60</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2014/07</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2391.00</td>
					<td height="20">478.20</td>
					<td height="20">191.28</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2391.00</td>
					<td height="20">215.19</td>
					<td height="20">57.82</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2391.00</td>
					<td height="20">35.87</td>
					<td height="20">11.96</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2391.00</td>
					<td height="20">11.96</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2391.00</td>
					<td height="20">19.13</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2014/08</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2391.00</td>
					<td height="20">478.20</td>
					<td height="20">191.28</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2391.00</td>
					<td height="20">215.19</td>
					<td height="20">57.82</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2391.00</td>
					<td height="20">35.87</td>
					<td height="20">11.96</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2391.00</td>
					<td height="20">11.96</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2391.00</td>
					<td height="20">19.13</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2014/09</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">480.00</td>
					<td height="20">192.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">216.00</td>
					<td height="20">58.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">36.00</td>
					<td height="20">12.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">12.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">19.20</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2014/10</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">480.00</td>
					<td height="20">192.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">216.00</td>
					<td height="20">58.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">36.00</td>
					<td height="20">12.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">12.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">19.20</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2014/11</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">480.00</td>
					<td height="20">192.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">216.00</td>
					<td height="20">58.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">36.00</td>
					<td height="20">12.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">12.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">19.20</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2014/12</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">480.00</td>
					<td height="20">192.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">216.00</td>
					<td height="20">58.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">36.00</td>
					<td height="20">12.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">12.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">19.20</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20">2015/01</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">480.00</td>
					<td height="20">192.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">216.00</td>
					<td height="20">58.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">36.00</td>
					<td height="20">12.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">12.00</td>
					<td height="20">
						
						√ 
					</td>
					
					<td height="20">2400.00</td>
					<td height="20">12.00</td>
					<td height="20">南京橙红科技股份有限公司</td>
				</tr>
				
				<tr>
					<td height="20" colspan="20"><span style="font-weight: bold;">1992年10月至2018年09月养老保险缴费情况
					</span><br></td>
				</tr>
				<tr>
					<td height="20" colspan="5">累计缴费月数</td>
					<td height="20" colspan="9">当前单位累计缴费月数</td>
					<td height="20" colspan="6">累计欠费月数</td>
				</tr>
				<tr>
					<td height="20" colspan="5">64</td>
					<td height="20" colspan="9">0</td>
					<td height="20" colspan="6">0</td>
				</tr>
	
			</tbody>
		</table>
	</body>
</html>