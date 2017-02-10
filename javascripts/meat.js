"use strict";

var sandwichmaker = require("./sandwichmaker.js");

var meatCosts = {
	"ham": 					2.00,
	"turkey": 			1.50,
	"bacon": 				1.10,
	"roast-beef": 	3.00,
	"hamburger": 		1.50 
};

var addMeatCost = function(meat) {
	sandwichmaker.addTopping(meatCosts.meat);
};

var subtractMeatCost = function(meat) {
	sandwichmaker.subtractTopping(meatCosts.meat);
};

module.exports = {
	addMeatCost, subtractMeatCost
};
