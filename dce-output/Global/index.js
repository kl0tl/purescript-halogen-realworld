// Generated by purs version 0.13.8
"use strict";
var $foreign = require("./foreign.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var $$encodeURIComponent = function (s) {
    return $foreign["_encodeURIComponent"](Data_Function["const"](Data_Maybe.Nothing.value), Data_Maybe.Just.create, s);
};
module.exports = {
    "encodeURIComponent": $$encodeURIComponent,
    infinity: $foreign.infinity
};
