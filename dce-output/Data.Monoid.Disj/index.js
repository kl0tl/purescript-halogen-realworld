// Generated by purs version 0.13.8
"use strict";
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Disj = function (x) {
    return x;
};
var semigroupDisj = function (dictHeytingAlgebra) {
    return new Data_Semigroup.Semigroup(function (v) {
        return function (v1) {
            return Data_HeytingAlgebra.disj(dictHeytingAlgebra)(v)(v1);
        };
    });
};
var monoidDisj = function (dictHeytingAlgebra) {
    return new Data_Monoid.Monoid(function ($dollar__unused) {
        return semigroupDisj(dictHeytingAlgebra);
    }, Data_HeytingAlgebra.ff(dictHeytingAlgebra));
};
module.exports = {
    Disj: Disj,
    semigroupDisj: semigroupDisj,
    monoidDisj: monoidDisj
};
