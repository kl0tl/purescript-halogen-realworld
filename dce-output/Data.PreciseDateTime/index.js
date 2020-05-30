// Generated by purs version 0.13.6
import * as Control_Alt from "../Control.Alt/index.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Array from "../Data.Array/index.js";
import * as Data_Char_Unicode from "../Data.Char.Unicode/index.js";
import * as Data_Enum from "../Data.Enum/index.js";
import * as Data_Int from "../Data.Int/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_PreciseDate_Component from "../Data.PreciseDate.Component/index.js";
import * as Data_RFC3339String from "../Data.RFC3339String/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_String_CodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data_String_Common from "../Data.String.Common/index.js";
var PreciseDateTime = (function () {
    function PreciseDateTime(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    PreciseDateTime.create = function (value0) {
        return function (value1) {
            return new PreciseDateTime(value0, value1);
        };
    };
    return PreciseDateTime;
})();
var toDateTimeLossy = function (v) {
    return v.value0;
};
var subsecondStringPadding = "000000000";
var padString = function (padding) {
    return function (fn) {
        return function (string) {
            return fn(string)(Data_String_CodeUnits.drop(Data_String_CodeUnits.length(string))(padding));
        };
    };
};
var padSubsecondString = padString(subsecondStringPadding);
var rightPadSubsecondString = padSubsecondString(Data_Semigroup.append(Data_Semigroup.semigroupString));
var parseSubseconds = function (v) {
    var parts = Data_String_Common.split(".")(v);
    return Control_Bind.bind(Data_Maybe.bindMaybe)(Data_Array.index(parts)(1))(function (afterDot) {
        var digits = Data_String_CodeUnits.takeWhile(Data_Char_Unicode.isDigit)(afterDot);
        return Control_Applicative.pure(Data_Maybe.applicativeMaybe)(rightPadSubsecondString(Data_String_CodeUnits.take(9)(digits)));
    });
};
var nanosecond = function (rfcString) {
    var nanoseconds = Control_Bind.composeKleisli(Data_Maybe.bindMaybe)(parseSubseconds)((function () {
        var $1815 = Data_String_CodeUnits.drop(3);
        return function ($1816) {
            return Data_Int.fromString($1815($1816));
        };
    })());
    return Control_Bind.bind(Data_Maybe.bindMaybe)(Control_Alt.alt(Data_Maybe.altMaybe)(nanoseconds(rfcString))(new Data_Maybe.Just(0)))(Data_Enum.toEnum(Data_PreciseDate_Component.boundedEnumNanosecond));
};
var fromRFC3339String = function (rfcString) {
    return Control_Bind.bind(Data_Maybe.bindMaybe)(Data_RFC3339String.toDateTime(rfcString))(function (dateTime) {
        return Control_Bind.bind(Data_Maybe.bindMaybe)(nanosecond(rfcString))(function (ns) {
            return Control_Applicative.pure(Data_Maybe.applicativeMaybe)(new PreciseDateTime(dateTime, ns));
        });
    });
};
export {
    PreciseDateTime,
    fromRFC3339String,
    toDateTimeLossy
};
