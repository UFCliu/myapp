// DataTables 共通方法
var dataTable = function(id){
	// 实例datatables对象
	this.table = $("#"+id).DataTable();
	var _table = $("#"+id).DataTable();
	
	/**
	 * 行选中变色
	 */ 
	$('#'+id+' tbody').on( 'click', 'tr', function () {
		if ( $(this).hasClass('currSelected') ) {
            $(this).removeClass('currSelected');
        }
        else {
        	_table.$('tr.currSelected').removeClass('currSelected');
            $(this).addClass('currSelected');
        }
    } );
	
	
	/**
	 * 异步删除数据，类方法，直接类名调用
	 * name:后台删除标识;
	 * url:删除方法url
	 */
	dataTable.ajax_delete = function(name,url){
		if(!_table.row('.currSelected').data()){
		       alert("请选择要删除的记录！");
		       return false;
		}
		var id = _table.row('.currSelected').data().id;
   		if(!confirm("确定要删除这条数据吗?")){
   			return false;
   		}
	    var json ='{"'+name+'":"'+id+'"}';
		$.ajax({
            url : url,
            data: eval('(' + json + ')'),
            type : "POST",
            success : function (result){
            	_table.ajax.reload(null,false);
            }
        });
	}
	
	/**
	 * 异步保存数据
	 * formName:表单id
	 * modelName:modelId
	 */
	dataTable.ajax_view = function(formName,modelName){
		document.getElementById(formName).reset();
		$("#id").val("");
		$("#"+modelName).modal({backdrop:'static'});
	}
}

//计算天数差的函数，通用  
function DateDiff(sDate1, sDate2) { // sDate1和sDate2是2006-12-18格式
	var aDate, oDate1, oDate2, iDays;
	aDate = sDate1.split("-");
	// //转换为12-18-2006格式
	oDate1 = new Date(aDate[0], parseInt(aDate[1]) - 1, aDate[2]);
	aDate = sDate2.split("-");
	oDate2 = new Date(aDate[0], parseInt(aDate[1]) - 1, aDate[2]);
	iDays = parseInt((oDate1 - oDate2) / 1000 / 60 / 60 / 24); // 把相差的毫秒数转换为天数
	return iDays;
}

// 追加事件处理，保证DataTable在初始化时生成一个序号列
$.fn.extend({
	addIndex:function() {
		return this.on("xhr.dt", function(e, setting, response){
		    // 发生业务异常则不做处理
			if (!response.error){
				$.each(response.data, function(i, item){
					item["no"] = response.startIndex + i + 1;
				});
			}
		});
	}
});

//追加方法, 保证Table在Reload的时候不更改页数
$.fn.dataTable.Api.register( 'ajax.reloadWithPos()', function (callback) {
	this.ajax.reload(null,false); 
});

//将Datable的内容数据做html转义
$.extend( $.fn.dataTable.defaults, {
	fnCreatedRow : function(nRow, aData, iDataIndex) {
		var columns = this.fnSettings().aoColumns;
		var currentIndex = 0;
		var jrow = $(nRow);
		for (var i = 0 ; i < columns.length ; i++) {
			if(columns[i].bVisible) {
				if ( !columns[i].mRender){
					var jtd = jrow.find("td:eq(" + currentIndex + ")");
					jtd.text(jtd.html());
				}
				currentIndex ++;
			}
		}
	}
} );



