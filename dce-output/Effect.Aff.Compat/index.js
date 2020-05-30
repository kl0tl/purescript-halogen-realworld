// Generated by purs version 0.13.6
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect_Aff from "../Effect.Aff/index.js";
var EffectFnCanceler = function (x) {
    return x;
};
var EffectFnAff = function (x) {
    return x;
};
var fromEffectFnAff = function (v) {
    return Effect_Aff.makeAff(function (k) {
        return function __do() {
            var v1 = v(function ($2011) {
                return k(Data_Either.Left.create($2011))();
            }, function ($2012) {
                return k(Data_Either.Right.create($2012))();
            });
            return function (e) {
                return Effect_Aff.makeAff(function (k2) {
                    return Control_Bind.discard(Control_Bind.discardUnit)(Effect.bindEffect)(function () {
                        return v1(e, function ($2013) {
                            return k2(Data_Either.Left.create($2013))();
                        }, function ($2014) {
                            return k2(Data_Either.Right.create($2014))();
                        });
                    })(function ($dollar__unused) {
                        return Control_Applicative.pure(Effect.applicativeEffect)(Effect_Aff.nonCanceler);
                    });
                });
            };
        };
    });
};
export {
    EffectFnAff,
    EffectFnCanceler,
    fromEffectFnAff
};
