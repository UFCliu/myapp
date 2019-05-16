<!DOCTYPE html>
<html>
	<head>
		<meta charset="GBK">
		<title>大掌门</title>
		<link href="/css/head.css" rel="stylesheet">
		<link href="/css/tab.css" rel="stylesheet">
		<#include "/common/include_newstyle_css.ftl" >
	</head>
	<style type="text/css">
    .tab_table{
        padding-top:20px;
    }
    .tab_table .tab_ul:after,.tab_table:after {
        clear: both;
    }
    .tab_table .tab_ul:after,.tab_table:after,
    .tab_table .tab_ul:before,.tab_table:before{
        display: table;
        line-height: 0;
        content: "";
    }
    .tab_table .tab_ul {
        list-style: none;
        padding: 0;
        margin: 0 0 -1px 25px;
        display: block;
        width: 98%;
        border-bottom: 1px solid #c5d0dc;
    }
    .tab_table .tab_ul li{
        margin-bottom: -1px;
        float:left;
        border-color: #c5d0dc;
    }
    .tab_table .tab_ul li .active_a {
        border-radius: 0 !important;
        background-color: #f9f9f9;
        color: #999;
        z-index: 11;
        border: 1px solid #c5d0dc;
        width: 118px;
        height: 35px;
        cursor: pointer;
        display: block;
        line-height: 35px;
        text-align: center;
        box-sizing: border-box;
    }
    .tab_table .tab_ul li .active_a:hover {
        background-color: #FFF;
        color: #4c8fbd;
        border-color: #c5d0dc;
    }
    .tab_table .tab_ul li.active .active_a {
        color: #576373;
        border-top: 2px solid #4c8fbd;
        border-bottom: 1px solid #fff;
        background-color: #FFF;
        z-index: 16;
        line-height: 35px;
        box-shadow: 0 -2px 3px 0 rgba(0,0,0,0.15);
        box-sizing: border-box;
    }
    .tab_table .tab_ul li .active_a span{
        padding: 0 4px;
        line-height: 15px;
        opacity: .75;
        background-color: #d15b47 !important;
        text-shadow: none;
        font-size: 12px;
        border-radius: 9px;
        margin-left:5px;
        color:#fff;
    }
    .tab_table .tab_ul li.active .active_a span{
        opacity: 1;
    }
    .tab_content{
        border: 1px solid #c5d0dc;
        position: relative;
        z-index: 11;
        float:left;
        margin: 0 0 10px 25px;
        overflow: auto;
        height: 560px;
        width: 98%;
        box-sizing: border-box;
        border-top: none;
    }
    .tab_table .caret{
        margin-bottom:3px;
        margin-left:10px;
        display: inline-block;
        width: 0;
        height: 0;
        border-top: 4px solid #000;
        border-top-color: rgb(0, 0, 0);
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
        border-top-color: #08c;
        border-bottom-color: #08c;
        content: "";
        color: #999;
        line-height: 16px;
    }
    .dataTable tbody tr td span{
        float:left;
        width:100%;
        line-height:22px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-top:5px;
    }
    .dataTable tbody tr td span h1{
        font-size:12px;
        float:left;
        width: 50px;
        text-align: right;
        padding-right: 5px;
    }
    .dataTable tbody tr td span h2{
        font-size:12px;
        float:left;
        width: 80px;
        text-align: right;
        padding-right: 5px;
    }
    .dataTable tbody tr td span h3{
        font-size:12px;
        float:left;
        width: 85px;
        text-align: right;
        padding-right: 5px;
    }
</style>
	<body>
	
	<div class="tab_table">
	    <ul class="tab_ul">
	        <li  class="active">
	            <a class="active_a" onclick="queryData('','','')">人物</a>
	        </li>
	        <li>
	            <a class="active_a" onclick="queryData('NOPAYED','','')">装备</a>
	        </li>
	        <li>
	            <a class="active_a" onclick="queryData('CONFIRMORDER,ONGOING','PAYED,PARTIALSHIPMENT,PARTIALSIGNED','')">武功</a>
	        </li>
	        <li>
	            <a class="active_a" onclick="queryData('CONFIRMORDER,ONGOING','','ONLINENOPAYED,PARTIALPAYMENT')">奇宝</a>
	        </li>
	        <li>
	            <a class="active_a" onclick="queryData('COMPLEDTRANSACTION','','')">真气</a>
	        </li>
	        <li>
	            <a class="active_a" onclick="queryData('SURCANCEL,PURCANCEL,TRANSACTIONCANCELLED','','')">信物</a>
	        </li>
	    </ul>
	    <div class="tab_content">
	       		<table id="qibao_list" style="width:800px;margin-left: 10px !important;margin-bottom: 40px !important;" border="0" cellspacing="0" cellpadding="0" class="tb2">
					<tbody>
						<tr>
							<td height="20">奇宝名称</td>
							<td height="20" colspan="2">主属性</td>
							<td height="20" colspan="4">附属性</td>
							<td height="20" colspan="2">二级属性</td>
						</tr>
					    	
					<tr id="tr_0" style="color:green !important;"><td height="20">倚天</td><td height="20" width="60">攻</td><td height="20">5.95%</td><td height="20" width="60">攻</td><td height="20">655</td><td height="20" width="60">攻</td><td height="20">920</td><td height="20">闪避</td><td height="20">298</td></tr><tr id="tr_1"><td height="20">金羊</td><td height="20" width="60">血</td><td height="20">4.9%</td><td height="20" width="60">血</td><td height="20">1274</td><td height="20" width="60">攻</td><td height="20">910</td><td height="20">命中</td><td height="20">423</td></tr><tr id="tr_2"><td height="20">玉女</td><td height="20" width="60">防</td><td height="20">2.94%</td><td height="20" width="60">攻</td><td height="20">637</td><td height="20" width="60">血</td><td height="20">1820</td><td height="20">防爆</td><td height="20">353</td></tr><tr id="tr_3"><td height="20">紫霞</td><td height="20" width="60">内</td><td height="20">4.2%</td><td height="20" width="60">攻</td><td height="20">602</td><td height="20" width="60">内</td><td height="20">890</td><td height="20">破招</td><td height="20">352</td></tr><tr id="tr_4"><td height="20">七伤</td><td height="20" width="60">防</td><td height="20">3.57%</td><td height="20" width="60">防</td><td height="20">399</td><td height="20" width="60">放</td><td height="20">558</td><td height="20">命中</td><td height="20">423</td></tr><tr id="tr_5"><td height="20">降龙</td><td height="20" width="60">血</td><td height="20">8.05%</td><td height="20" width="60">攻</td><td height="20">602</td><td height="20" width="60">血</td><td height="20">1780</td><td height="20">格挡</td><td height="20">300</td></tr><tr id="tr_6"><td height="20">金猴</td><td height="20" width="60">防</td><td height="20">4.9%</td><td height="20" width="60">内</td><td height="20">1274</td><td height="20" width="60">防</td><td height="20">910</td><td height="20">闪避</td><td height="20">423</td></tr><tr id="tr_7"><td height="20">七星</td><td height="20" width="60">血</td><td height="20">8.05%</td><td height="20" width="60">防</td><td height="20">357</td><td height="20" width="60">血</td><td height="20">1780</td><td height="20">命中</td><td height="20">352</td></tr><tr id="tr_8" style="color:green !important;"><td height="20">金狗</td><td height="20" width="60">攻</td><td height="20">4.9%</td><td height="20" width="60">血</td><td height="20">1274</td><td height="20" width="60">攻</td><td height="20">910</td><td height="20">格挡</td><td height="20">462</td></tr><tr id="tr_9" style="color:green !important;"><td height="20">圣火</td><td height="20" width="60">攻</td><td height="20">4.9%</td><td height="20" width="60">防</td><td height="20">378</td><td height="20" width="60">血</td><td height="20">1820</td><td height="20">暴击</td><td height="20">423</td></tr><tr id="tr_10" style="color:green !important;"><td height="20">真武</td><td height="20" width="60">攻</td><td height="20">5.95%</td><td height="20" width="60">攻</td><td height="20">672</td><td height="20" width="60">攻</td><td height="20">930</td><td height="20">暴击</td><td height="20">495</td></tr><tr id="tr_11"><td height="20">落英</td><td height="20" width="60">破刃</td><td height="20">193</td><td height="20" width="60">攻</td><td height="20">677</td><td height="20" width="60">攻</td><td height="20">1040</td><td height="20">暴击</td><td height="20">505</td></tr><tr id="tr_12"><td height="20">金刚</td><td height="20" width="60">防</td><td height="20">3.57%</td><td height="20" width="60">防</td><td height="20">399</td><td height="20" width="60">放</td><td height="20">558</td><td height="20">格挡</td><td height="20">412</td></tr><tr id="tr_13"><td height="20">御风</td><td height="20" width="60">内</td><td height="20">4.2%</td><td height="20" width="60">防</td><td height="20">357</td><td height="20" width="60">内</td><td height="20">890</td><td height="20">闪避</td><td height="20">300</td></tr><tr id="tr_14"><td height="20">金鸡</td><td height="20" width="60">血</td><td height="20">8.05%</td><td height="20" width="60">攻</td><td height="20">672</td><td height="20" width="60">血</td><td height="20">1820</td><td height="20">破招</td><td height="20">462</td></tr></tbody>
				</table>
	    </div>
	</div>
			<div class="subpage_box" style="width:1400px;">
				<h1 class="subpage_title"><span>&nbsp;</span>大掌门武林谱
				</h1>
			</div>
		
		
		<div id="shengxing_content" style="margin-top: 20px;margin-left: 100px;border:1px solid;width:450px;float:left;">
			<div style="margin-left: 10px;margin-top: 10px;margin-bottom: 20px;">
				升星二级数据查询：
			</div>
			<form id="shengxingForm">
				<div style="margin-left: 10px;margin-bottom: 20px;margin-top: 20px;">
					武器：<input type="text" name="wuqiXing" value="1" size="3">星
					衣服：<input type="text" name="yifuXing" value="1" size="3">星
					饰品：<input type="text" name="shipinXing" value="1" size="3">星
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
		
		<div style="margin-top: 20px;margin-left: 100px;border:1px solid;width:450px;float:left;">
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
		
		<div style="margin-top: 20px;margin-left: 100px;border:1px solid;width:450px;float:left;">
			<div style="margin-left: 10px;margin-top: 10px;margin-bottom: 20px;">
				真气数据查询：
			</div>
			<form id="zhenqiForm">
				<div style="margin-left: 10px;margin-bottom: 20px;margin-top: 20px;">
					<input type="text" name="name" value="攻" size="3">
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
		
	</body>
<#include "/common/include_newstyle_js.ftl" >  
<script language="javascript" type="text/javascript" src="../My97DatePicker/WdatePicker.js"></script>
<script type="text/javascript">
	$(function(){
		
		$(".tab_table li").click(function(){
	        $(".tab_table li").removeClass("active");
	        $(this).addClass("active");
	    })
	    
		$("#tupoQuery").click(function(){
			$("#tupo_list").find('tr[id^=tr_]').remove();
			$.ecpost({
			   url: "tupoQuery",
			   data: $("#tupoForm").serializeArray(),
			   success: function(data){
			   		var total = 0;
			   		$.each(data, function(i, n) {
					   	$("#tupo_list").append("<tr id='tr_"+i+"'><td height='20'>"+n.tupoNumber+"</td><td height='20'>"+n.tupoAmount+"</td></tr>");
					   	total += n.tupoAmount;
					});
					if (total > 0) {
						$("#total").html(total);
						$("#total_div").show();
					} else {
						$("#tupo_list").append("<tr id='tr_none'><td height='20' colspan='2'>暂无数据！！！</td></tr>");
						$("#total_div").hide();
					}
			   },
			   berror:function(){
			   		openMessage("系统出现异常！！！");
			   }
			});
		});
		
		$("#zhenqiQuery").click(function(){
			$("#zhenqi_list").find('tr[id^=tr_]').remove();
			$.ecpost({
			   url: "zhenqiQuery",
			   data: $("#zhenqiForm").serializeArray(),
			   success: function(data){
			   		$.each(data, function(i, n) {
					   	$("#zhenqi_list").append("<tr id='tr_"+i+"'><td height='20'>"+n.name+"</td><td height='20'>"+n.property+"</td></tr>");
					});
					if (data.size == 0) {
						$("#zhenqi_list").append("<tr id='tr_none'><td height='20' colspan='2'>暂无数据！！！</td></tr>");
					} 
			   },
			   berror:function(){
			   		openMessage("系统出现异常！！！");
			   }
			});
		});
		
		$("#shengxingQuery").click(function(){
			$("#shengxing_list").find('tr[id^=tr_]').remove();
			$.ecpost({
			   url: "shengxingQuery",
			   data: $("#shengxingForm").serializeArray(),
			   success: function(data){
			   		//alert(data.pozhao);
			   		var tr_str = "<tr id='tr_asdasd'>";
					tr_str += "<td height='20'>"+data.shanbi+"</td><td height='20'>"+data.mingzhong+"</td>";
					tr_str += "<td height='20'>"+data.gedang+"</td><td height='20'>"+data.pozhao+"</td>";
					tr_str += "<td height='20'>"+data.baoji+"</td><td height='20'>"+data.fangbao+"</td>";
					tr_str += "</tr>";
					
					$("#shengxing_list").append(tr_str);
					
					if (data.size == 0) {
						$("#shengxing_list").append("<tr id='tr_none'><td height='20' colspan='2'>暂无数据！！！</td></tr>");
					} 
			   },
			   berror:function(){
			   		openMessage("系统出现异常！！！");
			   }
			});
		});
		
		$("#tupoQuery").click();
		$("#zhenqiQuery").click();
		$("#shengxingQuery").click();
	});
	
	
    
</script>
</html>