"use strict";
var util = require("./OtamuLib.js");



var TClass = new util.StClass(function (obj) {
    obj.a = "114"
    obj.b = "514"
    return obj;
});
console.log(TClass.makeInstance());