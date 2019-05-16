<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8" />
<title>订单列表</title>
<meta name="description" content="">
<meta name="author" content="">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
<meta name="description" content="">
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
<!--<h2 class="details_title">查询条件</h2>-->
<div class="search_bar">
  <form id="queryForm">
  <div class="condition">
    <ul class="select_down">
      <li>
        <label>商品名称：</label>
        <input maxlength="30" value=""  type="text" id="productName" name="productName"/>
      </li>
      <li>
        <label>订单编号：</label>
        <input maxlength="30" value=""  type="text" id="codeno" name="codeno"/>
      </li>
      <li>
        <label>采购商：</label>
        <input maxlength="100" value=""  type="text" id="memberLabel" name="memberLabel"/>
      </li>
     <li>
        <label>配送方式：</label>
        <select id="deliveryModeEnum" name="deliveryModeEnum">
			<option value="">查看全部</option>
			<option value="SELLER">卖家配送</option>
			<option value="OWN">自提货物</option>
		</select>
      </li>
      <li>
        <label>支付渠道：</label>
        <select id="paymode" name="paymode">
			<option value="">查看全部</option>
			<option value="2">账期宝</option>
			<option value="1">线下支付</option>
			<option value="0">在线支付</option>
		</select>
      </li>     
      <li>
        <label>供应商签订状态：</label>
		<select id="supplierSignStateEnum" name="supplierSignStateEnum">
			<option value="">查看全部</option>
			<#if supplierSignState??>
			<#list supplierSignState as state>
				<#if state == "未签订">
					<option value="UNSIGN">${state}</option>
				<#elseif state == "已签订" >
					<option value="SURSIGN">${state}</option>
				</#if>
			</#list>
			</#if>
		</select>
      </li>
      <li>
        <label>采购商签订状态：</label>
		<select id="purchaserSignStateEnum" name="purchaserSignStateEnum">
			<option value="">查看全部</option>
			<#if purchaserSignState??>
			<#list purchaserSignState as state>
				<#if state == "未签订">
					<option value="UNSIGN">${state}</option>
				<#elseif state == "已签订" >
					<option value="PURSIGN">${state}</option>
				</#if>
			</#list>
			</#if>
		</select>
      </li>
      <li>
        <label>支付状态：</label>
		<select id="paymentState" name="paymentState">
			<option value="">查看全部</option>			
			<option value="ONLINENOPAYED">未支付</option>
			<option value="ONLINEPAYED">已支付</option>
		</select>
      </li>
       	  <input type="hidden" id="orderStateListQ" name=orderStateListQ  value="" />
          <input type="hidden" id="paymentStateList" name="paymentStateList" value=""/>
          <input type="hidden" id="shippingStateList" name="shippingStateList"  value=""/>
    </ul>
    <ul class="list hidden">
      <li>
      	<label>生产企业：</label>
        	<input maxlength="30" value=""  type="text" id="manufacture" name="manufacture"/>
      </li>
      <li>
      	<label>产品批号：</label>
        	<input maxlength="30" value=""  type="text" id="batchNo" name="batchNo"/>
      </li>
      <li class="laydate">
        <label style="margin-left: 0px;">下单时间：</label>
        <!--日历插件 part2 start-->
        <ul class="inline">
          <li class="inline" id="start">
            <input id="startDate" name="startDate"  value="" class="laydate-icon" readonly="readonly"/> 
          </li>
          <li class="text">至</li>
          <li class="inline" id="end">
            <input id="endDate" name="endDate"  value="" class="laydate-icon" readonly="readonly"/>
          </li>
        </ul>
        <!--日历插件 part2 end--> 
      </li>
       <li>
        <label>退货处理：</label>
		<select id="needReturn" name="needReturn">
			<option value="">查看全部</option>
			<option value="0">需要退货</option>
			<option value="1">已退货</option>
		</select>
      </li>
      <!-- 添加按支付时间查询开始 -->
      <li class="laydate">
        <label style="margin-left: 0px;">支付时间：</label>
        <ul class="inline">
          <li class="inline" id="start">
            <input id="payStartDate" name="payStartDate"  value="" class="laydate-icon" readonly="readonly"> 
          </li>
          <li class="text">至</li>
          <li class="inline" id="end">
            <input id="payEndDate" name="payEndDate"  value="" class="laydate-icon" readonly="readonly">
          </li>
        </ul>
      </li>
      <!-- 添加按支付时间查询结束 -->
      <li>
        <label for="my_check" >是否过滤测试数据：</label>
        <select id="memberIsTest" name="memberIsTest">
			<option value="" >否</option>
			<option value="0" selected='selected'>是</option>
		</select>
      <!--   <input id="my_check" name="my_check" value="1" checked type="checkbox" style="height:32px;line-height: 32px;width:14px;float:left;border:0;" onclick="change_audit_state();"/> -->
      </li>
       <input type="hidden" id="orgTypeList" name="orgTypeList" />
        <li id="orgTypeCheck" style="min-width:900px;width: 100% !important;" class="checkboxOrg">
            <label style="width:13.3%;">采购商类型：</label>
            <div style="display:inline-block;width:85%; ">                
              <span style="display: inline-block; width: 120px;">
                 <input type="checkbox" name="orgtype" value="chain" style="height:32px;line-height: 32px;width:14px;float:left;border:0;" />
                 <span style="width:80px; text-align: left;">连锁经营企业</span>
              </span> 
              <span style="display: inline-block; width: 120px;">
                 <input type="checkbox" name="orgtype" value="retail_business" style="height:32px;line-height: 32px;width:14px;float:left;border:0;" />
                 <span style="width:80px; text-align: left;">零售经营企业</span>
              </span>
              <span style="display: inline-block; width: 120px;">
                 <input type="checkbox" name="orgtype" value="hospital" style="height:32px;line-height: 32px;width:14px;float:left;border:0;" />
                 <span style="width:80px; text-align: left;">医院</span>
              </span>                                                     
              <span style="display: inline-block; width: 120px;">
                 <input type="checkbox"  name="orgtype" value="clinic" style="height:32px;line-height: 32px;width:14px;float:left;border:0;" />
                 <span style="width:80px; text-align: left;">诊所</span>
              </span> 
              <span style="display: inline-block; width: 120px;">
                 <input type="checkbox" name="orgtype"  value="production" style="height:32px;line-height: 32px;width:14px;float:left;border:0;" />
                 <span style="width:80px; text-align: left;">生产企业</span>
              </span>
              <br/>
              <span style="display: inline-block; width: 120px;">
                 <input type="checkbox"  name="orgtype" value="wholesalebusiness" style="height:32px;line-height: 32px;width:14px;float:left;border:0;" />
                 <span style="width:80px; text-align: left;">批发经营企业</span>
              </span>
              <span style="display: inline-block; width: 120px;">
                 <input type="checkbox" name="orgtype"  value="other" style="height:32px;line-height: 32px;width:14px;float:left;border:0;" />
                 <span style="width:80px; text-align: left;">其他</span>
              </span>
              <span style="display: inline-block; width: 120px;">
                 <input type="checkbox" name="orgtype" value="store" style="height:32px;line-height: 32px;width:14px;float:left;border:0;" />
                 <span style="width:80px; text-align: left;">连锁门店</span>
              </span>
            <div>
       </li>
    </ul>
  </div>
  <div class="buttons">
    <div class="inner">
      <p class="button">
      		<input id="btnQuery" type="button" value="查询" class="submit" />
      		<input onclick="return resetClick();" type="reset" value="重置" class="reset" />
      </p>
      <a href="javascript:void(0);" class="text" id="link_search">高级搜索</a> </div>
  </div>
  </form>
</div>
<form action="${signUrl}" id="signContract" method="post" target="_blank">
	<input type="hidden" name="appid" id="sign_appid"/>
	<input type="hidden" name="time" id="sign_time"/>
	<input type="hidden" name="sign" id="sign_sign"/>
	<input type="hidden" name="sign_type" id="sign_sign_type"/>
	<input type="hidden" name="orderid" id="sign_orderid"/>
	<input type="hidden" name="type" value="1"/>
	<input type="hidden" name="sign_return" value="1"/>
	<input type="hidden" name="ucid" id="sign_ucid"/>
</form>

<form action="${bindingUrl}" id="binding" method="post" target="_blank">
	<input type="hidden" name="appid" id="binding_appid"/>
	<input type="hidden" name="time" id="binding_time"/>
	<input type="hidden" name="sign" id="binding_sign"/>
	<input type="hidden" name="sign_type" id="binding_sign_type"/>
	<input type="hidden" name="ucid" id="binding_ucid"/>
</form>
<div class="button_toolbar">
<a href="javascript:void(0);" id="btnDetail">订单明细</a>
<a href="javascript:void(0);" id="confirmOrder">供应商确认订单</a> 
<a href="javascript:void(0);" id="btnSign">电子合同</a>
<a href="javascript:void(0);" id="btnCancel">订单取消</a>
<a href="javascript:void(0);" id="btnLogicTrack">物流跟踪</a>
<a href="javascript:void(0);" id="btnExport">订单明细导出</a>
<a href="javascript:void(0);" id="btnExportOrder">订单导出</a>
<a href="javascript:void(0);" id="btnSend">发货</a>
<a href="javascript:void(0);" id="btnUpdate">修改</a>
<a href="javascript:void(0);" id="btnTrack">订单跟踪信息</a>
<a href="javascript:void(0);" id="splitShipment">设置分批发货</a>
</div>
<div class="tab_table">
    <ul class="tab_ul">
        <li  class="active">
            <a class="active_a" onclick="queryData('','','')">全部订单<span class="all">0</span></a>
        </li>
        <li>
            <a class="active_a" onclick="queryData('NOPAYED','','')">待确认<span class="nopayed">0</span></a>
        </li>
        <li>
            <a class="active_a" onclick="queryData('CONFIRMORDER,ONGOING','PAYED,PARTIALSHIPMENT,PARTIALSIGNED','')">待发货<span class="waitShipping">0</span></a>
        </li>
        <li>
            <a class="active_a" onclick="queryData('CONFIRMORDER,ONGOING','','ONLINENOPAYED,PARTIALPAYMENT')">待付款<span class="waitPay">0</span></a>
        </li>
        <li>
            <a class="active_a" onclick="queryData('COMPLEDTRANSACTION','','')">交易完成<span class="compledtransaction">0</span></a>
        </li>
        <li>
            <a class="active_a" onclick="queryData('SURCANCEL,PURCANCEL,TRANSACTIONCANCELLED','','')">已取消<span class="canncel">0</span></a>
        </li>
    </ul>

    <div class="tab_content">
        <div id="mem_appro_tb" class="table_list">
            <table border="0" align="right" cellpadding="0" cellspacing="0" id="example">
                <colspan>
                    <col class="lark-t-xl" />
                    <col class="lark-t-lsm" />
                    <col class="lark-t-lxl" />
                    <col class="lark-t-sm" />
                    <col class="lark-t-sm" />
                    <col class="lark-t-lxl" />
                    <col class="lark-t-lsm" />
                    <col class="lark-t-lsm" />
                    <col class="lark-t-lmd" />
                    <col class="lark-t-lg" />
                    <col class="lark-t-lsm" />
                    <col class="lark-t-md" />
                    <col class="lark-t-sm" />
                    <col class="lark-t-lmd" />
                </colspan>
                <thead>
                <tr>
                    <th title="订单ID">订单ID</th>
                    <th title="合同ID">合同ID</th>
                    <th title="订单编号/序号">订单编号/序号</th>
                    <th title="订单状态">订单状态</th>
                    <th title="采购商名称/ERP采购商ID/供应商名称">采购商名称/ERP采购商ID/供应商名称</th>
                    <th title="支付渠道/支付状态">支付渠道/支付状态</th>
                    <th title="发货状态/签收状态">发货状态/签收状态</th>
                    <th title="商品名称">商品名称</th>
                    <th title="订单总数量">订单总数量</th>
                    <th title="订单金额(元)">订单金额(元)</th>
                    <th title="商品金额(元)/优惠金额(元)">商品金额(元)/优惠金额(元)</th>
                    <th title="下单时间/支付时间">下单时间/支付时间</th>
                    <th title="配送方式">配送方式</th>
                    <th title="合同编号/采购商签订状态/供应商签订状态">合同编号/采购商签订状态/供应商签订状态</th>
                    <th title="退货处理">退货处理</th>
                    <th title="修改时间">修改时间</th>
                    <th title="取消原因">取消原因</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
</div>


<div id="sign" style="width:500px;" class="white_content color1" >
	<b class="b1"></b><b class="b2"></b><b class="b3"></b><b class="b4"></b>
	<form id="formId" action="" method="post">
	<input type="hidden" id="SubAccountId" name="SubAccountId"/>
  	<div class="popup_title content ">
      <h2 class="details_title_popup content" id="title">签订提示</h2>
      <a href="javascript:void(0);" onclick="toSignResult()"><img  src="/resources/newstyle/images/icon_popup.png" width="14" height="14"/></a>
      <span class="popup_b"></span>
    </div>
    <div class="search_bar_popup content">
      <div class="condition">
        <div class="info_list">
          <ul class="select_down">
          <li class="w_all">
            	请您在新打开的云签系统界面进行签订，签订完成前，请不要关闭该窗口
          </li>
          <li class="w_b50 fl">
            <div class="button_toolbar">
            	<a href="#" onclick="toSignResult()">完成签订</a>
            </div>
          </li>
          <li class="w_b50 fl">
            <div class="button_toolbar">
            	<a href="#" onclick="toSignResult()">签订遇到问题</a>
            </div>
          </li>
          </ul>
          <br/><br/>
        </div>
      </div>
    </div>
    </form>
      <b class="b5"></b><b class="b6"></b><b class="b7"></b><b class="b8"></b> 
  </div>
</div>

<div id="porcessloading" style="width:540px;" class="white_content color1" >
	<b class="b1"></b><b class="b2"></b><b class="b3"></b><b class="b4"></b>
    <form id="viewForm" class="form-horizontal">
    <div class="popup_title content ">
      	<h2 class="details_title_popup content" id="title"><img src="/resources/images/loading.gif" alt="" />订单取消中，请稍等。。。</h2>
    </div>
	</form>
	<b class="b5"></b><b class="b6"></b><b class="b7"></b><b class="b8"></b>
</div>

<div id="refusal" style="width:500px;" class="white_content color1" >
	<b class="b1"></b><b class="b2"></b><b class="b3"></b><b class="b4"></b>
	<form id="formId" action="" method="post">
	<input type="hidden" id="SubAccountId" name="SubAccountId"/>
  	<div class="popup_title content ">
      <h2 class="details_title_popup content" id="title">撤销合同提示</h2>
      <a href="javascript:void(0);" onclick="toRefusalResult()"><img  src="/resources/newstyle/images/icon_popup.png" width="14" height="14"/></a>
      <span class="popup_b"></span>
    </div>
    <div class="search_bar_popup content">
      <div class="condition">
        <div class="info_list">
          <ul class="select_down">
          <li class="w_all">
            	请您在新打开的云签系统界面进行合同撤销，撤销完成前，请不要关闭该窗口
          </li>
          <li class="w_b50 fl">
            <span style="background-color:gray"><a href="#" onclick="toRefusalResult()">完成撤销</a></span>
          </li>
          <li class="w_b50 fl">
            <span style="background-color:gray"><a href="#" onclick="toRefusalResult()">撤销遇到问题</a></span>
          </li>
          </ul>
          <br/><br/>
        </div>
      </div>
    </div>
    </form>
      <b class="b5"></b><b class="b6"></b><b class="b7"></b><b class="b8"></b> 
  </div>
</div>
<!---->
<div id="viewModal" style="width:540px;" class="white_content color1" >
	<b class="b1"></b><b class="b2"></b><b class="b3"></b><b class="b4"></b>
	<div class="popup_title content">
  	  <h2 class="details_title_popup">取消原因</h2>
  	  <a href="javascript:void(0);" onclick="closePopupById('viewModal');"><img src="/resources/newstyle/images/icon_popup.png" width="14" height="14"/></a>
  	  <span class="popup_b"></span>
    </div>
    <form id="viewForm" class="form-horizontal">
	<div class="search_bar_popup content">
	  <div class="condition">
	      <ul class="w_all">
	      	<li class="w_all" id="couponReturnFlagli">
	          <label class="w_100">是否退还优惠券：</label>
	          			<input value="true"  type="radio" checked="true" size="1" name="couponReturnFlag" class="radio fl" />
						<span style="padding-left:0;" class="text fl w_50">是</span>
						<input type="radio" name="couponReturnFlag" class="radio fl" value="false" size="1"/>
						<span style="padding-left:0;" class="text fl w_50">否</span> 
	        </li>
	        <li class="w_all">
	          <label class="w_100">取消原因：</label>
	          <textarea name="cancelReasons" id="cancelReasons" cols="" rows="" class="fl w_b70" style="resize:none;"></textarea>
	        </li>
	      </ul>
	  </div>
	  <div class="button_toolbar"><span class="fr"><a id="btnConfirm" href="javascript:void(0);">确定</a> <a id="closeBtn" onclick="closePopupById('viewModal');" href="javascript:void(0);">取消</a></span> </div>
	</div>
	</form>
	<b class="b5"></b><b class="b6"></b><b class="b7"></b><b class="b8"></b>
</div>

<!--账户选择-->
  <div id="accountModal" style="width:540px;" class="white_content color1" >
    <b class="b1"></b><b class="b2"></b><b class="b3"></b><b class="b4"></b>
      <div class="popup_title content">
        <h2 class="details_title_popup">账户选择</h2>
        <a href="javascript:void(0);" onclick="closePopupById('accountModal');"><img src="/resources/newstyle/images/icon_popup.png" width="14" height="14"/></a>
        <span class="popup_b"></span>
      </div>
      <div class="search_bar_popup content">
      	<form id="accountForm" action="/order/toContract.jhtml">
      	<input type="hidden" id="orderId" name="orderId"/>
		<input type="hidden" id="orderNumbers" name="orderNumbers"/>
        <div class="condition">
          <div class="info_list">
            <ul id="accountListUl" class="select_down">
            </ul>
          </div>
        </div>
        <div class="button_toolbar"><span class="fr"><a id="btnAccount" href="javascript:void(0)" >确定</a><a onclick="closePopupById('accountModal');">取消</a></span> </div>
        </form>
      </div>
    	<b class="b5"></b><b class="b6"></b><b class="b7"></b><b class="b8"></b>
  </div>
  
<!--查看弹出层 内容模板 start-->
<div id="light" style="width:540px;" class="white_content color1" >
	<b class="b1"></b><b class="b2"></b><b class="b3"></b><b class="b4"></b>
	<div class="popup_title content ">
		<h2 class="details_title_popup" id="popup_title">提示</h2>
		<a href="javascript:void(0);" onclick="closePopup();"><img src="../images/icon_popup.png" width="14" height="14"/></a>
		<span class="popup_b"></span>
	</div>
	<div  class="search_bar_popup content">
	</div>
	<b class="b5"></b><b class="b6"></b><b class="b7"></b><b class="b8"></b>
</div>
<!-- <!--查看弹出层 内容模板 end- -->
<!-- <div class="loading" id="loading"> -->
<!-- 	<img src="${ctx}/resources/images/loading.gif" alt="" /> -->
<!-- 	<span>正在导出，请稍候…</span> -->
<!-- </div> -->
<!-- <!--查看弹出层 黑背景 start--> 
<!-- <iframe id="fade" src="" class="black_overlay"></iframe> -->
<!--查看弹出层 黑背景 end--> 
<!--查看弹出层 end--> 
<!--查看弹出层 黑背景 start-->
<div id="fade" class="black_overlay"></div>
<!--查看弹出层 黑背景 end-->
</body>
	<#include "/common/include_newstyle_js.ftl" >  
	<script type="text/javascript">
		var table;
        var dt;
        $(function(){
            $(".tab_table li").click(function(){
                $(".tab_table li").removeClass("active");
                $(this).addClass("active");
            })
			 table = $('#example').dataTable({
				 "scrollX": true, "scrollY": "420px", "scrollCollapse": true,
		          "fnServerData" : function(sSource, aDataSet, fnCallback) {  
                        $.ajax({
                            "url" : "/order/list.ajax?flag=1&"+$("#queryForm").serialize(),
                            "type" : "POST",  
                            "data" : aDataSet,  
                            "success" : function(resp){
                            	fnCallback(resp);
                            	if($('#totalAmountInfo')){
                            		$("#totalAmountInfo").remove();
                            	}
                            	$('#example_wrapper').append('<div id="totalAmountInfo" style="color:red;">订单金额合计/商品金额合计（元）：'+ getNUM(resp.condition.totalAmount) + '/' + getNUM(resp.condition.productAmount) + '</div>');
                                orderCount();
                            }
                        });  
                   },
				  "oLanguage" : {
						"sUrl" : "${ctx}/resources/newstyle/js/dataTables.zh_CN.js"
					  },
					  "serverSide" : true,
					  "bStateSave" : false,
					  "searching" : false,//search delete
					  "sPaginationType" : "full_numbers",//分页
					  'dom' : '<"top">rt<"bottom"ilp><"clear">',
					  'iDisplayLength' : 10,
					  "bProcessing" : true,
					  "ordering" : false,
					  "processing" : true,
					  "bLengthChange" : true,
				  "bAutoWidth": false,
		          "aoColumns": [
		          	{ "data": "id" ,
                	  "bVisible": false
                	},
                    { "data": "contractId" ,
                        "bVisible": false
                    },
					{ "data": null,
                        "mRender": function(data, type, full){
                            return "<span title='"+ data.codeno +"'><h1>订单编号:</h1><a href='javascript:void(0);' style='color: #0000FF;' onclick='detail("+data.id+")'>"
                                    + data.codeno +"</a></span>"
                                    + "<span title='"+ data.id +"'><h1>序号:</h1>"+data.id+"</span>";
                        }
                    },
					{ "data": "orderState",
						"mRender": function(data, type, row){
							var value= " - ";
							if ("NOPAYED" == data) {
								value = "供应商确认中";
							}else if ("PAYED" == data) {
								value = "已支付";
							}else if ("NOSHIPPED" == data) {
								value = "待发货";
							}else if ("PARTIALSHIPMENT" == data) {
								value = "部分发货";
							}else if ("PARTIALSIGNED" == data) {
								value = "部分签收";
							}else if ("SHIPPED" == data) {
								value = "全部发货";
							}else if ("SIGNED" == data) {
								value = "已签收";
							}else if ("COMPLEDTRANSACTION" == data) {
								value = "交易完成";
							}else if ("SURCANCEL" == data) {
								value = "供应商已取消";
							}else if ("PURCANCEL" == data) {
								value = "采购商已取消";
							}else if ("TRANSACTIONCANCELLED" == data) {
								value = "交易关闭";
							}else if ("BUYERTAKE" == data) {
								value = "买家自提";
								
							/* <#-- 增加确认订单流程 开始 change by ldk --> */
							}else if("CONFIRMORDER"==data){
								value="已确认";
							}
							/* <#-- 增加确认订单流程 结束 change by ldk --> */
							 else if("PARTIALPAYMENT"==data){
								value="部分支付";
							} else if("ONGOING"== data){
								value="进行中";
							} else if("PURCONFIRMATION"== data){
								value="采购商确认中";
							}
							return value;
						}
					},
					{ "data": null ,
						"mRender": function(data, type, row){
                            var erpMemberId = " - ";
                            if(data.erpMemberId != null && data.erpMemberId != ""){
                                erpMemberId = data.erpMemberId
                            }
                            if(data.orgType!=null){
                                return "<span title='"+data.memberLabel+"' style='width:92%;'><h2>采购商名称:</h2>"+data.memberLabel+"</span>"+
                                        "<a title='您好，该采购商的企业类型为连锁门店，根据《药品零售连锁企业准入标准》规定不得独立采购。' style='float: left;padding:5px 0 0 2px; '><img width='15' height='15' src='/resources/newIndex/images/red_light.png'></a>" +
                                        "<span tilte='"+erpMemberId+"'><h2>ERP采购商ID:</h2>"+erpMemberId+"</span>"+
                                        "<span title='"+data.supplierLabel+"'><h2>供应商名称:</h2>"+ data.supplierLabel +"</span>";

                            }
                            return "<span title='"+data.memberLabel+"'><h2>采购商名称:</h2>"+data.memberLabel+"</span>" +
                                    "<span title='"+erpMemberId+"'><h2>ERP采购商ID:</h2>"+ erpMemberId +"</span>" +
                                    "<span title='"+data.supplierLabel+"'><h2>供应商名称:</h2>"+ data.supplierLabel +"</span>";

                        }
					},
					{ "data": null,
                        "mRender": function(data, type, row){
                            var paymentState = "-";
                            if("ONLINENOPAYED" == data.paymentStateEnum){
                                paymentState = "未支付";
                            }else if("ONLINEPAYED" == data.paymentStateEnum){
                                paymentState = "已支付";
                            }
                            var paymode = "-"
                            if ("1" == data.paymode) {
                                paymode = "线下支付";
                            }else if("2" == data.paymode){
                            	paymode = "账期宝";
                            }else {
                                paymode = "在线支付";
                            }
                            return "<span title='"+paymode+"'><h1>支付渠道:</h1>"+paymode+"</span>" +
                                    "<span title='"+paymentState+"'><h1>支付状态:</h1>"+paymentState+"</span>";
                        }
					},
                    { "data": null,
                      "mRender": function(data, type, row){
                          var transport= " - ";
                          if ("PAYED" == data.transportState) {
                              transport = "未发货";
                          } else if ("PARTIALSHIPMENT" == data.transportState){
                              transport = "部分发货";
                          } else if ("SHIPPED" == data.transportState){
                              transport = "已发货";
                          } else if ("SHIPPALL" == data.transportState) {
                              transport = "全部发货";
                          } else if ("SIGNED" == data.transportState) {
                              transport = "已发货";
                          }
                          var signed= " - ";
                          if ("PAYED" == data.transportState) {
                              signed = "未签收";
                          }else if("PARTIALSIGNED" == data.transportState){
                              signed = "部分签收";
                          } else if ("SIGNED" == data.transportState){
                              signed = "已签收";
                          }

                          return "<span title='"+transport+"'><h1>发货状态:</h1>" + transport + "</span>" +
                                  "<span title='"+signed+"'><h1>签收状态:</h1>" + signed + "</span>";
                      }
                    },
					{ "data": "productName" },
					{ "data": "amount" },
					{ "data": "orderAmount" ,
						"mRender": function(data, type, row){
						 	return getNUM(data);
						}
					},
                    { "data": null ,
                       "mRender": function(data, type, row){
                           return "<span title='"+getNUM(data.productMoney)+"'><h1>商品金额:</h1>"+getNUM(data.productMoney)+"</span>"+
                              "<span title='"+getNUM(data.passMoney)+"'><h1>优惠金额:</h1>"+getNUM(data.passMoney)+"</span>";
                        }
                    },
                    { "data": null ,
                      "mRender": function(data,type,row) {
                          var payTime = "-";
                          if (data.minPayTime != null && data.minPayTime != '') {
                              payTime = new Date(data.minPayTime).format("yyyy-MM-dd hh:mm");
                          }
                          var orderDate = "-";
                          if (data.orderDate != null && data.orderDate != '') {
                              orderDate = new Date(data.orderDate).format("yyyy-MM-dd hh:mm") ;
                          }
                          return "<span title='"+orderDate+"'><h1>下单时间:</h1>" + orderDate + "</span>" +
                                  "<span title='"+payTime+"'><h1>支付时间:</h1>" + payTime + "</span>";
                      }
                    },
					{ "data": "deliveryModeEnum" ,
						"mRender": function(data, type, row){
							var value= " - ";
							if ("SELLER" == data) {
								value = "卖家配送";
							}else{
								value = "自提货物";
							}
							return value;
						}
					},
					<#if userType.name()=="OPERATORS">
					{ "data": "partnerName"},
					{ "data": "partnerId"},
					</#if>
                    { "data": null  ,
                      "mRender": function(data, type, row){
                          var purchaserSignStateEnum= " - ";
                          if ("PURSIGN" == data.purchaserSignStateEnum) {
                              purchaserSignStateEnum = "已签订";
                          }else  if("CANCEL" == data.purchaserSignStateEnum){
                              purchaserSignStateEnum = "取消";
                          } else{
                              purchaserSignStateEnum = "未签订";
                          }
                          var supplierSignStateEnum= " - ";
                          if ("SURSIGN" == data.supplierSignStateEnum) {
                              supplierSignStateEnum = "已签订";
                          }else if("CANCEL" == data.supplierSignStateEnum){
                              supplierSignStateEnum = "取消";
                          } else{
                              supplierSignStateEnum = "未签订";
                          }
                          return "<span title='"+(data.contractCode == null? " - ":data.contractCode)+"'><h3>合同编号:</h3>"+(data.contractCode == null? " - ":data.contractCode)+"</span>"+
                                 "<span  title='"+purchaserSignStateEnum+"'><h3>采购商签订状态:</h3>"+purchaserSignStateEnum+"</span>"+
                                 "<span  title='"+supplierSignStateEnum+"'><h3>供应商签订状态:</h3>"+supplierSignStateEnum+"</span>";
                      }
                    },
                    { "data": "needReturn",
                      "mRender": function(data, type, row){
                          if (0 == data) {
                              value = "需要退货";
                          }else if(1 == data){
                              value = "已退货";
                          }else {
                              value = "-";
                          }
                          return value;
                      }
                    },
					{ "data": "modifyTime",
						 "mRender": function(data,type,row) {
	                    	return new Date(data).format("yyyy-MM-dd hh:mm");  
                		}  
					},
					{ "data": "cancelReasons",
					  "bVisible": false
					}
				  ] 
			});
			
			dt = $('#example').DataTable();
			
			
			// 查询
			$("#btnQuery").click(function(){
                queryData();
    		});

 			// 订单明细
			$("#btnDetail").click(function(){
				detail();
			});
			
			// 订单跟踪信息
			$("#btnTrack").click(function(){
				//供应商是否被冻结
		    	if(!validIsFreeze()){
		    		return;
		    	}
				if(!unCheckedAlert(dt.row('.currSelected').data())) {
					return false;
				}
				var id = dt.row('.currSelected').data().id;
				window.location.href = '/trackorder/toList.jhtml?id='+id;
			});
			
			// 订单修改
			$("#btnUpdate").click(function(){
				//供应商是否被冻结
		    	if(!validIsFreeze()){
		    		return;
		    	}
				if(!unCheckedAlert(dt.row('.currSelected').data())) {
					return false;
				}
				var id = dt.row('.currSelected').data().id;
				var orderstate = dt.row('.currSelected').data().orderState;
				
				var purchaserSignState = dt.row('.currSelected').data().purchaserSignStateEnum;
				var supplierSignState = dt.row('.currSelected').data().supplierSignStateEnum;
				
				if ("PURSIGN" == purchaserSignState || "SURSIGN" == supplierSignState) {
					openMessage("此订单状态不允许修改");
					return;
				}
							
				if(orderstate == "NOSHIPPED" || orderstate == "NOPAYED" || orderstate == "PAYED"){
					window.location.href = '/order/toOrderUpdate.jhtml?orderId='+id;
				}else{
					openMessage("此订单状态不允许修改");
				}
			});
			
			//发货  
			$("#btnSend").click(function(){
				//供应商是否被冻结
		    	if(!validIsFreeze()){
		    		return;
		    	}
				if(!unCheckedAlert(dt.row('.currSelected').data())) {
					return false;
				}
				var id = dt.row('.currSelected').data().id;
				var orderstate = dt.row('.currSelected').data().orderState;
                shipments(id,orderstate);
			});

			//设置分批发货
			$("#splitShipment").click(function(){
				//供应商是否被冻结
		    	if(!validIsFreeze()){
		    		return;
		    	}
				
				if(!unCheckedAlert(dt.row('.currSelected').data())) {
					return false;
				}
				var id = dt.row('.currSelected').data().id;
				var orderstate = dt.row('.currSelected').data().orderState;
				var deliveryModeEnum = dt.row('.currSelected').data().deliveryModeEnum;

			    if(orderstate != "SURCANCEL" && orderstate != "PURCANCEL" && orderstate !="TRANSACTIONCANCELLED" && orderstate !="SHIPPED" && orderstate != "SIGNED"){
					$.ajax({
		                url : '/order/validSupplier.ajax',
		                type : "POST",
		                success : function (data){
		                	if(data.message != "success") {
		                		if(orderstate =="CONFIRMORDER"){
		                			openMessage("已确认订单不能发货！");
		                		}else{
									openMessage("非供应商不能发货！");
		                		}
								return;
							}else{
								$.ajax({
					                url : '/order/validShipping.ajax',
					                type : "POST",
					                data:{orderId:id},
					                success : function (data){
					                	if(data.message =="true"){
					                		window.location.href = '/order/toSplitShipment.jhtml?orderId='+id;
					                	}else{
					                		openMessage("已经全部发货,不能再进行分批！");
					                		return;
					                	}
					                }
								});
							}
		                }
		            });
				} else {
					if(orderstate == "SURCANCEL" || orderstate == "PURCANCEL"|| orderstate =="TRANSACTIONCANCELLED"){
						openMessage("已取消订单不能进行分批发货操作。");
						return;
					}else if(orderstate == "SHIPPED"){
						openMessage("已全部发货订单不能进行分批发货操作。");
						return;
					}else if(orderstate == "SIGNED"){
						openMessage("已签收订单不能进行分批发货操作。");
						return;
					}
				}
			});
			
			/* <#-- 增加确认订单流程 开始 change by ldk --> */
			//确认订单
			$("#confirmOrder").click(function(){
				//供应商是否被冻结
		    	if(!validIsFreeze()){
		    		return;
		    	}
				//获取选中行的数据
				var selectRow=dt.row('.currSelected').data();
				
				//校验是否选中了数据
				if(!unCheckedAlert(selectRow)) {
					return false;
				}
				
				//获取订单id
				var id = selectRow.id;
				//获取订单状态
				var orderstate = selectRow.orderState;
				
				//判断订单状态是否符合要求
				if(orderstate=="NOPAYED"){
					window.location.href='${ctx}/order/todetail.jhtml?orderId='+id+"&requestURL=${ctx}/order/toList.jhtml&confirmOrderFlg=true";
				}else{
					//如果订单状态不正确给予提示
					openMessage("未付款状态方可执行此操作");
				}
			})
			/* <#-- 增加确认订单流程 结束 change by ldk --> */
			 // 导出
		    $("#btnExport").click(function(){
		    	exportList("/order/exportOrderdetailList.ajax");
		    });

            // 导出订单
            $("#btnExportOrder").click(function(){
                exportList("/order/exportOrderList.ajax");
            });
			
			//物流跟踪
			$("#btnLogicTrack").click(function(){
				//供应商是否被冻结
		    	if(!validIsFreeze()){
		    		return;
		    	}
				if(!unCheckedAlert(dt.row('.currSelected').data())) {
					return false;
				}
				var id = dt.row('.currSelected').data().id;
				window.location.href = '/order/toLogisticsTrack.jhtml?orderId='+id;
			});
			
			// 订单取消原因
			$("#btnCancel").click(function(){
				//供应商是否被冻结
		    	if(!validIsFreeze()){
		    		return;
		    	}
				if(!unCheckedAlert(dt.row('.currSelected').data())) {
					return false;
				}
				var id = dt.row('.currSelected').data().id;
				var orderstate = dt.row('.currSelected').data().orderState;
				var purchaserSignStateEnum = dt.row('.currSelected').data().purchaserSignStateEnum;
				var supplierSignStateEnum = dt.row('.currSelected').data().supplierSignStateEnum;
				var contractId = dt.row('.currSelected').data().contractId;
				var couponUserId = dt.row('.currSelected').data().couponUserId;
				var couponStoreId = dt.row('.currSelected').data().couponStoreId;
				//if((orderstate == "NOPAYED" || orderstate == "NOSHIPPED" || orderstate == "PAYED" || orderstate == "BUYERTAKE" || orderstate=="CONFIRMORDER") && (purchaserSignStateEnum == "UNSIGN" || supplierSignStateEnum=="UNSIGN" )){
				if(orderstate=="ONGOING"&& (purchaserSignStateEnum == "UNSIGN" || supplierSignStateEnum=="UNSIGN" )){
					document.getElementById("viewForm").reset();
					if(!unCheckedAlert(dt.row('.currSelected').data())) {
						return false;
					}
					var id = dt.row('.currSelected').data().id;
					var modifyTime = dt.row('.currSelected').data().modifyTime;
					$("#modifyTime1").val(modifyTime);
					
				/* 	var CA_URL = "${CA_URL}";
					if (CA_URL!="" && CA_URL!="null") {
						openConfirm("是否确认取消订单？", "cancelContract('"+contractId+"')");
					} else {
						
					} */
					if((couponUserId!=null&&couponUserId!="")||(couponStoreId!=null&&couponStoreId!="")){
						$("#couponReturnFlagli").show();
					}else{
						$("#couponReturnFlagli").hide();
					}
					$("#cancelReasons").val("");
					showPopupById("viewModal");
				}else{
					openMessage("此订单状态不允许取消！");
				}
			});
			
			// 订单取消提交
			$("#btnConfirm").click(function(){
				var id = dt.row('.currSelected').data().id;
				var modifyTime = dt.row('.currSelected').data().modifyTime;
				var cancelReasons = $("#cancelReasons").val();
				var zindex = $("#viewModal").css("z-index");
				var couponReturnFlag = $("input[name='couponReturnFlag'][checked]").val(); 
				if(cancelReasons != null && $.trim(cancelReasons) == ""){
					openMessage("请填写取消原因");
					$("#messageFade").css("z-index",zindex+1);
					$("#messageLight").css("z-index",zindex+2);
				}else if(cancelReasons.length>250){
					openMessage("字符串长度不能超过250个");
					$("#messageFade").css("z-index",zindex+1);
					$("#messageLight").css("z-index",zindex+2);
				}else{
					$.ajax({
		                url : '/order/toCancel.ajax',
		                data: {id:id,cancelReasons:cancelReasons,modifyTimeString:modifyTime,couponReturnFlag:couponReturnFlag},
		                type : "POST",
		                success : function (data){
		                	if(data.message == "failure") {
								openMessage("取消失败！");
								$("#messageFade").css("z-index",zindex+1);
								$("#messageLight").css("z-index",zindex+2);
								return;
							}else if(data.message == "no"){
								openMessage("此订单状态不允许取消！");
								$("#messageFade").css("z-index",zindex+1);
								$("#messageLight").css("z-index",zindex+2);
									return;
							}else if(data.message == "operFaile"){
								openMessage("非法操作");
								$("#messageFade").css("z-index",zindex+1);
								$("#messageLight").css("z-index",zindex+2);
									return;
							}else{
								openMessage("订单取消成功！");
								table.api().ajax.reload(null,false);
							}
		                }
		            });
					$("#closeBtn").click();
				}
			});
			
			//签订
			$("#btnSign").click(function(){
				//供应商是否被冻结
		    	if(!validIsFreeze()){
		    		return;
		    	}
				if(!unCheckedAlert(dt.row('.currSelected').data())) {
					return false;
				}
				var id = dt.row('.currSelected').data().id;
				var codeno = dt.row('.currSelected').data().codeno;
				var orderstate = dt.row('.currSelected').data().orderState;
				var modifyTime = dt.row('.currSelected').data().modifyTime;
                var supplierSignStateEnum = dt.row('.currSelected').data().supplierSignStateEnum;
                var purchaserSignStateEnum = dt.row('.currSelected').data().purchaserSignStateEnum;
                if(orderstate == "NOPAYED"){
                    openMessage("请先确认订单然后再进行电子合同操作");
                    return;
                }
                if(supplierSignStateEnum == "SURSIGN"){
                    openMessage("供应商已经签订不能再次签订");
                    return;
                    /* <#-- 增加确认订单流程 开始 change by ldk --> */
                	/** }else if(orderstate == "NOPAYED" || orderstate == "PAYED"  || orderstate == "BUYERTAKE" || orderstate=="CONFIRMORDER"){ **/
                }else if(orderstate != "SURCANCEL" && orderstate != "PURCANCEL"  && orderstate != "TRANSACTIONCANCELLED"){
                	//非取消的订单都可以签订合同
                	/* <#-- 增加确认订单流程 结束 change by ldk --> */
					/**
					取消合同签订顺序的校验
					if(purchaserSignStateEnum == "PURSIGN"){
					**/
					$.ecpost({
		                url : '/order/toSign.ajax',
		                data: {id:id,modifyTime:modifyTime},
		                success : function (data){
		                	if(data.success == false) {
								openMessage(data.message);
								return;
							}else{
								var accountList = data.message.split(";");
								var html = "";
								for(var i = 0;i<accountList.length;i++){
									var acId = accountList[i].split(",")[0];
									var name = accountList[i].split(",")[1];
									if(acId != ""){
										html += "<li class='w_all'>";
										if(i == 0){
											html += "<label class='fl'>请选择账户进行签订：</label>";
											html += "<input style='padding:0 !important;' class='radio fl' name='financingId' type='radio' value='"+acId+"' checked='checked'/>";
											html += "<span style='padding:0 !important;' class='fl w_100 m_15'>"+ name +"</span>";
										}else{
											html += "<label class='fl'></label>";
											html += "<input style='padding:0 !important;' class='radio fl' name='financingId' type='radio' value='"+acId+"' />";
											html += "<span style='padding:0 !important;' class='fl w_100 m_15'>"+ name +"</span>";
										}
										html += "</li>";
									} 
								}
								$("#accountListUl").html(html);
								$("#orderId").val(id);
								$("#orderNumbers").val(codeno);
								showPopupById("accountModal");
							}
		                }
		            });
			        /**
			                           取消合同签订顺序的校验
			        } else {
			        	openMessage("采购商还未签署合同，请等待采购商签署合同");
	           			return;
			        }
			        **/   
	           }else{
	           		openMessage("此订单状态不能签订");
	           		return;
	           }
			});
			
			$("#btnAccount").click(function(){
				var CA_URL = "${CA_URL}";
				if (CA_URL!="" && CA_URL!="null") {
					$.ecget({
				         async:false,
				         url: "/contract/getBindingAndRegisterState.ajax",
				         dataType: "json",
				         success: function(data){
				         	//已注册并且已绑定
				         	//if (data.binding && data.register) {
								closePopupById('accountModal');
								var id=$('#example').DataTable().row('.currSelected').data().contractId;//合同id
							 	var subAccountId = $("#accountListUl input:radio:checked").val();//附属帐号
							 
							 	$.ecget({
							         async:false,
							         url: "/contract/getURLForContract.ajax?contractId="+id+"&financingId="+subAccountId,
							         dataType: "json",
							         success: function(data){
							         	
							         	showPopupById('sign');
							         
							         	if (data.flag) {
											$("#sign_appid").val(data.appid);
											$("#sign_time").val(data.time);
											$("#sign_sign").val(data.sign);
											$("#sign_sign_type").val(data.sign_type);
											$("#sign_orderid").val(data.orderid);
											$("#sign_ucid").val(data.ucid);
											$("#signContract").submit();
											
										} else {
											openMessage(data.msg);
										}
							     	 }
								});
							//} else {
								//openConfirm("您还未绑定云签证书，是否去绑定云签证书？", "bindingCert()");
							//}
				     	 }
					});
				} else {
					$("#accountForm").submit();
				}
			
			});
			
			$("#link_search").on("click",function(){
				var text=$(this).text();
				if(text=="高级搜索"){
					$(this).text("快捷搜索");
				}else if(text=="快捷搜索"){
					$(this).text("高级搜索");
				}
				$(this).toggleClass("click");
				$(".search_bar .condition .list").toggleClass("hidden");
			});	
		});
        function queryData(orderState,shippingState,paymentState){
            //供应商是否被冻结
            if(!validIsFreeze()){
                return;
            }
            var codeno = encodeURIComponent($("#codeno").val());
            var memberLabel = encodeURIComponent($("#memberLabel").val());
            var supplierLabel = "";
            if($("#supplierLabel").val()!=undefined){
                supplierLabel = encodeURIComponent($("#supplierLabel").val());
            }
            var startDate = encodeURIComponent($("#startDate").val());
            var endDate = encodeURIComponent($("#endDate").val());
            var payStartDate = encodeURIComponent($("#payStartDate").val());
            var payEndDate = encodeURIComponent($("#payEndDate").val());
            var deliveryModeEnum = "";
            if($("#deliveryModeEnum").val()!=undefined){
                deliveryModeEnum = encodeURIComponent($("#deliveryModeEnum").val());
            }
            var supplierSignStateEnum = "";
            var purchaserSignStateEnum = "";
            if($("#queryForm [name='supplierSignStateEnum']").val() != undefined){
                supplierSignStateEnum = encodeURIComponent($("#queryForm [name='supplierSignStateEnum']").val());
            }
            if($("#queryForm [name='purchaserSignStateEnum']").val() != undefined){
                purchaserSignStateEnum = encodeURIComponent($("#queryForm [name='purchaserSignStateEnum']").val());
            }
            var productName = encodeURIComponent($("#productName").val());
            var manufacture = encodeURIComponent($("#manufacture").val());
            var batchNo = encodeURIComponent($("#batchNo").val());
            var needReturn = encodeURIComponent($("#needReturn").val());
            var partnerId = $("#partnerId").val()==undefined ? "" : encodeURIComponent($("#partnerId").val());
            var partnerName = $("#partnerName").val()==undefined ? "" : encodeURIComponent($("#partnerName").val());
            var paymode = $("#paymode").val();
            mycheck = $("#my_check").prop("checked");
            var isFilter = "N";
            if(mycheck){
                isFilter = "Y";
            }
            var orgList = $('input:checkbox[name=orgtype]:checked');
            var orgTypeList="";
            for(var i = 0; i < orgList.length; i++){
                if (orgList[i].checked){
                    if(orgTypeList==""){
                        orgTypeList = orgList[i].value;
                    }else{
                        orgTypeList = orgTypeList+","+orgList[i].value;
                    }
                }
            }
            $("#orgTypeList").val(orgTypeList);
            if(orderState != undefined){
                $("#orderStateListQ").val(orderState);
            }
            if(paymentState != undefined){
                $("#paymentStateList").val(paymentState);
            }
            if(shippingState != undefined){
                $("#shippingStateList").val(shippingState);
            }
            var paymentState = "";
            if($("#paymentState").val()!=undefined){
                paymentState = $("#paymentState").val();
            }
            table.api().ajax.reload();
            //table.api().ajax.url("").load();
        }
		//未选中数据提示
		function unCheckedAlert(id){
		  if (id == undefined) {
			  openMessage("请选择一条数据！");
			  return false;
	  	  }
	      if(id.checkState){
	        if(id.checkState == 'failure'){
	          openMessage("该订单审核未通过，交易已关闭。");
	          return false;
	        }else if(id.checkState != 'sucess'){
		          //openMessage("订单未通过审核,不能操作！");
		          /* <#-- 修复bug-1004 开始 fixed by ldk --> */
		         	openMessage("订单正在审核中，请耐心等待。");
	          return false;
	          	/* <#-- 修复bug-1004 结束 fixed by ldk --> */
	        }
	      }
			return true;
		}
		!function(){
			laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
			laydate({elem: '#startDate',
				choose: function(datas){ //选择日期完毕的回调
					if($("#endDate").val() != ""){
						//check大小
						if($("#endDate").val() < datas){
							$("#startDate").val("");
							openMessage("下单时间选择不合理，请重新选择！");
						}
					}
			    }
			});//绑定元素
			laydate({elem: '#endDate',
				choose: function(datas){ //选择日期完毕的回调
					if($("#startDate").val() != ""){
						//check大小
						if($("#startDate").val() > datas){
							$("#endDate").val("");
							openMessage("下单时间选择不合理，请重新选择！");
						}
					}
			    }
			});//绑定元素
			laydate({elem: '#payStartDate',
                choose: function(datas){ //选择日期完毕的回调
                    if($("#payEndDate").val() != ""){
                        //check大小
                        if($("#payEndDate").val() < datas){
                            $("#payStartDate").val("");
                            openMessage("支付时间选择不合理，请重新选择！");
                        }
                    }
                }
            });//绑定元素
            laydate({elem: '#payEndDate',
                choose: function(datas){ //选择日期完毕的回调
                    if($("#payStartDate").val() != ""){
                        //check大小
                        if($("#payStartDate").val() > datas){
                            $("#payEndDate").val("");
                            openMessage("支付时间选择不合理，请重新选择！");
                        }
                    }
                }
            });//绑定元素
		}();

function toSignResult(){
	closePopupById('sign');
	var contractStateEnum = $('#example').DataTable().row('.currSelected').data().contractStateEnum;
	var id = $('#example').DataTable().row('.currSelected').data().id;
	location.href = "/contract/orderSignResult.jhtml?id="+id+"&from=order";
}	

function toRefusalResult(){
	closePopupById('refusal');
	var contractStateEnum = $('#example').DataTable().row('.currSelected').data().contractStateEnum;
	var id = $('#example').DataTable().row('.currSelected').data().id;
	location.href = "/contract/refusalResult.jhtml?id="+id+"&from=order";
}

//取消合同
function cancelContract(contractId){
	closeConfirm();
	showPopupById("porcessloading");
	var dt = $('#example').DataTable();
	$.ecget({
         async:false,
         url: "/contract/getURLForContract.ajax?contractId="+contractId+"&type=refusal",
         dataType: "json",
         success: function(data){
         	//取消完合同取消订单
         	if (data.flag) {
         		closePopupById('porcessloading');
         		var id = dt.row('.currSelected').data().id;
				var modifyTime = dt.row('.currSelected').data().modifyTime;
				$.ajax({
					url : '/order/toCancel.ajax',
					data: {id:id,modifyTimeString:modifyTime},
					type : "POST",
					success : function (data){
						closePopupById('porcessloading');
						if(data.message == "failure") {
							openMessage("取消失败！");
							return;
						}else if(data.message == "no"){
							openMessage("此订单状态不允许取消！");
							return;
						}else if(data.message == "operFaile"){
							openMessage("非法操作");
							return;
						}else{
							openMessage("订单取消成功！");
							table.api().ajax.reload();
							//dt.api().ajax.reload(null,false);
						}
					}
			    });
			} else {
				closePopupById('porcessloading');
				openMessage(data.msg);
			}
     	 }
	});
}

//绑定证书
function bindingCert() {
	closeConfirm();
	var id=$('#example').DataTable().row('.currSelected').data().contractId;//合同id
	var subAccountId = $("#accountListUl input:radio:checked").val();//附属帐号
	
	$.ecget({
         async:false,
         url: "/contract/getURLForContract.ajax?type=binding&contractId="+id+"&financingId="+subAccountId,
         dataType: "json",
         success: function(data){
         
			$("#binding_appid").val(data.appid);
			$("#binding_time").val(data.time);
			$("#binding_sign").val(data.sign);
			$("#binding_sign_type").val(data.sign_type);
			$("#binding_ucid").val(data.ucid);
			$("#binding").submit();
				
     	 }
	});
}
/* function change_audit_state(){
	if($("#my_check").prop("checked")){
		//$("#audit_state").hide();
		$("#audit_state").toggleClass("hidden",true);
	}else{
		$("#audit_state").toggleClass("hidden",false);
		//$("#audit_state").show();
	}
	$(".condition").hide();
	$(".condition").show();
	}
	 */
	function format(input) {
	    var n = parseFloat(input).toFixed(2);
	    var re = /(\d{1,3})(?=(\d{3})+(?:\.))/g;
	    return n.replace(re, "$1,");
	}	
	function getNUM(data){
		var i = parseFloat(data);
		if(isNaN(i)) {i = 0.00;} 
		var minus = '';    
		if(i < 0) {minus = '-';}    
		i = Math.abs(i);    
		i = parseInt((i + .005) * 100);    
		i = i / 100;    
		s = new String(i);    
		if(s.indexOf('.') < 0) { s += '.00'; }    
		if(s.indexOf('.') == (s.length - 2)) { s += '0'; }    
		s = minus + s;    
		return format(s);
	}

    function orderCount(){
        $.ecpost({
            "url" : "/order/orderCount.ajax",
            "type" : "POST",
            "data" : $("#queryForm").serialize(),
            "success" : function(resp){
                $(".all").text(countIsUndefined(resp.all));
                $(".waitShipping").text(countIsUndefined(resp.waitShipping));
                $(".waitPay").text(countIsUndefined(resp.waitPay));
                $(".compledtransaction").text(countIsUndefined(resp.compledtransaction));
                $(".canncel").text(countIsUndefined(resp.canncel));
                $(".nopayed").text(countIsUndefined(resp.nopayed));
            }
        });
    }
    function countIsUndefined(data){
        if(data == undefined){
            return 0;
        }else{
            return data;
        }
    }
    function detail(productId){
        //供应商是否被冻结
        if(!validIsFreeze()){
            return;
        }
        var id ;
        if(productId == undefined){
            if (dt.row('.currSelected').data() == undefined) {
                openMessage("请选择一条数据！");
                return false;
            }
            id = dt.row('.currSelected').data().id;
        }else{
            id = productId;
        }
        window.location.href = '/order/todetail.jhtml?orderId='+id+"&requestURL=/order/toList.jhtml";
    }

    function shipments(id,orderstate){
        //add 2016-3-5 by lgq  已支付的订单即可发货
        if(orderstate == "ONGOING" ||orderstate == "CONFIRMORDER" ||orderstate == "PAYED" || orderstate == "NOSHIPPED" || orderstate == "PARTIALSHIPMENT" || orderstate =="PARTIALSIGNED"|| orderstate =="PARTIALPAYMENT" ||orderstate == "BUYERTAKE"){
            $.ajax({
                url : '/order/validSupplier.ajax',
                type : "POST",
                success : function (data){
                    if(data.message != "success") {
                        openMessage("非供应商不能发货！");
                        return;
                    }else{
                        $.ajax({
                            url : '/order/validShipping.ajax',
                            type : "POST",
                            data:{orderId:id},
                            success : function (data){
                                if(data.message =="none"){
                                    window.location.href = '/order/toShipping.jhtml?orderId='+id;
                                }else if(data.message =="write"){
                                    window.location.href = '/order/writeInvoice.jhtml?orderId='+id;
                                }else if(data.message =="pic"){
                                    window.location.href = '/order/toShippingImg.jhtml?orderId='+id;
                                }else{
                                    openMessage("订单不存在！");
                                    return;
                                }
                            }
                        });
                    }
                }
            });
        }else{
            openMessage("只有待发货，部分发货，部分签收状态订单可以进行发货操作！");
        }
    }
    function exportList(url){
        //供应商是否被冻结
        if(!validIsFreeze()){
            return;
        }
        var orgList = $('input:checkbox[name=orgtype]:checked');
        var orgTypeList="";
        for(var i = 0; i < orgList.length; i++){
            if (orgList[i].checked){
                if(orgTypeList==""){
                    orgTypeList = orgList[i].value;
                }else{
                    orgTypeList = orgTypeList+","+orgList[i].value;
                }
            }
        }
        $("#orgTypeList").val(orgTypeList);

        loading('正在导出，请稍候...');
        $.ajax({
            url: url,
            cache:false,
            data: $("#queryForm").serializeArray(),
            success: function(data){
                var result = data.result;
                if(result == "true"){
                    var path = data.path;
                    location.href="/financial/subAccount/downFile.ajax?path="+path;
                } else {
                    openMessage(data.message?data.message:data.errMsg);
                }
                closeLoading();
            }
        });
    }
	</script>
</html>