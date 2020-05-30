// Generated by purs version 0.13.6
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Halogen_Query_ChildQuery from "../Halogen.Query.ChildQuery/index.js";
var Invalid = (function () {
    function Invalid() {

    };
    Invalid.value = new Invalid();
    return Invalid;
})();
var Incomplete = (function () {
    function Incomplete() {

    };
    Incomplete.value = new Incomplete();
    return Incomplete;
})();
var Valid = (function () {
    function Valid() {

    };
    Valid.value = new Valid();
    return Valid;
})();
var SubmitReply = (function () {
    function SubmitReply(value0) {
        this.value0 = value0;
    };
    SubmitReply.create = function (value0) {
        return new SubmitReply(value0);
    };
    return SubmitReply;
})();
var SendQuery = (function () {
    function SendQuery(value0) {
        this.value0 = value0;
    };
    SendQuery.create = function (value0) {
        return new SendQuery(value0);
    };
    return SendQuery;
})();
var AsQuery = (function () {
    function AsQuery(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    AsQuery.create = function (value0) {
        return function (value1) {
            return new AsQuery(value0, value1);
        };
    };
    return AsQuery;
})();
var Submitted = (function () {
    function Submitted(value0) {
        this.value0 = value0;
    };
    Submitted.create = function (value0) {
        return new Submitted(value0);
    };
    return Submitted;
})();
var Changed = (function () {
    function Changed(value0) {
        this.value0 = value0;
    };
    Changed.create = function (value0) {
        return new Changed(value0);
    };
    return Changed;
})();
var InternalState = function (x) {
    return x;
};
var newtypeInternalState = new Data_Newtype.Newtype(function (n) {
    return n;
}, InternalState);
var functorQueryF = new Data_Functor.Functor(function (f) {
    return function (m) {
        if (m instanceof SubmitReply) {
            return new SubmitReply(Data_Functor.map(Data_Functor.functorFn)(f)(m.value0));
        };
        if (m instanceof SendQuery) {
            return new SendQuery(Data_Functor.map(Halogen_Query_ChildQuery.functorChildQuery)(Data_Functor.map(Data_Maybe.functorMaybe)(f))(m.value0));
        };
        if (m instanceof AsQuery) {
            return new AsQuery(m.value0, f(m.value1));
        };
        throw new Error("Failed pattern match at Formless.Types.Component (line 89, column 1 - line 89, column 61): " + [ m.constructor.name ]);
    };
});
var _formless = Data_Symbol.SProxy.value;
export {
    SubmitReply,
    SendQuery,
    AsQuery,
    InternalState,
    Invalid,
    Incomplete,
    Valid,
    Submitted,
    Changed,
    _formless,
    functorQueryF,
    newtypeInternalState
};
