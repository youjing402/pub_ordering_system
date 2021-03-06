/**
 * File: beverage.js
 *
 * This file provides the details for all available items to order in both English and Swedish
 *
 * Version 1
 * Authors: Christopher Onomeonga, Sarah Murphy
 */
 
        var beer = [{
				"name": "A Passion For Gingers",
				"country" : "Sweden",
				"gluten": true,
				"alcoholLevel": 3.8,
				"img": "images/a-passion-for-gingers-square.png",
				"detailimg": "images/A-Passion-For-Gingers.jpg",
				"description": "Fruity, tangy flavor with hints of passion fruit, lemon and ginger. Serve at 8-10&deg;C as an aperitif or as a social drink.", 
				//"Fruktig, syrlig smak med inslag av passionsfrukt, citron och ingefära. Serveras vid 8-10°C som aperitif eller som sällskapsdryck.",
				"volume": 330,
				"price": 60,
				"stock": 100,
				"amountBought": 22
			},
			{
				"name": "Fonteinen",
				"country" : "Belgium",
				"gluten": true,
				"alcoholLevel": 6,
				"img": "images/fonteinen-oude-gueze-square.png",
				"detailimg": "images/Fonteinen-Oude-Geuze.jpg",
				"description": "Very tangy, fruity flavor with hints of hay, grapefruit, apricot, herbs and lemon. Serve at 6-8&deg;C as an aperitif or with seafood dishes.",
				//"Mycket syrlig, fruktig smak med inslag av halm, grapefrukt, aprikos, örter och citron. Serveras vid 6-8°C som aperitif eller till skaldjursrätter, gärna moules frittes.",
				"volume": 375,
				"price": 120,
				"stock": 70,
				"amountBought": 4
			},
			{
				"name": "Carlsberg Export",
				"country" : "International",
				"gluten" : true,
				"alcoholLevel" : 5,
				"img": "images/Carlsberg-Export-square.png",
				"detailimg": "images/Carlsberg-Export.jpg",
				"description" : "Malty taste with hints of crisp bread, honey and citrus peel. Serve at 8-10&deg;C for cooking or as a social drink.",
				//"Maltig smak med inslag av knäckebröd, honung och citrusskal. Serveras vid 8-10°C till husmanskost eller som sällskapsdryck.",
				"volume": 500,
				"price": 50,
				"stock": 200,
				"amountBought": 55
			},
			{
				"name": "Mariestads",
				"country" : "Sweden",
				"gluten": true,
				"alcoholLevel": 0.5,
				"img" : "images/alcohol-free-mariestad-square.png",
				"detailimg": "images/alcohol-free-mariestad.jpg",
				"description": "Malty, slightly aromatic hops flavor with hints of rye bread, orange peel, honey and herbs. Serve at 8-10&deg;C for cooking or as a social drink.",
				//"Maltig, något humlearomatisk smak med inslag av rågbröd, apelsinskal, honung och örter. Serveras vid 8-10°C till husmanskost eller som sällskapsdryck.",
				"volume" : 330,
				"price" : 60,
				"stock" : 40,
				"amountBought" : 35
				
			},
			{
				"name" : "Mikkeller Ambler",
				"country" : "International",
				"gluten": true,
				"alcoholLevel" : 0.3,
				"img" : "images/alcohol-free-Mikkeller-square.png",
				"detailimg": "images/alcohol-free-Mikkeller.jpg",
				"description" : "Something hop aromatic taste with a distinct bitterness, hints of dried fruit, nougat, dark rye bread, brown sugar and pine needles. Serve at 8-10&deg;C as a social drink or dishes of lamb or beef.",
				//"Något humlearomatisk smak med tydlig beska, inslag av torkad frukt, nougat, kavring, farinsocker och tallbarr. Serveras vid 8-10°C som sällskapsdryck eller till rätter av lamm- eller nötkött.",
				"volume" : 330,
				"price" : 65,
				"stock" : 50,
				"amountBought" : 23
			},
			{
				"name" : "Arboga",
				"country" : "Sweden",
				"gluten" : true,
				"alcoholLevel" : 5.6,
				"img" : "images/Arboga-square.png",
				"detailimg": "images/Arboga.jpg",
				"description" : "Malty flavor with a slight sweetness, hints of dried apricots, syrup loaf, herbs and orange. Serve at 8-10&deg;C for cooking or as a social drink.",
				//"Maltig smak med liten sötma, inslag av torkade aprikoser, sirapslimpa, örter och apelsin. Serveras vid 8-10°C till husmanskost eller som sällskapsdryck.",
				"volume" : 500,
				"price" : 60,
				"stock" : 100,
				"amountBought" : 19
			},
			{
				"name" : "Saxon",
				"country" : "Finland",
				"gluten" : false,
				"alcoholLevel" : 4.1,
				"img" : "images/gluten-free-Saxon-square.png",
				"detailimg": "images/glutenfree-Saxon.jpg",
				"description" : "Bready flavor with hints of honey and orange. Serve at 6-8&deg;C as a social drink or dishes of fish and white meat.",
				//"Brödig smak med inslag av honung och apelsin. Serveras vid 6-8°C som sällskapsdryck eller till rätter av fisk och ljust kött.",
				"volume" : 500,
				"price" : 70,
				"stock" : 30,
				"amountBought" : 5
			}
			
			
			]

 var svBeer = [{
				"name": "A Passion For Gingers",
				"country" : "Sverige",
				"gluten": true,
				"alcoholLevel": 3.8,
				"img": "images/a-passion-for-gingers-square.png",
				"detailimg": "images/A-Passion-For-Gingers.jpg",
				"description": "Fruktig, syrlig smak med inslag av passionsfrukt, citron och ingefära. Serveras vid 8-10°C som aperitif eller som sällskapsdryck.",
				"volume": 330,
				"price": 60,
				"stock": 100,
				"amountBought": 22
			},
			{
				"name": "Fonteinen",
				"country" : "Belgien",
				"gluten": true,
				"alcoholLevel": 6,
				"img": "images/fonteinen-oude-gueze-square.png",
				"detailimg": "images/Fonteinen-Oude-Geuze.jpg",
				"description": "Mycket syrlig, fruktig smak med inslag av halm, grapefrukt, aprikos, örter och citron. Serveras vid 6-8°C som aperitif eller till skaldjursrätter, gärna moules frittes.",
				"volume": 375,
				"price": 120,
				"stock": 70,
				"amountBought": 4
			},
			{
				"name": "Carlsberg Export",
				"country" : "Internationell",
				"gluten" : true,
				"alcoholLevel" : 5,
				"img": "images/Carlsberg-Export-square.png",
				"detailimg": "images/Carlsberg-Export.jpg",
				"description" : "Maltig smak med inslag av knäckebröd, honung och citrusskal. Serveras vid 8-10°C till husmanskost eller som sällskapsdryck.",
				"volume": 500,
				"price": 50,
				"stock": 200,
				"amountBought": 55
			},
			{
				"name": "Mariestads",
				"country" : "Sverige",
				"gluten": true,
				"alcoholLevel": 0.5,
				"img" : "images/alcohol-free-mariestad-square.png",
				"detailimg": "images/alcohol-free-mariestad.jpg",
				"description": "Maltig, något humlearomatisk smak med inslag av rågbröd, apelsinskal, honung och örter. Serveras vid 8-10°C till husmanskost eller som sällskapsdryck.",
				"volume" : 330,
				"price" : 60,
				"stock" : 40,
				"amountBought" : 35
				
			},
			{
				"name" : "Mikkeller Ambler",
				"country" : "Internationell",
				"gluten": true,
				"alcoholLevel" : 0.3,
				"img" : "images/alcohol-free-Mikkeller-square.png",
				"detailimg": "images/alcohol-free-Mikkeller.jpg",
				"description" : "Något humlearomatisk smak med tydlig beska, inslag av torkad frukt, nougat, kavring, farinsocker och tallbarr. Serveras vid 8-10°C som sällskapsdryck eller till rätter av lamm- eller nötkött.",
				"volume" : 330,
				"price" : 65,
				"stock" : 50,
				"amountBought" : 23
			},
			{
				"name" : "Arboga",
				"country" : "Sverige",
				"gluten" : true,
				"alcoholLevel" : 5.6,
				"img" : "images/Arboga-square.png",
				"detailimg": "images/Arboga.jpg",
				"description" : "Maltig smak med liten sötma, inslag av torkade aprikoser, sirapslimpa, örter och apelsin. Serveras vid 8-10°C till husmanskost eller som sällskapsdryck.",
				"volume" : 500,
				"price" : 60,
				"stock" : 100,
				"amountBought" : 19
			},
			{
				"name" : "Saxon",
				"country" : "Finland",
				"gluten" : false,
				"alcoholLevel" : 4.1,
				"img" : "images/gluten-free-Saxon-square.png",
				"detailimg": "images/glutenfree-Saxon.jpg",
				"description" : "Brödig smak med inslag av honung och apelsin. Serveras vid 6-8°C som sällskapsdryck eller till rätter av fisk och ljust kött.",
				"volume" : 500,
				"price" : 70,
				"stock" : 30,
				"amountBought" : 5
			}
			
			
			]


var wine = [{
				"name" : "Allegrini",
				"country" : "Italy, Veneto, ",
				"location" : "Palazzo della Torre, ",
				"year" : 2012,
				"gluten" : false,
				"alcoholLevel" : 13.5,
				"img" : "images/allegrini-square.png",
				"detailimg": "images/wine-Allegrini.jpg",
				//"description" : "Mycket fruktig smak med fatkaraktär, inslag av körsbärspraliner, plommon, choklad och vanilj. Serveras vid cirka 18&deg;C till grillade rätter av lamm- eller nötkött.",
				"description" : "Subtle, spicy flavor with hints of barrel, dark berries, cloves, chocolate and vanilla. Serve at around 18&deg;C with delicious dishes of lamb or beef, or mature firm cheeses.",
				"volume" : 750,
				"price" : 250,
				"stock" : 30,
				"amountBought" : 3
			},
			{
				"name" : "Amarone",
				"country" : "Italy, Veneto, ",
				"location" : "Selezione Antonio Castagnedi, ",
				"year" : 2013,
				"gluten" : false,
				"alcoholLevel" : 15,
				"img" : "images/amarone-square.png",
				"detailimg": "images/wine-Amarone.jpg",
				"description" : "Spicy, nuanced flavor with hints of barrel, raisins, dried cherries, chocolates, arrack, black pepper and cinnamon. Serve at around 18&deg;C with mature firm cheeses or delicious dishes of dark meat.",
				//"Kryddig, nyanserad smak med inslag av fat, russin, torkade körsbär, chokladpraliner, arrak, svartpeppar och kanel. Serveras vid cirka 18°C till lagrade hårdostar eller till smakrika rätter av mörkt kött.",
				"volume" : 750,
				"price" : 390,
				"stock" : 30,
				"amountBought" : 5
			},
			{
				"name" : "Biecher",
				"country" : "France, Alsace, ",
				"location" : "Riesling Res&eacute;rve, ",
				"year" : 2015,
				"gluten" : false,
				"alcoholLevel" : 13,
				"img" : "images/biecher-square.png",
				"detailimg" : "images/wine-Biecher.jpg",
				"description" : "Youthful, fruity flavor with hints of green apples, pears, honey and citrus. Served at about 8&deg;C with dishes of fish and seafood.",
				//"Ungdomlig, fruktig smak med inslag av gröna äpplen, päron, honung och citrus. Serveras vid cirka 8° C till rätter av fisk och skaldjur.",
				"volume" : 750,
				"price" : 150,
				"stock" : 30,
				"amountBought" : 10
			},
			{
				"name" : "Calvet",
				"country" : "France, Bordeaux, ",
				"location" : "Res&eacute;rve du Ciron, ",
				"year" : 2014,
				"gluten" : false,
				"alcoholLevel" : 13,
				"img" : "images/calvet-square.png",
				"detailimg": "images/wine-Calvet.jpg",
				"description" : "Subtle, sweet flavor with hints of apricot marmalade, honey, saffron, red apples and orange. Serve at 8-10&deg;C with tasty desserts or blue cheese.",
				//"Nyanserad, söt smak med inslag av aprikosmarmelad, honung, saffran, röda äpplen och apelsin. Serveras vid 8-10°C till smakrika desserter eller grönmögelost.",
				"volume" : 375,
				"price" : 160,
				"stock" : 50,
				"amountBought" : 4
			},
			{
				"name" : "Chablis Premier Cru",
				"country" : "France, Burgundy, ",
				"location" : "Grande Cuv&eacute;e, ",
				"year" : 2014,
				"gluten" : false,
				"alcoholLevel" : 12.5,
				"img": "images/chablis-square.png",
				"detailimg": "images/wine-Chablis.jpg",
				"description" : "Very fresh, fruity, balanced flavor with hints of yellow apples, citrus, minerals, herbs and beeswax. Serve at 8-10&deg;C as an aperitif to dishes of fish and seafood.",
				"volume" : 750,
				"price" : 280,
				"stock" : 30,
				"amountBought" : 6
			},
			{
				"name" : "Acusp",
				"country" : "Spain, Costers del Segre, ",
				"location" : "Castell D'Encus, ",
				"year" : 2014,
				"gluten" : false,
				"alcoholLevel" : 12.5,
				"img" : "images/acusp-square.png",
				"detailimg": "images/acusp.jpg",
				"description" : "Variegated, berry, slightly spicy flavor with hints of raspberry, bay leaves, cherries, fresh herbs, peach and bitter orange. Serve at 14-16&deg;C with dishes of white meat, often cured meats and cold cuts.",
				//"Nyanserad, fruktig smak med tydlig fatkaraktär, inslag av mörka bär, fikon, viol, plommon, choklad, kanel och kokos. Serveras vid 18°C till rätter av mörkt kött.",
				"volume" : 750,
				"price" : 400,
				"stock" : 20,
				"amountBought" : 2 
			}
			
				]
	
var svWine = [{
				"name" : "Allegrini",
				"country" : "Italien, Veneto, ",
				"location" : "Palazzo della Torre, ",
				"year" : 2012,
				"gluten" : false,
				"alcoholLevel" : 13.5,
				"img" : "images/allegrini-square.png",
				"detailimg": "images/wine-Allegrini.jpg",
				"description" : "Mycket fruktig smak med fatkaraktär, inslag av körsbärspraliner, plommon, choklad och vanilj. Serveras vid cirka 18&deg;C till grillade rätter av lamm- eller nötkött.",
				"volume" : 750,
				"price" : 250,
				"stock" : 30,
				"amountBought" : 3
			},
			{
				"name" : "Amarone",
				"country" : "Italien, Veneto, ",
				"location" : "Selezione Antonio Castagnedi, ",
				"year" : 2013,
				"gluten" : false,
				"alcoholLevel" : 15,
				"img" : "images/amarone-square.png",
				"detailimg": "images/wine-Amarone.jpg",
				"description" : "Kryddig, nyanserad smak med inslag av fat, russin, torkade körsbär, chokladpraliner, arrak, svartpeppar och kanel. Serveras vid cirka 18°C till lagrade hårdostar eller till smakrika rätter av mörkt kött.",
				"volume" : 750,
				"price" : 390,
				"stock" : 30,
				"amountBought" : 5
			},
			{
				"name" : "Biecher",
				"country" : "Frankrike, Alsace, ",
				"location" : "Riesling Res&eacute;rve, ",
				"year" : 2015,
				"gluten" : false,
				"alcoholLevel" : 13,
				"img" : "images/biecher-square.png",
				"detailimg" : "images/wine-Biecher.jpg",
				"description" : "Ungdomlig, fruktig smak med inslag av gröna äpplen, päron, honung och citrus. Serveras vid cirka 8° C till rätter av fisk och skaldjur.",
				"volume" : 750,
				"price" : 150,
				"stock" : 30,
				"amountBought" : 10
			},
			{
				"name" : "Calvet",
				"country" : "Frankrike, Bordeaux, ",
				"location" : "Res&eacute;rve du Ciron, ",
				"year" : 2014,
				"gluten" : false,
				"alcoholLevel" : 13,
				"img" : "images/calvet-square.png",
				"detailimg": "images/wine-Calvet.jpg",
				"description" : "Nyanserad, söt smak med inslag av aprikosmarmelad, honung, saffran, röda äpplen och apelsin. Serveras vid 8-10°C till smakrika desserter eller grönmögelost.",
				"volume" : 375,
				"price" : 160,
				"stock" : 50,
				"amountBought" : 4
			},
			{
				"name" : "Chablis Premier Cru",
				"country" : "Frankrike, Burgundy, ",
				"location" : "Grande Cuv&eacute;e, ",
				"year" : 2014,
				"gluten" : false,
				"alcoholLevel" : 12.5,
				"img": "images/chablis-square.png",
				"detailimg": "images/wine-Chablis.jpg",
				"description" : "Mycket frisk, fruktig, nyanserad smak med inslag av gula äpplen, citrus, mineral, örter och bivax. Serveras vid 8-10°C som aperitif till rätter av fisk och skaldjur.",
				"volume" : 750,
				"price" : 280,
				"stock" : 30,
				"amountBought" : 6
			},
			{
				"name" : "Acusp",
				"country" : "Spanien, Costers del Segre, ",
				"location" : "Castell D'Encus, ",
				"year" : 2014,
				"gluten" : false,
				"alcoholLevel" : 12.5,
				"img" : "images/acusp-square.png",
				"detailimg": "images/acusp.jpg",
				"description" : "Nyanserad, fruktig smak med tydlig fatkaraktär, inslag av mörka bär, fikon, viol, plommon, choklad, kanel och kokos. Serveras vid 18°C till rätter av mörkt kött.",
				"volume" : 750,
				"price" : 400,
				"stock" : 20,
				"amountBought" : 2 
			}
			
				]


