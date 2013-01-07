//basick library
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
//ooops forgot about this
function newfunc() {
	var a;
b = 10;	
a = 5;
	return a+5;
}
