"use strict";
var util = require("./OtamuLib.js");
var stclass = util.StClass;
var testclass = new stclass(function(obj){
    obj.a="114"
    obj.b="514"
    return obj;
});
console.log(testclass.makeInstance());