$(document).ready(function() {
	// load the external components
	$('#navBar').load("./navbar.html");
	$('#modalLogin').load("./modal_login.html");
	$('#cartPopup').load("./cart_popup.html");

	//Create and populate cards for every item in the beer object array
	for(var i = 0; i < beer.length; i++) {
		var values = beer[i];
		$('#item-collection').append('<div class="menucard" id="card-item"> <img src="' + beer[i].img +'" id="pic" class="pic"> <div class="menucardcontainer"> <h4 id="cardname"><b>' + beer[i].name + '</b></h4> <div id="pricediv"><p id="pricetag">' + beer[i].price + '</p> <p id="kr">kr</p></div><button class="plussign" id="addplus">add</button></div></div>');
	};		
				
	//When the user clicks on the image the detailed card view is displayed
	function imageClick(){
		$('.pic').click(function() {
			$('#item-collection').addClass("hidden");
			$('#item-detailed').removeClass("hidden");	
		});
	}
	
	imageClick(); //Detailed view when user clicks on image
		
	//Create and populate cards for every item in the wine object array when user clicks on wine tab
	$('#winetab').click(function() {
		if($('#beertab').hasClass("selected")) {
			$('#beertab').removeClass("selected");
		}
		else if($('#cidertab').hasClass("selected")) {
			$('#cidertab').removeClass("selected");
		}
		else if($('#whiskeytab').hasClass("selected")) {
			$('#whiskeytab').removeClass("selected");
		}
		$('#winetab').addClass("selected");
		$('#item-collection').empty();
		for(var i = 0; i < wine.length; i++) {
			var values = wine[i];
			$('#item-collection').append('<div class="menucard" id="card-item"> <img src="' + wine[i].img +'" id="pic" class="pic"> <div class="menucardcontainer"> <h4 id="cardname"><b>' + wine[i].name + '</b></h4> <p id="pricetag">' + wine[i].price + '</p> <p id="kr">kr</p> <i class="fa fa-plus plussign" id="addplus" aria-hidden="true"></i><p/></div></div>');
		}
		addElementToCart();	//Allows plus button to add item to cart
		imageClick();		//Detailed view when user clicks on image
	});
	
	//Create and populate cards for every item in the beer object array when the user clicks on beer tab
	$('#beertab').click(function() {
		if($('#winetab').hasClass("selected")) {
			$('#winetab').removeClass("selected");
		}
		else if($('#cidertab').hasClass("selected")) {
			$('#cidertab').removeClass("selected");
		}
		else if($('#whiskeytab').hasClass("selected")) {
			$('#whiskeytab').removeClass("selected");
		}
		$('#beertab').addClass("selected");
		$('#item-collection').empty();
		for(var i = 0; i < beer.length; i++) {
		var values = beer[i];
		$('#item-collection').append('<div class="menucard" id="card-item"> <img src="' + beer[i].img +'" id="pic" class="pic"> <div class="menucardcontainer"> <h4 id="cardname"><b>' + beer[i].name + '</b></h4> <p id="pricetag">' + beer[i].price + '</p> <p id="kr">kr</p> <i class="fa fa-plus plussign" id="addplus" aria-hidden="true"></i><p/></div></div>');
		}
		addElementToCart();	//Allows plus button to add item to cart
		imageClick();		//Detailed view when user clicks on image
	});
	
	$('#cidertab').click(function() {
		if($('#beertab').hasClass("selected")) {
			$('#beertab').removeClass("selected");
		}
		else if($('#winetab').hasClass("selected")) {
			$('#winetab').removeClass("selected");
		}
		else if($('#whiskeytab').hasClass("selected")) {
			$('#whiskeytab').removeClass("selected");
		}
		$('#cidertab').addClass("selected");
		$('#item-collection').empty();
	});
	
	$('#whiskeytab').click(function() {
		if($('#beertab').hasClass("selected")) {
			$('#beertab').removeClass("selected");
		}
		else if($('#winetab').hasClass("selected")) {
			$('#winetab').removeClass("selected");
		}
		else if($('#cidertab').hasClass("selected")) {
			$('#cidertab').removeClass("selected");
		}
		$('#whiskeytab').addClass("selected");
		$('#item-collection').empty();
	});
	
	//Close the detailed view when user clicks the x button
	$('.close-btn').click(function() {
		$('#item-detailed').addClass("hidden");
		$('#item-collection').removeClass("hidden");
	});	
});

/*
TODO: pass values on to detailed view and cart
document.getElementById('drink-name').innerHTML = beer[i].name;
document.getElementById('drink-price').innerHTML = beer[i].price + " kr";
document.getElementById('drink-description').innerHTML = beer[i].description;
document.getElementById('drink-img').src = beer[i].img;
*/