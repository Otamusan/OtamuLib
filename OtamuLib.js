"use strict";

exports.fac = function (k) {
	var j = 1;
	for (var i = 1; i <= k; i++) {
		j *= i;
	}
	return j;
}

exports.per = function (k, i) {
	return fac(k) / fac(k - i);
}

exports.com = function (k, i) {
	return per(k, i) / fac(i);
}

exports.StClass = function (con) {
	this.constructor = con;
	Object.freeze(this)
}
exports.StClass.prototype.makeInstance = function () {
	var instance = this.constructor(new Object);
	instance.__Otamu__ = {}
	instance.__Otamu__.class = this;
	return instance;
}