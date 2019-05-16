/** 禁用浏览器历史记录 */
/****************************
 * 作者：q821424508@sina.com  copy:何俊松  *
 * 时间：2012-08-20            *
 * version：2.1                *
 *                             *
 ****************************/
$(document).ready(function(){ 
    $("body").live("keydown keypress", function(event){
    	
        if(event.keyCode==8){//判断按键为backSpace键  
          
            //获取按键按下时光标做指向的element  
            var elem = event.srcElement || event.currentTarget;   
              
            //判断是否需要阻止按下键盘的事件默认传递  
            var name = elem.nodeName;  
              
            if(name!='INPUT' && name!='TEXTAREA'){  
                return _stopIt(event);  
            }  
            var type_e = elem.type.toUpperCase();  
            if(name=='INPUT' && (type_e!='TEXT' && type_e!='TEXTAREA' && type_e!='PASSWORD' && type_e!='FILE')){  
                    return _stopIt(event);  
            }  
            if(name=='INPUT' && (elem.readOnly==true || elem.disabled ==true)){  
                    return _stopIt(event);  
            }  
        }  
    });
});

//处理键盘事件 禁止后退键（Backspace）密码或单行、多行文本框除外  
function forbidBackSpace(e) {  
    var ev = e || window.event; //获取event对象   
    var obj = ev.target || ev.srcElement; //获取事件源   
    var t = obj.type || obj.getAttribute('type'); //获取事件源类型   
    //获取作为判断条件的事件类型   
    var vReadOnly = obj.readOnly;  
    var vDisabled = obj.disabled;  
    //处理undefined值情况   
    vReadOnly = (vReadOnly == undefined) ? false : vReadOnly;  
    vDisabled = (vDisabled == undefined) ? true : vDisabled;  
    //当敲Backspace键时，事件源类型为密码或单行、多行文本的，   
    //并且readOnly属性为true或disabled属性为true的，则退格键失效   
    var flag1 = ev.keyCode == 8 && (t == "password" || t == "text" || t == "textarea") && (vReadOnly == true || vDisabled == true);  
    //当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效   
    var flag2 = ev.keyCode == 8 && t != "password" && t != "text" && t != "textarea";  
    //判断   
    if (flag2 || flag1) return false;  
}

//禁止后退键 作用于Firefox、Opera  
document.onkeypress = forbidBackSpace;  
//禁止后退键  作用于IE、Chrome  
document.onkeydown = forbidBackSpace; 

function _stopIt(e){  
    if(e.preventDefault){  
        e.preventDefault();
        e.stopPropagation();
    }
    
    if(window.event){
    	e.returnValue=false;//阻止自身行为
    	e.cancelBubble=true;//阻止冒泡
    }
  
    return false; 
} 