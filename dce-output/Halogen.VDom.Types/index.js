// Generated by purs version 0.13.8
"use strict";
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Namespace = function (x) {
    return x;
};
var ElemName = function (x) {
    return x;
};
var Text = (function () {
    function Text(value0) {
        this.value0 = value0;
    };
    Text.create = function (value0) {
        return new Text(value0);
    };
    return Text;
})();
var Elem = (function () {
    function Elem(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    };
    Elem.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return new Elem(value0, value1, value2, value3);
                };
            };
        };
    };
    return Elem;
})();
var Keyed = (function () {
    function Keyed(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    };
    Keyed.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return new Keyed(value0, value1, value2, value3);
                };
            };
        };
    };
    return Keyed;
})();
var Widget = (function () {
    function Widget(value0) {
        this.value0 = value0;
    };
    Widget.create = function (value0) {
        return new Widget(value0);
    };
    return Widget;
})();
var Grafted = (function () {
    function Grafted(value0) {
        this.value0 = value0;
    };
    Grafted.create = function (value0) {
        return new Grafted(value0);
    };
    return Grafted;
})();
var Graft = (function () {
    function Graft(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    Graft.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new Graft(value0, value1, value2);
            };
        };
    };
    return Graft;
})();
var unGraft = function (f) {
    return function ($2692) {
        return f($2692);
    };
};
var graft = Unsafe_Coerce.unsafeCoerce;
var bifunctorGraft = new Data_Bifunctor.Bifunctor(function (f) {
    return function (g) {
        return unGraft(function (v) {
            return graft(new Graft(function ($2693) {
                return f(v.value0($2693));
            }, function ($2694) {
                return g(v.value1($2694));
            }, v.value2));
        });
    };
});
var bifunctorVDom = new Data_Bifunctor.Bifunctor(function (f) {
    return function (g) {
        return function (v) {
            if (v instanceof Text) {
                return new Text(v.value0);
            };
            if (v instanceof Grafted) {
                return new Grafted(Data_Bifunctor.bimap(bifunctorGraft)(f)(g)(v.value0));
            };
            return new Grafted(graft(new Graft(f, g, v)));
        };
    };
});
var runGraft = unGraft(function (v) {
    var go = function (v2) {
        if (v2 instanceof Text) {
            return new Text(v2.value0);
        };
        if (v2 instanceof Elem) {
            return new Elem(v2.value0, v2.value1, v.value0(v2.value2), Data_Functor.map(Data_Functor.functorArray)(go)(v2.value3));
        };
        if (v2 instanceof Keyed) {
            return new Keyed(v2.value0, v2.value1, v.value0(v2.value2), Data_Functor.map(Data_Functor.functorArray)(Data_Functor.map(Data_Tuple.functorTuple)(go))(v2.value3));
        };
        if (v2 instanceof Widget) {
            return new Widget(v.value1(v2.value0));
        };
        if (v2 instanceof Grafted) {
            return new Grafted(Data_Bifunctor.bimap(bifunctorGraft)(v.value0)(v.value1)(v2.value0));
        };
        throw new Error("Failed pattern match at Halogen.VDom.Types (line 86, column 7 - line 86, column 27): " + [ v2.constructor.name ]);
    };
    return go(v.value2);
});
module.exports = {
    Text: Text,
    Elem: Elem,
    Keyed: Keyed,
    Widget: Widget,
    Grafted: Grafted,
    Graft: Graft,
    graft: graft,
    unGraft: unGraft,
    runGraft: runGraft,
    ElemName: ElemName,
    Namespace: Namespace,
    bifunctorVDom: bifunctorVDom,
    bifunctorGraft: bifunctorGraft
};
