if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5 internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1), 
        fToBind = this, 
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(this instanceof fNOP
                                 ? this
                                 : oThis,
                               aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}
/*creates a new object with a specified prototype*/

if (!Object.create) {
  (function (Object, undefined) {
    "use strict";
    function F() {}

    Object.create = function (o) {
    if (o === undefined) {
      throw new TypeError();
    }
    F.prototype = o;
    return new F();
  };
    
  }(Object));
}

var tkjs = (function() {
	function namespace(string) {
		var object = this;
		var levels = string.split(".");
		for ( var i = 0, l = levels.length; i < l; i++) {
			if (typeof object[levels[i]] == "undefined") {
				object[levels[i]] = {};
			}
			object = object[levels[i]];
		}
		return object;
	}
	
	return {
		namespace : namespace
	};
}());