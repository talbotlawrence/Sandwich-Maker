"use strict";

var totalPrice = 0;

var addTopping = function(toppingPrice) {
  totalPrice += toppingPrice;
  return totalPrice;
};

var subtractTopping = function(toppingPrice) {
  totalPrice -= toppingPrice;
  return totalPrice;
};

var getTotalCost = function() {
  var showCost = document.getElementById("cost").innerHTML;
  showCost = totalPrice.toFixed(2);
};

module.exports = {
	addTopping, subtractTopping, getTotalPrice
};