$(document).ready(function() {
	$('#example tbody').on('click', 'tr',
		function() {
			if ($(this).hasClass('currSelected')) {
				$(this).removeClass('currSelected');
			} else {
				if ($(this).children("td").length >= 2) {
					$('#example tbody tr.currSelected').removeClass('currSelected');
					$(this).addClass('currSelected');
				}
			}

		}
	);

	$('#example tbody').on('hover', "tr", function() {
		$('#example tbody tr td').removeClass("tbhover");
		$(this).children().addClass('tbhover');
	});
	$('#example tbody').on('mouseout', "tr", function() {
		$('#example tbody tr td').removeClass("tbhover");
	});
});
