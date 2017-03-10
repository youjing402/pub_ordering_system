/**
 * File: cartPopup.js
 *
 * This file allows the cart button to be shown when the user device is a mobile 
 *
 * Version 1
 * Authors: You Jing
 */
 

$('#navCartBtn').click(function() {
	if ($('#cartPopup').hasClass('cart-mobile-hidden')) {
		$('#cartPopup').removeClass('cart-mobile-hidden');
	} else {
		$('#cartPopup').addClass('cart-mobile-hidden');
	}
});