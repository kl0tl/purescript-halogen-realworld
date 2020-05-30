// Generated by purs version 0.13.8
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Category = require("../Control.Category/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Profunctor = require("../Data.Profunctor/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_String_Common = require("../Data.String.Common/index.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Record = require("../Record/index.js");
var Routing_Duplex_Parser = require("../Routing.Duplex.Parser/index.js");
var Routing_Duplex_Printer = require("../Routing.Duplex.Printer/index.js");
var Type_Data_RowList = require("../Type.Data.RowList/index.js");
var RouteDuplex = (function () {
    function RouteDuplex(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    RouteDuplex.create = function (value0) {
        return function (value1) {
            return new RouteDuplex(value0, value1);
        };
    };
    return RouteDuplex;
})();
var RouteDuplexParams = function (params) {
    this.params = params;
};
var RouteDuplexBuildParams = function (buildParams) {
    this.buildParams = buildParams;
};
var suffix = function (v) {
    return function (s) {
        return new RouteDuplex(function (a) {
            return Data_Semigroup.append(Routing_Duplex_Printer.semigroupRoutePrinter)(v.value0(a))(Routing_Duplex_Printer.put(s));
        }, Control_Apply.applyFirst(Routing_Duplex_Parser.applyRouteParser)(v.value1)(Routing_Duplex_Parser.prefix(s)(Control_Applicative.pure(Routing_Duplex_Parser.applicativeRouteParser)(Data_Unit.unit))));
    };
};
var string = Control_Category.identity(Control_Category.categoryFn);
var segment = new RouteDuplex(Routing_Duplex_Printer.put, Routing_Duplex_Parser.take);
var record = new RouteDuplex(Data_Monoid.mempty(Data_Monoid.monoidFn(Routing_Duplex_Printer.monoidRoutePRinter)), Control_Applicative.pure(Routing_Duplex_Parser.applicativeRouteParser)({}));
var prop = function (dictIsSymbol) {
    return function (dictCons) {
        return function (dictCons1) {
            return function (dictLacks) {
                return function (sym) {
                    return function (v) {
                        return function (v1) {
                            return new RouteDuplex(function (r) {
                                return Data_Semigroup.append(Routing_Duplex_Printer.semigroupRoutePrinter)(v1.value0(r))(v.value0(Record.get(dictIsSymbol)()(sym)(r)));
                            }, Control_Apply.apply(Routing_Duplex_Parser.applyRouteParser)(Data_Functor.map(Routing_Duplex_Parser.functorRouteParser)(Data_Function.flip(Record.insert(dictIsSymbol)()()(sym)))(v1.value1))(v.value1));
                        };
                    };
                };
            };
        };
    };
};
var profunctorRouteDuplex = new Data_Profunctor.Profunctor(function (f) {
    return function (g) {
        return function (v) {
            return new RouteDuplex(function ($2753) {
                return v.value0(f($2753));
            }, Data_Functor.map(Routing_Duplex_Parser.functorRouteParser)(g)(v.value1));
        };
    };
});
var print = function (v) {
    return function ($2754) {
        return Routing_Duplex_Printer.run(v.value0($2754));
    };
};
var prefix = function (s) {
    return function (v) {
        return new RouteDuplex(function (a) {
            return Data_Semigroup.append(Routing_Duplex_Printer.semigroupRoutePrinter)(Routing_Duplex_Printer.put(s))(v.value0(a));
        }, Routing_Duplex_Parser.prefix(s)(v.value1));
    };
};
var path = (function () {
    var $2755 = Data_Function.flip(Data_Foldable.foldr(Data_Foldable.foldableArray)(prefix));
    var $2756 = Data_String_Common.split("/");
    return function ($2757) {
        return $2755($2756($2757));
    };
})();
var root = path("");
var parse = function (v) {
    return Routing_Duplex_Parser.run(v.value1);
};
var params = function (dict) {
    return dict.params;
};
var param = function (p) {
    return new RouteDuplex(Routing_Duplex_Printer.param(p), Routing_Duplex_Parser.param(p));
};
var optional = function (v) {
    return new RouteDuplex(Data_Foldable.foldMap(Data_Foldable.foldableMaybe)(Routing_Duplex_Printer.monoidRoutePRinter)(v.value0), Routing_Duplex_Parser.optional(v.value1));
};
var functorRouteDuplex = new Data_Functor.Functor(function (f) {
    return function (m) {
        return new RouteDuplex(m.value0, Data_Functor.map(Routing_Duplex_Parser.functorRouteParser)(f)(m.value1));
    };
});
var end = function (v) {
    return new RouteDuplex(v.value0, Control_Apply.applyFirst(Routing_Duplex_Parser.applyRouteParser)(v.value1)(Routing_Duplex_Parser.end));
};
var buildParamsNil = new RouteDuplexBuildParams(function (v) {
    return function (r) {
        return Control_Category.identity(Control_Category.categoryFn);
    };
});
var buildParams = function (dict) {
    return dict.buildParams;
};
var buildParamsCons = function (dictIsSymbol) {
    return function (dictCons) {
        return function (dictCons1) {
            return function (dictCons2) {
                return function (dictLacks) {
                    return function (dictRouteDuplexBuildParams) {
                        return new RouteDuplexBuildParams(function (v) {
                            return function (r) {
                                return function (prev) {
                                    return buildParams(dictRouteDuplexBuildParams)(Type_Data_RowList.RLProxy.value)(r)(prop(dictIsSymbol)()()()(Data_Symbol.SProxy.value)(Record.get(dictIsSymbol)()(Data_Symbol.SProxy.value)(r)(param(Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value))))(prev));
                                };
                            };
                        });
                    };
                };
            };
        };
    };
};
var routeDuplexParams = function (dictRowToList) {
    return function (dictRouteDuplexBuildParams) {
        return new RouteDuplexParams(function (r) {
            return buildParams(dictRouteDuplexBuildParams)(Type_Data_RowList.RLProxy.value)(r)(record);
        });
    };
};
var as = function (f) {
    return function (g) {
        return function (v) {
            return new RouteDuplex(function ($2758) {
                return v.value0(f($2758));
            }, Routing_Duplex_Parser.as(Control_Category.identity(Control_Category.categoryFn))(g)(v.value1));
        };
    };
};
var $$int = as(Data_Show.show(Data_Show.showInt))(Routing_Duplex_Parser["int"]);
var applyRouteDuplex = new Control_Apply.Apply(function ($dollar__unused) {
    return functorRouteDuplex;
}, function (v) {
    return function (v1) {
        return new RouteDuplex(Control_Apply.apply(Control_Apply.applyFn)(Data_Functor.map(Data_Functor.functorFn)(Data_Semigroup.append(Routing_Duplex_Printer.semigroupRoutePrinter))(v.value0))(v1.value0), Control_Apply.apply(Routing_Duplex_Parser.applyRouteParser)(v.value1)(v1.value1));
    };
});
var applicativeRouteDuplex = new Control_Applicative.Applicative(function ($dollar__unused) {
    return applyRouteDuplex;
}, (function () {
    var $2759 = RouteDuplex.create(Data_Function["const"](Data_Monoid.mempty(Routing_Duplex_Printer.monoidRoutePRinter)));
    var $2760 = Control_Applicative.pure(Routing_Duplex_Parser.applicativeRouteParser);
    return function ($2761) {
        return $2759($2760($2761));
    };
})());
module.exports = {
    RouteDuplex: RouteDuplex,
    parse: parse,
    print: print,
    prefix: prefix,
    suffix: suffix,
    path: path,
    root: root,
    end: end,
    segment: segment,
    param: param,
    optional: optional,
    as: as,
    "int": $$int,
    string: string,
    record: record,
    prop: prop,
    params: params,
    buildParams: buildParams,
    RouteDuplexParams: RouteDuplexParams,
    RouteDuplexBuildParams: RouteDuplexBuildParams,
    functorRouteDuplex: functorRouteDuplex,
    applyRouteDuplex: applyRouteDuplex,
    applicativeRouteDuplex: applicativeRouteDuplex,
    profunctorRouteDuplex: profunctorRouteDuplex,
    routeDuplexParams: routeDuplexParams,
    buildParamsCons: buildParamsCons,
    buildParamsNil: buildParamsNil
};