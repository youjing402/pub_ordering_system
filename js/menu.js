$(document).ready(function() {
	// load the external components
	$('#navBar').load("./navbar.html");
	$('#modalLogin').load("./modal_login.html");
	$('#cartPopup').load("./cart_popup.html");
	$('#detailedMenuModal').load("./detailedmenucard.html");

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

	var id = 0;
	//Create and populate cards for every item in the beer object array sorted by popular
	popularSort(beer);
	for(var i = 0; i < beer.length; i++) {
		//if(beer[i].gluten == false){
			var values = beer[i];
			$('#item-collection').append('<div class="menucard" id="card-item'+ id +'"> ' +
				'<img src="' + beer[i].img +'" id="pic' + id + '" class="pic"> <div class="menucardcontainer">' +
				'<img src="'+ beer[i].detailimg +'" id="detailpic'+ id + '" class="detailpic">' + 
				'<h4 class="drink" id="drink'+ id +'"><b>' + beer[i].name + '</b></h4> <p class="pricetag" id="pricetag' + id + '">'
				+ beer[i].price + ' kr</p> <button class="plussign" id="addplus" aria-hidden="true">add</button>' +
				'<p class="desc" id="desc' + id + '">'+ beer[i].description +'</p> <p class="desc" id="country' + 
				id + '">'+ beer[i].country +'</p> </div></div>');		
			id++;
		//}
	};		
	
	getBeerDetails();
	imageClick(); //Detailed view when user clicks on image
	
	$('#sortName').click(function(){
		
		if($('#beertab').hasClass("selected")) {
			nameSort(beer); 	//Sort by name
			showBeerItems();	//Show all the beer items in beer array
			getBeerDetails(); 	//Gets detailed information for modal
			imageClick();		//Detailed view when user clicks on image
		}
		
		else if($('#winetab').hasClass("selected")) {
			
			nameSort(wine);
			showWineItems();    //Shows the wine items
			addElementToCart();	//Allows plus button to add item to cart
			imageClick();		//Detailed view when user clicks on image
			getWineDetails(); 	//Gets detailed information for modal
		}
		
	});
	
	$('#sortPopularity').click(function(){
	
		if($('#beertab').hasClass("selected")) {
			popularSort(beer);	//Sort by most bought
			showBeerItems();	//Show all the beer items in beer array
			getBeerDetails();	//Gets detailed information for modal
			imageClick();		//Detailed view when user clicks on image
		}
		
		else if($('#winetab').hasClass("selected")) {
			
			popularSort(wine);	//Sort by most bought
			showWineItems();    //Shows the wine items
			addElementToCart();	//Allows plus button to add item to cart
			imageClick();		//Detailed view when user clicks on image
			getWineDetails(); 	//Gets detailed information for modal
		}
		
	});
	
	
	$('#sortPHTL').click(function(){
		
		if($('#beertab').hasClass("selected")) {
			priceSortHighTop(beer); //sort by price, from highest to lowest
			showBeerItems();		//Show all the beer items in beer array
			getBeerDetails(); 		//Gets detailed information for modal
			imageClick();			//Detailed view when user clicks on image
		}
		else if($('#winetab').hasClass("selected")) {
			
			priceSortHighTop(wine); //sort by price, from highest to lowest
			showWineItems();    	//Shows the wine items
			addElementToCart();		//Allows plus button to add item to cart
			imageClick();			//Detailed view when user clicks on image
			getWineDetails(); 		//Gets detailed information for modal
		}
		
		
	})
	
	
	$('#sortPLTH').click(function(){
	
		if($('#beertab').hasClass("selected")) {
			priceSortLowTop(beer);	//Sort by price, from lowest to highest
			showBeerItems();		//Show all the beer items in beer array
			getBeerDetails(); 		//Gets detailed information for modal
			imageClick();			//Detailed view when user clicks on image
		}
		else if($('#winetab').hasClass("selected")) {
			
			priceSortLowTop(wine);	//Sort by price, from lowest to highest
			showWineItems();    	//Shows the wine items
			addElementToCart();		//Allows plus button to add item to cart
			imageClick();			//Detailed view when user clicks on image
			getWineDetails(); 		//Gets detailed information for modal
		}
		
		
	});
	
	$('#sortAlcoholLevel').click(function(){
		
		if($('#beertab').hasClass("selected")) {
			alcoholSort(beer);	//Sort by alcohol level
			showBeerItems();	//Show all the beer items in beer array
			getBeerDetails(); 	//Gets detailed information for modal
			imageClick();		//Detailed view when user clicks on image
		}
		else if($('#winetab').hasClass("selected")) {
			
			alcoholSort(wine);	//Sort by alcohol level
			showWineItems();    //Shows the wine items
			addElementToCart();	//Allows plus button to add item to cart
			imageClick();		//Detailed view when user clicks on image
			getWineDetails(); 	//Gets detailed information for modal
		}
	
	});
	
	$('#sortGlutenFree').click(function(){
		
		//check which is checked. beer or wine
		if($('#beertab').hasClass("selected")) {
			glutenFreeBeer(); //Selects the glutenfree beer, and shows them at the screen
		}
		else if($('#winetab').hasClass("selected")) {
			
			glutenFreeWine(); //Selects the glutenfree wine, and shows them at the screen
			
		
		}
		
		
	});
		
		
}); 
	
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
	
	/* sorting by price (from highest to lowest)*/
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
	
	/* taking out the glutenfree elements from beer */
	function glutenFreeBeer(){
		
		$('#item-collection').empty();
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
							 + glutenFreeArray[i].price + ' kr</p> <button class="plussign" id="addplus" aria-hidden="true">add</button>' +
							'<p class="desc" id="desc' + id + '">'+ glutenFreeArray[i].description +'</p> <p class="desc" id="country' + 
							id + '">'+ glutenFreeArray[i].country +'</p> </div></div>');		
					id++;
		}
			
		
	}
	
	/*Takes out the glutenFreeWine */
	function glutenFreeWine(){
		
		
		$('#item-collection').empty();
		
		var glutenFreeArray = [];
		for(var i = 0; i < wine.length; i++){
			if(wine[i].gluten == false){
				glutenFreeArray.push(wine[i]);
			}
		}
		
		
		
		nameSort(glutenFreeArray);
		
		//These elements are for wine items only
		document.getElementById('drink-loc').style.display = "inline";
		document.getElementById('drink-year').style.display = "inline";
		
		var wineId = 0;
		for(var i = 0; i < glutenFreeArray.length; i++) {
			$('#item-collection').append('<div class="menucard" id="card-item"> <img src="' + glutenFreeArray[i].img +
				'" id="pic' + wineId + '" class="pic"> <div class="menucardcontainer"> <img src="'+ glutenFreeArray[i].detailimg +
				'" id="detailpic'+ wineId + '" class="detailpic"><h4 class="drink" id="drink' + wineId + '"><b>' + glutenFreeArray[i].name + 
				'</b></h4> <p class="pricetag" id="pricetag' + wineId + '">' + glutenFreeArray[i].price + ' kr</p><button class="plussign"' + 
				'id="addplus" aria-hidden="true">add</button> <p class="desc" id="desc' + wineId + '">'+ glutenFreeArray[i].description +'</p> '+
				' <p class="desc" id="country' + wineId + '">'+ glutenFreeArray[i].country +'</p> <p class="desc" id="loc' + wineId + '">'+ glutenFreeArray[i].location +'</p>' +
				' <p class="desc" id="year' + wineId + '">'+ glutenFreeArray[i].year +'</p> </div></div>');
			wineId++;
		}
			
		
	}
	
	

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
		showWineItems();    //Shows the wine items
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
				+ beer[i].price + ' kr</p> <button class="plussign" id="addplus" aria-hidden="true">add</button>' +
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
//});

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

/* Shows the beer-array */
function showBeerItems(){
	
	var id = 0;
	$('#item-collection').empty();
	for(var i = 0; i < beer.length; i++){
			
			$('#item-collection').append('<div class="menucard" id="card-item'+ id +'"> ' +
			'<img src="' + beer[i].img +'" id="pic' + id + '" class="pic"> <div class="menucardcontainer">' +
			'<img src="'+ beer[i].detailimg +'" id="detailpic'+ id + '" class="detailpic">' + 
			'<h4 class="drink" id="drink'+ id +'"><b>' + beer[i].name + '</b></h4> <p class="pricetag" id="pricetag' + id + '">'
			+ beer[i].price + ' kr</p> <button class="plussign" id="addplus" aria-hidden="true">add</button>' +
			'<p class="desc" id="desc' + id + '">'+ beer[i].description +'</p> <p class="desc" id="country' + 
			id + '">'+ beer[i].country +'</p> </div></div>');		
			id++;
	}

}

/* Shows the wine-array */
function showWineItems(){
	
	$('#item-collection').empty();
		
		//These elements are for wine items only
		document.getElementById('drink-loc').style.display = "inline";
		document.getElementById('drink-year').style.display = "inline";
		
		var wineId = 0;
		for(var i = 0; i < wine.length; i++) {
			$('#item-collection').append('<div class="menucard" id="card-item"> <img src="' + wine[i].img +
				'" id="pic' + wineId + '" class="pic"> <div class="menucardcontainer"> <img src="'+ wine[i].detailimg +
				'" id="detailpic'+ wineId + '" class="detailpic"><h4 class="drink" id="drink' + wineId + '"><b>' + wine[i].name + 
				'</b></h4> <p class="pricetag" id="pricetag' + wineId + '">' + wine[i].price + ' kr</p><button class="plussign"' + 
				'id="addplus" aria-hidden="true">add</button> <p class="desc" id="desc' + wineId + '">'+ wine[i].description +'</p> '+
				' <p class="desc" id="country' + wineId + '">'+ wine[i].country +'</p> <p class="desc" id="loc' + wineId + '">'+ wine[i].location +'</p>' +
				' <p class="desc" id="year' + wineId + '">'+ wine[i].year +'</p> </div></div>');
			wineId++;
		}
}

/*
TODO: pass values on to cart
*/

