// Generated by purs version 0.13.8
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Control_Monad_Error_Class = require("../Control.Monad.Error.Class/index.js");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class/index.js");
var Control_Parallel_Class = require("../Control.Parallel.Class/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Effect = require("../Effect/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var Effect_Unsafe = require("../Effect.Unsafe/index.js");
var Partial_Unsafe = require("../Partial.Unsafe/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Fiber = function (x) {
    return x;
};
var FFIUtil = function (x) {
    return x;
};
var Canceler = function (x) {
    return x;
};
var suspendAff = $foreign["_fork"](false);
var functorParAff = new Data_Functor.Functor($foreign["_parAffMap"]);
var functorAff = new Data_Functor.Functor($foreign["_map"]);
var forkAff = $foreign["_fork"](true);
var ffiUtil = (function () {
    var unsafeFromRight = function (v) {
        if (v instanceof Data_Either.Right) {
            return v.value0;
        };
        if (v instanceof Data_Either.Left) {
            return Partial_Unsafe.unsafeCrashWith("unsafeFromRight: Left");
        };
        throw new Error("Failed pattern match at Effect.Aff (line 400, column 21 - line 402, column 54): " + [ v.constructor.name ]);
    };
    var unsafeFromLeft = function (v) {
        if (v instanceof Data_Either.Left) {
            return v.value0;
        };
        if (v instanceof Data_Either.Right) {
            return Partial_Unsafe.unsafeCrashWith("unsafeFromLeft: Right");
        };
        throw new Error("Failed pattern match at Effect.Aff (line 395, column 20 - line 397, column 54): " + [ v.constructor.name ]);
    };
    var isLeft = function (v) {
        if (v instanceof Data_Either.Left) {
            return true;
        };
        if (v instanceof Data_Either.Right) {
            return false;
        };
        throw new Error("Failed pattern match at Effect.Aff (line 390, column 12 - line 392, column 20): " + [ v.constructor.name ]);
    };
    return {
        isLeft: isLeft,
        fromLeft: unsafeFromLeft,
        fromRight: unsafeFromRight,
        left: Data_Either.Left.create,
        right: Data_Either.Right.create
    };
})();
var makeFiber = function (aff) {
    return $foreign["_makeFiber"](ffiUtil, aff);
};
var launchAff = function (aff) {
    return function __do() {
        var fiber = makeFiber(aff)();
        return Control_Bind.discard(Control_Bind.discardUnit)(Effect.bindEffect)(fiber.run)(function ($dollar__unused) {
            return Control_Applicative.pure(Effect.applicativeEffect)(fiber);
        })();
    };
};
var launchAff_ = (function () {
    var $1983 = Data_Functor["void"](Effect.functorEffect);
    return function ($1984) {
        return $1983(launchAff($1984));
    };
})();
var delay = function (v) {
    return $foreign["_delay"](Data_Either.Right.create, v);
};
var bracket = function (acquire) {
    return function (completed) {
        return $foreign.generalBracket(acquire)({
            killed: Data_Function["const"](completed),
            failed: Data_Function["const"](completed),
            completed: Data_Function["const"](completed)
        });
    };
};
var applyParAff = new Control_Apply.Apply(function ($dollar__unused) {
    return functorParAff;
}, $foreign["_parAffApply"]);
var monadAff = new Control_Monad.Monad(function ($dollar__unused) {
    return applicativeAff;
}, function ($dollar__unused) {
    return bindAff;
});
var bindAff = new Control_Bind.Bind(function ($dollar__unused) {
    return applyAff;
}, $foreign["_bind"]);
var applyAff = new Control_Apply.Apply(function ($dollar__unused) {
    return functorAff;
}, Control_Monad.ap(monadAff));
var applicativeAff = new Control_Applicative.Applicative(function ($dollar__unused) {
    return applyAff;
}, $foreign["_pure"]);
var $$finally = function (fin) {
    return function (a) {
        return bracket(Control_Applicative.pure(applicativeAff)(Data_Unit.unit))(Data_Function["const"](fin))(Data_Function["const"](a));
    };
};
var monadEffectAff = new Effect_Class.MonadEffect(function ($dollar__unused) {
    return monadAff;
}, $foreign["_liftEffect"]);
var effectCanceler = (function () {
    var $1985 = Effect_Class.liftEffect(monadEffectAff);
    return function ($1986) {
        return Canceler(Data_Function["const"]($1985($1986)));
    };
})();
var joinFiber = function (v) {
    return $foreign.makeAff(function (k) {
        return Data_Functor.map(Effect.functorEffect)(effectCanceler)(v.join(k));
    });
};
var functorFiber = new Data_Functor.Functor(function (f) {
    return function (t) {
        return Effect_Unsafe.unsafePerformEffect(makeFiber(Data_Functor.map(functorAff)(f)(joinFiber(t))));
    };
});
var killFiber = function (e) {
    return function (v) {
        return Control_Bind.bind(bindAff)(Effect_Class.liftEffect(monadEffectAff)(v.isSuspended))(function (v1) {
            if (v1) {
                return Effect_Class.liftEffect(monadEffectAff)(Data_Functor["void"](Effect.functorEffect)(v.kill(e, Data_Function["const"](Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit)))));
            };
            return $foreign.makeAff(function (k) {
                return Data_Functor.map(Effect.functorEffect)(effectCanceler)(v.kill(e, k));
            });
        });
    };
};
var monadThrowAff = new Control_Monad_Error_Class.MonadThrow(function ($dollar__unused) {
    return monadAff;
}, $foreign["_throwError"]);
var monadErrorAff = new Control_Monad_Error_Class.MonadError(function ($dollar__unused) {
    return monadThrowAff;
}, $foreign["_catchError"]);
var attempt = Control_Monad_Error_Class["try"](monadErrorAff);
var runAff = function (k) {
    return function (aff) {
        return launchAff(Control_Bind.bindFlipped(bindAff)((function () {
            var $1987 = Effect_Class.liftEffect(monadEffectAff);
            return function ($1988) {
                return $1987(k($1988));
            };
        })())(Control_Monad_Error_Class["try"](monadErrorAff)(aff)));
    };
};
var runAff_ = function (k) {
    return function (aff) {
        return Data_Functor["void"](Effect.functorEffect)(runAff(k)(aff));
    };
};
var parallelAff = new Control_Parallel_Class.Parallel(function ($dollar__unused) {
    return applicativeParAff;
}, function ($dollar__unused) {
    return monadAff;
}, Unsafe_Coerce.unsafeCoerce, $foreign["_sequential"]);
var applicativeParAff = new Control_Applicative.Applicative(function ($dollar__unused) {
    return applyParAff;
}, (function () {
    var $1989 = Control_Parallel_Class.parallel(parallelAff);
    var $1990 = Control_Applicative.pure(applicativeAff);
    return function ($1991) {
        return $1989($1990($1991));
    };
})());
var monadRecAff = new Control_Monad_Rec_Class.MonadRec(function ($dollar__unused) {
    return monadAff;
}, function (k) {
    var go = function (a) {
        return Control_Bind.bind(bindAff)(k(a))(function (res) {
            if (res instanceof Control_Monad_Rec_Class.Done) {
                return Control_Applicative.pure(applicativeAff)(res.value0);
            };
            if (res instanceof Control_Monad_Rec_Class.Loop) {
                return go(res.value0);
            };
            throw new Error("Failed pattern match at Effect.Aff (line 100, column 7 - line 102, column 22): " + [ res.constructor.name ]);
        });
    };
    return go;
});
var nonCanceler = Data_Function["const"](Control_Applicative.pure(applicativeAff)(Data_Unit.unit));
module.exports = {
    Canceler: Canceler,
    launchAff: launchAff,
    launchAff_: launchAff_,
    runAff: runAff,
    runAff_: runAff_,
    forkAff: forkAff,
    suspendAff: suspendAff,
    attempt: attempt,
    delay: delay,
    "finally": $$finally,
    killFiber: killFiber,
    joinFiber: joinFiber,
    bracket: bracket,
    nonCanceler: nonCanceler,
    effectCanceler: effectCanceler,
    functorAff: functorAff,
    applyAff: applyAff,
    applicativeAff: applicativeAff,
    bindAff: bindAff,
    monadAff: monadAff,
    monadRecAff: monadRecAff,
    monadThrowAff: monadThrowAff,
    monadErrorAff: monadErrorAff,
    monadEffectAff: monadEffectAff,
    functorParAff: functorParAff,
    applyParAff: applyParAff,
    applicativeParAff: applicativeParAff,
    parallelAff: parallelAff,
    functorFiber: functorFiber,
    makeAff: $foreign.makeAff,
    generalBracket: $foreign.generalBracket
};