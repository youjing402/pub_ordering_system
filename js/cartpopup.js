$('#navCartBtn').click(function() {
	if ($('#cartPopup').hasClass('cart-mobile-hidden')) {
		$('#cartPopup').removeClass('cart-mobile-hidden');
	} else {
		$('#cartPopup').addClass('cart-mobile-hidden');
	}
});