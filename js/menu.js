$(document).ready(function() {
	$('.item-card').click(function() {
		$('#item-collection').addClass("hidden");
		$('#item-detailed').removeClass("hidden");
	});

	$('.close-btn').click(function() {
		$('#item-collection').removeClass("hidden");
		$('#item-detailed').addClass("hidden");
	});

	$('#navBar').load("./navbar.html");
	$('#modalLogin').load("./modal_login.html");
	$('#cartPopup').load("./cart_popup.html");
});
