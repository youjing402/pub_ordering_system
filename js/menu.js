/**
 * File: menu.js
 *
 * This file populates the page with all available items to order and allows users to 
 * order either by adding from the card view, the detailed view, or by drag and drop.
 * It allows users to sort the lists based on number of options .
 *
 * Version 2
 * Authors: Sarah Murphy, Responsibilities: Populating menu, detailed info on image click, drag and drop function, adding items to order
 *			You Jing, Responsibilities: Loading other files into page
 *			Christopher Onomeonga, Responsibilities: Sorting functions
 */

var counter = 0;
var totalOrder = 0;
$(document).ready(function() {
	// load the external components
	$('#navBar').load("./navbar.html");
	$('#modalLogin').load("./modal_login.html");
	$('#cartPopup').load("./cart_popup.html");
	$('#detailedMenuModal').load("./detailedmenucard.html");

	nameSort(beer);
	createBeerCollection();			
	getBeerDetails();			//Gets detailed information for modal
	imageClick(); 				//Detailed view when user clicks on image

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
		else if($('#foodtab').hasClass("selected")) {
			$('#foodtab').removeClass("selected");
		}
		$('#winetab').addClass("selected");
		$('#item-collection').empty();
		
		createWineCollection();		
		imageClick();				//Detailed view when user clicks on image
		getWineDetails(); 			//Gets detailed information for modal
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
		else if($('#foodtab').hasClass("selected")) {
			$('#foodtab').removeClass("selected");
		}
		$('#beertab').addClass("selected");
		$('#item-collection').empty();
		
		//These elements are for wine items only
		document.getElementById('drink-loc').style.display = "none";
		document.getElementById('drink-year').style.display = "none";

		//Reload beer collection when tab is changed back to beer
		createBeerCollection();
		imageClick();				//Detailed view when user clicks on image
		getBeerDetails(); 			//Gets detailed information for modal
	});
	
	//Create and populate cards for every item in the cider object array when the user clicks on cider tab
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
		else if($('#foodtab').hasClass("selected")) {
			$('#foodtab').removeClass("selected");
		}
		$('#cidertab').addClass("selected");
		$('#item-collection').empty();
	});
	
	//Create and populate cards for every item in the whiskey object array when the user clicks on whiskey tab
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
		else if($('#foodtab').hasClass("selected")) {
			$('#foodtab').removeClass("selected");
		}
		$('#whiskeytab').addClass("selected");
		$('#item-collection').empty();
	});
	
	//Create and populate cards for every item in the whiskey object array when the user clicks on whiskey tab
	$('#foodtab').click(function() {
		if($('#beertab').hasClass("selected")) {
			$('#beertab').removeClass("selected");
		}
		else if($('#winetab').hasClass("selected")) {
			$('#winetab').removeClass("selected");
		}
		else if($('#cidertab').hasClass("selected")) {
			$('#cidertab').removeClass("selected");
		}
		else if($('#whiskeytab').hasClass("selected")) {
			$('#whiskeytab').removeClass("selected");
		}
		$('#foodtab').addClass("selected");
		$('#item-collection').empty();
	});
	
//Close the detailed view when user clicks the x button
	$('.close-btn').click(function() {
		$('#item-detailed').addClass("hidden");
		$('#item-collection').removeClass("hidden");
	});	
	
	$(document).click(function(e) {
		var target = e.target;

		if (!$(target).is('#brandDropBtn')) {
			$('#brandDropContent').addClass("hidden");
		}

		if (!$(target).is('#sortDropBtn')) {
			$('#sortDropContent').addClass("hidden");
		}
	});

	$('#brandDropBtn').click(function() {
		if ($('#brandDropContent').hasClass("hidden")) {
			$('#brandDropContent').removeClass("hidden");
		} else {
			$('#brandDropContent').addClass("hidden");
		}
	});

	$('#sortDropBtn').click(function() {
		if ($('#sortDropContent').hasClass("hidden")) {
			$('#sortDropContent').removeClass("hidden");
		} else {
			$('#sortDropContent').addClass("hidden");
		}
	})

	
	$('#sortName').click(function(){
		$('#item-collection').empty();
		var language = sessionStorage.getItem('key');
		if($('#beertab').hasClass("selected")) {
		console.log(language);
			if(language == null) {
				nameSort(beer);	//Sort alphabetically
			}
			if(language == "en") {
				nameSort(beer);	
			}
			else if(language == "sv") {
				nameSort(svBeer);
			}
			createBeerCollection();	//Show all the beer items in beer array
			imageClick();			//Detailed view when user clicks on image
			getBeerDetails(); 	//Gets detailed information for modal
		}		
		else if($('#winetab').hasClass("selected")) {
			if(language == null) {
				nameSort(wine);	//Sort alphabetically
			}
			if(language == "en") {
				nameSort(wine);	//Sort by most bought
			}
			else if(language == "sv") {
				nameSort(svWine);
			}
			createWineCollection();    //Shows the wine items
			imageClick();		//Detailed view when user clicks on image
			getWineDetails(); 	//Gets detailed information for modal
		}
		
	});
	
	$('#sortPopularity').click(function(){
	var language = sessionStorage.getItem('key');
		$('#item-collection').empty();
		if($('#beertab').hasClass("selected")) {
			if(language == null) {
				popularSort(beer);	//Sort by most bought
			}
			if(language == "en") {
				popularSort(beer);	//Sort by most bought
			}
			else if(language == "sv") {
				popularSort(svBeer);
			}
			createBeerCollection();	//Show all the beer items in beer array
			imageClick();			//Detailed view when user clicks on image
			getBeerDetails();	//Gets detailed information for modal
		}
		else if($('#winetab').hasClass("selected")) {	
			if(language == null) {
				popularSort(wine);	//Sort by most bought
			}
			if(language == "en") {
				popularSort(wine);	//Sort by most bought
			}
			else if(language == "sv") {
				popularSort(svWine);
			}//Sort by most bought
			createWineCollection();    //Shows the wine items
			imageClick();		//Detailed view when user clicks on image
			getWineDetails(); 	//Gets detailed information for modal
		}
		
	});
	
	
	$('#sortPHTL').click(function(){
		var language = sessionStorage.getItem('key');
		$('#item-collection').empty();
		if($('#beertab').hasClass("selected")) {
			if(language == null) {
				priceSortHighTop(beer);	//sort by price, from highest to lowest
			}
			if(language == "en") {
				priceSortHighTop(beer); //sort by price, from highest to lowest
			}
			else if(language == "sv") {
				priceSortHighTop(svBeer); //sort by price, from highest to lowest
			}
			createBeerCollection();		//Show all the beer items in beer array
			imageClick();			//Detailed view when user clicks on image
			getBeerDetails(); 		//Gets detailed information for modal
		}
		else if($('#winetab').hasClass("selected")) {
			if(language == null) {
				priceSortHighTop(wine);	//sort by price, from highest to lowest
			}
			if(language == "en") {
				priceSortHighTop(wine); //sort by price, from highest to lowest
			}
			else if(language == "sv") {
				priceSortHighTop(svWine); //sort by price, from highest to lowest
			}
			createWineCollection();    	//Shows the wine items
			imageClick();			//Detailed view when user clicks on image
			getWineDetails(); 		//Gets detailed information for modal
		}	
	});
	
	$('#sortPLTH').click(function(){
		var language = sessionStorage.getItem('key');
		$('#item-collection').empty();
		if($('#beertab').hasClass("selected")) {
			if(language == null) {
				priceSortLowTop(beer);	//Sort by price, from lowest to highest
			}
			if(language == "en") {
				priceSortLowTop(beer);	//Sort by price, from lowest to highest
			}
			else if(language == "sv") {
				priceSortLowTop(svBeer);	//Sort by price, from lowest to highest
			}
			createBeerCollection();		//Show all the beer items in beer array
			imageClick();			//Detailed view when user clicks on image
			getBeerDetails(); 		//Gets detailed information for modal
		}
		else if($('#winetab').hasClass("selected")) {
			if(language == null) {
				priceSortLowTop(wine);	//Sort by price, from lowest to highest
			}
			if(language == "en") {
				priceSortLowTop(wine);	//Sort by price, from lowest to highest
			}
			else if(language == "sv") {
				priceSortLowTop(svWine);	//Sort by price, from lowest to highest
			}
			createWineCollection();    	//Shows the wine items
			imageClick();			//Detailed view when user clicks on image
			getWineDetails(); 		//Gets detailed information for modal
		}
	});
	
	$('#sortAlcoholLevel').click(function(){
		var language = sessionStorage.getItem('key');
		$('#item-collection').empty();
		if($('#beertab').hasClass("selected")) {
			if(language == null) {
				alcoholSort(beer);	//Sort by alcohol level
			}
			if(language == "en") {
				alcoholSort(beer);	//Sort by alcohol level
			}
			else if(language == "sv") {
				alcoholSort(svBeer);	//Sort by alcohol level
			}
			createBeerCollection();	//Show all the beer items in beer array
			getBeerDetails(); 	//Gets detailed information for modal
			imageClick();		//Detailed view when user clicks on image
		}
		else if($('#winetab').hasClass("selected")) {			
			if(language == null) {
				alcoholSort(wine);	//Sort by alcohol level
			}
			if(language == "en") {
				alcoholSort(wine);	//Sort by alcohol level
			}
			else if(language == "sv") {
				alcoholSort(svWine);	//Sort by alcohol level
			}
			createWineCollection();    //Shows the wine items
			imageClick();		//Detailed view when user clicks on image
			getWineDetails(); 	//Gets detailed information for modal
		}
	
	});
	
	$('#sortGlutenFree').click(function(){
		var language = sessionStorage.getItem('key');
		$('#item-collection').empty();
		if($('#beertab').hasClass("selected")) {
			if(language == null) {
				glutenFreeBeer(); //Selects the glutenfree beer, and shows them at the screen
			}
			if(language == "en") {
				glutenFreeBeer(); //Selects the glutenfree beer, and shows them at the screen
			}
			else if(language == "sv") {
			console.log(language);
				glutenFreeSvBeer(); //Selects the glutenfree beer, and shows them at the screen
			}
			imageClick();
			getBeerDetails();
			beerPlusButton();
		}
		else if($('#winetab').hasClass("selected")) {
			if(language == null) {
				glutenFreeWine(); //Selects the glutenfree beer, and shows them at the screen
			}
			if(language == "en") {
				glutenFreeWine(); //Selects the glutenfree beer, and shows them at the screen
			}
			else if(language == "sv") {
				glutenFreeSvWine(); //Selects the glutenfree beer, and shows them at the screen
			}
			imageClick();
			getWineDetails();
			winePlusButton();
		}
	});
	
	
});


/* This function create and populates cards for every beer item available for purchase.
/* It also allows the plus button on the card to add the item to the order and allows
/* users to add items to their order by dragging the item My Order */
function createBeerCollection() {
	var id = 0;
	var language = sessionStorage.getItem('key');
	if(language == null) {
		for(var i = 0; i < beer.length; i++) {
			writeEnBeerCards(i, id);	
			id++;
		}
	}
	else if(language == "en") {
		for(var i = 0; i < beer.length; i++) {
			writeEnBeerCards(i, id);	
			id++;
		}
	}
	else if(language == "sv") {
		for(var i = 0; i < svBeer.length; i++) {
			writeSvBeerCards(i, id);	
			id++;
		}
	}
	
	beerPlusButton();
	
	for(var i = 0; i < beer.length; i++) {
		$('#pic' + i).draggable({
			revert : "invalid",
			helper : "clone",
			stack  : ".draggable"
		});
		makeDraggable();
	}
}

/* This function create and populates cards for every wine item available for purchase
/* It also allows the plus button on the card to add the item to the order and allows
/* users to add items to their order by dragging the item My Order */
function createWineCollection() {
	var wineId = 0;
	
	//These elements provide information for wine items only
		document.getElementById('drink-loc').style.display = "inline";
		document.getElementById('drink-year').style.display = "inline";
		var language = sessionStorage.getItem('key');
		if(language == null) {
			for(var i = 0; i < wine.length; i++) {
				writeEnWineCards(i, wineId);	
				wineId++;
			}
		}
		else if(language == "en") {
			for(var i = 0; i < wine.length; i++) {
				writeEnWineCards(i, wineId);	
				wineId++;
			}
		}
		else if(language == "sv") {
			for(var i = 0; i < svWine.length; i++) {
				writeSvWineCards(i, wineId);	
				wineId++;
			}
		}
	
	winePlusButton();

	for(var i = 0; i < wine.length; i++) {
		$('#pic' + i).draggable({
			revert : "invalid",
			helper : "clone",
			stack  : ".draggable"
		});
		makeDraggable();
	}
}

/* This function creates the cards displaying the available beer and relevant information in English */
function writeEnBeerCards(i, id) {
	$('#item-collection').append('<div class="menucard" id="card-item'+ id +'"> ' +
		'<img src="' + beer[i].img +'" id="pic' + id + '" class="pic"> <div class="menucardcontainer">' +
		'<img src="'+ beer[i].detailimg +'" id="detailpic'+ id + '" class="detailpic">' + 
		'<h4 class="drink" id="drink'+ id +'"><b>' + beer[i].name + '</b></h4> <p class="pricetag" id="pricetag' + id + '">'
		 + beer[i].price + ' kr</p> <button class="plussign" id="addplus' + id + '" aria-hidden="true">add</button>' +
		'<p class="desc" id="desc' + id + '">'+ beer[i].description +'</p> <p class="desc" id="country' + 
		id + '">'+ beer[i].country +'</p> </div></div>');	
		
}

/* This function creates the cards displaying the available beer and relevant information in Swedish */	
function writeSvBeerCards(i, id) {
	$('#item-collection').append('<div class="menucard" id="card-item'+ id +'"> ' +
		'<img src="' + svBeer[i].img +'" id="pic' + id + '" class="pic"> <div class="menucardcontainer">' +
		'<img src="'+ svBeer[i].detailimg +'" id="detailpic'+ id + '" class="detailpic">' + 
		'<h4 class="drink" id="drink'+ id +'"><b>' + svBeer[i].name + '</b></h4> <p class="pricetag" id="pricetag' + id + '">'
		 + svBeer[i].price + ' kr</p> <button class="plussign" id="addplus' + id + '" aria-hidden="true">Lägg till</button>' +
		'<p class="desc" id="desc' + id + '">'+ svBeer[i].description +'</p> <p class="desc" id="country' + 
		id + '">'+ svBeer[i].country +'</p> </div></div>');	

}
	
/* This function creates the cards displaying the available wine and relevant information in English */	
function writeEnWineCards(i, wineId) {
	$('#item-collection').append('<div class="menucard" id="card-item' + wineId + '"> <img src="' + wine[i].img +
		'" id="pic' + wineId + '" class="pic"> <div class="menucardcontainer"> <img src="'+ wine[i].detailimg +
		'" id="detailpic'+ wineId + '" class="detailpic"><h4 class="drink" id="drink' + wineId + '"><b>' + wine[i].name + 
		'</b></h4> <p class="pricetag" id="pricetag' + wineId + '">' + wine[i].price + ' kr</p><button class="plussign"' + 
		'id="addplus' + wineId + '" aria-hidden="true">add</button> <p class="desc" id="desc' + wineId + '">'+ wine[i].description +'</p> '+
		' <p class="desc" id="country' + wineId + '">'+ wine[i].country +'</p> <p class="desc" id="loc' + wineId + '">'+ wine[i].location +'</p>' +
		' <p class="desc" id="year' + wineId + '">'+ wine[i].year +'</p> </div></div>');
}

/* This function creates the cards displaying the available wine and relevant information in Swedish */	
function writeSvWineCards(i, wineId) {
	$('#item-collection').append('<div class="menucard" id="card-item' + wineId + '"> <img src="' + svWine[i].img +
		'" id="pic' + wineId + '" class="pic"> <div class="menucardcontainer"> <img src="'+ svWine[i].detailimg +
		'" id="detailpic'+ wineId + '" class="detailpic"><h4 class="drink" id="drink' + wineId + '"><b>' + svWine[i].name + 
		'</b></h4> <p class="pricetag" id="pricetag' + wineId + '">' + wine[i].price + ' kr</p><button class="plussign"' + 
		'id="addplus' + wineId + '" aria-hidden="true">Lägg till</button> <p class="desc" id="desc' + wineId + '">'+ svWine[i].description +'</p> '+
		' <p class="desc" id="country' + wineId + '">'+ svWine[i].country +'</p> <p class="desc" id="loc' + wineId + '">'+ svWine[i].location +'</p>' +
		' <p class="desc" id="year' + wineId + '">'+ svWine[i].year +'</p> </div></div>');
}

/* This function displays the detailed card view with more information when the user 
/* clicks on the image. The user can click outside the modal to close it */
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

/* This function matches the ID of the picture the user clicks on with the associated 
/* information for that particular item. This information is used to display details in
/* the detailed card modal */
function getBeerDetails() {
	$('.pic').click(function(event) {
		var eventId = event.target.id;
		for(i = 0; i < beer.length; i++) {
			if(eventId == 'pic' + i) {
				var imgsrc = document.getElementById('drink-img').src = document.getElementById('detailpic' + i).src;
				document.getElementById('drink-country').innerHTML = document.getElementById('country' + i).innerHTML;
				var drinkname = document.getElementById('drink-name').innerHTML = document.getElementById('drink' + i).innerHTML;
				var price = document.getElementById('drink-price').innerHTML = document.getElementById('pricetag' + i).innerHTML;
				document.getElementById('drink-description').innerHTML = document.getElementById('desc' + i).innerHTML;
				addItemOnClick(imgsrc, drinkname, price);			//Allows add to order button in detailed modal to add item to order
			}
		}
	});
}

/* This function matches the ID of the picture the user clicks on with the associated 
/* information for that particular item. This information is used to display details in
/* the detailed card modal */
function getWineDetails() {
	$('.pic').click(function(event) {
		var eventId = event.target.id;
		for(i = 0; i < wine.length; i++) {
			if(eventId == 'pic' + i) {
				var imgsrc = document.getElementById('drink-img').src = document.getElementById('detailpic' + i).src;
				var drinkname = document.getElementById('drink-name').innerHTML = document.getElementById('drink' + i).innerHTML;
				document.getElementById('drink-country').innerHTML = document.getElementById('country' + i).innerHTML;
				document.getElementById('drink-loc').innerHTML = document.getElementById('loc' + i).innerHTML;
				document.getElementById('drink-year').innerHTML = document.getElementById('year' + i).innerHTML;
				var price = document.getElementById('drink-price').innerHTML = document.getElementById('pricetag' + i).innerHTML;
				document.getElementById('drink-description').innerHTML = document.getElementById('desc' + i).innerHTML;
				addItemOnClick(imgsrc, drinkname, price);	//Allows add to order button in detailed modal to add item to order
			}
		}
	});
}


/* This function adds the item the user clicks on the the user's order */
function updateOrder(imgsrc, drinkname, price) {
	if(counter < 15) {
		menuModal.style.display = "none";
		addToOrder(imgsrc, drinkname, price);
		var num = price.replace(' kr','');
		var numParse = parseInt(num);
		totalOrder += numParse;
		$('#orderTotal').text(totalOrder + ' ');
			console.log(totalOrder);
	}
	else {
		alert("Maximum drink limit had been reached");
		menuModal.style.display = "none";
	}
}

/* This function passes the details from the card the user has clicked on to the user's
/* order. If the item already exists in the order, one is added to that item. 
/* Otherwise a new order item will be created. This allows the user to easily see the 
/* items they have ordered and confirm their choice. This information will be used to 
/* submit the order */
function addToOrder(imgsrc, drinkname, price) {
	
	//UndoRedo function goes here
		/*Clear My Order when user clicks x
		$('#clearOrder').click(function() {
			for(i = 0; i < counter; i++) {
				$('#item'+i).hide();
				//then delete price from total
				//add total on element not hidden
			}
			totalOrder = 0;
			//counter = 0;
		});*/
		
	var itemExists = false;
	var itemId;
	for(i = 0; i < counter; i++) {
		if(document.getElementById('i1name'+i).innerHTML == drinkname) {
			itemId = i;
			itemExists = true;
			break;
		}
	}
	if(!itemExists) {
		//push item to array
		var t = price.replace(' kr','');
		//totalOrder = t;
		writeOrderItem(imgsrc, drinkname, price);
			for(i = 0; i < counter; i++) {
				operatorButtons();
			}
	}
	else {	
		var item = document.getElementById('item'+i);
		var amount = document.getElementById('a'+i);
		var amountVal = parseInt(document.getElementById('a'+i).innerHTML);
		var i1price = document.getElementById('i1price'+i);
		var priceNo = i1price.innerHTML;
		var num = priceNo.replace(' kr','');
		var num1 = price.replace(' kr','');
		var numParse = parseInt(num);
		var numParse1 = parseInt(num1);
		console.log(numParse);
		var total = numParse1;
		if(amountVal < 6) {
			amountVal += 1;
			total += numParse;
			var priceKr = total + (' kr');
			amount.innerHTML = amountVal;
			i1price.innerHTML = priceKr;
		}
		else {
			alert("Maximum drink limit had been reached");
		}
		console.log(item);
		
	}	
}


/* This function allows the plus and minus buttons in the My Order section to function.
/* This allows users increase or decrease the number of an item that is already in their order.
/* This also updates the price per item type when changed. Limit is 6 of the same item. 
/* Item is removed from the order if the amount in the order is 0 */
function operatorButtons() {
	var plus = document.getElementById('plus'+i);
	var minus = document.getElementById('minus'+i);
	var item = document.getElementById('item'+i);
	var amount = document.getElementById('a'+i);
	var amountVal = parseInt(document.getElementById('a'+i).innerHTML);
	var i1price = document.getElementById('i1price'+i);
	var price = document.getElementById('i1price'+i).innerHTML;
	var priceNo = price.replace(' kr','');
	var priceParse = parseInt(priceNo);
	var keepPriceForMinus = priceParse;
	var total = priceParse;
	//totalOrder = priceParse;

	plus.onclick = function(event) {
		if(event.target == plus) {
			if(amountVal < 6) {
				amountVal += 1;
				total += priceParse;
				var priceKr = total + (' kr');
				amount.innerHTML = amountVal;
				i1price.innerHTML = priceKr;
			}
			else {
				alert("Maximum drink limit had been reached");
			}
		}
	}
	//Fix this!
	minus.onclick = function(event) {
		if(event.target == minus) {
			if(amountVal > 1) {
				amountVal -= 1;
				total -= priceParse;
				var priceKr = total + (' kr');
				amount.innerHTML = amountVal;
				i1price.innerHTML = priceKr;
				totalOrder -= priceParse;
				$('#orderTotal').text(totalOrder + ' ');
			}
			else {
				item.style.display = 'none';
				totalOrder -= priceParse;
				$('#orderTotal').text(totalOrder + ' ');
				counter--;
				if (counter <= 0) {
					$('.cart-placeholder').removeClass("hidden");
				}
			}
		}
	}
}


/* Add element to cart from button within detailed view */
function addItemOnClick(imgsrc, drinkname, price) {
    var add = document.getElementById('addToCartButton');
	add.onclick = function(event) {
		if(event.target == add) {
				updateOrder(imgsrc, drinkname, price);
		}
	}
}

/* Display the information of selected item in My Order */
function writeOrderItem(imgsrc, drinkname, price) {
	var item = '<div class="card-item square" id="item'+ counter +'"> ' + 
		'<img src="' + imgsrc + '" id="orderimg'+ counter +'" class="orderimg">' + '<div class="content">' +  
		'<p class="i1name" id="i1name'+ counter +'">' + drinkname + '</p><p id="i1price'+ counter +'" class="i1price">' + price + 
		'</p> <div class="amount"><i class="fa fa-minus cart" id="minus'+ counter +'"' +
		'aria-hidden="true"> </i><text id="a'+ counter +'">1</text> <i class="fa fa-plus cart"' +
		'id="plus'+ counter +'" aria-hidden="true"></i> </div></div></div>';
	//$('#cartPopup').append();
	$(item).insertAfter("#cartTitle");		
		counter++;
		$('.cart-placeholder').addClass("hidden");
}




/* This function allows the plus button on each item card to add that item to My Order 
/* with relevant details */
function beerPlusButton() {
	$('.plussign').click(function(event) {
		var eventId = event.target.id;
		for(var i = 0; i < beer.length; i++) {
			if(eventId == 'addplus' + i) {
				var imgsrc = document.getElementById('drink-img').src = document.getElementById('detailpic' + i).src;
				var drinkname = document.getElementById('drink-name').innerHTML = document.getElementById('drink' + i).innerHTML;
				var price = document.getElementById('drink-price').innerHTML = document.getElementById('pricetag' + i).innerHTML;
				document.getElementById('drink-country').innerHTML = document.getElementById('country' + i).innerHTML;
				document.getElementById('drink-description').innerHTML = document.getElementById('desc' + i).innerHTML;
				updateOrder(imgsrc, drinkname, price);
			}
		}		
	});
}

/* This function allows the plus button on each item card to add that item to My Order 
/* with relevant details */
function winePlusButton() {
	$('.plussign').click(function(event) {
			var eventId = event.target.id;
			for(var i = 0; i < wine.length; i++) {
				if(eventId == 'addplus' + i) {
					var imgsrc = document.getElementById('drink-img').src = document.getElementById('detailpic' + i).src;
					var drinkname = document.getElementById('drink-name').innerHTML = document.getElementById('drink' + i).innerHTML;
					var price = document.getElementById('drink-price').innerHTML = document.getElementById('pricetag' + i).innerHTML;
					document.getElementById('drink-country').innerHTML = document.getElementById('country' + i).innerHTML;
					document.getElementById('drink-description').innerHTML = document.getElementById('desc' + i).innerHTML;
					updateOrder(imgsrc, drinkname, price);
				}
			}		
		});
}

/* This function allows each item to be dragged into My Order with relevant details */
function makeDraggable() {
		$('.cart-popup').droppable({
		drop: function(event, ui){
			var draggableId = ui.draggable.attr("id");
			var droppableId = $(this).attr("id");			
			var idNum = draggableId.replace('pic','');			
			var drinkId = "drink" + idNum;
			var priceId = "pricetag" + idNum;
			var imgId = "detailpic" + idNum;
			var imgsrc = document.getElementById(imgId).src;
			var drinkname = document.getElementById(drinkId).innerHTML;
			var price = document.getElementById(priceId).innerHTML;
			updateOrder(imgsrc, drinkname, price) 
			ui.helper.hide('explode');
			}
		});
}

/* sorting by alcohol */
function alcoholSort(array){
	array.sort(function(a, b){
		var a1= a.alcoholLevel, a2= b.alcoholLevel;
		if(a1== a2) return 0;
		return a1> a2? 1: -1;
		});
			
}

/* sorting by price (from lowest to highest) */
function priceSortLowTop(array){
	array.sort(function(a, b){
		var price1= a.price, price2= b.price;
		if(price1== price2) return 0;
		return price1> price2? 1: -1;
		});
		
		
}

/* sorting by price (from highest to lowest) */
function priceSortHighTop(array){
	array.sort(function(a, b){
		var price1= a.price, price2= b.price;
		if(price1== price2) return 0;
		return price1> price2? 1: -1;
		});
	array.reverse();
		
}

/* sorting by name */
function nameSort(array){
	array.sort(function(a, b){
		var name1= a.name.toLowerCase(), name2= b.name.toLowerCase();
		if(name1== name2) return 0;
		return name1> name2? 1: -1;
	});
		
			
}

/* sorting by most bought */
function popularSort(array){
	array.sort(function(a, b){
		var a1= a.amountBought, a2= b.amountBought;
		if(a1== a2) return 0;
		return a1> a2? 1: -1;
	}); 
	
	array.reverse();
}

/* Shows gluten free beer */
function glutenFreeBeer(){
	var glutenFreeArray = [];
	for(var i = 0; i < beer.length; i++){
		if(beer[i].gluten == false){
			glutenFreeArray.push(beer[i]);
		}
	}
	
	nameSort(glutenFreeArray);
	var id = 0;
	for(var i = 0; i < glutenFreeArray.length; i++){
				$('#item-collection').append('<div class="menucard" id="card-item'+ id +'"> ' +
						'<img src="' + glutenFreeArray[i].img +'" id="pic' + id + '" class="pic"> <div class="menucardcontainer">' +
						'<img src="'+ glutenFreeArray[i].detailimg +'" id="detailpic'+ id + '" class="detailpic">' + 
						'<h4 class="drink" id="drink'+ id +'"><b>' + glutenFreeArray[i].name + '</b></h4> <p class="pricetag" id="pricetag' + id + '">'
						 + glutenFreeArray[i].price + ' kr</p> <button class="plussign" id="addplus'+ id +'" aria-hidden="true">add</button>' +
						'<p class="desc" id="desc' + id + '">'+ glutenFreeArray[i].description +'</p> <p class="desc" id="country' + 
						id + '">'+ glutenFreeArray[i].country +'</p> </div></div>');		
				id++;
	}	
	
	for(var i = 0; i < glutenFreeArray.length; i++) {
		$('#pic' + i).draggable({
			revert : "invalid",
			helper : "clone",
			stack  : ".draggable"
		});
		makeDraggable();
	}
}

/* Shows gluten free beer in Swedish */
function glutenFreeSvBeer(){
	var glutenFreeArray = [];
	for(var i = 0; i < svBeer.length; i++){
		if(svBeer[i].gluten == false){
			glutenFreeArray.push(svBeer[i]);
		}
	}
	
	nameSort(glutenFreeArray);
	var id = 0;
	for(var i = 0; i < glutenFreeArray.length; i++){
				$('#item-collection').append('<div class="menucard" id="card-item'+ id +'"> ' +
						'<img src="' + glutenFreeArray[i].img +'" id="pic' + id + '" class="pic"> <div class="menucardcontainer">' +
						'<img src="'+ glutenFreeArray[i].detailimg +'" id="detailpic'+ id + '" class="detailpic">' + 
						'<h4 class="drink" id="drink'+ id +'"><b>' + glutenFreeArray[i].name + '</b></h4> <p class="pricetag" id="pricetag' + id + '">'
						 + glutenFreeArray[i].price + ' kr</p> <button class="plussign" id="addplus'+ id +'" aria-hidden="true">add</button>' +
						'<p class="desc" id="desc' + id + '">'+ glutenFreeArray[i].description +'</p> <p class="desc" id="country' + 
						id + '">'+ glutenFreeArray[i].country +'</p> </div></div>');		
				id++;
	}	
	
	for(var i = 0; i < glutenFreeArray.length; i++) {
		$('#pic' + i).draggable({
			revert : "invalid",
			helper : "clone",
			stack  : ".draggable"
		});
		makeDraggable();
	}
}

/* Shows gluten free wine */
function glutenFreeWine(){
	$('#item-collection').empty();
	var glutenFreeArray = [];
	for(var i = 0; i < wine.length; i++){
		if(wine[i].gluten == false){
			glutenFreeArray.push(wine[i]);
		}
	}
	
	nameSort(glutenFreeArray);
	
	//These elements provide information for wine items only
	document.getElementById('drink-loc').style.display = "inline";
	document.getElementById('drink-year').style.display = "inline";
	
	var wineId = 0;
	for(var i = 0; i < glutenFreeArray.length; i++) {
		$('#item-collection').append('<div class="menucard" id="card-item'+ wineId +'"> <img src="' + glutenFreeArray[i].img +
			'" id="pic' + wineId + '" class="pic"> <div class="menucardcontainer"> <img src="'+ glutenFreeArray[i].detailimg +
			'" id="detailpic'+ wineId + '" class="detailpic"><h4 class="drink" id="drink' + wineId + '"><b>' + glutenFreeArray[i].name + 
			'</b></h4> <p class="pricetag" id="pricetag' + wineId + '">' + glutenFreeArray[i].price + ' kr</p><button class="plussign"' + 
			'id="addplus'+ wineId +'" aria-hidden="true">add</button> <p class="desc" id="desc' + wineId + '">'+ glutenFreeArray[i].description +'</p> '+
			' <p class="desc" id="country' + wineId + '">'+ glutenFreeArray[i].country +'</p> <p class="desc" id="loc' + wineId + '">'+ glutenFreeArray[i].location +'</p>' +
			' <p class="desc" id="year' + wineId + '">'+ glutenFreeArray[i].year +'</p> </div></div>');
		wineId++;
	}	
	
	for(var i = 0; i < glutenFreeArray.length; i++) {
		$('#pic' + i).draggable({
			revert : "invalid",
			helper : "clone",
			stack  : ".draggable"
		});
		makeDraggable();
	}
}

/* Shows gluten free wine in Swedish*/
function glutenFreeSvWine(){
	$('#item-collection').empty();
	var glutenFreeArray = [];
	for(var i = 0; i < svWine.length; i++){
		if(svWine[i].gluten == false){
			glutenFreeArray.push(svWine[i]);
		}
	}
	
	nameSort(glutenFreeArray);
	
	//These elements provide information for wine items only
	document.getElementById('drink-loc').style.display = "inline";
	document.getElementById('drink-year').style.display = "inline";
	
	var wineId = 0;
	for(var i = 0; i < glutenFreeArray.length; i++) {
		$('#item-collection').append('<div class="menucard" id="card-item'+ wineId +'"> <img src="' + glutenFreeArray[i].img +
			'" id="pic' + wineId + '" class="pic"> <div class="menucardcontainer"> <img src="'+ glutenFreeArray[i].detailimg +
			'" id="detailpic'+ wineId + '" class="detailpic"><h4 class="drink" id="drink' + wineId + '"><b>' + glutenFreeArray[i].name + 
			'</b></h4> <p class="pricetag" id="pricetag' + wineId + '">' + glutenFreeArray[i].price + ' kr</p><button class="plussign"' + 
			'id="addplus'+ wineId +'" aria-hidden="true">add</button> <p class="desc" id="desc' + wineId + '">'+ glutenFreeArray[i].description +'</p> '+
			' <p class="desc" id="country' + wineId + '">'+ glutenFreeArray[i].country +'</p> <p class="desc" id="loc' + wineId + '">'+ glutenFreeArray[i].location +'</p>' +
			' <p class="desc" id="year' + wineId + '">'+ glutenFreeArray[i].year +'</p> </div></div>');
		wineId++;
	}	
	
	for(var i = 0; i < glutenFreeArray.length; i++) {
		$('#pic' + i).draggable({
			revert : "invalid",
			helper : "clone",
			stack  : ".draggable"
		});
		makeDraggable();
	}
}

//TODO Need to fix when deleting item from cart, can't add same item back to cart
// Need to fix when click on card plus button, then click cart-item minus button, deletes item










