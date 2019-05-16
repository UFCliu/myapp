$.extend({
	ecupload:function(_this,param){
		
		var setting={url:"",formData:"",acceptFileTypes:/(\.|\/)(jpe?g|png|bmp|gif)$/i,maxFileSize: 10240000};
		param=$.extend(setting,param);
		
		var fileparam={
			url:param.url,//文件上传地址，当然也可以直接写在input的data-url属性内
	        formData:param.formData,//如果需要额外添加参数可以在这里添加
	        acceptFileTypes: param.acceptFileTypes,
	        maxFileSize: param.maxFileSize,      // 1 MB
	        done:function(e,result){
	        
	        	if(result.result !=null){
	        		var _result=result.result;
	        		if(Object.prototype.toString.call(_result) === "[object String]"){
	        			//判断是否字符串
	        			_result=JSON.parse(_result);
	        		}
		           if(_result && _result.error){
		        	  
	    				// 是否为业务异常
						if (_result.error.businessErrCode) {
							 if(_result.error.businessErrCode=='-1'){
									$.showSessionErrorMsg();
								}else{
							// 如果定义了业务异常处理方法，则调用业务异常处理方法
						    if (param.berror) {
	    						param.berror.apply(this, [_result.error.businessErrCode, _result.error.errMsg, _result.error.businessErrAttachs]);
	    					} 
	    					// 没有定义则抛出警告
	    					else {
	    						$.showBusinessErrorMsg(_result.error.businessErrCode, _result.error.errMsg, _result.error.businessErrAttachs);
	    					}
						}
						} 
	    			}
		        	else{
	    				//成功处理
	    				param.done.apply(this,[e,result]);
	    			}
	        	}
	        	
	        }
		};
		 $(_this).fileupload(fileparam);
	},
	showSessionErrorMsg:function(){
		window.location.href = "login.jhtml";
	},// 默认显示业务异常方法 
	showBusinessErrorMsg:function(code, msg, attaches) {
    	alert("业务异常发生：" + msg);
	},
	
    // 默认显示系统异常方法
	showSystemErrorMsg:function() {
    	alert("网络异常或系统异常，请联系管理员！");
	}
});