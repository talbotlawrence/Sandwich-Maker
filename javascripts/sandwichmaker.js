"use strict";

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
  var showCost = document.getElementById("cost").innerHTML;
	showCost.appendChild(totalCost);
	// return showCost;
};

module.exports = {
	addTopping, subtractTopping, getTotalCost
};
