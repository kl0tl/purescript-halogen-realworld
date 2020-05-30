// Generated by purs version 0.13.8
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Validation = function (x) {
    return x;
};
var newtypeValidation = new Data_Newtype.Newtype(function (n) {
    return n;
}, Validation);
var runValidation = function (dictMonad) {
    return Data_Newtype.unwrap(newtypeValidation);
};
var semigroupoidValidation = function (dictMonad) {
    return new Control_Semigroupoid.Semigroupoid(function (v1) {
        return function (v0) {
            return function (form) {
                return function (i) {
                    return Control_Bind.bind(dictMonad.Bind1())(Data_Newtype.unwrap(newtypeValidation)(v0)(form)(i))(function (eo) {
                        return Data_Either.either((function () {
                            var $2181 = Control_Applicative.pure(dictMonad.Applicative0());
                            return function ($2182) {
                                return $2181(Data_Either.Left.create($2182));
                            };
                        })())(Data_Newtype.unwrap(newtypeValidation)(v1)(form))(eo);
                    });
                };
            };
        };
    });
};
var hoistFn_ = function (dictMonad) {
    return function (f) {
        return Validation(Data_Function["const"]((function () {
            var $2183 = Control_Applicative.pure(dictMonad.Applicative0());
            var $2184 = Control_Applicative.pure(Data_Either.applicativeEither);
            return function ($2185) {
                return $2183($2184(f($2185)));
            };
        })()));
    };
};
var hoistFnE_ = function (dictMonad) {
    return function (f) {
        return Validation(Data_Function["const"]((function () {
            var $2186 = Control_Applicative.pure(dictMonad.Applicative0());
            return function ($2187) {
                return $2186(f($2187));
            };
        })()));
    };
};
module.exports = {
    Validation: Validation,
    runValidation: runValidation,
    hoistFn_: hoistFn_,
    hoistFnE_: hoistFnE_,
    newtypeValidation: newtypeValidation,
    semigroupoidValidation: semigroupoidValidation
};