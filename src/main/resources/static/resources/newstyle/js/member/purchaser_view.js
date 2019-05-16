var isshow = false;		

		$(function(){
			$(".backBtn").click(function(){
				var userTypeEnum=$("#userTypeEnum").val();
				var view = $("#view").val();
				if(view == "CLIENT_VIEW"){
					location.href = "/member/purchaser/toList.jhtml";
				} else {
					location.href = "/member/purchaser/toSearchList.jhtml";
				}
				
			});
			$("#approveLog").click(function(){
	        	if(isshow == false) {
					$("#appHis").show();
					isshow = true;
				} else {
					$("#appHis").hide();
					isshow = false;
				}
	        });
			
		})
		function loadPercentage(percentage){
			$("#percentage").css("width",percentage);
		}
		
		// 资质下载
        function down(baseUrl, realfilePath, filePath){
    		if("" != filePath && filePath != null){
    		location.href=baseUrl + realfilePath + filePath;
    		}else{
    			openMessage(member_message_00006);//对不起，您还没有上传合同文件!
        	}
        };
         $().ready(function(){
			//动态添加title
			addTitle("marketRangeVoDiv");
			addTitle("procscopeDiv");
			addTitle("commercialDiv");
		})
		
		//添加title
		function addTitle(id){
			$("#"+id).attr("title"," "+$.trim($("#"+id).text())+" ");
		}