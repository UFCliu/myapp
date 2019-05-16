function autoHeight(){
	try{
		var height1=$(window).height();
		$(".left,.right").css("height",height1-70);
		$(".right iframe").css("height",height1-120);
		//$(".left .ztree").css("height",height1-120);
                        $(".left").css("height",height1-120);
		var browser=navigator.appName;//获得浏览器名称
		var b_version=navigator.appVersion;//获得浏览器版本
		var version=b_version.split(";");//分割版本
		var trim_Version=version[1].replace(/[ ]/g,"");//替换内容
		if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0"){//判断
			var height2=$("html").height();
			$(".left,.right").css("height",height2-70);
			$(".right iframe").css("height",height2-120);
			//$(".left .ztree").css("height",height2-120);
                                    $(".left .ztree").css("height",height2-120);
		}
	}catch(err){
		//donothing
	}
};

function showMainIframe(_gotoURL){
			 $('#main_iframe').load(function(){
			        $(this).show();
			    });
			    $('#main_iframe').attr('src', _gotoURL); 
}

$(document).ready(function(){
	autoHeight();
	
	showMainIframe('member/index.html');

	(function(){
		
		var nbsp_gt = "&nbsp;&gt;&nbsp;";
        var iniHomeNavPosi = function(_subPosition){
        	var homeNavPosiInfo = "<em>当前所在位置：</em><span class=\"cur\"><a href=\"main.html\">首页</a></span>";
        	$("#main_posi_nav").empty().append(homeNavPosiInfo);
        	if (typeof _subPosition != 'undefined'){
        		$("#main_posi_nav").append(_subPosition);
        	}
        };

        iniHomeNavPosi();

		//会员管理 - 企业信息审核
		$("#ec_ztree").on("click", "#ec_ztree_2_a", function(){
			var gotoURL = "\"member/approval/approval.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">企业信息审核</a></span>";
			iniHomeNavPosi(passSubPosi);
		});

		//会员管理 - 供应商信息管理
		$("#ec_ztree").on("click", "#ec_ztree_3", function(){
			var gotoURL = "\"member/supply_info/supply_info.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">供应商信息审核</a></span>";
			iniHomeNavPosi(passSubPosi);
		});

		//会员管理 - 采购商信息管理
		$("#ec_ztree").on("click", "#ec_ztree_4", function(){
			var gotoURL = "\"member/purchase_info/purchase_info.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">采购商信息管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});

		//会员管理 - 物流商信息管理
		$("#ec_ztree").on("click", "#ec_ztree_5", function(){
			var gotoURL = "\"member/logistics/logistics_info.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">物流商信息管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		
		//会员管理 - 年费管理
		$("#ec_ztree").on("click", "#ec_ztree_6", function(){
			var gotoURL = "\"member/fee/fee.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">年费管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});

		//会员管理 - 保证金管理
		$("#ec_ztree").on("click", "#ec_ztree_7", function(){
			var gotoURL = "\"member/bail/bail.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">保证金管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});

		//会员管理 - 企业信息录入
		$("#ec_ztree").on("click", "#ec_ztree_8", function(){
			var gotoURL = "\"member/logistics/logistics_info.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">企业信息录入</a></span>";
			iniHomeNavPosi(passSubPosi);
		});

		//会员管理 - 往来客户管理
		$("#ec_ztree").on("click", "#ec_ztree_11", function(){
			var gotoURL = "\"member/supply_supervise/supply_supervise.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">往来客户管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});

		//会员管理 - 客户关系审核
		$("#ec_ztree").on("click", "#ec_ztree_12", function(){
			var gotoURL = "\"member/supply_supervise/relation_supervise.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">客户关系审核</a></span>";
			iniHomeNavPosi(passSubPosi);
		});

		//会员管理 - 询价管理
		$("#ec_ztree").on("click", "#ec_ztree_13", function(){
			var gotoURL = "\"member/supply_supervise/inquiry_supervise.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">询价管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});

		//会员管理 - 消息提醒
		$("#ec_ztree").on("click", "#ec_ztree_14", function(){
			var gotoURL = "\"member/supply_supervise/tidings_remind.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">消息提醒</a></span>";
			iniHomeNavPosi(passSubPosi);
		});

		//商品管理 - 商品信息管理
		$("#ec_ztree").on("click", "#ec_ztree_16", function(){
			var gotoURL = "\"wares/info_manage.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">商品信息管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//商品管理 - 商品评价管理
		$("#ec_ztree").on("click", "#ec_ztree_17", function(){
			var gotoURL = "\"wares/assess_manage.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">商品评价管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//商品管理 - 商品分类管理
		$("#ec_ztree").on("click", "#ec_ztree_18", function(){
			var gotoURL = "\"wares/classify_manage.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">商品分类管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//商品管理 - 商品剂型分类管理
		$("#ec_ztree").on("click", "#ec_ztree_19", function(){
			var gotoURL = "\"wares/df_classify.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">商品剂型分类管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//商品管理 - 商品标准信息库管理
		$("#ec_ztree").on("click", "#ec_ztree_20", function(){
			var gotoURL = "\"wares/criterion_manage.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">商品标准信息库管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});


		//订单管理 - 订单列表
		$("#ec_ztree").on("click", "#ec_ztree_22", function(){
			var gotoURL = "\"order/order_list.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">订单列表</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//订单管理 - 退货管理
		$("#ec_ztree").on("click", "#ec_ztree_23", function(){
			var gotoURL = "\"order/order_return.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">退货管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//订单管理 - 退款单管理
		$("#ec_ztree").on("click", "#ec_ztree_24", function(){
			var gotoURL = "\"order/return_f.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">退款单管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//订单管理 - 物流跟踪管理
		$("#ec_ztree").on("click", "#ec_ztree_25", function(){
			var gotoURL = "\"order/logistics_track.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">物流跟踪管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});

		//合同管理 - 交易合同管理
		$("#ec_ztree").on("click", "#ec_ztree_27", function(){
			var gotoURL = "\"contract/buy_contract.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">交易合同管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//合同管理 - 供应商合同管理
		$("#ec_ztree").on("click", "#ec_ztree_28", function(){
			var gotoURL = "\"contract/supplier_contract.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">供应商合同管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//合同管理 - 采购商合同管理
		$("#ec_ztree").on("click", "#ec_ztree_29", function(){
			var gotoURL = "\"contract/buyer_contract.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">采购商合同管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//合同管理 - 物流商合同管理
		$("#ec_ztree").on("click", "#ec_ztree_30", function(){
			var gotoURL = "\"contract/logistics/logistics_add.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">物流商合同管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});


		//账务管理 - 结算账户管理
		$("#ec_ztree").on("click", "#ec_ztree_32", function(){
			var gotoURL = "\"finance/account_manage.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">结算账户管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//账务管理 - 附属账户管理
		$("#ec_ztree").on("click", "#ec_ztree_33", function(){
			var gotoURL = "\"inance/attached_manage.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">附属账户管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//账务管理 - 支付单管理
		$("#ec_ztree").on("click", "#ec_ztree_34", function(){
			var gotoURL = "\"finance/defray_manage.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">支付单管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//账务管理 - 应付账款管理
		$("#ec_ztree").on("click", "#ec_ztree_35", function(){
			var gotoURL = "\"finance/payable_manage.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">应付账款管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//账务管理 - 应收账款管理
		$("#ec_ztree").on("click", "#ec_ztree_36", function(){
			var gotoURL = "\"finance/receivable_manage.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">应收账款管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//账务管理 - 保证金管理
		$("#ec_ztree").on("click", "#ec_ztree_37", function(){
			var gotoURL = "\"finance/cash.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">保证金管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//账务管理 - 年费管理
		$("#ec_ztree").on("click", "#ec_ztree_38", function(){
			var gotoURL = "\"finance/annual.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">年费管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});



		//商城管理 - 模板管理
		$("#ec_ztree").on("click", "#ec_ztree_40", function(){
			var gotoURL = "\"mall/mall_templet.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">模板管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//商城管理 - 数据源管理
		$("#ec_ztree").on("click", "#ec_ztree_41", function(){
			var gotoURL = "\"mall/mall_data.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">数据源管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//商城管理 - 导航管理
		$("#ec_ztree").on("click", "#ec_ztree_42", function(){
			var gotoURL = "\"mall/mall_nav.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">导航管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//商城管理 - 面板管理
		$("#ec_ztree").on("click", "#ec_ztree_43", function(){
			var gotoURL = "\"mall/mall_frontpanel.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">面板管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//商城管理 - 链接管理
		$("#ec_ztree").on("click", "#ec_ztree_44", function(){
			var gotoURL = "\"mall/mall_link.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">链接管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//商城管理 - 热词设置
		$("#ec_ztree").on("click", "#ec_ztree_45", function(){
			var gotoURL = "\"mall/mall_hot.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">热词设置</a></span>";
			iniHomeNavPosi(passSubPosi);
		});


		//广告管理 - 广告管理
		$("#ec_ztree").on("click", "#ec_ztree_47", function(){
			var gotoURL = "\"ad/ad.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">广告管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//广告管理- 广告位管理
		$("#ec_ztree").on("click", "#ec_ztree_48", function(){
			var gotoURL = "\"ad/place.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">广告位管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});

		//品牌管理 - 品牌管理
		$("#ec_ztree").on("click", "#ec_ztree_50", function(){
			var gotoURL = "\"brand/brand.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">品牌管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//品牌管理 - 品牌商品管理
		$("#ec_ztree").on("click", "#ec_ztree_51", function(){
			var gotoURL = "\"brand/commodity.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">品牌商品管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});

		//帮助中心 - 内容管理
		$("#ec_ztree").on("click", "#ec_ztree_53", function(){
			var gotoURL = "\"help/help_content.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">内容管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//帮助中心 - 分类管理
		$("#ec_ztree").on("click", "#ec_ztree_54", function(){
			var gotoURL = "\"help/help_classify.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">分类管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});

		//咨资讯管理 - 资讯内容管理
		$("#ec_ztree").on("click", "#ec_ztree_56", function(){
			var gotoURL = "\"inquire/inquire_content.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">资讯内容管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//资讯管理 - 资讯分类管理
		$("#ec_ztree").on("click", "#ec_ztree_57", function(){
			var gotoURL = "\"inquire/inquire_classify.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">资讯分类管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});

		//客服管理 - 举报投诉信息管理
		$("#ec_ztree").on("click", "#ec_ztree_59", function(){
			var gotoURL = "\"service/complain.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">举报投诉信息管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//客服管理 - 建议咨询信息管理
		$("#ec_ztree").on("click", "#ec_ztree_60", function(){
			var gotoURL = "\"service/advise.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">建议咨询信息管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});

		//系统管理 - 用户管理
		$("#ec_ztree").on("click", "#ec_ztree_62", function(){
			var gotoURL = "\"system/system_user.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">用户管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//系统管理 - 角色管理
		$("#ec_ztree").on("click", "#ec_ztree_63", function(){
			var gotoURL = "\"system/system_role.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">角色管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//系统管理 - 资源管理
		$("#ec_ztree").on("click", "#ec_ztree_64", function(){
			var gotoURL = "\"system/system_resource.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">资源管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//系统管理 - 操作管理
		$("#ec_ztree").on("click", "#ec_ztree_65", function(){
			var gotoURL = "\"system/system/system_operate.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">操作管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//系统管理 - 操作日志管理
		$("#ec_ztree").on("click", "#ec_ztree_66", function(){
			var gotoURL = "\"system/system_log.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">操作日志管理</a></span>";
			iniHomeNavPosi(passSubPosi);
		});

		//政府监控 - 订单信息查询
		$("#ec_ztree").on("click", "#ec_ztree_68", function(){
			var gotoURL = "\"gov/gov_details.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">订单信息查询</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//政府监控 - 合同信息查询
		$("#ec_ztree").on("click", "#ec_ztree_69", function(){
			var gotoURL = "\"sgov/gov_bargain.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">合同信息查询</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//政府监控 - 应收应付查询
		$("#ec_ztree").on("click", "#ec_ztree_70", function(){
			var gotoURL = "\"gov/gov_business.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">应收应付查询</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//政府监控 - 交易客户查询
		$("#ec_ztree").on("click", "#ec_ztree_71", function(){
			var gotoURL = "\"gov/gov_customer.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">交易客户查询</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//政府监控 - 商品分类销量统计
		$("#ec_ztree").on("click", "#ec_ztree_72", function(){
			var gotoURL = "\"gov/gov_statistics.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">商品分类销量统计</a></span>";
			iniHomeNavPosi(passSubPosi);
		});
		//政府监控 - 订单数量统计
		$("#ec_ztree").on("click", "#ec_ztree_73", function(){
			var gotoURL = "\"gov/gov_order.html\"";
			var passSubPosi = nbsp_gt + "<span class=\"cur\"><a onclick=\'showMainIframe(" + gotoURL + ")\'' href=\"javascript:void(0)\">订单数量统计</a></span>";
			iniHomeNavPosi(passSubPosi);
		});

	})(showMainIframe);

	$(".header .user").click(function(){
		$(this).toggleClass("selected");
		$(".div_user").toggle();
	});
});