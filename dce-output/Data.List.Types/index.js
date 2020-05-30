// Generated by purs version 0.13.8
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Nil = (function () {
    function Nil() {

    };
    Nil.value = new Nil();
    return Nil;
})();
var Cons = (function () {
    function Cons(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Cons.create = function (value0) {
        return function (value1) {
            return new Cons(value0, value1);
        };
    };
    return Cons;
})();
var NonEmptyList = function (x) {
    return x;
};
var listMap = function (f) {
    var chunkedRevMap = function ($copy_chunksAcc) {
        return function ($copy_v) {
            var $tco_var_chunksAcc = $copy_chunksAcc;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(chunksAcc, v) {
                if (v instanceof Cons && (v.value1 instanceof Cons && v.value1.value1 instanceof Cons)) {
                    $tco_var_chunksAcc = new Cons(v, chunksAcc);
                    $copy_v = v.value1.value1.value1;
                    return;
                };
                var unrolledMap = function (v1) {
                    if (v1 instanceof Cons && (v1.value1 instanceof Cons && v1.value1.value1 instanceof Nil)) {
                        return new Cons(f(v1.value0), new Cons(f(v1.value1.value0), Nil.value));
                    };
                    if (v1 instanceof Cons && v1.value1 instanceof Nil) {
                        return new Cons(f(v1.value0), Nil.value);
                    };
                    return Nil.value;
                };
                var reverseUnrolledMap = function ($copy_v1) {
                    return function ($copy_acc) {
                        var $tco_var_v1 = $copy_v1;
                        var $tco_done = false;
                        var $tco_result;
                        function $tco_loop(v1, acc) {
                            if (v1 instanceof Cons && (v1.value0 instanceof Cons && (v1.value0.value1 instanceof Cons && v1.value0.value1.value1 instanceof Cons))) {
                                $tco_var_v1 = v1.value1;
                                $copy_acc = new Cons(f(v1.value0.value0), new Cons(f(v1.value0.value1.value0), new Cons(f(v1.value0.value1.value1.value0), acc)));
                                return;
                            };
                            $tco_done = true;
                            return acc;
                        };
                        while (!$tco_done) {
                            $tco_result = $tco_loop($tco_var_v1, $copy_acc);
                        };
                        return $tco_result;
                    };
                };
                $tco_done = true;
                return reverseUnrolledMap(chunksAcc)(unrolledMap(v));
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_chunksAcc, $copy_v);
            };
            return $tco_result;
        };
    };
    return chunkedRevMap(Nil.value);
};
var functorList = new Data_Functor.Functor(listMap);
var foldableList = new Data_Foldable.Foldable(function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldl(foldableList)(function (acc) {
            var $1353 = Data_Semigroup.append(dictMonoid.Semigroup0())(acc);
            return function ($1354) {
                return $1353(f($1354));
            };
        })(Data_Monoid.mempty(dictMonoid));
    };
}, function (f) {
    var go = function ($copy_b) {
        return function ($copy_v) {
            var $tco_var_b = $copy_b;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(b, v) {
                if (v instanceof Nil) {
                    $tco_done = true;
                    return b;
                };
                if (v instanceof Cons) {
                    $tco_var_b = f(b)(v.value0);
                    $copy_v = v.value1;
                    return;
                };
                throw new Error("Failed pattern match at Data.List.Types (line 109, column 12 - line 111, column 30): " + [ v.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_b, $copy_v);
            };
            return $tco_result;
        };
    };
    return go;
}, function (f) {
    return function (b) {
        var rev = Data_Foldable.foldl(foldableList)(Data_Function.flip(Cons.create))(Nil.value);
        var $1355 = Data_Foldable.foldl(foldableList)(Data_Function.flip(f))(b);
        return function ($1356) {
            return $1355(rev($1356));
        };
    };
});
var semigroupList = new Data_Semigroup.Semigroup(function (xs) {
    return function (ys) {
        return Data_Foldable.foldr(foldableList)(Cons.create)(ys)(xs);
    };
});
var monoidList = new Data_Monoid.Monoid(function ($dollar__unused) {
    return semigroupList;
}, Nil.value);
var applyList = new Control_Apply.Apply(function ($dollar__unused) {
    return functorList;
}, function (v) {
    return function (v1) {
        if (v instanceof Nil) {
            return Nil.value;
        };
        if (v instanceof Cons) {
            return Data_Semigroup.append(semigroupList)(Data_Functor.map(functorList)(v.value0)(v1))(Control_Apply.apply(applyList)(v.value1)(v1));
        };
        throw new Error("Failed pattern match at Data.List.Types (line 155, column 1 - line 157, column 48): " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var applicativeList = new Control_Applicative.Applicative(function ($dollar__unused) {
    return applyList;
}, function (a) {
    return new Cons(a, Nil.value);
});
var altList = new Control_Alt.Alt(function ($dollar__unused) {
    return functorList;
}, Data_Semigroup.append(semigroupList));
var plusList = new Control_Plus.Plus(function ($dollar__unused) {
    return altList;
}, Nil.value);
module.exports = {
    Nil: Nil,
    Cons: Cons,
    NonEmptyList: NonEmptyList,
    semigroupList: semigroupList,
    monoidList: monoidList,
    functorList: functorList,
    foldableList: foldableList,
    applyList: applyList,
    applicativeList: applicativeList,
    altList: altList,
    plusList: plusList
};