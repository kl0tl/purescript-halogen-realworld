// Generated by purs version 0.13.6
import * as $foreign from "./foreign.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
var Killed = (function () {
    function Killed(value0) {
        this.value0 = value0;
    };
    Killed.create = function (value0) {
        return new Killed(value0);
    };
    return Killed;
})();
var Filled = (function () {
    function Filled(value0) {
        this.value0 = value0;
    };
    Filled.create = function (value0) {
        return new Filled(value0);
    };
    return Filled;
})();
var Empty = (function () {
    function Empty() {

    };
    Empty.value = new Empty();
    return Empty;
})();
var $$new = $foreign["_newVar"];
var ffiUtil = {
    left: Data_Either.Left.create,
    right: Data_Either.Right.create,
    nothing: Data_Maybe.Nothing.value,
    just: Data_Maybe.Just.create,
    killed: Killed.create,
    filled: Filled.create,
    empty: Empty.value
};
var kill = function (err) {
    return function (avar) {
        return $foreign["_killVar"](ffiUtil, err, avar);
    };
};
var put = function (value) {
    return function (avar) {
        return function (cb) {
            return $foreign["_putVar"](ffiUtil, value, avar, cb);
        };
    };
};
var take = function (avar) {
    return function (cb) {
        return $foreign["_takeVar"](ffiUtil, avar, cb);
    };
};
export {
    empty
} from "./foreign.js";
export {
    Killed,
    Filled,
    Empty,
    $$new as new,
    take,
    put,
    kill
};
