// Generated by purs version 0.13.8
"use strict";
var Component_HOC_Connect = require("../Component.HOC.Connect/index.js");
var Conduit_Capability_Navigate = require("../Conduit.Capability.Navigate/index.js");
var Conduit_Data_Route = require("../Conduit.Data.Route/index.js");
var Conduit_Page_Editor = require("../Conduit.Page.Editor/index.js");
var Conduit_Page_Home = require("../Conduit.Page.Home/index.js");
var Conduit_Page_Login = require("../Conduit.Page.Login/index.js");
var Conduit_Page_Profile = require("../Conduit.Page.Profile/index.js");
var Conduit_Page_Register = require("../Conduit.Page.Register/index.js");
var Conduit_Page_Settings = require("../Conduit.Page.Settings/index.js");
var Conduit_Page_ViewArticle = require("../Conduit.Page.ViewArticle/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_State_Class = require("../Control.Monad.State.Class/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Data_Void = require("../Data.Void/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var Halogen_Component = require("../Halogen.Component/index.js");
var Halogen_HTML = require("../Halogen.HTML/index.js");
var Halogen_HTML_Core = require("../Halogen.HTML.Core/index.js");
var Halogen_HTML_Elements = require("../Halogen.HTML.Elements/index.js");
var Halogen_Query_HalogenM = require("../Halogen.Query.HalogenM/index.js");
var Routing_Duplex = require("../Routing.Duplex/index.js");
var Routing_Hash = require("../Routing.Hash/index.js");
var Navigate = (function () {
    function Navigate(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Navigate.create = function (value0) {
        return function (value1) {
            return new Navigate(value0, value1);
        };
    };
    return Navigate;
})();
var Initialize = (function () {
    function Initialize() {

    };
    Initialize.value = new Initialize();
    return Initialize;
})();
var Receive = (function () {
    function Receive(value0) {
        this.value0 = value0;
    };
    Receive.create = function (value0) {
        return new Receive(value0);
    };
    return Receive;
})();
var component = function (dictMonadAff) {
    return function (dictMonadAsk) {
        return function (dictNow) {
            return function (dictLogMessages) {
                return function (dictNavigate) {
                    return function (dictManageUser) {
                        return function (dictManageArticle) {
                            return function (dictManageComment) {
                                return function (dictManageTag) {
                                    var handleQuery = function (v) {
                                        return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v1) {
                                            return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Applicative.when(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Eq.notEq(Data_Maybe.eqMaybe(Conduit_Data_Route.eqRoute))(v1.route)(new Data_Maybe.Just(v.value0)))((function () {
                                                var v2 = Data_Maybe.isJust(v1.currentUser) && Data_Foldable.elem(Data_Foldable.foldableArray)(Conduit_Data_Route.eqRoute)(v.value0)([ Conduit_Data_Route.Login.value, Conduit_Data_Route.Register.value ]);
                                                if (!v2) {
                                                    return Control_Monad_State_Class.modify_(Halogen_Query_HalogenM.monadStateHalogenM)(function (v3) {
                                                        var $327 = {};
                                                        for (var $328 in v3) {
                                                            if ({}.hasOwnProperty.call(v3, $328)) {
                                                                $327[$328] = v3[$328];
                                                            };
                                                        };
                                                        $327.route = new Data_Maybe.Just(v.value0);
                                                        return $327;
                                                    });
                                                };
                                                return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Unit.unit);
                                            })()))(function ($dollar__unused) {
                                                return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(new Data_Maybe.Just(v.value1));
                                            });
                                        });
                                    };
                                    var handleAction = function (v) {
                                        if (v instanceof Initialize) {
                                            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Data_Functor.map(Halogen_Query_HalogenM.functorHalogenM)((function () {
                                                var $354 = Routing_Duplex.parse(Conduit_Data_Route.routeCodec);
                                                return function ($355) {
                                                    return Data_Either.hush($354($355));
                                                };
                                            })())(Effect_Class.liftEffect(Halogen_Query_HalogenM.monadEffectHalogenM(dictMonadAff.MonadEffect0()))(Routing_Hash.getHash)))(function (initialRoute) {
                                                return Conduit_Capability_Navigate.navigate(Conduit_Capability_Navigate.navigateHalogenM(dictNavigate))(Data_Maybe.fromMaybe(Conduit_Data_Route.Home.value)(initialRoute));
                                            });
                                        };
                                        if (v instanceof Receive) {
                                            return Control_Monad_State_Class.modify_(Halogen_Query_HalogenM.monadStateHalogenM)(function (v1) {
                                                var $335 = {};
                                                for (var $336 in v1) {
                                                    if ({}.hasOwnProperty.call(v1, $336)) {
                                                        $335[$336] = v1[$336];
                                                    };
                                                };
                                                $335.currentUser = v.value0.currentUser;
                                                return $335;
                                            });
                                        };
                                        throw new Error("Failed pattern match at Conduit.Component.Router (line 89, column 18 - line 97, column 48): " + [ v.constructor.name ]);
                                    };
                                    var authorize = function (mbProfile) {
                                        return function (html) {
                                            if (mbProfile instanceof Data_Maybe.Nothing) {
                                                return Halogen_HTML.slot()(new Data_Symbol.IsSymbol(function ($dollar__unused) {
                                                    return "login";
                                                }))(Data_Ord.ordUnit)(Data_Symbol.SProxy.value)(Data_Unit.unit)(Conduit_Page_Login.component(dictMonadAff)(dictNavigate)(dictManageUser))({
                                                    redirect: false
                                                })(Data_Void.absurd);
                                            };
                                            if (mbProfile instanceof Data_Maybe.Just) {
                                                return html;
                                            };
                                            throw new Error("Failed pattern match at Conduit.Component.Router (line 115, column 30 - line 119, column 11): " + [ mbProfile.constructor.name ]);
                                        };
                                    };
                                    var render = function (v) {
                                        if (v.route instanceof Data_Maybe.Just) {
                                            if (v.route.value0 instanceof Conduit_Data_Route.Home) {
                                                return Halogen_HTML.slot()(new Data_Symbol.IsSymbol(function ($dollar__unused) {
                                                    return "home";
                                                }))(Data_Ord.ordUnit)(Data_Symbol.SProxy.value)(Data_Unit.unit)(Conduit_Page_Home.component(dictMonadAff)(dictMonadAsk)(dictNavigate)(dictManageTag)(dictManageArticle))({})(Data_Void.absurd);
                                            };
                                            if (v.route.value0 instanceof Conduit_Data_Route.Login) {
                                                return Halogen_HTML.slot()(new Data_Symbol.IsSymbol(function ($dollar__unused) {
                                                    return "login";
                                                }))(Data_Ord.ordUnit)(Data_Symbol.SProxy.value)(Data_Unit.unit)(Conduit_Page_Login.component(dictMonadAff)(dictNavigate)(dictManageUser))({
                                                    redirect: true
                                                })(Data_Void.absurd);
                                            };
                                            if (v.route.value0 instanceof Conduit_Data_Route.Register) {
                                                return Halogen_HTML.slot()(new Data_Symbol.IsSymbol(function ($dollar__unused) {
                                                    return "register";
                                                }))(Data_Ord.ordUnit)(Data_Symbol.SProxy.value)(Data_Unit.unit)(Conduit_Page_Register.component(dictMonadAff)(dictManageUser)(dictNavigate))(Data_Unit.unit)(Data_Void.absurd);
                                            };
                                            if (v.route.value0 instanceof Conduit_Data_Route.Settings) {
                                                return authorize(v.currentUser)(Halogen_HTML.slot()(new Data_Symbol.IsSymbol(function ($dollar__unused) {
                                                    return "settings";
                                                }))(Data_Ord.ordUnit)(Data_Symbol.SProxy.value)(Data_Unit.unit)(Conduit_Page_Settings.component(dictMonadAff)(dictNavigate)(dictManageUser))(Data_Unit.unit)(Data_Void.absurd));
                                            };
                                            if (v.route.value0 instanceof Conduit_Data_Route.Editor) {
                                                return authorize(v.currentUser)(Halogen_HTML.slot()(new Data_Symbol.IsSymbol(function ($dollar__unused) {
                                                    return "editor";
                                                }))(Data_Ord.ordUnit)(Data_Symbol.SProxy.value)(Data_Unit.unit)(Conduit_Page_Editor.component(dictMonadAff)(dictMonadAsk)(dictNavigate)(dictManageArticle))({
                                                    slug: Data_Maybe.Nothing.value
                                                })(Data_Void.absurd));
                                            };
                                            if (v.route.value0 instanceof Conduit_Data_Route.EditArticle) {
                                                return authorize(v.currentUser)(Halogen_HTML.slot()(new Data_Symbol.IsSymbol(function ($dollar__unused) {
                                                    return "editor";
                                                }))(Data_Ord.ordUnit)(Data_Symbol.SProxy.value)(Data_Unit.unit)(Conduit_Page_Editor.component(dictMonadAff)(dictMonadAsk)(dictNavigate)(dictManageArticle))({
                                                    slug: new Data_Maybe.Just(v.route.value0.value0)
                                                })(Data_Void.absurd));
                                            };
                                            if (v.route.value0 instanceof Conduit_Data_Route.ViewArticle) {
                                                return Halogen_HTML.slot()(new Data_Symbol.IsSymbol(function ($dollar__unused) {
                                                    return "viewArticle";
                                                }))(Data_Ord.ordUnit)(Data_Symbol.SProxy.value)(Data_Unit.unit)(Conduit_Page_ViewArticle.component(dictMonadAff)(dictManageArticle)(dictManageComment)(dictManageUser)(dictMonadAsk)(dictNavigate))({
                                                    slug: v.route.value0.value0
                                                })(Data_Void.absurd);
                                            };
                                            if (v.route.value0 instanceof Conduit_Data_Route.Profile) {
                                                return Halogen_HTML.slot()(new Data_Symbol.IsSymbol(function ($dollar__unused) {
                                                    return "profile";
                                                }))(Data_Ord.ordUnit)(Data_Symbol.SProxy.value)(Data_Unit.unit)(Conduit_Page_Profile.component(dictMonadAff)(dictMonadAsk)(dictManageUser)(dictManageArticle))({
                                                    username: v.route.value0.value0,
                                                    tab: Conduit_Page_Profile.ArticlesTab.value
                                                })(Data_Void.absurd);
                                            };
                                            if (v.route.value0 instanceof Conduit_Data_Route.Favorites) {
                                                return Halogen_HTML.slot()(new Data_Symbol.IsSymbol(function ($dollar__unused) {
                                                    return "profile";
                                                }))(Data_Ord.ordUnit)(Data_Symbol.SProxy.value)(Data_Unit.unit)(Conduit_Page_Profile.component(dictMonadAff)(dictMonadAsk)(dictManageUser)(dictManageArticle))({
                                                    username: v.route.value0.value0,
                                                    tab: Conduit_Page_Profile.FavoritesTab.value
                                                })(Data_Void.absurd);
                                            };
                                            throw new Error("Failed pattern match at Conduit.Component.Router (line 123, column 15 - line 144, column 102): " + [ v.route.value0.constructor.name ]);
                                        };
                                        if (v.route instanceof Data_Maybe.Nothing) {
                                            return Halogen_HTML_Elements.div_([ Halogen_HTML_Core.text("Oh no! That page wasn't found.") ]);
                                        };
                                        throw new Error("Failed pattern match at Conduit.Component.Router (line 122, column 35 - line 146, column 59): " + [ v.route.constructor.name ]);
                                    };
                                    return Component_HOC_Connect.component(dictMonadAff)(dictMonadAsk)()(Halogen_Component.mkComponent({
                                        initialState: function (v) {
                                            return {
                                                route: Data_Maybe.Nothing.value,
                                                currentUser: v.currentUser
                                            };
                                        },
                                        render: render,
                                        "eval": Halogen_Component.mkEval({
                                            handleAction: handleAction,
                                            handleQuery: handleQuery,
                                            receive: function ($356) {
                                                return Data_Maybe.Just.create(Receive.create($356));
                                            },
                                            initialize: new Data_Maybe.Just(Initialize.value),
                                            finalize: Halogen_Component.defaultEval.finalize
                                        })
                                    }));
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
module.exports = {
    Navigate: Navigate,
    Initialize: Initialize,
    Receive: Receive,
    component: component
};