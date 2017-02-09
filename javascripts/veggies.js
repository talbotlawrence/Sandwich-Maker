"use strict";

let sandwichmaker = require("./sandwichmaker.js");

var veggieCosts = {
	"lettuce": 			.25,
	"tomato": 			.75,
	"pickle": 			.85,
	"black-olives": 	1.00,
	"pepper": 			.10
};

let addVeggieCost = function(veggie) {
	sandwichmaker.addTopping(veggieCosts.veggie);
};

let subtractVeggieCost = function(veggie) {
	sandwichmaker.subtractTopping(veggieCosts.veggie);
};

module.exports = {
	addVeggieCost, subtractVeggieCost
};