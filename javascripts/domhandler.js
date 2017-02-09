"use strict";

let sandwichmaker = require("./sandwichmaker.js");
var finalSandwichPrice = 0;

// meatChooser.addEventListener("change", function(event) {
//   selectedTopping = event.target.value;

// });

let myBread = document.getElementById("bread");
myBread.addEventListener("change", function(event) {
	if (checked) {
		addBreadCost();
	} else {
		subtractBreadCost();
	}
});

let myCheese = document.getElementById("cheese");
myCheese.addEventListener("change", function(event) {
	if (checked) {
		addCheeseCost();
	} else {
		subtractCheeseCost();
	}
});

let myCondiments = document.getElementById("condiments");
myCondiments.addEventListener("change", function(event) {
	if (checked) {
		addCondimentsCost();
	} else {
		subtractCondimentsCost();
	}
});

let myMeat = document.getElementById("meat");
myMeat.addEventListener("change", function(event) {
	if (checked) {
		addMeatCost();
	} else {
		subtractMeatCost();
	}
});

let myVeggies = document.getElementById("veggies");
myVeggies.addEventListener("change", function(event) {
	if (checked) {
		addVeggiesCost();
	} else {
		subtractVeggiesCost();
	}
});


let mySubmit = document.getElementById("submit");
mySubmit.addEventListener("click", showSandwichCost);

let showSandwichCost = function() {
	sandwichmaker.getTotalCost();
}; 

/////////////////////////////////////////////////////////////////////////////////////
// var selectedTopping;