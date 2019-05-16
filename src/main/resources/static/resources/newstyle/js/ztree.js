// 0级节点
var curMenu = null;
// 1级节点
var curMenu1 = null;
// 2级节点
var curMenu2 = null;
zTree_Menu = null;
var obj;
var setting = {
    view : {
             showLine : true,
             selectedMulti : false,
             dblClickExpand : false,
             showIcon : true
    },
    data : {
             simpleData : {
                       enable : true,
                       idKey : "id",
                       pIdKey : "pId"
             }
    },
    callback : {
             onNodeCreated : this.onNodeCreated,
             beforeClick : this.beforeClick,
             onClick : this.onClick,
             beforeExpand:ztreeBeforeExpand,
                       onExpand:ztreeOnExpand,
                       beforeCollapse:ztreeBeforeCollapse,
                       onCollapse :ztreeoOnCollapse
    }
};
 
var zNodes = [  
    {  
        "id":98,
        "pId":91,
        "name":"用户管理",
        "url":"system/system_user.html",
        "target":"main_iframe"
    },
    {  
        "id":273,
        "pId":272,
        "name":"资讯内容管理",
        "url":"inquire/inquire_content.html",
        "target":"main_iframe"
    },
    {  
        "id":82,
        "pId":88,
        "name":"往来客户管理",
        "url":"member/supply_supervise/supply_supervise.html",
        "target":"main_iframe"
    },
    {  
        "id":120,
        "pId":119,
        "name":"结算账户管理",
        "url":"finance/account_manage.html",
        "target":"main_iframe"
    },
    {  
        "id":100,
        "pId":99,
        "name":"商品信息管理",
        "url":"wares/info_manage.html",
        "target":"main_iframe"
    },
    {  
        "id":145,
        "pId":144,
        "name":"内容管理",
        "url":"help/help_content.html",
        "target":"main_iframe"
    },
    {  
        "id":139,
        "pId":138,
        "name":"广告管理",
        "url":"ad/ad.html",
        "target":"main_iframe"
    },
    {  
        "id":153,
        "pId":152,
        "name":"订单信息查询",
        "url":"gov/gov_details.html",
        "target":"main_iframe"
    },
    {  
        "id":80,
        "name":"会员管理",
        "iconOpen":"images/icon_menu_1_hover.gif",
        "iconClose":"images/icon_menu_1.gif",
        "target":"main_iframe"
    },
    {  
        "id":129,
        "pId":128,
        "name":"模板管理",
        "url":"mall/mall_templet.html",
        "target":"main_iframe"
    },
    {  
        "id":111,
        "pId":108,
        "name":"订单列表",
        "url":"order/order_list.html",
        "target":"main_iframe"
    },
    {  
        "id":154,
        "pId":152,
        "name":"合同信息查询",
        "url":"gov/gov_bargain.html",
        "target":"main_iframe"
    },
    {  
        "id":117,
        "pId":108,
        "name":"退货管理",
        "url":"order/order_return.html",
        "target":"main_iframe"
    },
    {  
        "id":283,
        "pId":119,
        "name":"附属账户管理",
        "url":"finance/attached_manage.html",
        "target":"main_iframe"
    },
    {  
        "id":81,
        "pId":80,
        "name":"企业信息审核",
        "url":"member/approval/approval.html",
        "target":"main_iframe"
    },
    {  
        "id":114,
        "pId":113,
        "name":"交易合同管理",
        "url":"contract/buy_contract.html",
        "target":"main_iframe"
    },
    {  
        "id":274,
        "pId":272,
        "name":"资讯分类管理",
        "url":"inquire/inquire_classify.html",
        "target":"main_iframe"
    },
    {  
        "id":83,
        "pId":88,
        "name":"客户关系审核",
        "url":"member/supply_supervise/relation_supervise.html",
        "target":"main_iframe"
    },
    {  
        "id":142,
        "pId":141,
        "name":"品牌管理",
        "url":"brand/brand.html",
        "target":"main_iframe"
    },
    {  
        "id":94,
        "pId":91,
        "name":"角色管理",
        "url":"system/system_role.html",
        "target":"main_iframe"
    },
    {  
        "id":146,
        "pId":144,
        "name":"分类管理",
        "url":"help/help_classify.html",
        "target":"main_iframe"
    },
    {  
        "id":140,
        "pId":138,
        "name":"广告位管理",
        "url":"ad/place.html",
        "target":"main_iframe"
    },
    {  
        "id":99,
        "name":"商品管理",
        "iconOpen":"images/icon_menu_2_hover.gif",
        "iconClose":"images/icon_menu_2.gif",
        "target":"main_iframe"
    },
    {  
        "id":150,
        "pId":147,
        "name":"举报投诉信息管理",
        "url":"service/complain.html",
        "target":"main_iframe"
    },
    {  
        "id":151,
        "pId":147,
        "name":"建议咨询信息管理",
        "url":"service/advise.html",
        "target":"main_iframe"
    },
    {  
        "id":131,
        "pId":128,
        "name":"数据源管理",
        "url":"mall/mall_data.html",
        "target":"main_iframe"
    },
    {  
        "id":155,
        "pId":152,
        "name":"应收应付查询",
        "url":"gov/gov_business.html",
        "target":"main_iframe"
    },
    {  
        "id":121,
        "pId":119,
        "name":"支付单管理",
        "url":"finance/defray_manage.html",
        "target":"main_iframe"
    },
    {  
        "id":118,
        "pId":108,
        "name":"退款单管理",
        "url":"order/return_f.html",
        "target":"main_iframe"
    },
    {  
        "id":85,
        "pId":80,
        "name":"供应商信息管理",
        "url":"member/supply_info/supply_info.html",
        "target":"main_iframe"
    },
    {  
        "id":108,
        "name":"订单管理",
        "iconOpen":"images/icon_menu_3_hover.gif",
        "iconClose":"images/icon_menu_3.gif",
        "target":"main_iframe"
    },
    {  
        "id":143,
        "pId":141,
        "name":"品牌商品管理",
        "url":"brand/commodity.html",
        "target":"main_iframe"
    },
    {  
        "id":79,
        "pId":80,
        "name":"采购商信息查询",
        "url":"member/purchase_info/purchase_info.html",
        "target":"main_iframe"
    },
    {  
        "id":84,
        "pId":80,
        "name":"物流商信息管理",
        "url":"member/logistics_info/logistics_info.html",
        "target":"main_iframe"
    },
    {  
        "id":89,
        "pId":80,
        "name":"年费管理",
        "url":"member/fee/fee.html",
        "target":"main_iframe"
    },
    {  
        "id":92,
        "pId":80,
        "name":"保证金管理",
        "url":"member/bail/bail.html",
        "target":"main_iframe" 
    },
    {  
        "id":90,
        "pId":80,
        "name":"物流管理",
        "target":"main_iframe"
    },
    {  
        "id":160,
        "pId":90,
        "name":"企业信息录入",
        "url":"member/logistics/logistics_info.html",
        "target":"main_iframe"
    },

    {  
        "id":113,
        "name":"合同管理",
        "iconOpen":"images/icon_menu_4_hover.gif",
        "iconClose":"images/icon_menu_4.gif",
        "target":"main_iframe"
    },
    {  
        "id":132,
        "pId":128,
        "name":"导航管理",
        "url":"mall/mall_nav.html",
        "target":"main_iframe"
    },
    {  
        "id":103,
        "pId":99,
        "name":"商品评价管理",
        "url":"wares/assess_manage.html",
        "target":"main_iframe"
    },
    {  
        "id":156,
        "pId":152,
        "name":"交易客户查询",
        "url":"gov/gov_customer.html",
        "target":"main_iframe"
    },
    {  
        "id":157,
        "pId":152,
        "name":"商品分类销量统计",
        "url":"gov/gov_statistics.html",
        "target":"main_iframe"
    },
    {  
        "id":158,
        "pId":152,
        "name":"订单数量统计",
        "url":"gov/gov_order.html",
        "target":"main_iframe"
    },
    {  
        "id":116,
        "pId":113,
        "name":"供应商合同管理",
        "url":"contract/supplier_contract.html",
        "target":"main_iframe"
    },
    {  
        "id":115,
        "pId":113,
        "name":"采购商合同管理",
        "url":"contract/buyer_contract.html",
        "target":"main_iframe"
    },
    {  
        "id":112,
        "pId":113,
        "name":"物流商合同管理",
        "url":"contract/logistics.html",
        "target":"main_iframe"
    },

    {  
        "id":86,
        "pId":88,
        "name":"询价管理",
        "url":"member/supply_supervise/inquiry_supervise.html",
        "target":"main_iframe"
    },
    {  
        "id":122,
        "pId":119,
        "name":"应付账款管理",
        "url":"finance/payable_manage.html",
        "target":"main_iframe"
    },
    {  
        "id":126,
        "pId":108,
        "name":"物流跟踪管理",
        "url":"order/logistics_track.html",
        "target":"main_iframe"
    },
    {  
        "id":87,
        "pId":88,
        "name":"消息提醒",
        "url":"member/supply_supervise/tidings_remind.html",
        "target":"main_iframe"
    },
    {  
        "id":123,
        "pId":119,
        "name":"应收账款管理",
        "url":"finance/receivable_manage.html",
        "target":"main_iframe"
    },
    {  
        "id":124,
        "pId":119,
        "name":"保证金管理",
        "url":"finance/cash.html",
        "target":"main_iframe"
    },
    {  
        "id":125,
        "pId":119,
        "name":"年费管理",
        "url":"finance/annual.html",
        "target":"main_iframe"
    },
    {  
        "id":270,
        "pId":91,
        "name":"资源管理",
        "url":"system/system_resource.html",
        "target":"main_iframe"
    },
    {  
        "id":104,
        "pId":99,
        "name":"商品分类管理",
        "url":"wares/classify_manage.html",
        "target":"main_iframe"
    },
    {  
        "id":105,
        "pId":99,
        "name":"商品剂型分类管理",
        "url":"wares/df_classify.html",
        "target":"main_iframe"
    },
    {  
        "id":271,
        "pId":91,
        "name":"操作管理",
        "url":"system/system_operate.html",
        "target":"main_iframe"
    },
    {  
        "id":134,
        "pId":128,
        "name":"面板管理",
        "url":"mall/mall_frontpanel.html",
        "target":"main_iframe"
    },
    {  
        "id":88,
        "pId":80,
        "name":"供应商管理",
        "target":"main_iframe"
    },
    {  
        "id":119,
        "name":"财务管理",
        "iconOpen":"images/icon_menu_5_hover.gif",
        "iconClose":"images/icon_menu_5.gif",
        "target":"main_iframe"
    },
     {  
        "id":135,
        "pId":128,
        "name":"链接管理",
        "url":"mall/mall_link.html",
        "target":"main_iframe"
    },
    {  
        "id":137,
        "pId":128,
        "name":"热词设置",
        "url":"mall/mall_hot.html",
        "target":"main_iframe"
    },
    {  
        "id":96,
        "pId":91,
        "name":"操作日志管理",
        "url":"system/system_log.html",
        "target":"main_iframe"
    },
    {  
        "id":107,
        "pId":99,
        "name":"商品标准信息库管理",
        "url":"wares/criterion_manage.html",
        "target":"main_iframe"
    },
    {  
        "id":128,
        "name":"商城管理",
        "iconOpen":"images/icon_menu_6_hover.gif",
        "iconClose":"images/icon_menu_6.gif",
        "target":"main_iframe"
    },
    {  
        "id":138,
        "name":"广告管理",
        "iconOpen":"images/icon_menu_7_hover.gif",
        "iconClose":"images/icon_menu_7.gif",
        "target":"main_iframe"
    },
    {  
        "id":141,
        "name":"品牌管理",
        "iconOpen":"images/icon_menu_8_hover.gif",
        "iconClose":"images/icon_menu_8.gif",
        "target":"main_iframe"
    },
    {  
        "id":144,
        "name":"帮助中心",
        "iconOpen":"images/icon_menu_9_hover.gif",
        "iconClose":"images/icon_menu_9.gif",
        "target":"main_iframe"
    },
    {  
        "id":272,
        "name":"资讯管理",
        "iconOpen":"images/icon_menu_10_hover.gif",
        "iconClose":"images/icon_menu_10.gif",
        "target":"main_iframe"
    },
    {  
        "id":147,
        "name":"客服管理",
        "iconOpen":"images/icon_menu_11_hover.gif",
        "iconClose":"images/icon_menu_11.gif",
        "target":"main_iframe"
    },
    {  
        "id":91,
        "name":"系统管理",
        "iconOpen":"images/icon_menu_12_hover.gif",
        "iconClose":"images/icon_menu_12.gif",
        "target":"main_iframe"
    },
    {  
        "id":152,
        "name":"政府监管",
        "iconOpen":"images/icon_menu_13_hover.gif",
        "iconClose":"images/icon_menu_13.gif",
        "target":"main_iframe"
    }
];

function beforeClick(treeId, node) {
    var flag = false;
    // 点击级别0
    if (node.level === 0) {
             // 上一次点击的0级节点
             var pNode = curMenu;
             // 如果不是第一次点击
             if (pNode) {
                       // 最近两次点击0级节点不是同一个
                       if (pNode !== node) {
                                // 移除样式
                                var a = $("#" + pNode.tId + "_a");
                                a.removeClass("cur");
 
                                zTree_Menu.expandNode(pNode, false, true);
                                // 如果连续点击
                       } else {
                                // 是展开，收回
                                if (node.open) {
                                         zTree_Menu.expandNode(node, false, true);
                                         // 移除样式
                                         a = $("#" + node.tId + "_a");
                                         a.removeClass("cur");
                                         // 是收回，展开
                                } else {
                                         zTree_Menu.expandNode(node, true, false);
                                         // 添加样式
                                         a = $("#" + node.tId + "_a");
                                         a.addClass("cur");
                                }
                                // 标识符
                                flag = true;
                       }
                       // 点击0级节点清空1及和2及样式
                       if (curMenu1) {
                                a = $("#" + curMenu1.tId + "_a");
                                a.removeClass("cur1");
                       }
                       // 点击0级节点清空1及和2及样式
                       if (curMenu2) {
                                a = $("#" + curMenu2.tId + "_a");
                                a.removeClass("cur2");
                       }
             }
             // 收回所有1及和2级节点
             if (node.isParent) {
                       for (var i = 0, l = node.children.length; i < l; i++) {
                                if (node.children[i].open) {
                                         zTree_Menu.expandNode(node.children[i], false, true);
                                }
                       }
             }
             // 节点复制
             curMenu = node;
             // 当不是连续点击同一个节点，并且是收回状态
             if (!flag) {
                       zTree_Menu.expandNode(node, true);
                       // 添加样式
                       a = $("#" + node.tId + "_a");
                       a.addClass("cur");
             }
    } else if (node.level === 1) {
             var pNode = curMenu1;
 
             if (pNode) {
 
                       if (pNode !== node) {
                                var a = $("#" + pNode.tId + "_a");
                                a.removeClass("cur1");
                                zTree_Menu.expandNode(pNode, false, true);
                       } else {
                                if (node.open) {
                                         zTree_Menu.expandNode(node, false, true);
                                         // 移除样式
                                         a = $("#" + node.tId + "_a");
 
                                         a.removeClass("cur1");
                                } else {
                                         zTree_Menu.expandNode(node, true, false);
                                         a = $("#" + node.tId + "_a");
                                         a.addClass("cur1");
                                }
 
                                flag = true;
                       }
                       if (curMenu2) {
                                var a = $("#" + curMenu2.tId + "_a");
                                a.removeClass("cur2");
                       }
             }
             if (node.isParent) {
                       for (var i = 0, l = node.children.length; i < l; i++) {
                                if (node.children[i].open) {
                                         zTree_Menu.expandNode(node.children[i], false, true);
 
                                }
                       }
             }
             curMenu1 = node;
             if (!flag) {
                       zTree_Menu.expandNode(node, true);
                       a = $("#" + node.tId + "_a");
                       a.addClass("cur1");
 
             }
    } else if (node.level === 2) {
             var pNode = curMenu2;
             if (pNode) {
 
                       if (pNode !== node) {
                                var a = $("#" + pNode.tId + "_a");
                                a.removeClass("cur2");
                                zTree_Menu.expandNode(pNode, false, true);
                      } else {
                                if (node.open) {
                                         zTree_Menu.expandNode(node, false, true);
                                         a.removeClass("cur2");
                                         zTree_Menu.expandNode(pNode, false, true);
                                } else {
                                         zTree_Menu.expandNode(node, true, false);
                                         a = $("#" + node.tId + "_a");
                                         a.addClass("cur2");
                                }
                                flag = true;
                       }
             }
             if (node.isParent) {
                       for (var i = 0, l = node.children.length; i < l; i++) {
                                if (node.children[i].open) {
                                         zTree_Menu.expandNode(node.children[i], false, true);
 
                                }
                       }
             }
             curMenu2 = node;
             if (!flag) {
                       zTree_Menu.expandNode(node, true);
                       a = $("#" + node.tId + "_a");
                       a.addClass("cur2");
 
             }
    }
    return true;
 
}
function onClick(event, treeId, treeNode) {
 
}
 
function ztreeBeforeExpand(treeId, treeNode) {
    beforeClick(treeId, treeNode);
    return false;
};
 
function ztreeOnExpand(treeId, treeNode) {
    beforeClick(treeId, treeNode);
    return false;
};
 
function ztreeBeforeCollapse(treeId, treeNode) {
    beforeClick(treeId, treeNode);
    return false;
};
 
function ztreeoOnCollapse(treeId, treeNode) {
    beforeClick(treeId, treeNode);
    return false;
};
 
$(document).ready(function() {
    $.fn.zTree.init($("#ec_ztree"), setting, zNodes);
    zTree_Menu = $.fn.zTree.getZTreeObj("ec_ztree");
});