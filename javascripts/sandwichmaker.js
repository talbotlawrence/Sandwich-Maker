"use strict";

var SandwichMaker = (function() {
  var totalPrice = 0;

  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
    }
  };
})();
//////////////////////////////////////////////////////////////////////////
var getter = function(){
	console.log("", );
	return ;
};

var setter = function(who){
	keyplayers.push(who);
	console.log("", );
};

module.exports = {
	getter, setter
};