// Generated by purs version 0.13.8
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Coroutine = require("../Control.Coroutine/index.js");
var Control_Monad_Free_Trans = require("../Control.Monad.Free.Trans/index.js");
var Control_Monad_Trans_Class = require("../Control.Monad.Trans.Class/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Effect_Aff = require("../Effect.Aff/index.js");
var Effect_Aff_AVar = require("../Effect.Aff.AVar/index.js");
var Effect_Aff_Class = require("../Effect.Aff.Class/index.js");
var Effect_Exception = require("../Effect.Exception/index.js");
var Finalizer = function (x) {
    return x;
};
var EventSource = function (x) {
    return x;
};
var Emitter = function (x) {
    return x;
};
var hoistFinalizer = function (nat) {
    return function (v) {
        return nat(v);
    };
};
var hoist = function (dictFunctor) {
    return function (nat) {
        return function (v) {
            return EventSource(Data_Functor.map(dictFunctor)(function (e) {
                return {
                    producer: Control_Monad_Free_Trans.hoistFreeT(Control_Coroutine.functorEmit)(dictFunctor)(nat)(e.producer),
                    finalizer: hoistFinalizer(nat)(e.finalizer)
                };
            })(nat(v)));
        };
    };
};
var functorEventSource = function (dictFunctor) {
    return new Data_Functor.Functor(function (f) {
        return function (v) {
            return EventSource(Data_Functor.map(dictFunctor)(function (e) {
                return {
                    producer: Control_Monad_Free_Trans.interpret(Control_Coroutine.functorEmit)(dictFunctor)(Data_Bifunctor.lmap(Control_Coroutine.bifunctorEmit)(f))(e.producer),
                    finalizer: e.finalizer
                };
            })(v));
        };
    });
};
var finalize = function (v) {
    return v;
};
var emit = function (v) {
    return function (a) {
        return v(new Data_Either.Left(a));
    };
};
var affEventSource = function (dictMonadAff) {
    return function (recv) {
        return EventSource(Effect_Aff_Class.liftAff(dictMonadAff)(Control_Bind.bind(Effect_Aff.bindAff)(Effect_Aff_AVar.empty)(function (inputVar) {
            return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Aff_AVar.empty)(function (finalizeVar) {
                var producer = Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Free_Trans.bindFreeT(Control_Coroutine.functorEmit)((dictMonadAff.MonadEffect0()).Monad0()))(Control_Monad_Trans_Class.lift(Control_Monad_Free_Trans.monadTransFreeT(Control_Coroutine.functorEmit))((dictMonadAff.MonadEffect0()).Monad0())(Effect_Aff_Class.liftAff(dictMonadAff)(Control_Bind.bindFlipped(Effect_Aff.bindAff)(Data_Function.flip(Effect_Aff_AVar.put)(finalizeVar))(recv(Data_Function.flip(Effect_Aff_AVar.put)(inputVar))))))(function ($dollar__unused) {
                    return Control_Coroutine.producer((dictMonadAff.MonadEffect0()).Monad0())(Effect_Aff_Class.liftAff(dictMonadAff)(Effect_Aff_AVar.take(inputVar)));
                });
                var finalizer = Control_Bind.bind(((dictMonadAff.MonadEffect0()).Monad0()).Bind1())(Effect_Aff_Class.liftAff(dictMonadAff)(Effect_Aff.attempt(Effect_Aff_AVar.take(finalizeVar))))(function (v) {
                    if (v instanceof Data_Either.Left) {
                        return Control_Applicative.pure(((dictMonadAff.MonadEffect0()).Monad0()).Applicative0())(Data_Unit.unit);
                    };
                    if (v instanceof Data_Either.Right) {
                        return Effect_Aff_Class.liftAff(dictMonadAff)(Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Effect_Aff_AVar.kill(Effect_Exception.error("finalized"))(finalizeVar))(function ($dollar__unused) {
                            return finalize(v.value0);
                        }));
                    };
                    throw new Error("Failed pattern match at Halogen.Query.EventSource (line 71, column 51 - line 75, column 21): " + [ v.constructor.name ]);
                });
                return Control_Applicative.pure(Effect_Aff.applicativeAff)({
                    producer: producer,
                    finalizer: finalizer
                });
            });
        })));
    };
};
module.exports = {
    EventSource: EventSource,
    hoist: hoist,
    affEventSource: affEventSource,
    Emitter: Emitter,
    emit: emit,
    Finalizer: Finalizer,
    finalize: finalize,
    hoistFinalizer: hoistFinalizer,
    functorEventSource: functorEventSource
};