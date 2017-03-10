/**
 * File: detailedCard.js
 *
 * This file allows the detailed item display to open and close
 *
 * Version 1
 * Authors: Sarah Murphy
 */

// Get the elements
var menuModal = document.getElementById('detailedMenuModal');
var span = document.getElementsByClassName("closeModal")[0];

// When the user clicks on x, close the modal
span.onclick = function() {
    menuModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == menuModal) {
        menuModal.style.display = "none";
    }
}