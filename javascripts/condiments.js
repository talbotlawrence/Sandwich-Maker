"use strict";

let sandwichmaker = require("./sandwichmaker.js");

var condimentsCosts = {
	"ketchup": 			.25,
	"mustard": 			.25,
	"honey-mustard": 	.50,
	"salt": 			.10,
	"pepper": 			.10
};

let addCondimentsCost = function(condiments) {
	sandwichmaker.addTopping(condimentsCosts.condiments);
};

let subtractCondimentsCost = function(condiments) {
	sandwichmaker.subtractTopping(condimentsCosts.condiments);
};

module.exports = {
	addCondimentsCost, subtractCondimentsCost
};