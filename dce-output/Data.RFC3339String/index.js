// Generated by purs version 0.13.8
"use strict";
var Data_JSDate = require("../Data.JSDate/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Effect_Unsafe = require("../Effect.Unsafe/index.js");
var RFC3339String = function (x) {
    return x;
};
var newtypeRFC3339String = new Data_Newtype.Newtype(function (n) {
    return n;
}, RFC3339String);
var toDateTime = (function () {
    var unsafeParse = function ($1825) {
        return Effect_Unsafe.unsafePerformEffect(Data_JSDate.parse($1825));
    };
    var $1826 = Data_Newtype.unwrap(newtypeRFC3339String);
    return function ($1827) {
        return Data_JSDate.toDateTime(unsafeParse($1826($1827)));
    };
})();
module.exports = {
    RFC3339String: RFC3339String,
    toDateTime: toDateTime,
    newtypeRFC3339String: newtypeRFC3339String
};
