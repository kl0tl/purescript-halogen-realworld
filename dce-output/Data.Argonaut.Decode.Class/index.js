// Generated by purs version 0.13.6
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Argonaut_Core from "../Data.Argonaut.Core/index.js";
import * as Data_Bifunctor from "../Data.Bifunctor/index.js";
import * as Data_Boolean from "../Data.Boolean/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Int from "../Data.Int/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Traversable from "../Data.Traversable/index.js";
import * as Data_TraversableWithIndex from "../Data.TraversableWithIndex/index.js";
import * as Foreign_Object from "../Foreign.Object/index.js";
var DecodeJson = function (decodeJson) {
    this.decodeJson = decodeJson;
};
var decodeJsonString = new DecodeJson(Data_Argonaut_Core.caseJsonString(new Data_Either.Left("Value is not a String"))(Data_Either.Right.create));
var decodeJsonNumber = new DecodeJson(Data_Argonaut_Core.caseJsonNumber(new Data_Either.Left("Value is not a Number"))(Data_Either.Right.create));
var decodeJsonJson = new DecodeJson(Data_Either.Right.create);
var decodeJsonBoolean = new DecodeJson(Data_Argonaut_Core.caseJsonBoolean(new Data_Either.Left("Value is not a Boolean"))(Data_Either.Right.create));
var decodeJson = function (dict) {
    return dict.decodeJson;
};
var decodeJsonInt = new DecodeJson(Control_Bind.composeKleisliFlipped(Data_Either.bindEither)((function () {
    var $986 = Data_Maybe.maybe(new Data_Either.Left("Value is not an integer"))(Data_Either.Right.create);
    return function ($987) {
        return $986(Data_Int.fromNumber($987));
    };
})())(decodeJson(decodeJsonNumber)));
var decodeJsonMaybe = function (dictDecodeJson) {
    return new DecodeJson(function (j) {
        if (Data_Argonaut_Core.isNull(j)) {
            return Control_Applicative.pure(Data_Either.applicativeEither)(Data_Maybe.Nothing.value);
        };
        if (Data_Boolean.otherwise) {
            return Data_Functor.map(Data_Either.functorEither)(Data_Maybe.Just.create)(decodeJson(dictDecodeJson)(j));
        };
        throw new Error("Failed pattern match at Data.Argonaut.Decode.Class (line 38, column 1 - line 41, column 40): " + [ j.constructor.name ]);
    });
};
var decodeJObject = (function () {
    var $988 = Data_Maybe.maybe(new Data_Either.Left("Value is not an Object"))(Data_Either.Right.create);
    return function ($989) {
        return $988(Data_Argonaut_Core.toObject($989));
    };
})();
var decodeJArray = (function () {
    var $990 = Data_Maybe.maybe(new Data_Either.Left("Value is not an Array"))(Data_Either.Right.create);
    return function ($991) {
        return $990(Data_Argonaut_Core.toArray($991));
    };
})();
var decodeForeignObject = function (dictDecodeJson) {
    return new DecodeJson((function () {
        var $992 = Data_Bifunctor.lmap(Data_Either.bifunctorEither)(function (v) {
            return "Couldn't decode ForeignObject: " + v;
        });
        var $993 = Control_Bind.composeKleisliFlipped(Data_Either.bindEither)(Data_Traversable.traverse(Foreign_Object.traversableObject)(Data_Either.applicativeEither)(decodeJson(dictDecodeJson)))(decodeJObject);
        return function ($994) {
            return $992($993($994));
        };
    })());
};
var decodeArray = function (dictDecodeJson) {
    return new DecodeJson((function () {
        var msg = function (i) {
            return function (m) {
                return "Failed at index " + (Data_Show.show(Data_Show.showInt)(i) + ("): " + m));
            };
        };
        var f = function (i) {
            var $995 = Data_Bifunctor.lmap(Data_Either.bifunctorEither)(msg(i));
            var $996 = decodeJson(dictDecodeJson);
            return function ($997) {
                return $995($996($997));
            };
        };
        var $998 = Data_Bifunctor.lmap(Data_Either.bifunctorEither)(function (v) {
            return "Couldn't decode Array (" + v;
        });
        var $999 = Control_Bind.composeKleisliFlipped(Data_Either.bindEither)(Data_TraversableWithIndex.traverseWithIndex(Data_TraversableWithIndex.traversableWithIndexArray)(Data_Either.applicativeEither)(f))(decodeJArray);
        return function ($1000) {
            return $998($999($1000));
        };
    })());
};
export {
    decodeJson,
    DecodeJson,
    decodeJArray,
    decodeJObject,
    decodeJsonMaybe,
    decodeJsonBoolean,
    decodeJsonNumber,
    decodeJsonInt,
    decodeJsonString,
    decodeJsonJson,
    decodeForeignObject,
    decodeArray
};
