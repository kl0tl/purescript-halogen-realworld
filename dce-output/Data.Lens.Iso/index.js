// Generated by purs version 0.13.8
"use strict";
var Data_Profunctor = require("../Data.Profunctor/index.js");
var iso = function (f) {
    return function (g) {
        return function (dictProfunctor) {
            return function (pab) {
                return Data_Profunctor.dimap(dictProfunctor)(f)(g)(pab);
            };
        };
    };
};
module.exports = {
    iso: iso
};
