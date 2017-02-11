"use strict";
console.log("Hits away");

var totalCost = 0;

var addTopping = function(toppingCost) {
  totalCost += toppingCost;
  return totalCost;
};

var subtractTopping = function(toppingCost) {
  totalCost -= toppingCost;
  return totalCost;
};

var getTotalCost = function() {
  var showCost = document.getElementById("cost");
	showCost.innerHTML = `
		<h2>${totalCost}</h2>
		`;
};

module.exports = {
	addTopping, subtractTopping, getTotalCost
};
