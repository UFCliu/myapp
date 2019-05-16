<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8" />
<title>武林谱</title>
<meta name="description" content="">
<meta name="author" content="">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
<meta name="description" content="">
<#include "/common/include_newstyle_css.ftl" >
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
</head>
<body>	

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