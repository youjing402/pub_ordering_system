$(document).ready(function() {
	// load the external components
	$('#navBar').load("./navbar.html");
	$('#modalLogin').load("./modal_login.html");
	$('#cartPopup').load("./cart_popup.html");
	$('#detailedMenuModal').load("./detailedmenucard.html");
			
	var id = 0;
	//Create and populate cards for every item in the beer object array
	for(var i = 0; i < beer.length; i++) {
		//if(beer[i].gluten == false){
		var values = beer[i];
		$('#item-collection').append('<div class="menucard" id="card-item'+ id +'"> ' +
				'<img src="' + beer[i].img +'" id="pic' + id + '" class="pic"> <div class="menucardcontainer">' +
				'<img src="'+ beer[i].detailimg +'" id="detailpic'+ id + '" class="detailpic">' + 
				'<h4 class="drink" id="drink'+ id +'"><b>' + beer[i].name + '</b></h4> <p class="pricetag" id="pricetag' + id + '">'
				 + beer[i].price + ' kr</p> <i class="fa fa-plus plussign" id="addplus" aria-hidden="true"></i>' +
				'<p class="desc" id="desc' + id + '">'+ beer[i].description +'</p> <p class="desc" id="country' + 
				id + '">'+ beer[i].country +'</p> </div></div>');		
		id++;
		//}
	};		
	
	getBeerDetails();
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
		
		//These elements are for wine items only
		document.getElementById('drink-loc').style.display = "inline";
		document.getElementById('drink-year').style.display = "inline";
		
		var wineId = 0;
		for(var i = 0; i < wine.length; i++) {
			var values = wine[i];
			$('#item-collection').append('<div class="menucard" id="card-item"> <img src="' + wine[i].img +
			'" id="pic' + wineId + '" class="pic"> <div class="menucardcontainer"> <img src="'+ wine[i].detailimg +
			'" id="detailpic'+ wineId + '" class="detailpic"><h4 class="drink" id="drink' + wineId + '"><b>' + wine[i].name + 
			'</b></h4> <p class="pricetag" id="pricetag' + wineId + '">' + wine[i].price + ' kr</p><i class="fa fa-plus plussign"' + 
			'id="addplus" aria-hidden="true"></i> <p class="desc" id="desc' + wineId + '">'+ wine[i].description +'</p> '+
			' <p class="desc" id="country' + wineId + '">'+ wine[i].country +'</p> <p class="desc" id="loc' + wineId + '">'+ wine[i].location +'</p>' +
			' <p class="desc" id="year' + wineId + '">'+ wine[i].year +'</p> </div></div>');
			wineId++;
		}
		
		addElementToCart();	//Allows plus button to add item to cart
		imageClick();		//Detailed view when user clicks on image
		getWineDetails(); 	//Gets detailed information for modal
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
		
		//These elements are for wine items only
		document.getElementById('drink-loc').style.display = "none";
		document.getElementById('drink-year').style.display = "none";
		
		var id = 0;
		for(var i = 0; i < beer.length; i++) {
			var values = beer[i];
			$('#item-collection').append('<div class="menucard" id="card-item'+ id +'"> ' +
				'<img src="' + beer[i].img +'" id="pic' + id + '" class="pic"> <div class="menucardcontainer">' +
				'<img src="'+ beer[i].detailimg +'" id="detailpic'+ id + '" class="detailpic">' + 
				'<h4 class="drink" id="drink'+ id +'"><b>' + beer[i].name + '</b></h4> <p class="pricetag" id="pricetag' + id + '">'
				 + beer[i].price + ' kr</p> <i class="fa fa-plus plussign" id="addplus" aria-hidden="true"></i>' +
				'<p class="desc" id="desc' + id + '">'+ beer[i].description +'</p> <p class="desc" id="country' + 
				id + '">'+ beer[i].country +'</p> </div></div>');		
			id++;
			}
		addElementToCart();	//Allows plus button to add item to cart
		imageClick();		//Detailed view when user clicks on image
		getBeerDetails(); 	//Gets detailed information for modal
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

/*When the user clicks on the image the detailed card view is displayed
/*When the user clicks anywhere outside of the modal it closes 
*/
	function imageClick(){
		$('.pic').click(function() {  
			menuModal.style.display = "block";
			window.onclick = function(event) {
				if (event.target == menuModal) {
					menuModal.style.display = "none";
				}
			}
		});
	}


/* This gets the id of the beer image the user clicks on and
/* uses that id to match the image to the item's details
/* in order to display those details in the detailed card modal
*/
function getBeerDetails() {
$('.pic').click(function(event) {
	var eventId = event.target.id;
	for(i = 0; i < beer.length; i++) {
		if(eventId == 'pic' + i) {
			document.getElementById('drink-img').src = document.getElementById('detailpic' + i).src;
			document.getElementById('drink-country').innerHTML = document.getElementById('country' + i).innerHTML;
			document.getElementById('drink-name').innerHTML = document.getElementById('drink' + i).innerHTML;
			document.getElementById('drink-price').innerHTML = document.getElementById('pricetag' + i).innerHTML;
			document.getElementById('drink-description').innerHTML = document.getElementById('desc' + i).innerHTML;
		}
	}
});
}
/* This gets the id of the wine image the user clicks on and
/* uses that id to match the image to the item's details
/* in order to display those details in the detailed card modal
*/
function getWineDetails() {
	$('.pic').click(function(event) {
		var eventId = event.target.id;
		for(i = 0; i < wine.length; i++) {
			if(eventId == 'pic' + i) {
				document.getElementById('drink-img').src = document.getElementById('detailpic' + i).src;
				document.getElementById('drink-name').innerHTML = document.getElementById('drink' + i).innerHTML;
				document.getElementById('drink-country').innerHTML = document.getElementById('country' + i).innerHTML;
				document.getElementById('drink-loc').innerHTML = document.getElementById('loc' + i).innerHTML;
				document.getElementById('drink-year').innerHTML = document.getElementById('year' + i).innerHTML;
				document.getElementById('drink-price').innerHTML = document.getElementById('pricetag' + i).innerHTML;
				document.getElementById('drink-description').innerHTML = document.getElementById('desc' + i).innerHTML;
			}
		}
	});
}

/*
TODO: pass values on to cart
*/