// 对Date的扩展，将 Date 转化为指定格式的String 
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.format = function(fmt) 
{ //author: meizz 
  var o = { 
    "M+" : this.getMonth()+1,                 //月份 
    "d+" : this.getDate(),                    //日 
    "h+" : this.getHours(),                   //小时 
    "m+" : this.getMinutes(),                 //分 
    "s+" : this.getSeconds(),                 //秒 
    "q+" : Math.floor((this.getMonth()+3)/3), //季度 
    "S"  : this.getMilliseconds()             //毫秒 
  }; 
  if(/(y+)/.test(fmt)) 
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
  for(var k in o) 
    if(new RegExp("("+ k +")").test(fmt)) 
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
  return fmt; 
}

var currentDate=new Date().format("yyyy-MM-dd");

jQuery(function($){   
     $.datepicker.regional['zh-CN'] = {   
        clearText: '清除',   
        clearStatus: '清除已选日期',   
        closeText: '清除',   
        closeStatus: '不改变当前选择',   
        prevText: '<上月',   
        prevStatus: '显示上月',   
        prevBigText: '<<',   
        prevBigStatus: '显示上一年',   
        nextText: '下月>',   
        nextStatus: '显示下月',   
        nextBigText: '>>',   
        nextBigStatus: '显示下一年',   
        currentText: '今天',   
        currentStatus: '显示本月',
        monthNames: ['一月','二月','三月','四月','五月','六月', '七月','八月','九月','十月','十一月','十二月'],   
        monthNamesShort: ['一','二','三','四','五','六', '七','八','九','十','十一','十二'],   
        monthStatus: '选择月份',   
        yearStatus: '选择年份',   
        weekHeader: '周',   
        weekStatus: '年内周次',   
        dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],   
        dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],   
        dayNamesMin: ['日','一','二','三','四','五','六'],   
        dayStatus: '设置 DD 为一周起始',   
        dateStatus: '选择 m月 d日, DD',   
        dateFormat: 'yy-mm-dd',
        firstDay: 1,   
        changeMonth: true,
        changeYear: true,
        initStatus: '请选择日期',   
        isRTL: false,
        showButtonPanel:true,
        beforeShow:function(input,inst){
        	datepicker_CurrentInput = input;
         }
     	};
	     
        $.datepicker.setDefaults($.datepicker.regional['zh-CN']); 
        
        $(document).on("click",".ui-datepicker-close",function(){
        	datepicker_CurrentInput.value = "";  
        });
        $(document).on("click",".ui-datepicker-current",function(){
        	$(datepicker_CurrentInput).blur();
        });
        $(".datepicker").datepicker({
        	onClose:function(selectedDate){
        		var d=$(this).attr("date");
        		if(d!=undefined&&d!=""){
        			d=JSON.parse(d);
        			$( "#"+d.id).datepicker( "option", d.type, selectedDate );
        		}
        	}
        });
    });  


function time(){
	$('.timepicker').pickatime({
		interval: 60,
		format:"HHi",
		formatSubmit: "HHi",
		editable: "true"
	});
	$('.timepicker').each(function(){
		$(this).removeAttr("readonly");
	});
}