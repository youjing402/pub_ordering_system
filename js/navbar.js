/**
 * File: navbar.js
 *
 * This file changes the highlighted tab on the navigation bar depending on the page the  
 * user is on. It also changes the navigation bar view when the device is a mobile.
 *
 * Version 1
 * Authors: You Jing
 */

var navbar = $('#navBar');
var body = $('body');
var currentTab = 0;

// switch the nav tab according to page
if(body.is('#about')) {
	currentTab = 0;
} else if(body.is('#menu')) {
	currentTab = 1;
}

activateTab();

function activateTab() {
	navbar.find('.navtab').removeClass("active");
	navbar.find('#navtab-' + currentTab).addClass("active");
}

$('#navMenuBtn').click(function() {
	if ($('#mobileMenu').hasClass('hidden')) {
		$('#mobileMenu').removeClass('hidden');
	} else {
		$('#mobileMenu').addClass('hidden');
	}
});