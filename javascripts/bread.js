"use strict";

var sandwichmaker = require("./sandwichmaker.js");

var breadCosts = {
	"sourdough": 				2.00,
	"rye": 							1.50,
	"bagel": 						3.10,
	"englishmuffin": 		1.00,
	"ciabatta": 				3.50 
};

var addBreadCost = function(bread) {
	sandwichmaker.addTopping(breadCosts.bread);
};

var subtractBreadCost = function(bread) {
	sandwichmaker.subtractTopping(breadCosts.bread);
};

module.exports = {
	addBreadCost, subtractBreadCost
};
