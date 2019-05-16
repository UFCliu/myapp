function change(_this, url, sel) {
	var code = $(_this).find("option:selected").val();
	addressAjax(url, code, sel, null);
}

function init() {
	addressAjax("proList.ajax", null, "s_province", null);
}

var addressAjax = function(url, code, sel, hidId) {
	var d = {};
	d.areaCode = code;
	$.ajax({
		url : "/member/address/" + url,
		type : "post",
		data : d,
		success : function(data) {
			// 填充相应数据
			var s = "<option value=''>请选择</option>";
			$.each(data, function(index, item) {
				s = s + "<option value='" + item.areaCode + "'>"
						+ item.areaName + "</option>";
			});
			$("#" + sel).html(s);
			if ($("#s_city").val() == "") {
				$("#s_area").html(s);
			}
			if (hidId != null) {
			}
			var proVal = $("#" + hidId).val();
			$("#" + sel).find("option[value='" + proVal + "'] ").attr(
					"selected", true);
		}

	});
};