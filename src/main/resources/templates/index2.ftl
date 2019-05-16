<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8" />
<title>智慧人生</title>
<meta name="description" content="">
<meta name="author" content="">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
<meta name="description" content="">
<#include "/common/include_newstyle_css.ftl" >
<style type="text/css">
    
    .box_content {
	    width: 1120px;
	    height: 100%;
	    background: #fff;
	    margin: 0 auto;
	    position: relative;
	}
	
	.content_left {
		margin-left:100px;
	    width: 280px;
	    position: absolute;
	    left: 0;
	}

    .info_box {
	    line-height: 30px;
	    background: url(./images/nanj/main_bg_06.png) repeat-x top left #dbf6ff;
	    border: 1px solid #6ccdeb;
	    border-radius: 3px;
	    margin: 0 0px 12px 0;
	}
	
	.first_li {
	    padding-top: 10px;
	    line-height: 30px;
	}
	
	ul, li {
	    margin: 0;
	    padding: 0;
	    list-style: none;
	}
	
	.dot_time {
	    font-size: 12px;
	    color: #afb4b6;
	    border-bottom: 1px dotted #00b6ef;
	}
	
	ul, menu, dir {
	    display: block;
	    list-style-type: disc;
	    -webkit-margin-before: 1em;
	    -webkit-margin-after: 1em;
	    -webkit-margin-start: 0px;
	    -webkit-margin-end: 0px;
	    -webkit-padding-start: 40px;
	}
	
	.dot_per {
	    height: 45px;
	    color: #333 !important;
	    background: url(./images/nanj/dot_person.png) no-repeat left center;
	    display: inline-block;
	    padding-left: 58px;
	    line-height: 45px;
	}
	
	.but_sbk {
	    height: 30px;
	    line-height: 24px;
	    font-size: 14px;
	    text-align: center;
	    background: url(./images/nanj/dot_shebaoka.png) no-repeat 0;
	    color: #ea6542;
	    border: 0;
	    cursor: pointer;
	    padding-left: 28px;
	}
	.dot_more {
	    width: 13px;
	    height: 13px;
	    display: inline-block;
	    background: url(./images/nanj/dot_more.png) no-repeat center;
	}
	
	.button_list li {
	    width: 138px;
	    height: 50px;
	    margin-bottom: 10px;
	    font-size: 14px;
	    text-align: left;
	    line-height: 50px;
	    background: url(./images/nanj/button_list.png) no-repeat 0 0;
	}
	
	.but_quanyi {
	    width: 45px;
	    height: 50px;
	    background: url(./images/nanj/button_list.png) no-repeat -155px 2px;
	    display: inline-block;
	}
	
	.button_list li {
	    width: 138px;
	    height: 50px;
	    margin-bottom: 10px;
	    font-size: 14px;
	    text-align: left;
	    line-height: 50px;
	    background: url(./images/nanj/button_list.png) no-repeat 0 0;
	}
	
	.but_list_right {
	    float: right;
	    color: #0097d6;
	}
	
	.but_ylj {
    width: 45px;
    height: 50px;
    background: url(./images/nanj/button_list.png) no-repeat -220px 2px;
    display: inline-block;
}
</style>
</head>
<body>	

<div class="content_left" style="height: 1369px;"><!--左边-->
	<!-- <h2 class="info_title"><span class="icon_info">参保基本信息</span><button onclick="refresh()" class="but_update">刷新 </button></h2> -->
	<div class="info_box"><!--信息内容-->
		<ul class="first_li">
			<li>
				<p><span class="dot_per">刘*清</span></p>
				<p class="dot_time">上次登录时间：2018-10-18 18:52:58</p>
			</li>
			<li>身份证号:<span>3207***********810</span></li>
			<li>人员状态:<span>暂停缴费人员</span></li>
			<li>社保卡号:<span>100****064</span></li>

			<li class="last_li">
				<a target="_blank" id="refresh" href="/njwsbs/index.do?method=showSub&amp;fid=018095145b8fc61f015b9ebfa4700022"><button class="but_sbk">社保卡服务</button><span class="dot_more"></span></a> 
			</li>
		</ul>
	</div>
	
	<ul class="button_list"><!-- 常用的快捷按钮 -->
		<a target="_blank" href="/njwsbs/index.do?method=showSub&amp;fid=0180803357039c0f0157039f6de60002"><li class="but_list_left but_quanyi"><span class="but_quanyi">&nbsp;</span>个人权益记录单</li></a>
		<a target="_blank" href="/njwsbs/index.do?method=showSub&amp;fid=018080335703bd5e015704461e3e000b"><li class="but_list_right"><span class="but_ylj">&nbsp;</span>社保缴费清单</li></a>
	</ul>
	
	<div class="left_data_box"><!-- 主要近期明细等数据展现区 -->
	<div class="view_box">
		<ul><!--切换标题 -->
			<li class="tab_on">近期明细<span class="view_blank">|</span></li>
			<li onclick="getQyzy()">权益摘要</li>
			<p><b></b></p>
		</ul>
	</div>
	<div class="product-wrap">
		<div class="product show">
			
		<ul class="list_detail">
			<li>
		<p class="out_ylbx"></p>
		<p class="quanyi_title">2017-07-21 11:42:30</p><br>
		<p>&nbsp;&nbsp;<span class="fxClass">医保账户   注入     1.63元</span><b class="detail_unit"></b></p>
		</li>
		<li>
		<p class="out_ylbx"></p>
		<p class="quanyi_title">2016-09-05 11:21:35</p><br>
		<p>&nbsp;&nbsp;<span class="fxClass">医保账户   注入     5.75元</span><b class="detail_unit"></b></p>
		</li>
		<li>
		<p class="out_ylbx"></p>
		<p class="quanyi_title">2015-12-18 10:29:26</p><br>
		<p>&nbsp;&nbsp;<span class="fxClass">医保账户   支出     27.88元</span><b class="detail_unit"></b></p>
		</li>
		<li>
		<p class="out_ylbx"></p>
		<p class="quanyi_title">2015-09-09 12:29:54</p><br>
		<p>&nbsp;&nbsp;<span class="fxClass">医保账户   注入     18.32元</span><b class="detail_unit"></b></p>
		</li>
		<li>
		<p class="out_ylbx"></p>
		<p class="quanyi_title">2015-08-12 10:56:02</p><br>
		<p>&nbsp;&nbsp;<span class="fxClass">医保账户   支出     404元</span><b class="detail_unit"></b></p>
		</li>
		<li>
		<p class="out_ylbx"></p>
		<p class="quanyi_title">2015-06-22 10:56:39</p><br>
		<p>&nbsp;&nbsp;<span class="fxClass">医保账户   支出     391.2元</span><b class="detail_unit"></b></p>
		</li>

		</ul>
		</div>
		<div class="product"> <!--权益摘要 -->
			<ul id="qyzyid" class="list_detail">
			
			</ul>
		</div>
	</div>
	</div><!-- 主要近期明细等数据展现区结束 -->
</div>
<!--
<div class="button_toolbar">
	<a href="javascript:void(0);" id="btnDetail">订单明细</a>
</div>
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
       	<#list heroList as hero>
       		<span style="position:relative;float:left;padding:10px;margin-top:15px;margin-left:15px;">
				<a href="javascript:void(0);" id="showHero"><span id=""><img src="${hero.picMin}" style="height:54px;height:54px;"></span></a>
				<div style="font-size:12px;text-align:center;">${hero.name}</div>
			</span>
        </#list>
    </div>
</div>
-->
<#include "/common/include_newstyle_js.ftl" >  
<script type="text/javascript">
	$(function(){
		 $(".tab_table li").click(function(){
	        $(".tab_table li").removeClass("active");
	        $(this).addClass("active");
	    })
	    
	    $("#showHero").click(function(){
	    	alert($(this).attr("id"));
			openMessage("独孤求败！！！");
		});
	});
	
	function queryData(orderState,shippingState,paymentState){
            openMessage("非供应商不能发货！");
    }
    
    
</script>
</body>