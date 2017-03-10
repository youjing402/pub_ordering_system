/**
 * File: creative.js
 *
 * This file loads the necessary HTML documents into the correct divs in the menu page so
 * they all appear on one page.
 *
 * Version 1
 * Authors: You Jing
 */

$(document).ready(function() {

	// load the navigation bar
	$('#navBar').load("./navbar.html");

	// load the login modal
	$('#modalLogin').load("./modal_login.html");
	
	// load the detailed card modal
	$('#detailedMenuModal').load("./detailedmenucard.html");

});
