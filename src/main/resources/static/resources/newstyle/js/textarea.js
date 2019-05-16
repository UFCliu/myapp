$().ready(function(){
	$("textarea").keyup(function(){
		var maxlength = $(this).attr("maxlength");
		if(maxlength == null || maxlength == "" || maxlength == undefined){
			maxlength = 200;
		}
		if(this.value.length >= maxlength){
			this.value = this.value.substr(0,maxlength);
		}
	})
	$("textarea").keydown(function(){
		var maxlength = $(this).attr("maxlength");
		if(maxlength == null || maxlength == "" || maxlength == undefined){
			maxlength = 200;
		}
		if(this.value.length >= maxlength){
			this.value = this.value.substr(0,maxlength);
		}
	})
})