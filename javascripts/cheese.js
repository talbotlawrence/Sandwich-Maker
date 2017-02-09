"use strict";

let sandwichmaker = require("./sandwichmaker.js");

var cheeseCosts = {
	"american": 		.75,
	"chedder": 			.75,
	"colby": 			.50,
	"pepper-jack": 		.85,
	"swiss": 			.50 
};

let addCheeseCost = function(cheese) {
	sandwichmaker.addTopping(cheeseCosts.cheese);
};

let subtractCheeseCost = function(cheese) {
	sandwichmaker.subtractTopping(cheeseCosts.cheese);
};

module.exports = {
	addCheeseCost, subtractCheeseCost
};