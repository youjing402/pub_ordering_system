//English Language for website
var en = {
		about: "About",
		menu: "Menu", 
		login: "Login",
		search: "Search",
		brand: "Select brand",
		sort: "Sort by",
		beer: "Beer",
		wine: "Wine",
		cider: "Cider",
		whiskey: "Whiskey",
		foodmenu: "Menu",
		sortname: "Alphabetical",
		sortPopularity: "Popularity",
		sortPHTL: "Price: Highest to Lowest",
		sortPLTH: "Price: Lowest to Highest",
		sortAlcoholLevel: "Alcohol Level",
		sortGlutenFree: "Gluten Free",
		myorder: "My Order",
		total: "Total",
		orderbtn: "Order",
		tfd: "The Flying Dutchman",
		intro: "The Flying Dutchman welcomes you into a classic, stylish relaxed atmosphere, serving a gourmet bar menu selection with a grand selection of fine wines and beers.\
				At night, The Flying Dutchman is a perfect sanctuary to wind down after an exciting day. Relax with a refreshing beer, a glass of wine or your favourite beverage.",
		on: "Order Now!",
		un: "Username",
		username: "Enter Username",
		pw: "Password",
		password: "Enter Password",
		ml: "Login",
		cancelBtn: "Cancel",
		f: "Forgot",
		fp: "password?",
		cartph: "You haven't ordered anything yet! Try to drag something here."
}

//Swedish language for website
var sv = {
		about: "Om",
		menu: "Meny",
		login: "Logga In",
		search: "Sök",
		brand: "Välj märke",
		sort: "Sortera efter",
		beer: "Öl",
		wine: "Vin",
		cider: "Cider",
		whiskey: "Whisky",
		foodmenu: "Meny",
		sortname: "Bokstavsordning",
		sortPopularity: "Popularitet",
		sortPHTL: "Pris: Högsta till Lägsta",
		sortPLTH: "Pris: Lägsta till Högsta",
		sortAlcoholLevel: "Alkoholnivå",
		sortGlutenFree: "Glutenfri",
		myorder: "Min Beställning",
		total: "Total",
		orderbtn: "Beställa",
		tfd: "The Flying Dutchman",
		intro: "The Flying Dutchman välkomnar dig till en klassisk, elegant avslappnad atmosfär, serverar en gourmetmeny bar med ett stort urval av fina viner och öl. \
				På natten, The Flying Dutchman är en perfekt fristad att koppla av efter en spännande dag. Koppla av med en svalkande öl, ett glass vin eller din favoritdryck",
		on: "Beställ nu!",
		un: "Användarnamn",
		username: "Skriv in ditt användarnamn",
		pw: "Lösenord",
		password: "Skriv in ditt Lösenord",
		ml: "Logga In",
		cancelBtn: "Annullera",
		F: "Glömt ditt",
		fp: "lösenord?",
		cartph: "Du har inte beställt något ännu! Försök att dra något här."
}

/* On page reload, clear the session - this will mean the selected language will no longer 
/* remembered */
if (performance.navigation.type == 1) {
  sessionStorage.clear();
}

/* When the user navigates between pages of the website, their language preference is 
/* remembered. This also reloads the items on the page when moving between pages */
if (performance.navigation.type == 0) {
	console.info( "navigate");
	var language = sessionStorage.getItem('key');
  	console.log(language);
  	if(language == null) {
		enMenu();
		$('#item-collection').empty();
		if($('#beertab').hasClass("selected")) {
			nameSort(beer);
			createBeerCollection();	//Show all the beer items in beer array
			imageClick();			//Detailed view when user clicks on image
			getBeerDetails();	//Gets detailed information for modal
		}
		if($('#winetab').hasClass("selected")) {
			nameSort(wine);
			createWineCollection();		
			imageClick();				//Detailed view when user clicks on image
			getWineDetails(); 			//Gets detailed information for modal
		}

	}
	if(language == "en" ) {
		if(location.href.split('/').pop() == "menu.html") {
			enMenu();
			$('#item-collection').empty();
			if($('#beertab').hasClass("selected")) {
				nameSort(beer);
				createBeerCollection();	//Show all the beer items in beer array
				imageClick();			//Detailed view when user clicks on image
				getBeerDetails();	//Gets detailed information for modal
			}
			if($('#winetab').hasClass("selected")) {
				nameSort(wine);
				createWineCollection();		
				imageClick();				//Detailed view when user clicks on image
				getWineDetails(); 			//Gets detailed information for modal
			}
		}
		else if(location.href.split('/').pop() == "index.html") {
			enAbout();
		}
	}
	if(language == "sv") {
		if(location.href.split('/').pop() == "menu.html") {
			$("#languageBtn").val("2").change();
			svMenu();
			$('#item-collection').empty();
			if($('#beertab').hasClass("selected")) {
				nameSort(svBeer);
				createBeerCollection();	//Show all the beer items in beer array
				imageClick();			//Detailed view when user clicks on image
				getBeerDetails();	//Gets detailed information for modal
			}
			if($('#winetab').hasClass("selected")) {
				nameSort(svWine);
				createWineCollection();		
				imageClick();				//Detailed view when user clicks on image
				getWineDetails(); 			//Gets detailed information for modal
			}
		}
		else if(location.href.split('/').pop() == "index.html") {
			svAbout();
			$("#languageBtn").val("2").change();
		}
	}
}

var selectBox = document.getElementById("languageBtn");	

/* Sets language based on user preference, reloads items in selected language
/* Current options include English and Swedish */
selectBox.addEventListener("change", function() {
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	if(selectedValue == 1) {
		var _lang = "en";
	}
	else if(selectedValue == 2) {
		var _lang = "sv";
	}

	sessionStorage.setItem('key',_lang);
	var language = sessionStorage.getItem('key');
	
	if(language == "en") {
		enMenu();
		$('#item-collection').empty();
		if($('#beertab').hasClass("selected")) {
			nameSort(beer);
			createBeerCollection();	//Show all the beer items in beer array
			imageClick();			//Detailed view when user clicks on image
			getBeerDetails();	//Gets detailed information for modal
		}
		if($('#winetab').hasClass("selected")) {
			nameSort(wine);
			createWineCollection();		
			imageClick();				//Detailed view when user clicks on image
			getWineDetails(); 			//Gets detailed information for modal
		}

	}
	else if(language == "sv") {
		svMenu();
		$('#item-collection').empty();
		if($('#beertab').hasClass("selected")) {
			nameSort(svBeer);
			createBeerCollection();	//Show all the beer items in beer array
			imageClick();			//Detailed view when user clicks on image
			getBeerDetails();	//Gets detailed information for modal
		}
		if($('#winetab').hasClass("selected")) {
			nameSort(wine);
			createWineCollection();		
			imageClick();				//Detailed view when user clicks on image
			getWineDetails(); 			//Gets detailed information for modal
		}
	}
});

function enMenu() {
	$('#abt').text(en.about);
	$('#m').text(en.menu);
	$('#loginbtn').text(en.login);
	$('#search').attr('placeholder', en.search);
	$('#brandDropBtn').text(en.brand);
	$('#sortDropBtn').text(en.sort);
	$('#beer').text(en.beer);
	$('#wine').text(en.wine);
	$('#cider').text(en.cider);
	$('#whiskey').text(en.whiskey);
	$('#food').text(en.foodmenu);
	$('#sortName').text(en.sortname);
	$('#sortPopularity').text(en.sortPopularity);
	$('#sortPHTL').text(en.sortPHTL);
	$('#sortPLTH').text(en.sortPLTH);
	$('#sortAlcoholLevel').text(en.sortAlcoholLevel);
	$('#sortGlutenFree').text(en.sortGlutenFree);
	$('#mo').text(en.myorder);
	$('#to').text(en.total);
	$('#orderbtn').text(en.orderbtn);
	$('#un').text(en.un);
	$('#username').attr('placeholder', en.username);
	$('pw').text(en.pw);
	$('#password').attr('placeholder', en.password);
	$('#ml').text(en.ml);
	$('#cancelbtn').text(en.cancelBtn);
	$('#fo').text(en.F);
	$('#fp').text(en.fp);
	$('#cartph').text(en.cartph);
}

function svMenu() {
	$('#abt').text(sv.about);
	$('#m').text(sv.menu);
	$('#loginbtn').text(sv.login);
	$('#search').attr('placeholder', sv.search);
	$('#brandDropBtn').text(sv.brand);
	$('#sortDropBtn').text(sv.sort);
	$('#beer').text(sv.beer);
	$('#wine').text(sv.wine);
	$('#cider').text(sv.cider);
	$('#whiskey').text(sv.whiskey);
	$('#food').text(sv.foodmenu);
	$('#sortName').text(sv.sortname);
	$('#sortPopularity').text(sv.sortPopularity);
	$('#sortPHTL').text(sv.sortPHTL);
	$('#sortPLTH').text(sv.sortPLTH);
	$('#sortAlcoholLevel').text(sv.sortAlcoholLevel);
	$('#sortGlutenFree').text(sv.sortGlutenFree);
	$('#mo').text(sv.myorder);
	$('#to').text(sv.total);
	$('#orderbtn').text(sv.orderbtn);
	$('#un').text(sv.un);
	$('#username').attr('placeholder', sv.username);
	$('pw').text(sv.pw);
	$('#password').attr('placeholder', sv.password);
	$('#ml').text(sv.ml);
	$('#cancelbtn').text(sv.cancelBtn);
	$('#fo').text(sv.f);
	$('#fp').text(sv.fp);
	$('#cartph').text(sv.cartph);
}

function enAbout() {
	$('#abt').text(en.about);
	$('#m').text(en.menu);
	$('#loginbtn').text(en.login);
	$('#tfd').text(en.tfd);
	$('#intro').text(en.intro);
	$('#on').text(en.on);
	$('#un').text(en.un);
	$('#username').attr('placeholder', en.username);
	$('pw').text(en.pw);
	$('#password').attr('placeholder', en.password);
	$('#ml').text(en.ml);
	$('#cancelbtn').text(en.cancelBtn);
	$('#fo').text(en.f);
	$('#fp').text(en.fp);
}

function svAbout() {
	$('#abt').text(sv.about);
	$('#m').text(sv.menu);
	$('#loginbtn').text(sv.login);
	$('#tfd').text(sv.tfd);
	$('#intro').text(sv.intro);
	$('#on').text(sv.on);
	$('#un').text(sv.un);
	$('#username').attr('placeholder', sv.username);
	$('pw').text(sv.pw);
	$('#password').attr('placeholder', sv.password);
	$('#ml').text(sv.ml);
	$('#cancelbtn').text(sv.cancelBtn);
	$('#fo').html(sv.f);
	$('#fp').text(sv.fp);
}
