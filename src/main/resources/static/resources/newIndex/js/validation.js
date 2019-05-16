/**
 * 验证专用JS
 */
$.extend($.validator.defaults, {
	/**
	 * 当验证出错时，通过ToolTip显示
	 */
	 showErrors : function(errorMap, errorList) {
			var form = $(this.currentForm);
			clearValidationErrors(form);
		 	if (errorList.length != 0) {
		 		// 添加异常ToolTip
				$.each(errorList, function(i, n){
					$(n.element).attr("title", n.message).addClass("validate-error").tooltip();
				});
				// 绑定关闭处理
				if (!form.data("bindedClearHandler")) {
					// 在Modal的关闭事件中清空所有的异常信息
					form.closest(".modal").on("hide.bs.modal", function(){
						clearValidationErrors(form);
					});
					form.data("bindedClearHandler", true);
				}
		 	} else {
		 		// 没有错误则清空异常信息
		 		clearValidationErrors(form);
		 	}
		 	
		 	function clearValidationErrors(form) {
		 		form.find(".validate-error").tooltip("destroy").removeAttr("title").removeClass("validate-error");
		 	}
		 },
		 onfocusout:false
});

// 年龄验证
$.validator.addMethod("age", function(value, element, params) {
	return this.optional(element) || (/^\d{1,2}$/).test(value);
}, "请正确填写年龄");

// 手机号码验证
$.validator.addMethod("mobile", function(value, element, params) {
	return this.optional(element) || (/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/).test(value);
}, "请正确填写手机号码");

// 电话号码验证
$.validator.addMethod("phone", function(value, element, params) {
	return this.optional(element) || ( /^(?:(?:0\d{2,3})-)?(?:\d{7,8})(-(?:\d{3,}))?$/).test(value);
}, "请正确输入手机号码，例如XXXX-XXXXXXXX-XXX");
$.validator.addMethod("checkNumber",function(value,element,params){
    return this.optional(element) || (/^[0-9]*$/).test(value);
},"只能输入数字")
$.validator.addMethod("checkAllNumber",function(value,element,params){
    return this.optional(element) || (/^([0-9])*$|^([0-9]+\.?(\d){2})*$/).test(value);
},"");

$.validator.addMethod("isZipCode", function(value, element,params) {   
    var tel = /^[0-9]{6}$/;
    return this.optional(element) || (tel.test(value));
}, "请正确填写您的邮政编码");
$.validator.addMethod("webUrl", function(value, element, params) {
	return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
}, "请正确填写您的网址");

//手机或邮箱
$.validator.addMethod("email", function(value, element, params) {
	var mail =/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/;
	return this.optional(element) || mail.test(value) ;
}, "请输入正确的邮箱");
$.validator.addMethod("isIdCardNo", function (value, element,params) {
    return this.optional(element) || isIdCardNo(value);
}, "请正确输入您的身份证号码");
//增加身份证验证
function isIdCardNo(num) {
    var factorArr = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1);
    var parityBit = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
    var varArray = new Array();
    var intValue;
    var lngProduct = 0;
    var intCheckDigit;
    var intStrLen = num.length;
    var idNumber = num;
    // initialize
    if ((intStrLen != 15) && (intStrLen != 18)) {
        return false;
    }
    // check and set value
    for (i = 0; i < intStrLen; i++) {
        varArray[i] = idNumber.charAt(i);
        if ((varArray[i] < '0' || varArray[i] > '9') && (i != 17)) {
            return false;
        } else if (i < 17) {
            varArray[i] = varArray[i] * factorArr[i];
        }
    }
    if (intStrLen == 18) {
        //check date
        var date8 = idNumber.substring(6, 14);
        if (isDate8(date8) == false) {
            return false;
        }
        // calculate the sum of the products
        for (i = 0; i < 17; i++) {
            lngProduct = lngProduct + varArray[i];
        }
        // calculate the check digit
        intCheckDigit = parityBit[lngProduct % 11];
        // check last digit
        if (varArray[17] != intCheckDigit) {
            return false;
        }
    }
    else {        //length is 15
        //check date
        var date6 = idNumber.substring(6, 12);
        if (isDate6(date6) == false) {
            return false;
        }
    }
    return true;
}
function isDate6(sDate) {
    if (!/^[0-9]{6}$/.test(sDate)) {
        return false;
    }
    var year, month, day;
    year = sDate.substring(0, 4);
    month = sDate.substring(4, 6);
    if (year < 1700 || year > 2500) return false
    if (month < 1 || month > 12) return false
    return true
}
/**
* 判断是否为“YYYYMMDD”式的时期
*
*/
function isDate8(sDate) {
    if (!/^[0-9]{8}$/.test(sDate)) {
        return false;
    }
    var year, month, day;
    year = sDate.substring(0, 4);
    month = sDate.substring(4, 6);
    day = sDate.substring(6, 8);
    var iaMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (year < 1700 || year > 2500) return false
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) iaMonthDays[1] = 29;
    if (month < 1 || month > 12) return false
    if (day < 1 || day > iaMonthDays[month - 1]) return false
    return true
}
//过期时间验证
$.validator.addMethod("checkBegDate", function(value) {
	if(daysBetween(value,fomateDate(new Date(), 'YYYY-MM-DD'))>0) return false ;
	return true ;
}, "选择时间未生效！");
//过期时间验证
$.validator.addMethod("checkEndDate", function(value) {
	if(daysBetween(value,fomateDate(new Date(), 'YYYY-MM-DD'))<=0) return false ;
	return true ;
}, "选择时间已过期！");
//| 求两个时间的天数差 日期格式为 YYYY-MM-dd
//+---------------------------------------------------
function daysBetween(DateOne,DateTwo)
{
var OneMonth = DateOne.substring(5,DateOne.lastIndexOf ('-'));
var OneDay = DateOne.substring(DateOne.length,DateOne.lastIndexOf ('-')+1);
var OneYear = DateOne.substring(0,DateOne.indexOf ('-'));

var TwoMonth = DateTwo.substring(5,DateTwo.lastIndexOf ('-'));
var TwoDay = DateTwo.substring(DateTwo.length,DateTwo.lastIndexOf ('-')+1);
var TwoYear = DateTwo.substring(0,DateTwo.indexOf ('-'));

var cha=((Date.parse(OneMonth+'/'+OneDay+'/'+OneYear)- Date.parse(TwoMonth+'/'+TwoDay+'/'+TwoYear))/86400000);
return cha;
}
//自定义当前日期的格式 如：YYYY-MM-DD
//调用方式：fomateDate(new Date(), 'YYYY-MM-DD')
function fomateDate(oDate, sFomate, bZone)
{
sFomate = sFomate.replace("YYYY", oDate.getFullYear());
sFomate = sFomate.replace("YY", String(oDate.getFullYear()).substr(2))
sFomate = sFomate.replace("MM", oDate.getMonth()+1)
sFomate = sFomate.replace("DD", oDate.getDate());
sFomate = sFomate.replace("dd", oDate.getDate());
sFomate = sFomate.replace("hh", oDate.getHours());
sFomate = sFomate.replace("mm", oDate.getMinutes());
sFomate = sFomate.replace("ss", oDate.getSeconds());
if (bZone) sFomate = sFomate.replace(/\b(\d)\b/g, '0$1');
return sFomate;
}
