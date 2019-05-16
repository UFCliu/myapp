/** ********indexes init start, global realms variable initialize start********* */
// 活动规则信息
var activityRuleIndex = 1;
// 活动店铺详细信息
var activityStoreInfoIndex = 1;
// 赠送卡卷详细信息
var activityFreeCouponIndex = 1;
// 赠送商品详细信息
var activityFreeGoodsInfoIndex = 1;
// 活动规则
var activity_rule_msg = "RULES";
var activity_supplier_msg = "SUPPLIERS";
// 判断是否应该跳转
var activityRuleFormSubmitCount = 0;
var activityStoreFormSubmitCount = 0;
/** ********indexes init end, global realms variable initialize end*********** */

function getActivityGoods() {
	var supplierId = $("#supplierId").val();
	var businessRelationship = $("#checkTarget").val();
	var table = null;
	table = $('#activity_goods_example').dataTable({
		"scrollX" : true,
		"scrollY" : "420px",
		"scrollCollapse" : true,
		"ajax" : {
			"url" : "/cmcActivity/getActivityCommodities.ajax?supplierId=" + supplierId + "&businessRelationship=" + businessRelationship,
			"type" : "POST"
		},
		"oLanguage" : {
			"sUrl" : "${ctx}/resources/newstyle/js/dataTables.zh_CN.js"
		},
		"serverSide" : true,
		"bStateSave" : true,
		"searching" : false, // search delete
		"sPaginationType" : "full_numbers",// 分页
		'dom' : '<"top">rt<"bottom"ilp><"clear">',
		'iDisplayLength' : 10,
		"bProcessing" : true,
		"ordering" : false,
		"processing" : true,
		"bAutoWidth" : false,
		"destroy":true,
		"columns" : [
			{
				"targets" : 0,
				"data" : "productId",
				"render" : function(data, type, full, meta) {
					return '<input type="checkbox" value="' + data + '" name="checkobj"/>';
				}
			},
			{
				"data" : null,
				"mRender" : function(data, type, row, cell) {
					return cell.settings._iDisplayStart + cell.row + 1;
				}
			}, {
				"data" : "priceTypeEnum"
			}, {
				"data" : "purchaseProductPrice"
			} 
		]
	});
}

/**
 * 活动表单校验
 */
function activityFromCheck() {
	// 得到前台所有活动表数据
	var name = String($("#activityName").val()),
	type = String($("#type").val()),
	target = String($("#checkTarget").val()),
	platform = String($("#platform").val()),
	terminal = String($("#terminal").val()),
	nameTagBig = String($("#nameTagBig").val()),
	nameTagMiddle = String($("#nameTagMiddle").val()),
	nameTagSmall = String($("#nameTagSmall").val()),
	showBeginDatetime = String($("#showBeginDate").val()),
	showEndDatetime = String($("#showEndDate").val()),
	beginDatetime = String($("#beginDate").val()),
	endDatetime = String($("#endDate").val()),
	description = String($("#remarks").val());
	
	if (0 == btnClickedCount) {
		// 校验页面上的所有元素是否为空
		if ("" == name) {
			$("#activityName").after("<span id='tname' class='msg_no'>请输入活动名称！</span>");
		}
		if (""==type) {
			$("#type").after("<span class='msg_no'>请选择活动类型！</span>");
		}
		if (""==target) {
			$("#checkTarget").after("<span class='msg_no'>请选择活动面向对象！</span>");
		}
		if (""==platform) {
			$("#platform").after("<span class='msg_no'>请选择活动平台！</span>");
		}
		if (""==terminal) {
			$("#terminal").after("<span class='msg_no'>请选择活动终端！</span>");
		}
		if (""==nameTagSmall) {
			$("#nameTagSmall").after("<span class='msg_no'>请输入活动小标签！</span>");
		}
		if (""==nameTagMiddle) {
			$("#nameTagMiddle").after("<span class='msg_no'>请输入活动中标签！</span>");
		}
		if (""==nameTagBig) {
			$("#nameTagBig").after("<span class='msg_no'>请输入活动大标签！</span>");
		}
		if (""==showBeginDatetime || "" == showEndDatetime) {
			$("#showEndDate").after("<span class='msg_no'>请输入活动展示时间！</span>");
		}
		if (""==beginDatetime || "" == endDatetime) {
			$("#endDate").after("<span class='msg_no'>请输入活动时间！</span>");
		}
		if (""==description) {
			$("#remarks").append("<span class='msg_no'>请输入活动描述！</span>");
		}
		btnClickedCount ++;
		return false;
	}
	return true;
}

/**
 * 校验商品活动表单
 * @param limitBuyPerDay
 * @param limitBuyPerTime
 * @param reachAmount
 * @param reachCount
 * @param discountAmount
 * @param discountRate
 */
function checkActivityRulesForm(limitBuyPerDay, limitBuyPerTime, reachAmount, reachCount, discountAmount, discountRate) {
    var activityType = $("#type").val();
    // 每天限买次数check
    var limitBuyPerDayFlag = checkInteger(limitBuyPerDay);
    if (false == limitBuyPerDayFlag) {
    	openMessage("请输入正整数!");
    	$("#limitBuyPerDay").val("");
        return false;
    }
    var limitBuyPerTimeFlag = checkInteger(limitBuyPerTime);
    if (false == limitBuyPerTimeFlag) {
    	openMessage("请输入正整数!");
    	$("#limitBuyPerTime").val("");
        return false;
    }
    if ("JIN_E_MAN_JIAN" == activityType) {
    	var reachAmountFlag = checkFloat(reachAmount);
        if (false == reachAmountFlag) {
        	openMessage("请输入正整数或输入有一位、两位小数的浮点数!");
        	$("#reachAmount").val("");
            return false;
        }
        var discountAmountFlag = checkFloat(discountAmount);
        if (false == discountAmountFlag) {
        	openMessage("请输入正整数或输入有一位、两位小数的浮点数!");
        	$("#discountAmount").val("");
            return false;
        }
    } else if ("SHU_LIANG_MAN_JIAN" == activityType) {
    	var reachCountFlag = checkInteger(reachCount);
        if (false == reachCountFlag) {
        	openMessage("请输入正整数!");
        	$("#reachCount").val("");
            return false;
        }
        var discountAmountFlag = checkFloat(discountAmount);
        if (false == discountAmountFlag) {
        	openMessage("请输入正整数或输入有一位、两位小数的浮点数!");
        	$("#discountAmount").val("");
            return false;
        }
    } else if ("JIN_E_ZHE_KOU_SHANGPIN_XIANDING" == activityType) {
    	var reachAmountFlag = checkFloat(reachAmount);
        if (false == reachAmountFlag) {
        	openMessage("请输入正整数或输入有一位、两位小数的浮点数!");
        	$("#reachAmount").val("");
            return false;
        }
        var discountRateFlag = checkInteger(discountRate);
        if (false == discountRateFlag) {
        	openMessage("请输入正整数!");
        	$("#discountRate").val("");
            return false;
        }
    } else if ("SHU_LIANG_ZHE_KOU" == activityType) {
    	var reachCountFlag = checkInteger(reachCount);
        if (false == reachCountFlag) {
        	openMessage("请输入正整数或输入有一位、两位小数的浮点数!");
        	$("#reachCount").val("");
            return false;
        }
        var discountRateFlag = checkInteger(discountRate);
        if (false == discountRateFlag) {
        	openMessage("请输入正整数或输入有一位、两位小数的浮点数!");
        	$("#discountRate").val("");
            return false;
        }
    }
}

/**
 * 校验活动赠券信息
 * @param couponType
 * @param couponDenomination
 * @param couponCount
 */
function checkActivityComplementaryCoupon(couponType, couponDenomination, couponCount) {
	// 赠券类型
	if (couponType == "") {
		openMessage("请选择赠券类型!");
		return false;
	}
	// 赠券面额
	var couponDenominationFlag = checkFloat(couponDenomination);
    if (false == couponDenominationFlag) {
    	openMessage("请输入正整数或输入有一位、两位小数的浮点数!");
    	$("#couponDenomination").val("");
        return false;
    }
    // 赠券数量
    var couponCountFlag = checkInteger(couponCount);
    if (false == couponCountFlag) {
    	openMessage("请输入正整数!");
    	$("#couponCount").val("");
        return false;
    }
}

/**
 * 校验活动商品赠品数量
 * @param complimentaryGoodsCount
 */
function checkActivityComplementaryCommoditiesSum(complimentaryGoodsCount) {
	// 赠品数量
    var complimentaryGoodsCountFlag = checkInteger(complimentaryGoodsCount);
    if (false == complimentaryGoodsCountFlag) {
    	openMessage("请输入正整数!");
    	$("#complimentaryGoodsCount").val("");
        return false;
    }
}

/**
 * 校验整数
 * @param args
 */
function checkInteger(args) {
	var reg = /^[0-9]\d*$/;
	return reg.test(args);
}

/**
 * 判断有一位或两位小数的浮点数
 * @param floatNum
 */
function checkFloat(floatNum) {
	var reg = /^[1-9]+([.]{1}[0-9]{1,2})?$/;
	return reg.test(floatNum);
}

/**
 * 把时间转换成毫秒
 * @param date
 */
function getMillisecond(date) {
	var array = date.split("-");
	var starttime = new Date(array[0], array[1], array[2]);
	return starttime.getTime();
}

/**
 * 比较时间大小
 * @param activityDisplayStartTime
 * @param activityStartTime
 */
function compare(activityDisplayEndTime, activityStartTime) {
	if (activityStartTime > activityDisplayEndTime) {
		return true;
	}
	openMessage("活动时间应在展示时间之后!");
	return false;
}

// 页面中的日期插件
!function() {
	laydate.skin('molv');
	laydate({
		elem : '#beginDate',
		choose : function(datas) {
			if ($("#endDate").val() != "") {
				if ($("#endDate").val() < datas) {
					$("#beginDate").val("");
					openMessage("活动开始日期选择不合理，请重新选择！");
				}
			}
		}
	});
	laydate({
		elem : '#endDate',
		choose : function(datas) {
			if ($("#beginDate").val() != "") {
				if ($("#beginDate").val() > datas) {
					$("#endDate").val("");
					openMessage("活动结束日期选择不合理，请重新选择！");
				}
			}
		}
	});
	laydate({
		elem : '#showBeginDate',
		choose : function(datas) {
			if ($("#showEndDate").val() != "") {
				if ($("#showEndDate").val() < datas) {
					$("#showBeginDate").val("");
					openMessage("展示开始日期选择不合理，请重新选择！");
				}
			}
		}
	});
	laydate({
		elem : '#showEndDate',
		choose : function(datas) {
			if ($("#showBeginDate").val() != "") {
				if ($("#showBeginDate").val() > datas) {
					$("#showEndDate").val("");
					openMessage("展示结束日期选择不合理，请重新选择！");
				}
			}
		}
	});
}();

//改变商品状态
function changeStatus() {
    // 得到活动类型
    var type = $("#type").val();
    if ("" != type && "JIN_E_MAN_JIAN" == type) {
        status1();
    } else if ("" != type && "SHU_LIANG_MAN_JIAN" == type) {
    	status2();
    } else if ("" != type && "JIN_E_ZHE_KOU_SHANGPIN_XIANDING" == type) {
    	status3();
    } else if ("" != type && "SHU_LIANG_ZHE_KOU" == type) {
        status4();
    }
}

// 金额满减
function status1() {
    $("#reach_amount").css("display", "block");
    $("#discount_amount").css("display", "block");
    $("#reach_count").css("display", "none");
    $("#discount_rate").css("display", "none");
}

// 数量满减
function status2() {
    $("#reach_count").css("display", "block");
    $("#discount_amount").css("display", "block");
    $("#reach_amount").css("display", "none");
    $("#discount_rate").css("display", "none");
}

// 金额折扣
function status3() {
    $("#reach_amount").css("display", "block");
    $("#discount_rate").css("display", "block");
    $("#reach_count").css("display", "none");
    $("#discount_amount").css("display", "none");
}

// 数量折扣
function status4() {
    $("#reach_count").css("display", "block");
    $("#discount_rate").css("display", "block");
    $("#reach_amount").css("display", "none");
    $("#discount_amount").css("display", "none");
}

/**
 * 删除一条记录
 * @param trId
 */
function deleteItem(trId){
	$("#"+trId).remove();
}

/**
 * 根据当前page的值显示tag页
 */
function changeColor(page) {
	// 根据page的值变换nav的颜色
    if (page == 1) {
        $("#nav1").attr('class', 'current_over');
        $("#nav2").attr('class', 'last');
        $("#nav3").attr('class', 'last');
        $("#nav4").attr('class', 'last');
        $("#nav5").attr('class', 'last');
    } else if (page == 2) {
    	$("#nav1").attr('class', 'last');
        $("#nav2").attr('class', 'current_over');
        $("#nav3").attr('class', 'last');
        $("#nav4").attr('class', 'last');
        $("#nav5").attr('class', 'last');
    } else if (page == 3) {
    	$("#nav1").attr('class', 'last');
        $("#nav2").attr('class', 'last');
        $("#nav" + 3).attr('class', 'current_over');
        $("#nav4").attr('class', 'last');
        $("#nav5").attr('class', 'last');
    } else if (page == 4) {
    	$("#nav1").attr('class', 'last');
        $("#nav2").attr('class', 'last');
        $("#nav3").attr('class', 'last');
        $("#nav4").attr('class', 'current_over');
        $("#nav5").attr('class', 'last');
    } else if (page == 5) {
    	$("#nav1").attr('class', 'last');
        $("#nav2").attr('class', 'last');
        $("#nav3").attr('class', 'last');
        $("#nav4").attr('class', 'last');
        $("#nav5").attr('class', 'current_over');
    }
}

/**
 * 根据传过来的参数调用相应的保存方法
 * @param constant
 */
function save(constant) {
	if ("RULES" == constant) {
		submitActivityRulesForm();
		$("#confirmFade").remove();
		$("#confirmLight").remove();
	} else if ("SUPPLIERS" == constant) {
		submitActivityStoresForm();
		$("#confirmFade").remove();
		$("#confirmLight").remove();
	}
}

/**
 * 返回到活动一览表
 */
function toShowActivity() {
	window.location.href = "/cmcActivity/list.jhtml";
}

/**
 * 不保存
 */
function notSave(pageNo, activityId, type, target, tagNameBig, tagNameMiddle, tagNameSmall) {
	window.location.href = "/cmcActivity/toAdd.jhtml?page=" + pageNo + "&activityId=" + activityId +
                                                   "&type=" + type + "&target=" + target + 
                                                   "&tagNameBig=" + tagNameBig + "&tagNameMiddle=" + tagNameMiddle +
                                                   "&tagNameSmall=" + tagNameSmall;
}

/**
 * 更新跳转
 * @param pageNo
 * @param activityId
 */
function toUpdate(pageNo, activityId, type, target, tagNameBig, tagNameMiddle, tagNameSmall) {
	window.location.href="/cmcActivity/toUpdate.jhtml?page=" + pageNo + "&activityId=" + activityId +
                                                   "&type=" + type + "&target=" + target + 
                                                   "&tagNameBig=" + tagNameBig + "&tagNameMiddle=" + tagNameMiddle +
                                                   "&tagNameSmall=" + tagNameSmall;
}

/**
 * 弹出用户信息，例如openModal("您已经输入数据，页面跳转前是否先进行保存?", ["不保存","notSave("+ pageNo + ", '" + activityId +"')", "保存", "save('"+ activity_rule_msg +"')"])
 */
function openModel(message, button) {
	$("body").append(getModelHtml(message, button));
	$("#confirmFade").css('z-index', 3000).show();
	$("#confirmLight").css('z-index', 3001).show();
}

/**
 * 当用户点击右上角的×的时候，传进来的页面跳转的方法
 * @param message
 * @param button
 * @returns {String}
 */
function getModelHtml(message, button) {
	var html = '<div id="confirmLight" class="white_content color1" style="width:540px;margin:0 auto;position:fixed; z-index:3000; left: 50%;margin-left:-270px; top: 50%;margin-top:-100px;" > <b class="b1"></b><b class="b2"></b><b class="b3"></b><b class="b4"></b>';
	html += ' <div class="popup_title content ">';
	html += '  <h2 class="details_title_popup" id="popup_title">提示</h2>';
	html += '<a href="#" onclick="'+ button[1] +'"><img src="/resources/newstyle/images/icon_popup.png" width="14" height="14"/></a> <span class="popup_b"></span> </div>';
	html += '<div  class="search_bar_popup content">';
	html += '<div class="condition content" id="popup_content"><ul class="select_down"><li><p>'+message+'</p></li></ul> </div>';
	html += ' <div class="button_toolbar"> ';
	for(var i = 0 ; i < button.length;i++){
		html += '<span class="fr"><a id="notSure" href="#" onclick="'+button[i+1]+'">'+button[i]+'</a></span>';
		i++;
	}
	html += '</div>';
	html += '</div>';
	html += ' <b class="b5"></b><b class="b6"></b><b class="b7"></b><b class="b8"></b> ';
	html += '</div>	';
	html += '<div id="confirmFade" class="black_overlay"></div>';
	return html;
}

/**
 * 根据pageNo来显示那个page页应该显示
 * @param pageNo
 */
function gotoPage(pageNo) {
	var activityId = $("#activity_id").val();
	if (activityId != "" && activityId != "undefined" && activityId != null) {
		// 活动规则页面、参加这次活动的供应商
		if ($("#activity_rule_dom_operate").find("tr").length > 0 && activityRuleFormSubmitCount == 0) {
			openModal("您已经输入数据，页面跳转前是否先进行保存?", ["不保存","notSave("+ pageNo + ", '" + activityId +"')", "保存", "save('"+ activity_rule_msg +"')"]);
		} else if ($("#activity_stores_dom_operate").find("tr").length > 0 && activityStoreFormSubmitCount == 0) {
			openModal("您已经输入数据，页面跳转前是否先进行保存?", ["不保存","notSave("+ pageNo + ", '" + activityId +"')", "保存", "save('"+ activity_supplier_msg +"')"]);
		} else {
			window.location.href="/cmcActivity/toAdd.jhtml?page=" + pageNo + "&activityId=" + activityId;
		}
	} else {
		window.location.href="/cmcActivity/toAdd.jhtml?page=" + pageNo;
	}
}
