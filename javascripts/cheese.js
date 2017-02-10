"use strict";

var sandwichmaker = require("./sandwichmaker.js");

var cheeseCosts = {
	"american": 		0.75,
	"chedder": 			0.75,
	"colby": 				0.50,
	"pepper-jack": 	0.85,
	"swiss": 				0.50 
};

var addCheeseCost = function(cheese) {
	sandwichmaker.addTopping(cheeseCosts.cheese);
};

var subtractCheeseCost = function(cheese) {
	sandwichmaker.subtractTopping(cheeseCosts.cheese);
};

module.exports = {
	addCheeseCost, subtractCheeseCost
};
