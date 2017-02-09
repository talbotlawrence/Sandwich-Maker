"use strict";

let sandwichmaker = require("./sandwichmaker.js");

var meatCosts = {
	"ham": 			2.00,
	"turkey": 		1.50,
	"bacon": 		1.10,
	"roast-beef": 	3.00,
	"hamburger": 	1.50 
};

let addMeatCost = function(meat) {
	sandwichmaker.addTopping(meatCosts.meat);
};

let subtractMeatCost = function(meat) {
	sandwichmaker.subtractTopping(meatCosts.meat);
};

module.exports = {
	addMeatCost, subtractMeatCost
};