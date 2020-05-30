// Generated by purs version 0.13.6
import * as Data_JSDate from "../Data.JSDate/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Effect_Unsafe from "../Effect.Unsafe/index.js";
var RFC3339String = function (x) {
    return x;
};
var newtypeRFC3339String = new Data_Newtype.Newtype(function (n) {
    return n;
}, RFC3339String);
var toDateTime = (function () {
    var unsafeParse = function ($1827) {
        return Effect_Unsafe.unsafePerformEffect(Data_JSDate.parse($1827));
    };
    var $1828 = Data_Newtype.unwrap(newtypeRFC3339String);
    return function ($1829) {
        return Data_JSDate.toDateTime(unsafeParse($1828($1829)));
    };
})();
export {
    RFC3339String,
    toDateTime,
    newtypeRFC3339String
};
