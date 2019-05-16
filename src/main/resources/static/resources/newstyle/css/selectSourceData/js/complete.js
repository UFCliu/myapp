//DataTables 共通方法
$(document).ready(function(){
	/*var complete = $("[complete]").attr("complete");
	$("#" + complete).autocomplete(
		"/supplier/all.ajax",
		{
			minChars: 1,
			multiple: true,
			matchContains:true,
			matchSubset:false,
            parse: function(data) {  
		       	var rows = [];     
		       	for(var i=0; i<data.length; i++){     
		        	rows[rows.length] = {      
		          		data:data[i],      
		          		value:data[i].id,      
		          		result:data[i].orgName      
		          	};      
		       	}     
		        return rows;     
		    },    
            formatItem: function(data, i, max) {//格式化列表中的条目 row:条目对象,i:当前条目数,max:总条目数
				return i + '/' + max + ':"' + data.id + '"[' + data.orgName + ']';
            }
		}
	);
	*/
})