// Generated by purs version 0.13.8
"use strict";
var Data_Profunctor = require("../Data.Profunctor/index.js");
var Data_Profunctor_Strong = require("../Data.Profunctor.Strong/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var lens$prime = function (to) {
    return function (dictStrong) {
        return function (pab) {
            return Data_Profunctor.dimap(dictStrong.Profunctor0())(to)(function (v) {
                return v.value1(v.value0);
            })(Data_Profunctor_Strong.first(dictStrong)(pab));
        };
    };
};
var lens = function (get) {
    return function (set) {
        return function (dictStrong) {
            return lens$prime(function (s) {
                return new Data_Tuple.Tuple(get(s), function (b) {
                    return set(s)(b);
                });
            })(dictStrong);
        };
    };
};
module.exports = {
    lens: lens,
    "lens'": lens$prime
};