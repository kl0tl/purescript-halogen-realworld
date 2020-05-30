// Generated by purs version 0.13.8
"use strict";
var Data_Argonaut_Core = require("../Data.Argonaut.Core/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Operator_Bottom = require("../Data.Operator.Bottom/index.js");
var notObjectErrorMessage = "Could not convert JSON to object";
var reportJson = function (dictBottom2) {
    return function (f) {
        return function (json) {
            var v = Data_Argonaut_Core.toObject(json);
            if (v instanceof Data_Maybe.Just) {
                return f(v.value0);
            };
            if (v instanceof Data_Maybe.Nothing) {
                return Data_Operator_Bottom.bottom2(dictBottom2)(notObjectErrorMessage);
            };
            throw new Error("Failed pattern match at Data.Argonaut.Decode.Struct.Utils (line 40, column 3 - line 42, column 45): " + [ v.constructor.name ]);
        };
    };
};
var getMissingFieldErrorMessage = function (fieldName) {
    return "JSON was missing expected field: " + fieldName;
};
var elaborateFailure = function (s) {
    return function (e) {
        var msg = function (m) {
            return "Failed to decode key '" + (s + ("': " + m));
        };
        return Data_Bifunctor.lmap(Data_Either.bifunctorEither)(msg)(e);
    };
};
module.exports = {
    elaborateFailure: elaborateFailure,
    getMissingFieldErrorMessage: getMissingFieldErrorMessage,
    notObjectErrorMessage: notObjectErrorMessage,
    reportJson: reportJson
};