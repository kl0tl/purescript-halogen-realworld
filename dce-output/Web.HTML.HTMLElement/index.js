// Generated by purs version 0.13.8
"use strict";
var $foreign = require("./foreign.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var toNode = Unsafe_Coerce.unsafeCoerce;
var fromElement = function (x) {
    return $foreign["_read"](Data_Maybe.Nothing.value, Data_Maybe.Just.create, x);
};
module.exports = {
    fromElement: fromElement,
    toNode: toNode
};
