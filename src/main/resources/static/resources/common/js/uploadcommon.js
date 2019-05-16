$.extend({
	ecupload:function(_this,param){
		var setting={url:"",formData:"",maxFileSize: 10240000};
		param=$.extend(setting,param);
		//如果设置了isFormatEnable调用isFormatEnable参数，否则调用默认参数
		if(param.formatEnable == undefined){
			if(!isFormatEnable(_this)) {
				openMessage("上传文件格式不正确，只允许jpg, jpeg格式的图片！");
				return false;
			}
		}else{
			if(!isFormatEnableManual(_this,param.formatEnable)) {
				openMessage(param.formatEnableMessage);
				return false;
			}
		}
		if(findSize(_this)>26214175){
			openMessage("请选择小于25MB的图片！");
			return false;
		}
		var fileparam={
			url:param.url,
			fileElementId:_this,
			secureuri:true,
			data:param.formData,
	        success:function(result,e){
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
						} else{
							$.showSystemErrorMsg();
						}
	    			}
		        	else{
	    				//成功处理
	    				param.done.apply(this,[e,result]);
	    			}
	        	}else{
	        		$.showSystemErrorMsg();
	        	}
	        	
	        }
		};
		 $.ajaxFileUpload(fileparam);
	},
	ecuploadQual:function(_this,param){
		if(!isFormatEnableFile(_this)) {
			openMessage("上传文件格式不正确，只允许zip, rar,7z,doc,docx,pdf格式的文件");
			return;
		}
		var setting={url:"",formData:"",maxFileSize: 10240000};
		param=$.extend(setting,param);
		var fileparam={
			url:param.url,
			fileElementId:_this,
			secureuri:true,
			data:param.formData,
	        success:function(result,e){
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
						} else{
							$.showSystemErrorMsg();
						}
	    			}
		        	else{
	    				//成功处理
	    				param.done.apply(this,[e,result]);
	    			}
	        	}else{
	        		$.showSystemErrorMsg();
	        	}
	        	
	        }
		};
		 $.ajaxFileUpload(fileparam);
	},
	ecuploadDoc:function(_this,param){
		if(!isFormatEnableDoc(_this)) {
			openMessage("上传文件格式不正确，只允许zip, rar,7z,doc,docx,pdf格式的文件");
			return;
		}
		var setting={url:"",formData:"",maxFileSize: 10240000};
		param=$.extend(setting,param);
		var fileparam={
			url:param.url,
			fileElementId:_this,
			secureuri:true,
			data:param.formData,
	        success:function(result,e){
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
						} else{
							$.showSystemErrorMsg();
						}
	    			}
		        	else{
	    				//成功处理
	    				param.done.apply(this,[e,result]);
	    			}
	        	}else{
	        		$.showSystemErrorMsg();
	        	}
	        	
	        }
		};
		 $.ajaxFileUpload(fileparam);
	},
	ecuploadExcel:function(_this,param){
		if(!isFormatEnableExcel(_this)) {
			openMessage("上传文件格式不正确，只允许xls格式的文件");
			return;
		}
		var setting={url:"",formData:"",maxFileSize: 10240000};
		param=$.extend(setting,param);
		var fileparam={
			url:param.url,
			fileElementId:_this,
			secureuri:true,
			data:param.formData,
	        success:function(result,e){
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
						} else{
							$.showSystemErrorMsg();
						}
	    			}
		        	else{
	    				//成功处理
	    				param.done.apply(this,[e,result]);
	    			}
	        	}else{
	        		$.showSystemErrorMsg();
	        	}
	        	
	        }
		};
		 $.ajaxFileUpload(fileparam);
	},
	// 默认显示业务异常方法 
	showBusinessErrorMsg:function(code, msg, attaches) {
    	openMessage("业务异常发生：" + msg);
	},
	
    // 默认显示系统异常方法
	showSystemErrorMsg:function() {
		
	},
	
	showSessionErrorMsg:function(){
		window.location.href = "login.jhtml";
	}
});

/**
 * 上传文件格式过滤
 * 
 * @param _this
 */
var formatEnable = [".jpg", ".jpeg"];
function isFormatEnable(_this) {
	var val = $(_this).val();
	var fileFormat = val.substring(val.lastIndexOf(".")).toLowerCase();
	for(var i=0;i<formatEnable.length;i++) {
		if(formatEnable[i] == fileFormat) {
			return true;
		}
	}
	return false;
}
/**
 * 上传文件格式过滤
 * 
 * @param _this
 */
var formatEnableFile = [".zip", ".rar",".7z",".doc",".docx",".xlsx",".xls",".pdf"];
function isFormatEnableFile(_this) {
	var val = $(_this).val();
	var fileFormat = val.substring(val.lastIndexOf(".")).toLowerCase();
	for(var i=0;i<formatEnableFile.length;i++) {
		if(formatEnableFile[i] == fileFormat) {
			return true;
		}
	}
	return false;
}
/**
 * 上传文件格式过滤
 * 
 * @param _this
 */
var formatEnableDoc = [".zip", ".rar",".7z",".doc",".docx",".xlsx",".xls",".pdf"];
function isFormatEnableDoc(_this) {
	var val = $(_this).val();
	var fileFormat = val.substring(val.lastIndexOf(".")).toLowerCase();
	for(var i=0;i<formatEnableDoc.length;i++) {
		if(formatEnableDoc[i] == fileFormat) {
			return true;
		}
	}
	return false;
}
/**
 * 上传文件格式过滤excel
 * 
 * @param _this
 */
var formatEnableExcel = [".xls"];
function isFormatEnableExcel(_this) {
	var val = $(_this).val();
	var fileFormat = val.substring(val.lastIndexOf(".")).toLowerCase();
	for(var i=0;i<formatEnableExcel.length;i++) {
		if(formatEnableExcel[i] == fileFormat) {
			return true;
		}
	}
	return false;
}

/**
 * 上传文件大小过滤
 * 
 * @param _this
 */
function findSize(_this)
{
	var fileInput = $(_this)[0];
//   byteSize  = fileInput.files[0].size;
//   return ( Math.ceil(byteSize) ); 
//	var fso = new ActiveXObject("Scripting.FileSystemObject");     
//    alert("文件大小为："+fso.GetFile(fileInput.val()).size);  
}


/**
 * 根据提供的规则进行验证 是否是规定的文件格式
 * @param _this
 * @param _formatEnable
 * @returns {boolean}
 */
function isFormatEnableManual(_this,format) {
	var val = $(_this).val();
	var fileFormat = val.substring(val.lastIndexOf(".")).toLowerCase();
	for(var i=0;i<format.length;i++) {
		if(format[i] == fileFormat) {
			return true;
		}
	}
	return false;
}