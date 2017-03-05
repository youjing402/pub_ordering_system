// Get the element
var add = document.getElementById('addToCartButton');
var addplus = document.getElementsByClassName('plussign');
var a1 = document.getElementById('a1');
var sq1 = document.getElementById('square1');
var plus1 = document.getElementById('plus1');
var minus1 = document.getElementById('minus1');
var order = 0;

//Add element to cart from detailed view
add.onclick = function(event) {
	if(event.target == add) {
		if(order < 10) {
			order += 1;
			sq1.style.display = 'block';
			a1.innerHTML = order;
			menuModal.style.display = "none";
			//TODO send json details about the beer to cart
		}
		else {
			alert("Maximum drink limit had been reached");
			menuModal.style.display = "none";
		}
	}
}

//Add element to cart from card view
function addElementToCart(){
	for(var i = 0, length = addplus.length; i < length; i++) {
		addplus[i].onclick = function(event) {
			if(order < 10) {
				order += 1;
				sq1.style.display = 'block';
				a1.innerHTML = order;
				//TODO send json details about the beer to cart
			}
			else {
				alert("Maximum drink limit had been reached");
			}
		}
	}
}

addElementToCart();
/*Add another of this item to the cart. 
/*Limit is 10. */
plus1.onclick = function(event) {
	if(event.target == plus1 && order < 10) {
		order += 1;
		a1.innerHTML = order;
	}
	else if(event.target == plus1 && order >= 10) {
		alert("Maximum drink limit had been reached");
	}
}

/*Remove one of this item from the cart. 
/*If number goes below 0, the drink is removed from view*/
minus1.onclick = function(event) {
	if(event.target == minus1 && order > 0) {
		order -= 1;
		a1.innerHTML = order;
	}
	
	else if(event.target == minus1 && order == 0) {
		sq1.style.display = 'none';
	}
}

//TODO
//onclick add new square for different beers;
//If same beer ordered, add to above square1
//If new drink, display square 2 and add to that, etc.
