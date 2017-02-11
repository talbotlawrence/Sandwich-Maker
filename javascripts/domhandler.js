"use strict";

var sandwichmaker = require("./sandwichmaker.js");
console.log(sandwichmaker);

var finalSandwichPrice = 0;

var myBread = document.getElementById("bread");
myBread.addEventListener("change", function(event) {
	var breadValue = event.target.value;
	if (event.target.checked === true) {
		sandwichmaker.addBreadCost(breadValue);
	} else {
		sandwichmaker.subtractBreadCost(breadValue);
	}
});

var myCheese = document.getElementById("cheese");
myCheese.addEventListener("change", function(event) {
	var cheeseValue = event.target.value;
	if (event.target.checked === true) {
		sandwichmaker.addCheeseCost(cheeseValue);
	} else {
		sandwichmaker.subtractCheeseCost(cheeseValue);
	}
});

var myCondiments = document.getElementById("condiments");
myCondiments.addEventListener("change", function(event) {
	var condimentsValue = event.target.value;
	if (event.target.checked === true) {
		sandwichmaker.addCondimentsCost(condimentsValue);
	} else {
		sandwichmaker.subtractCondimentsCost(condimentsValue);
	}
});

var myMeat = document.getElementById("meat");
myMeat.addEventListener("change", function(event) {
	var meatValue = event.target.value;
	if (event.target.checked === true) {
		sandwichmaker.addMeatCost(meatValue);
	} else {
		sandwichmaker.subtractMeatCost(meatValue);
	}
});

var myVeggies = document.getElementById("veggies");
myVeggies.addEventListener("change", function(event) {
	var veggieValue = event.target.value;
	if (event.target.checked === true) {
		sandwichmaker.addVeggiesCost(veggieValue);
	} else {
		sandwichmaker.subtractVeggiesCost(veggieValue);
	}
});

var mySubmit = document.getElementById("submitButton");
mySubmit.addEventListener("click", function() {
	console.log("submit button");
	// sandwichmaker.getTotalCost();
});
