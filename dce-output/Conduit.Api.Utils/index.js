// Generated by purs version 0.13.8
"use strict";
var Affjax = require("../Affjax/index.js");
var Conduit_Api_Request = require("../Conduit.Api.Request/index.js");
var Conduit_Capability_LogMessages = require("../Conduit.Capability.LogMessages/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_Reader_Class = require("../Control.Monad.Reader.Class/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Effect = require("../Effect/index.js");
var Effect_Aff_Bus = require("../Effect.Aff.Bus/index.js");
var Effect_Aff_Class = require("../Effect.Aff.Class/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var Effect_Ref = require("../Effect.Ref/index.js");
var mkRequest = function (dictMonadAff) {
    return function (dictMonadAsk) {
        return function (opts) {
            return Control_Bind.bind(((dictMonadAff.MonadEffect0()).Monad0()).Bind1())(Control_Monad_Reader_Class.ask(dictMonadAsk))(function (v) {
                return Control_Bind.bind(((dictMonadAff.MonadEffect0()).Monad0()).Bind1())(Effect_Aff_Class.liftAff(dictMonadAff)(Affjax.request(Conduit_Api_Request.defaultRequest(v.baseUrl)(Data_Maybe.Nothing.value)(opts))))(function (response) {
                    return Control_Applicative.pure(((dictMonadAff.MonadEffect0()).Monad0()).Applicative0())(Data_Either.hush(Data_Bifunctor.rmap(Data_Either.bifunctorEither)(function (v1) {
                        return v1.body;
                    })(response)));
                });
            });
        };
    };
};
var mkAuthRequest = function (dictMonadAff) {
    return function (dictMonadAsk) {
        return function (opts) {
            return Control_Bind.bind(((dictMonadAff.MonadEffect0()).Monad0()).Bind1())(Control_Monad_Reader_Class.ask(dictMonadAsk))(function (v) {
                return Control_Bind.bind(((dictMonadAff.MonadEffect0()).Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadAff.MonadEffect0())(Conduit_Api_Request.readToken))(function (token) {
                    return Control_Bind.bind(((dictMonadAff.MonadEffect0()).Monad0()).Bind1())(Effect_Aff_Class.liftAff(dictMonadAff)(Affjax.request(Conduit_Api_Request.defaultRequest(v.baseUrl)(token)(opts))))(function (response) {
                        return Control_Applicative.pure(((dictMonadAff.MonadEffect0()).Monad0()).Applicative0())(Data_Either.hush(Data_Bifunctor.rmap(Data_Either.bifunctorEither)(function (v1) {
                            return v1.body;
                        })(response)));
                    });
                });
            });
        };
    };
};
var decode = function (dictLogMessages) {
    return function (dictNow) {
        return function (v) {
            return function (v1) {
                if (v1 instanceof Data_Maybe.Nothing) {
                    return Control_Apply.applySecond(((dictLogMessages.Monad0()).Bind1()).Apply0())(Conduit_Capability_LogMessages.logError(dictLogMessages)(dictNow)("Response malformed"))(Control_Applicative.pure((dictLogMessages.Monad0()).Applicative0())(Data_Maybe.Nothing.value));
                };
                if (v1 instanceof Data_Maybe.Just) {
                    var v2 = v(v1.value0);
                    if (v2 instanceof Data_Either.Left) {
                        return Control_Apply.applySecond(((dictLogMessages.Monad0()).Bind1()).Apply0())(Conduit_Capability_LogMessages.logError(dictLogMessages)(dictNow)(v2.value0))(Control_Applicative.pure((dictLogMessages.Monad0()).Applicative0())(Data_Maybe.Nothing.value));
                    };
                    if (v2 instanceof Data_Either.Right) {
                        return Control_Applicative.pure((dictLogMessages.Monad0()).Applicative0())(new Data_Maybe.Just(v2.value0));
                    };
                    throw new Error("Failed pattern match at Conduit.Api.Utils (line 85, column 30 - line 87, column 41): " + [ v2.constructor.name ]);
                };
                throw new Error("Failed pattern match at Conduit.Api.Utils (line 83, column 1 - line 83, column 103): " + [ v.constructor.name, v1.constructor.name ]);
            };
        };
    };
};
var decodeWithUser = function (dictMonadEffect) {
    return function (dictMonadAsk) {
        return function (dictLogMessages) {
            return function (dictNow) {
                return function (decoder) {
                    return function (json) {
                        return Control_Bind.bind((dictLogMessages.Monad0()).Bind1())(Control_Bind.bindFlipped((dictLogMessages.Monad0()).Bind1())((function () {
                            var $207 = Effect_Class.liftEffect(dictMonadEffect);
                            return function ($208) {
                                return $207(Effect_Ref.read($208));
                            };
                        })())(Control_Monad_Reader_Class.asks(dictMonadAsk)(function (v) {
                            return v.userEnv.currentUser;
                        })))(function (maybeProfile) {
                            return decode(dictLogMessages)(dictNow)(decoder(Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
                                return v.username;
                            })(maybeProfile)))(json);
                        });
                    };
                };
            };
        };
    };
};
var authenticate = function (dictMonadAff) {
    return function (dictMonadAsk) {
        return function (dictLogMessages) {
            return function (dictNow) {
                return function (req) {
                    return function (fields) {
                        return Control_Bind.bind((dictLogMessages.Monad0()).Bind1())(Control_Monad_Reader_Class.ask(dictMonadAsk))(function (v) {
                            return Control_Bind.bind((dictLogMessages.Monad0()).Bind1())(req(v.baseUrl)(fields))(function (v1) {
                                if (v1 instanceof Data_Either.Left) {
                                    return Control_Apply.applySecond(((dictLogMessages.Monad0()).Bind1()).Apply0())(Conduit_Capability_LogMessages.logError(dictLogMessages)(dictNow)(v1.value0))(Control_Applicative.pure((dictLogMessages.Monad0()).Applicative0())(Data_Maybe.Nothing.value));
                                };
                                if (v1 instanceof Data_Either.Right) {
                                    return Control_Bind.discard(Control_Bind.discardUnit)((dictLogMessages.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadAff.MonadEffect0())(Control_Bind.discard(Control_Bind.discardUnit)(Effect.bindEffect)(Conduit_Api_Request.writeToken(v1.value0.value0))(function ($dollar__unused) {
                                        return Effect_Ref.write(new Data_Maybe.Just(v1.value0.value1))(v.userEnv.currentUser);
                                    })))(function ($dollar__unused) {
                                        return Control_Bind.discard(Control_Bind.discardUnit)((dictLogMessages.Monad0()).Bind1())(Effect_Aff_Class.liftAff(dictMonadAff)(Effect_Aff_Bus.write(new Data_Maybe.Just(v1.value0.value1))(v.userEnv.userBus)))(function ($dollar__unused) {
                                            return Control_Applicative.pure((dictLogMessages.Monad0()).Applicative0())(new Data_Maybe.Just(v1.value0.value1));
                                        });
                                    });
                                };
                                throw new Error("Failed pattern match at Conduit.Api.Utils (line 70, column 26 - line 78, column 26): " + [ v1.constructor.name ]);
                            });
                        });
                    };
                };
            };
        };
    };
};
module.exports = {
    mkRequest: mkRequest,
    mkAuthRequest: mkAuthRequest,
    authenticate: authenticate,
    decode: decode,
    decodeWithUser: decodeWithUser
};
