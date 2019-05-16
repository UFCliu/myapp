//商品新增页面富文本框
KindEditor.ready(function(K) {
	editor = K.create('textarea[name="content"]', {
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
	        'image',
	        'table',
	        'hr'
		],
		allowImageManager : true,
		allowFileManager : false,
		uploadJson : '/uploadpic/richTextUpload.jhtml?filepre=article',
		resizeType : 0,
		afterChange : function(){
			var limitNum = 2000;
			var pattern = '还可以输入' + limitNum + '字';
			$("#word_count").html(pattern);
			if(this.count() > limitNum){
				var overNum = this.count() - limitNum;
				pattern = '<font style="color:red">已经超过 '+ overNum +'字,请适当删除部分内容</font>';
				$("#word_count").html(pattern);
			}else{
				var result = limitNum - this.count();
				pattern = '还可以输入' + result + '字';
				$("#word_count").html(pattern);
			}
		}
	});
	editor.clickToolbar("formatblock",function(){
		$(".ke-menu-item-right").css({"overflow":"visible"});
	});
	editor.clickToolbar("fontname",function(){
		$(".ke-menu-item-right").css({"overflow":"visible"});
	});
	editor.clickToolbar("fontsize",function(){
		$(".ke-menu-item-right").css({"overflow":"visible"});
	});
	
	editor_suggestion = K.create('textarea[name="productSuggestion"]', {
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
	        'image',
	        'table',
	        'hr'
		],
		allowImageManager : true,
		allowFileManager : false,
		uploadJson : '/uploadpic/richTextUpload.jhtml?filepre=article',
		resizeType : 0,
		afterChange : function(){
			var limitNum = 2000;
			var pattern = '还可以输入' + limitNum + '字';
			$("#word_count").html(pattern);
			if(this.count() > limitNum){
				var overNum = this.count() - limitNum;
				pattern = '<font style="color:red">已经超过 '+ overNum +'字,请适当删除部分内容</font>';
				$("#word_count").html(pattern);
			}else{
				var result = limitNum - this.count();
				pattern = '还可以输入' + result + '字';
				$("#word_count").html(pattern);
			}
		}
	});
	editor_suggestion.clickToolbar("formatblock",function(){
		$(".ke-menu-item-right").css({"overflow":"visible"});
	});
	editor_suggestion.clickToolbar("fontname",function(){
		$(".ke-menu-item-right").css({"overflow":"visible"});
	});
	editor_suggestion.clickToolbar("fontsize",function(){
		$(".ke-menu-item-right").css({"overflow":"visible"});
	});
	
	editor_instructions_info = K.create('textarea[name="instructionsInfo"]', {
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
	        'image',
	        'table',
	        'hr'
		],
		allowImageManager : true,
		allowFileManager : false,
		uploadJson : '/uploadpic/richTextUpload.jhtml?filepre=article',
		resizeType : 0,
		afterChange : function(){
			var limitNum = 2000;
			var pattern = '还可以输入' + limitNum + '字';
			$("#word_count").html(pattern);
			if(this.count() > limitNum){
				var overNum = this.count() - limitNum;
				pattern = '<font style="color:red">已经超过 '+ overNum +'字,请适当删除部分内容</font>';
				$("#word_count").html(pattern);
			}else{
				var result = limitNum - this.count();
				pattern = '还可以输入' + result + '字';
				$("#word_count").html(pattern);
			}
		}
	});
	if (editor_instructions_info != undefined) {
		editor_instructions_info.clickToolbar("formatblock",function(){
			$(".ke-menu-item-right").css({"overflow":"visible"});
		});
		editor_instructions_info.clickToolbar("fontname",function(){
			$(".ke-menu-item-right").css({"overflow":"visible"});
		});
		editor_instructions_info.clickToolbar("fontsize",function(){
			$(".ke-menu-item-right").css({"overflow":"visible"});
		});
		editor_instructions_info.readonly();
	}
	
});