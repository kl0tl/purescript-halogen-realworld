// Generated by purs version 0.13.8
"use strict";
var $foreign = require("./foreign.js");
var Data_Array = require("../Data.Array/index.js");
var Data_Bounded = require("../Data.Bounded/index.js");
var Data_Enum = require("../Data.Enum/index.js");
var Data_EuclideanRing = require("../Data.EuclideanRing/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_String_CodeUnits = require("../Data.String.CodeUnits/index.js");
var Data_String_Unsafe = require("../Data.String.Unsafe/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable = require("../Data.Unfoldable/index.js");
var CodePoint = function (x) {
    return x;
};
var unsurrogate = function (lead) {
    return function (trail) {
        return (((lead - 55296 | 0) * 1024 | 0) + (trail - 56320 | 0) | 0) + 65536 | 0;
    };
};
var isTrail = function (cu) {
    return 56320 <= cu && cu <= 57343;
};
var isLead = function (cu) {
    return 55296 <= cu && cu <= 56319;
};
var uncons = function (s) {
    var v = Data_String_CodeUnits.length(s);
    if (v === 0) {
        return Data_Maybe.Nothing.value;
    };
    if (v === 1) {
        return new Data_Maybe.Just({
            head: Data_Enum.fromEnum(Data_Enum.boundedEnumChar)(Data_String_Unsafe.charAt(0)(s)),
            tail: ""
        });
    };
    var cu1 = Data_Enum.fromEnum(Data_Enum.boundedEnumChar)(Data_String_Unsafe.charAt(1)(s));
    var cu0 = Data_Enum.fromEnum(Data_Enum.boundedEnumChar)(Data_String_Unsafe.charAt(0)(s));
    var $1838 = isLead(cu0) && isTrail(cu1);
    if ($1838) {
        return new Data_Maybe.Just({
            head: unsurrogate(cu0)(cu1),
            tail: Data_String_CodeUnits.drop(2)(s)
        });
    };
    return new Data_Maybe.Just({
        head: cu0,
        tail: Data_String_CodeUnits.drop(1)(s)
    });
};
var unconsButWithTuple = function (s) {
    return Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
        return new Data_Tuple.Tuple(v.head, v.tail);
    })(uncons(s));
};
var toCodePointArrayFallback = function (s) {
    return Data_Unfoldable.unfoldr(Data_Unfoldable.unfoldableArray)(unconsButWithTuple)(s);
};
var unsafeCodePointAt0Fallback = function (s) {
    var cu0 = Data_Enum.fromEnum(Data_Enum.boundedEnumChar)(Data_String_Unsafe.charAt(0)(s));
    var $1842 = isLead(cu0) && Data_String_CodeUnits.length(s) > 1;
    if ($1842) {
        var cu1 = Data_Enum.fromEnum(Data_Enum.boundedEnumChar)(Data_String_Unsafe.charAt(1)(s));
        var $1843 = isTrail(cu1);
        if ($1843) {
            return unsurrogate(cu0)(cu1);
        };
        return cu0;
    };
    return cu0;
};
var unsafeCodePointAt0 = $foreign["_unsafeCodePointAt0"](unsafeCodePointAt0Fallback);
var toCodePointArray = $foreign["_toCodePointArray"](toCodePointArrayFallback)(unsafeCodePointAt0);
var length = function ($1851) {
    return Data_Array.length(toCodePointArray($1851));
};
var indexOf = function (p) {
    return function (s) {
        return Data_Functor.map(Data_Maybe.functorMaybe)(function (i) {
            return length(Data_String_CodeUnits.take(i)(s));
        })(Data_String_CodeUnits.indexOf(p)(s));
    };
};
var fromCharCode = (function () {
    var $1852 = Data_Enum.toEnumWithDefaults(Data_Enum.boundedEnumChar)(Data_Bounded.bottom(Data_Bounded.boundedChar))(Data_Bounded.top(Data_Bounded.boundedChar));
    return function ($1853) {
        return Data_String_CodeUnits.singleton($1852($1853));
    };
})();
var singletonFallback = function (v) {
    if (v <= 65535) {
        return fromCharCode(v);
    };
    var lead = Data_EuclideanRing.div(Data_EuclideanRing.euclideanRingInt)(v - 65536 | 0)(1024) + 55296 | 0;
    var trail = Data_EuclideanRing.mod(Data_EuclideanRing.euclideanRingInt)(v - 65536 | 0)(1024) + 56320 | 0;
    return fromCharCode(lead) + fromCharCode(trail);
};
var singleton = $foreign["_singleton"](singletonFallback);
var takeFallback = function (n) {
    return function (v) {
        if (n < 1) {
            return "";
        };
        var v1 = uncons(v);
        if (v1 instanceof Data_Maybe.Just) {
            return singleton(v1.value0.head) + takeFallback(n - 1 | 0)(v1.value0.tail);
        };
        return v;
    };
};
var take = $foreign["_take"](takeFallback);
var drop = function (n) {
    return function (s) {
        return Data_String_CodeUnits.drop(Data_String_CodeUnits.length(take(n)(s)))(s);
    };
};
module.exports = {
    singleton: singleton,
    toCodePointArray: toCodePointArray,
    uncons: uncons,
    length: length,
    indexOf: indexOf,
    take: take,
    drop: drop
};