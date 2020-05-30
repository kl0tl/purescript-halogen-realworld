// Generated by purs version 0.13.8
"use strict";
var Data_Argonaut_Decode_Struct_Tolerant_DecodeJson = require("../Data.Argonaut.Decode.Struct.Tolerant.DecodeJson/index.js");
var Data_Argonaut_Decode_Struct_Utils = require("../Data.Argonaut.Decode.Struct.Utils/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Show = require("../Data.Show/index.js");
var Foreign_Object = require("../Foreign.Object/index.js");
var getField = function (dictDecodeJson) {
    return function (o) {
        return function (s) {
            return Data_Maybe.maybe(Data_Either.Left.create("Expected field " + Data_Show.show(Data_Show.showString)(s)))((function () {
                var $1008 = Data_Argonaut_Decode_Struct_Utils.elaborateFailure(s);
                var $1009 = Data_Argonaut_Decode_Struct_Tolerant_DecodeJson.decodeJson(dictDecodeJson);
                return function ($1010) {
                    return $1008($1009($1010));
                };
            })())(Foreign_Object.lookup(s)(o));
        };
    };
};
module.exports = {
    getField: getField
};
