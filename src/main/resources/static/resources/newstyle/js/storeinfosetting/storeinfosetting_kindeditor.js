// 店铺信息设置页面富文本框
KindEditor.ready(function(K) {
	store_notice_editor = K.create("#store_notice_content", {
		items : [
			'undo',
			'redo',
			'|',
			'preview',
			'print',
			'cut',
			'copy',
			'paste',
	        '|',
	        'justifyleft',
	        'justifycenter',
	        'justifyright',
	        'justifyfull',
	        'insertorderedlist',
	        'insertunorderedlist',
	        'indent',
	        'outdent',
	        'subscript',
	        'superscript',
	        '|',
	        'fullscreen',
	        '/',
	        'formatblock',
	        'fontname',
	        'fontsize',
	        '|',
	        'forecolor',
	        'hilitecolor',
	        'bold',
	        'italic',
	        'underline',
	        'strikethrough',
	        'lineheight',
	        'removeformat',
	        '|',
	        'table',
	        'hr'
		],
		allowFileManager : false,
		resizeType : 0,
		afterChange : function(){
			var limitNum = 5000;
			var pattern = '还可以输入' + limitNum + '字';
			$("#store_notice_word_count").html(pattern);
			if(this.count() > limitNum){
				var overNum = this.count() - limitNum;
				pattern = '<font style="color:red">已经超过 '+ overNum +'字,请适当删除部分内容</font>';
				$("#store_notice_word_count").html(pattern);
			}else{
				var result = limitNum - this.count();
				pattern = '还可以输入' + result + '字';
				$("#store_notice_word_count").html(pattern);
			}
		}
	});
	
	supplier_introduction_editor = K.create("#supplier_introduction_content", {
		items : [
			'undo',
			'redo',
			'|',
			'preview',
			'print',
			'cut',
			'copy',
			'paste',
	        '|',
	        'justifyleft',
	        'justifycenter',
	        'justifyright',
	        'justifyfull',
	        'insertorderedlist',
	        'insertunorderedlist',
	        'indent',
	        'outdent',
	        'subscript',
	        'superscript',
	        '|',
	        'fullscreen',
	        '/',
	        'formatblock',
	        'fontname',
	        'fontsize',
	        '|',
	        'forecolor',
	        'hilitecolor',
	        'bold',
	        'italic',
	        'underline',
	        'strikethrough',
	        'lineheight',
	        'removeformat',
	        '|',
	        'table',
	        'hr'
		],
		allowFileManager : false,
		resizeType : 0,
		afterChange : function(){
			var limitNum = 5000;
			var pattern = '还可以输入' + limitNum + '字';
			$("#supplier_introduction_word_count").html(pattern);
			if(this.count() > limitNum){
				var overNum = this.count() - limitNum;
				pattern = '<font style="color:red">已经超过 '+ overNum +'字,请适当删除部分内容</font>';
				$("#supplier_introduction_word_count").html(pattern);
			}else{
				var result = limitNum - this.count();
				pattern = '还可以输入' + result + '字';
				$("#supplier_introduction_word_count").html(pattern);
			}
		}
	});
});