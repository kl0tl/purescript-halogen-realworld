// Generated by purs version 0.13.8
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var MonadZero = function (Alternative1, Monad0) {
    this.Alternative1 = Alternative1;
    this.Monad0 = Monad0;
};
var guard = function (dictMonadZero) {
    return function (v) {
        if (v) {
            return Control_Applicative.pure((dictMonadZero.Alternative1()).Applicative0())(Data_Unit.unit);
        };
        if (!v) {
            return Control_Plus.empty((dictMonadZero.Alternative1()).Plus1());
        };
        throw new Error("Failed pattern match at Control.MonadZero (line 54, column 1 - line 54, column 52): " + [ v.constructor.name ]);
    };
};
module.exports = {
    MonadZero: MonadZero,
    guard: guard
};
