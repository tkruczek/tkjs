/*creates a new object with a specified prototype*/

if (!Object.create) {
	(function(Object, undefined) {
		"use strict";
		function F() {
		}

		Object.create = function(o) {
			if (o === undefined) {
				throw new TypeError();
			}
			F.prototype = o;
			return new F();
		};

	}(Object));
}
