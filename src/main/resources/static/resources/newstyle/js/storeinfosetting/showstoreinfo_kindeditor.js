// 店铺信息设置页面富文本框
KindEditor.ready(function(K) {
	store_notice_editor = K.create("#store_notice_content", {
		items : [],
		allowFileManager : false,
		resizeType : 0,
		readonlyMode : true
	});
	
	supplier_introduction_editor = K.create("#supplier_introduction_content", {
		items : [],
		allowFileManager : false,
		resizeType : 0,
		readonlyMode : true
	});
});