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
		beforeExpand : ztreeBeforeExpand,
		onExpand : ztreeOnExpand,
		beforeCollapse : ztreeBeforeCollapse,
		onCollapse : ztreeoOnCollapse
	}
};

var zNodes = [];
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
					a = $("#" + node.tId + "_a");
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
	$("#navbar").empty();
	$("#navbar").append("<em>当前所在位置：</em><span><a target='_top' href='/index.jhtml' >首页</a></span>");
	var treeObj = $.fn.zTree.getZTreeObj(treeId);
	var sNodes = treeObj.getNodeByTId(treeNode.tId);
	if (sNodes != null) {
		if (sNodes.parentTId != null) {
			var node = treeObj.getNodeByTId(sNodes.parentTId);
			if (node != null) {
				if (node.parentTId != null) {
					var tnode = treeObj.getNodeByTId(node.parentTId);
					if (tnode != null) {
						if (tnode.url == undefined) {
							$("#navbar").append("&nbsp;&nbsp;>&nbsp;&nbsp;<span style='color: #21a27a;'>" + tnode.name + "</span>");
						} else {
							$("#navbar").append("&nbsp;&nbsp;>&nbsp;&nbsp;<span style='color: #21a27a;'>" + tnode.name + "</span>");
						}
					}
				}
				if (node.url == undefined) {
					$("#navbar").append("&nbsp;&nbsp;>&nbsp;&nbsp;<span style='color: #21a27a;'>" + node.name + "</span>");
				} else {
					$("#navbar").append("&nbsp;&nbsp;>&nbsp;&nbsp;<span style='color: #21a27a;'>" + node.name + "</span>");
				}
			}
		}
		if (sNodes.url == undefined) {
			$("#navbar").append("&nbsp;&nbsp;>&nbsp;&nbsp;<span style='color: #21a27a;'>" + sNodes.name + "</span>");
		} else {
			$("#navbar").append("&nbsp;&nbsp;>&nbsp;&nbsp;<span style='color: #21a27a;'>" + sNodes.name + "</span>");
		}
	}
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
