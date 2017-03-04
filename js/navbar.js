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