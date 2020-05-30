// Generated by purs version 0.13.8
"use strict";
var $foreign = require("./foreign.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Foreign_Object = require("../Foreign.Object/index.js");
var verbJsonType = function (def) {
    return function (f) {
        return function (g) {
            return g(def)(f);
        };
    };
};
var toJsonType = verbJsonType(Data_Maybe.Nothing.value)(Data_Maybe.Just.create);
var jsonEmptyObject = $foreign.fromObject(Foreign_Object.empty);
var isJsonType = verbJsonType(false)(Data_Function["const"](true));
var caseJsonString = function (d) {
    return function (f) {
        return function (j) {
            return $foreign["_caseJson"](Data_Function["const"](d), Data_Function["const"](d), Data_Function["const"](d), f, Data_Function["const"](d), Data_Function["const"](d), j);
        };
    };
};
var caseJsonObject = function (d) {
    return function (f) {
        return function (j) {
            return $foreign["_caseJson"](Data_Function["const"](d), Data_Function["const"](d), Data_Function["const"](d), Data_Function["const"](d), Data_Function["const"](d), f, j);
        };
    };
};
var toObject = toJsonType(caseJsonObject);
var caseJsonNumber = function (d) {
    return function (f) {
        return function (j) {
            return $foreign["_caseJson"](Data_Function["const"](d), Data_Function["const"](d), f, Data_Function["const"](d), Data_Function["const"](d), Data_Function["const"](d), j);
        };
    };
};
var caseJsonNull = function (d) {
    return function (f) {
        return function (j) {
            return $foreign["_caseJson"](f, Data_Function["const"](d), Data_Function["const"](d), Data_Function["const"](d), Data_Function["const"](d), Data_Function["const"](d), j);
        };
    };
};
var isNull = isJsonType(caseJsonNull);
var caseJsonBoolean = function (d) {
    return function (f) {
        return function (j) {
            return $foreign["_caseJson"](Data_Function["const"](d), f, Data_Function["const"](d), Data_Function["const"](d), Data_Function["const"](d), Data_Function["const"](d), j);
        };
    };
};
var caseJsonArray = function (d) {
    return function (f) {
        return function (j) {
            return $foreign["_caseJson"](Data_Function["const"](d), Data_Function["const"](d), Data_Function["const"](d), Data_Function["const"](d), f, Data_Function["const"](d), j);
        };
    };
};
var toArray = toJsonType(caseJsonArray);
module.exports = {
    caseJsonNull: caseJsonNull,
    caseJsonBoolean: caseJsonBoolean,
    caseJsonNumber: caseJsonNumber,
    caseJsonString: caseJsonString,
    caseJsonArray: caseJsonArray,
    caseJsonObject: caseJsonObject,
    isNull: isNull,
    toArray: toArray,
    toObject: toObject,
    jsonEmptyObject: jsonEmptyObject,
    fromString: $foreign.fromString,
    fromArray: $foreign.fromArray,
    fromObject: $foreign.fromObject,
    jsonNull: $foreign.jsonNull,
    stringify: $foreign.stringify
};