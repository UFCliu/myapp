//产品批号处理相关
var newindex = 0;
$(".addpihao img").click(function(){
	addpihao($(this));
});
$(".delpihao img").click(function(){
	delpihao($(this));
});
$("tr[index=0] td span.delpihao").hide();
function getLastIndex(){
	return +$("tr[index]").last().attr("index");
}

function addpihao(ele){
	var currentTr = ele.parent().parent().parent().attr("index");
	//获取当前索引下的条数
	newindex = parseInt(newindex) + 1;
	
	//复制当前点击的tr
	var cloneTr = ele.parent().parent().parent().clone(true);
//	cloneTr.find("input[name=batchModel[0].batchNo]").val("");
//	cloneTr.find("input[name=batchModel[0].mfgDate]").attr("id", "scrq_"+newindex);
//	cloneTr.find("input[name=batchModel[0].mfgDate]").val("");
//	cloneTr.find("input[name=batchModel[0].expDate]").attr("id", "yxq_"+newindex);
//	cloneTr.find("input[name=batchModel[0].expDate]").val("");
	cloneTr.find("input[name='batchModel[0].batchNo']").val("");
	cloneTr.find("input[name='batchModel[0].batchNo']").attr("id", "scph_"+newindex);
	
	cloneTr.find("input[name='batchModel[0].mfgDate']").attr("id", "scrq_"+newindex);
	cloneTr.find("input[name='batchModel[0].mfgDate']").val("");
	cloneTr.find("input[name='batchModel[0].mfgDate']").attr("onclick", "").click(eval(function(){
		laydate({elem: '#scrq_'+newindex,max: laydate.now()})
	}));
	cloneTr.find("input[name='batchModel[0].expDate']").attr("id", "yxq_"+newindex);
	cloneTr.find("input[name='batchModel[0].expDate']").val("");
	cloneTr.find("input[name='batchModel[0].expDate']").attr("onclick", "").click(eval(function(){
		laydate({elem: '#yxq_'+newindex,min: laydate.now()})
	}));
	cloneTr.find("input[name='batchModel[0].batchNo']").attr("name", "batchModel["+newindex+"].batchNo");
	cloneTr.find("input[name='batchModel[0].mfgDate']").attr("name", "batchModel["+newindex+"].mfgDate");
	cloneTr.find("input[name='batchModel[0].expDate']").attr("name", "batchModel["+newindex+"].expDate");
	cloneTr.find("td span.delpihao").show();
	cloneTr.find("td span.addpihao").hide();
	
	ele.parent().parent().parent().after(cloneTr);
	setTimeout(function(){
		laydate({elem: '#scrq_'+currentTr+"_"+newindex,max: laydate.now()});
		laydate({elem: '#yxq_'+currentTr+"_"+newindex});

    },500);
	
}

function delpihao(ele){
	var currentTr = ele.parent().parent().parent();
	var lastindex = getLastIndex();
	currentTr.remove();
}