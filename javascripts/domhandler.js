"use strict";

var finalSandwichPrice = 0;

var selectedTopping;

var meatChooser = document.getElementById("meat-chooser");

meatChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;

});