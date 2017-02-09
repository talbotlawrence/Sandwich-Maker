"use strict";

let sandwichmaker = require("./sandwichmaker.js");

var breadCosts = {
	"sourdough": 		2.00,
	"rye": 				1.50,
	"bagel": 			3.10,
	"english-muffin": 	1.00,
	"ciabatta": 		3.50 
};

let addBreadCost = function(bread) {
	sandwichmaker.addTopping(breadCosts.bread);
};

let subtractBreadCost = function(bread) {
	sandwichmaker.subtractTopping(breadCosts.bread);
};

module.exports = {
	addBreadCost, subtractBreadCost
};