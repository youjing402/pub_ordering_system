$(document).ready(function() {
	$('.item-card').click(function() {
		$('#item-collection').addClass("hidden");
		$('#item-detailed').removeClass("hidden");
	});

	$('.close-btn').click(function() {
		$('#item-collection').removeClass("hidden");
		$('#item-detailed').addClass("hidden");
	});

	$('#modalLogin').load("./modal_login.html");
	$('#navBar').load("./navbar.html");
});
