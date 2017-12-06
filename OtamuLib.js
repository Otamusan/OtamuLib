"use strict";
exports={
	fac(k) {
		var j = 1;
		for (var i = 1; i <= k; i++) {
			j *= i;
		}
		return j;
	},

	per(k, i) {
		return fac(k) / fac(k - i);
	},

	com(k, i) {
		return per(k, i) / fac(i);
	},

	StClass(con) {
		this.constructor = con;
		this.prototype = {
			makeInstance(){
				var instance = this.constructor(new Object);
				instance.__Otamu__={}
				instance.__Otamu__.class=this;
				return instance;
			}
		}
	}
}

