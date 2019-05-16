/**
 * 通信专用JS
 */
$.extend({
	
	/**
	 * 整体Post控制，可以在单独的事件中处理业务异常。
	 * 
	 * param参数是一个Object， 有url和data两个必须属性，同$.ajax一致。
	 * 其中还有四个非必需属性：success, error, berror和complete, 其中berror是新追加的方法，
	 * 可以将Java端业务异常参数传递进来，其他三个和$.ajax一致。
	 * 
	 * $.ecpost({
	 * 		data : xxxx,
	 * 		url : xxxx,
	 *     function success(msg) {
	 *     },
	 *     funciton berror(errCode, errMsg, errAttachs){
	 *     }
	 * });
	 */
	ecpost:function(param) {
    	var ajaxParam = {
    		type : "POST",
    		async : false,
    		url : param.url,
    		contentType:param.contentType,
    		data : param.data,
    		success: function(msg) {
    			
    		
    		    // 判断是否返回了数据并存在异常信息
    		  if (msg && msg.error) {
    			 	
					// 是否为业务异常
					if (msg.error.businessErrCode) {
						if(msg.error.businessErrCode=='-1'){
							$.showSessionErrorMsg();
							return;
						}
						// 如果定义了业务异常处理方法，则调用业务异常处理方法
					    if (param.berror) {
    						param.berror.apply(this, [msg.error.businessErrCode, msg.error.errMsg, msg.error.businessErrAttachs]);
    					} 
    					// 没有定义则抛出警告
    					else {
    						$.showBusinessErrorMsg(msg.error.businessErrCode, msg.error.errMsg, msg.error.businessErrAttachs);
    					}
					} 
					// 发生了系统异常
					else {
						ajaxParam.error.apply(this);
					}
				}
				// 正常处理
				else {
					param.success.apply(this, [msg]);
				}
    		},
    		error:function() {
    			// 判断是否定义了异常处理方法
    			if (param.error) {
    				param.error.apply(this);
    			} else {
    				$.showSystemErrorMsg();
    			}
    		},
    		complete:function() {
    			// 判断是否定义了完成处理方法
    			if (param.complete) {
    				param.complete.apply(this);
    			}
    		}
    	};
	    
	    // 调用JQuery的Ajax方法 
    	$.ajax(ajaxParam.url,ajaxParam);
	},
	ecget:function(param){
		//get方法调用
		var ajaxParam = {
	    		type : "GET",
	    		async : false,
	    		url : param.url,
	    		contentType:param.contentType,
	    		success: function(msg) {
	    			
	    		    // 判断是否返回了数据并存在异常信息
	    		  if (msg && msg.error) {
						// 是否为业务异常
						if (msg.error.businessErrCode) {
							if(msg.error.businessErrCode=='-1'){
								$.showSessionErrorMsg();
								return;
							}
							// 如果定义了业务异常处理方法，则调用业务异常处理方法
						    if (param.berror) {
	    						param.berror.apply(this, [msg.error.businessErrCode, msg.error.errMsg, msg.error.businessErrAttachs]);
	    					} 
	    					// 没有定义则抛出警告
	    					else {
	    						$.showBusinessErrorMsg(msg.error.businessErrCode, msg.error.errMsg, msg.error.businessErrAttachs);
	    					}
						} 
						// 发生了系统异常
						else {
							ajaxParam.error.apply(this);
						}
					}
					// 正常处理
					else {
						param.success.apply(this, [msg]);
					}
	    		},
	    		error:function() {
	    			// 判断是否定义了异常处理方法
	    			if (param.error) {
	    				param.error.apply(this);
	    			} else {
	    				$.showSystemErrorMsg();
	    			}
	    		},
	    		complete:function() {
	    			// 判断是否定义了完成处理方法
	    			if (param.complete) {
	    				param.complete.apply(this);
	    			}
	    		}
	    	};
		    
		    // 调用JQuery的Ajax方法 
			$.ajax(ajaxParam.url,ajaxParam);
	},
	// 默认显示业务异常方法 
	showBusinessErrorMsg:function(code, msg, attaches) {
		if(msg == 'null' || msg == '' || msg == null){
			//bootbox.alert(code);
			openMessage(code);
		}else{
			//bootbox.alert("业务异常发生：" + msg);
			openMessage("业务异常!");
		}
    	//bootbox.alert("业务异常发生：" + msg);
		openMessage("业务异常!");
	},
	
    // 默认显示系统异常方法
	showSystemErrorMsg:function() {
    	//bootbox.alert("网络异常或系统异常，请联系管理员！");
		openMessage("网络异常或系统异常，请联系管理员！");
	},
	
	showSessionErrorMsg:function(){
		//bootbox.alert("session过期，请重新登录");
		window.location.href = "login.jhtml";
	}
});
/**
 * DataTable的异常处理。
 */
$.extend($.fn.dataTable.ext.oApi, {
	_fnLog:function(settings, level, msg) {
		if (msg.errMsg != undefined) {
			// 服务器端异常发生时，消除检索中的提示。
			this._fnProcessingDisplay(settings, false);
			if (msg.businessErrCode != undefined) {
				if(msg.businessErrCode=="-1"){
					$.showSessionErrorMsg();
				}else{
					$.showBusinessErrorMsg(msg.businessErrCode, msg.errMsg, msg.businessErrAttachs);
				}
			} else {
				$.showSystemErrorMsg();
			}
		} else {
			$.showSystemErrorMsg();
		}
	}
});

