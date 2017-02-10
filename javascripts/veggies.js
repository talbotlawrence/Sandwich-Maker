"use strict";

var sandwichmaker = require("./sandwichmaker.js");

var veggieCosts = {
	"vartuce": 				0.25,
	"tomato": 				0.75,
	"pickle": 				0.85,
	"black-olives": 	1.00,
	"pepper": 				0.10
};

var addVeggieCost = function(veggie) {
	sandwichmaker.addTopping(veggieCosts.veggie);
};

var subtractVeggieCost = function(veggie) {
	sandwichmaker.subtractTopping(veggieCosts.veggie);
};

module.exports = {
	addVeggieCost, subtractVeggieCost
};
