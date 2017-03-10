/**
 * File: loginScript.js
 *
 * This file provides functionality for the login form. It opens the modal form when the 
 * user clicks the login button, provides validation for logging in and allows the user to 
 * close the form.
 *
 * Version 1
 * Authors: Sarah Murphy
 */
 
// Get the element
var modal = document.getElementById('modalLogin');
var loginbtn = document.getElementById('loginbtn');
var closex = document.getElementById('closex');
var cancelbtn = document.getElementById('cancelbtn');
var loginform = document.getElementById('loginform');
var username = document.getElementById('username');
var password = document.getElementById('password');


//Open the modal on click of login button
loginbtn.onclick = function(event) {
	if(event.target == loginbtn) {
		modal.style.display = "block";
	}
}

//Close the modal when user clicks x
closex.onclick = function(event) {
	if(event.target == closex) {
        modal.style.display = "none";
	}
}

//Close the modal when user clicks close
cancelbtn.onclick = function(event) {
	if(event.target == cancelbtn) {
        modal.style.display = "none";
	}
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Validate the user's login details incase required attribute fails
function validateForm() {
	if(username==null || username=="") {
		alert("Please enter your username");
		return false;
	}
	
	if(password==null || password=="") {
		alert("Please enter your password");
		return false;
	}
	
	else {
		var action = "iou_get";
		return true;
	}
}



