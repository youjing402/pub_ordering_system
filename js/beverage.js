

var beer = [{
				"name": "Passion",
				"gluten": true,
				"alcoholLevel": 3.8,
				"img": "images/A-Passion-For-Gingers.jpg",
				"description": "Fruktig, syrlig smak med inslag av passionsfrukt, citron och ingefära. Serveras vid 8-10°C som aperitif eller som sällskapsdryck.",
				"volume": 330,
				"price": 25,
				"stock": 100,
				"amount-bought": 0
			},
			{
				"name": "Fonteinen",
				"gluten": true,
				"alcoholLevel": 6,
				"img": "images/Fonteinen-Oude-Geuze.jpg",
				"description": "Mycket syrlig, fruktig smak med inslag av halm, grapefrukt, aprikos, örter och citron. Serveras vid 6-8°C som aperitif eller till skaldjursrätter, gärna moules frittes.",
				"volume": 375,
				"price": 59,
				"stock": 70,
				"amount-bought": 0
			},
			{
				"name": "Carlsberg Export",
				"gluten" : true,
				"alcoholLevel" : 5,
				"img": "images/Carlsberg-Export.jpg",
				"description" : "Maltig smak med inslag av knäckebröd, honung och citrusskal. Serveras vid 8-10°C till husmanskost eller som sällskapsdryck.",
				"volume": 500,
				"price": 16,
				"stock": 200,
				"amount-bought": 0
			},
			{
				"name": "Mariestads",
				"gluten": true,
				"alcoholLevel": 0.5,
				"img" : "images/alcohol-free-mariestad.jpg",
				"description": "Maltig, något humlearomatisk smak med inslag av rågbröd, apelsinskal, honung och örter. Serveras vid 8-10°C till husmanskost eller som sällskapsdryck.",
				"volume" : 330,
				"price" : 11,
				"stock" : 50,
				"amount-bought" : 0
				
			},
			{
				"name" : "Mikkeller",
				"gluten": true,
				"alcoholLevel" : 0.3,
				"img" : "images/alcohol-free-Mikkeller.jpg",
				"description" : "Något humlearomatisk smak med tydlig beska, inslag av torkad frukt, nougat, kavring, farinsocker och tallbarr. Serveras vid 8-10°C som sällskapsdryck eller till rätter av lamm- eller nötkött.",
				"volume" : 330,
				"price" : 17,
				"stock" : 50,
				"amount-bought" : 0
			},
			{
				"name" : "Arboga",
				"gluten" : true,
				"alcoholLevel" : 5.6,
				"img" : "images/Arboga.jpg",
				"description" : "Maltig smak med liten sötma, inslag av torkade aprikoser, sirapslimpa, örter och apelsin. Serveras vid 8-10°C till husmanskost eller som sällskapsdryck.",
				"volume" : 500,
				"price" : 15,
				"stock" : 100,
				"amount-bought" : 0
			},
			{
				"name" : "Saxon",
				"gluten" : false,
				"alcoholLevel" : 4.1,
				"img" : "images/glutenfree-Saxon.jpg",
				"description" : "Brödig smak med inslag av honung och apelsin. Serveras vid 6-8°C som sällskapsdryck eller till rätter av fisk och ljust kött.",
				"volume" : 500,
				"price" : 14,
				"stock" : 30,
				"amount-bought" : 0
			}
			
			
			]
			
var wine = [{
				"name" : "Allegrini",
				"gluten" : true,
				"alcoholLevel" : 13.5,
				"img" : "images/wine-Allegrini.jpg",
				"description" : "Mycket fruktig smak med fatkaraktär, inslag av körsbärspraliner, plommon, choklad och vanilj. Serveras vid cirka 18°C till grillade rätter av lamm- eller nötkött.",
				"volume" : 750,
				"price" : 150,
				"stock" : 30,
				"amount-bought" : 0
			},
			{
				"name" : "Amarone",
				"gluten" : true,
				"alcoholLevel" : 15,
				"img" : "images/wine-Amarone.jpg",
				"description" : "Kryddig, nyanserad smak med inslag av fat, russin, torkade körsbär, chokladpraliner, arrak, svartpeppar och kanel. Serveras vid cirka 18°C till lagrade hårdostar eller till smakrika rätter av mörkt kött.",
				"volume" : 750,
				"price" : 260,
				"stock" : 30,
				"amount-bought" : 0
			},
			{
				"name" : "Biecher",
				"gluten" : true,
				"alcoholLevel" : 13,
				"img" : "images/wine-Biecher.jpg",
				"description" : "Ungdomlig, fruktig smak med inslag av gröna äpplen, päron, honung och citrus. Serveras vid cirka 8° C till rätter av fisk och skaldjur.",
				"volume" : 750,
				"price" : 90,
				"stock" : 30,
				"amount-bought" : 0
			},
			{
				"name" : "Calvet",
				"gluten" : true,
				"alcoholLevel" : 13,
				"img" : "images/wine-Calvet.jpg",
				"description" : "Nyanserad, söt smak med inslag av aprikosmarmelad, honung, saffran, röda äpplen och apelsin. Serveras vid 8-10°C till smakrika desserter eller grönmögelost.",
				"volume" : 375,
				"price" : 100,
				"stock" : 50,
				"amount-bought" : 0
			},
			{
				"name" : "Chablis",
				"gluten" : true,
				"alcoholLevel" : 12.5,
				"img": "images/wine-Chablis",
				"description" : "Fruktig, mycket frisk smak med inslag av gula äpplen, päron, örter, smör och citron. Serveras vid cirka 8°C till rätter av fisk eller skaldjur.",
				"volume" : 750,
				"price" : 140,
				"stock" : 30,
				"amount-bought" : 0
			},
			{
				"name" : "Aalto",
				"gluten" : true,
				"alcoholLevel" : 14,
				"img" : "images/wine-Aalto",
				"description" : "Nyanserad, fruktig smak med tydlig fatkaraktär, inslag av mörka bär, fikon, viol, plommon, choklad, kanel och kokos. Serveras vid 18°C till rätter av mörkt kött.",
				"volume" : 750,
				"price" : 350,
				"stock" : 20,
				"amount-bought" : 0 
			}
			
				]