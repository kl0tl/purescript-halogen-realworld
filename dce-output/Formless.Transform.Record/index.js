// Generated by purs version 0.13.8
"use strict";
var Data_Newtype = require("../Data.Newtype/index.js");
var Heterogeneous_Mapping = require("../Heterogeneous.Mapping/index.js");
var WrapField = (function () {
    function WrapField() {

    };
    WrapField.value = new WrapField();
    return WrapField;
})();
var UnwrapField = (function () {
    function UnwrapField() {

    };
    UnwrapField.value = new UnwrapField();
    return UnwrapField;
})();
var wrapRecord = function (dictHMap) {
    return Heterogeneous_Mapping.hmap(dictHMap)(WrapField.value);
};
var wrapInputFields = function (dictNewtype) {
    return function (dictHMap) {
        var $2164 = Data_Newtype.wrap(dictNewtype);
        var $2165 = wrapRecord(dictHMap);
        return function ($2166) {
            return $2164($2165($2166));
        };
    };
};
var wrapField = function (dictNewtype) {
    return new Heterogeneous_Mapping.Mapping(function (v) {
        return Data_Newtype.wrap(dictNewtype);
    });
};
var unwrapRecord = function (dictHMap) {
    return Heterogeneous_Mapping.hmap(dictHMap)(UnwrapField.value);
};
var unwrapOutputFields = function (dictNewtype) {
    return function (dictHMap) {
        var $2167 = unwrapRecord(dictHMap);
        var $2168 = Data_Newtype.unwrap(dictNewtype);
        return function ($2169) {
            return $2167($2168($2169));
        };
    };
};
var unwrapField = function (dictNewtype) {
    return new Heterogeneous_Mapping.Mapping(function (v) {
        return Data_Newtype.unwrap(dictNewtype);
    });
};
module.exports = {
    UnwrapField: UnwrapField,
    unwrapRecord: unwrapRecord,
    WrapField: WrapField,
    wrapRecord: wrapRecord,
    unwrapOutputFields: unwrapOutputFields,
    wrapInputFields: wrapInputFields,
    unwrapField: unwrapField,
    wrapField: wrapField
};
