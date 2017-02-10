"use strict";

var sandwichmaker = require("./sandwichmaker.js");

var condimentsCosts = {
	"ketchup": 				0.25,
	"mustard": 				0.25,
	"honey-mustard": 	0.50,
	"salt": 					0.10,
	"pepper": 				0.10
};

var addCondimentsCost = function(condiments) {
	sandwichmaker.addTopping(condimentsCosts.condiments);
};

var subtractCondimentsCost = function(condiments) {
	sandwichmaker.subtractTopping(condimentsCosts.condiments);
};

module.exports = {
	addCondimentsCost, subtractCondimentsCost
};
