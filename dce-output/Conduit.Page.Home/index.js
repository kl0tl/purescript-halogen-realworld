// Generated by purs version 0.13.8
"use strict";
var Component_HOC_Connect = require("../Component.HOC.Connect/index.js");
var Conduit_Api_Endpoint = require("../Conduit.Api.Endpoint/index.js");
var Conduit_Capability_Resource_Article = require("../Conduit.Capability.Resource.Article/index.js");
var Conduit_Capability_Resource_Tag = require("../Conduit.Capability.Resource.Tag/index.js");
var Conduit_Component_HTML_ArticleList = require("../Conduit.Component.HTML.ArticleList/index.js");
var Conduit_Component_HTML_Footer = require("../Conduit.Component.HTML.Footer/index.js");
var Conduit_Component_HTML_Header = require("../Conduit.Component.HTML.Header/index.js");
var Conduit_Component_HTML_Utils = require("../Conduit.Component.HTML.Utils/index.js");
var Conduit_Component_Part_FavoriteButton = require("../Conduit.Component.Part.FavoriteButton/index.js");
var Conduit_Data_Route = require("../Conduit.Data.Route/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_State_Class = require("../Control.Monad.State.Class/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Lens_Index = require("../Data.Lens.Index/index.js");
var Data_Lens_Record = require("../Data.Lens.Record/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var Halogen_Component = require("../Halogen.Component/index.js");
var Halogen_HTML_Core = require("../Halogen.HTML.Core/index.js");
var Halogen_HTML_Elements = require("../Halogen.HTML.Elements/index.js");
var Halogen_HTML_Events = require("../Halogen.HTML.Events/index.js");
var Halogen_HTML_Properties = require("../Halogen.HTML.Properties/index.js");
var Halogen_Query_HalogenM = require("../Halogen.Query.HalogenM/index.js");
var Network_RemoteData = require("../Network.RemoteData/index.js");
var Web_Event_Event = require("../Web.Event.Event/index.js");
var Web_UIEvent_MouseEvent = require("../Web.UIEvent.MouseEvent/index.js");
var Feed = (function () {
    function Feed() {

    };
    Feed.value = new Feed();
    return Feed;
})();
var Global = (function () {
    function Global() {

    };
    Global.value = new Global();
    return Global;
})();
var Tag = (function () {
    function Tag(value0) {
        this.value0 = value0;
    };
    Tag.create = function (value0) {
        return new Tag(value0);
    };
    return Tag;
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
var ShowTab = (function () {
    function ShowTab(value0) {
        this.value0 = value0;
    };
    ShowTab.create = function (value0) {
        return new ShowTab(value0);
    };
    return ShowTab;
})();
var LoadFeed = (function () {
    function LoadFeed(value0) {
        this.value0 = value0;
    };
    LoadFeed.create = function (value0) {
        return new LoadFeed(value0);
    };
    return LoadFeed;
})();
var LoadArticles = (function () {
    function LoadArticles(value0) {
        this.value0 = value0;
    };
    LoadArticles.create = function (value0) {
        return new LoadArticles(value0);
    };
    return LoadArticles;
})();
var LoadTags = (function () {
    function LoadTags() {

    };
    LoadTags.value = new LoadTags();
    return LoadTags;
})();
var FavoriteArticle = (function () {
    function FavoriteArticle(value0) {
        this.value0 = value0;
    };
    FavoriteArticle.create = function (value0) {
        return new FavoriteArticle(value0);
    };
    return FavoriteArticle;
})();
var UnfavoriteArticle = (function () {
    function UnfavoriteArticle(value0) {
        this.value0 = value0;
    };
    UnfavoriteArticle.create = function (value0) {
        return new UnfavoriteArticle(value0);
    };
    return UnfavoriteArticle;
})();
var SelectPage = (function () {
    function SelectPage(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    SelectPage.create = function (value0) {
        return function (value1) {
            return new SelectPage(value0, value1);
        };
    };
    return SelectPage;
})();
var tabIsTag = function (v) {
    if (v instanceof Tag) {
        return true;
    };
    return false;
};
var eqTab = new Data_Eq.Eq(function (x) {
    return function (y) {
        if (x instanceof Feed && y instanceof Feed) {
            return true;
        };
        if (x instanceof Global && y instanceof Global) {
            return true;
        };
        if (x instanceof Tag && y instanceof Tag) {
            return x.value0 === y.value0;
        };
        return false;
    };
});
var _article = function (i) {
    return function (dictWander) {
        var $611 = Data_Lens_Record.prop(new Data_Symbol.IsSymbol(function ($dollar__unused) {
            return "articles";
        }))()()(Data_Symbol.SProxy.value)(dictWander.Strong0());
        var $612 = Network_RemoteData["_Success"](dictWander.Choice1());
        var $613 = Data_Lens_Record.prop(new Data_Symbol.IsSymbol(function ($dollar__unused) {
            return "body";
        }))()()(Data_Symbol.SProxy.value)(dictWander.Strong0());
        var $614 = Data_Lens_Index.ix(Data_Lens_Index.indexArray)(i)(dictWander);
        return function ($615) {
            return $611($612($613($614($615))));
        };
    };
};
var component = function (dictMonadAff) {
    return function (dictMonadAsk) {
        return function (dictNavigate) {
            return function (dictManageTag) {
                return function (dictManageArticle) {
                    var render = function (v) {
                        var tab = function (thisTab) {
                            return Halogen_HTML_Elements.li([ Conduit_Component_HTML_Utils.css("nav-item") ])([ Halogen_HTML_Elements.a([ Conduit_Component_HTML_Utils.css("nav-link" + Data_Monoid.guard(Data_Monoid.monoidString)(Data_Eq.eq(eqTab)(v.tab)(thisTab))(" active")), Halogen_HTML_Events.onClick(function (v1) {
                                return Data_Maybe.Just.create(new ShowTab(thisTab));
                            }), Halogen_HTML_Properties.href("#/") ])((function () {
                                if (thisTab instanceof Feed) {
                                    return [ Halogen_HTML_Core.text("Your Feed") ];
                                };
                                if (thisTab instanceof Global) {
                                    return [ Halogen_HTML_Core.text("Global Feed") ];
                                };
                                if (thisTab instanceof Tag) {
                                    return [ Halogen_HTML_Elements.i([ Conduit_Component_HTML_Utils.css("ion-pound") ])([  ]), Halogen_HTML_Core.text("#" + thisTab.value0) ];
                                };
                                throw new Error("Failed pattern match at Conduit.Page.Home (line 219, column 13 - line 229, column 18): " + [ thisTab.constructor.name ]);
                            })()) ]);
                        };
                        var renderTag = function (tag) {
                            return Halogen_HTML_Elements.a([ Conduit_Component_HTML_Utils.css("tag-default tag-pill"), Halogen_HTML_Events.onClick(function (v1) {
                                return Data_Maybe.Just.create(new ShowTab(new Tag(tag)));
                            }), Halogen_HTML_Properties.href("#/") ])([ Halogen_HTML_Core.text(tag) ]);
                        };
                        var renderTags = function (v1) {
                            if (v1 instanceof Network_RemoteData.NotAsked) {
                                return Halogen_HTML_Elements.div_([ Halogen_HTML_Core.text("Tags not loaded") ]);
                            };
                            if (v1 instanceof Network_RemoteData.Loading) {
                                return Halogen_HTML_Elements.div_([ Halogen_HTML_Core.text("Loading Tags") ]);
                            };
                            if (v1 instanceof Network_RemoteData.Failure) {
                                return Halogen_HTML_Elements.div_([ Halogen_HTML_Core.text("Failed loading tags: " + v1.value0) ]);
                            };
                            if (v1 instanceof Network_RemoteData.Success) {
                                return Halogen_HTML_Elements.div([ Conduit_Component_HTML_Utils.css("tag-list") ])(Data_Functor.map(Data_Functor.functorArray)(renderTag)(v1.value0));
                            };
                            throw new Error("Failed pattern match at Conduit.Page.Home (line 232, column 18 - line 245, column 37): " + [ v1.constructor.name ]);
                        };
                        var mainView = Halogen_HTML_Elements.div([ Conduit_Component_HTML_Utils.css("col-md-9") ])([ Halogen_HTML_Elements.div([ Conduit_Component_HTML_Utils.css("feed-toggle") ])([ Halogen_HTML_Elements.ul([ Conduit_Component_HTML_Utils.css("nav nav-pills outline-active") ])([ Conduit_Component_HTML_Utils.whenElem(Data_Maybe.isJust(v.currentUser))(function (v1) {
                            return tab(Feed.value);
                        }), tab(Global.value), Conduit_Component_HTML_Utils.whenElem(tabIsTag(v.tab))(function (v1) {
                            return tab(v.tab);
                        }) ]) ]), Conduit_Component_HTML_ArticleList.articleList(FavoriteArticle.create)(UnfavoriteArticle.create)(v.articles), Conduit_Component_HTML_Utils.maybeElem(Network_RemoteData.toMaybe(v.articles))(function (paginated) {
                            return Conduit_Component_HTML_ArticleList.renderPagination(SelectPage.create)(v.page)(paginated);
                        }) ]);
                        var banner = Halogen_HTML_Elements.div([ Conduit_Component_HTML_Utils.css("banner") ])([ Halogen_HTML_Elements.div([ Conduit_Component_HTML_Utils.css("container") ])([ Halogen_HTML_Elements.h1([ Conduit_Component_HTML_Utils.css("logo-font") ])([ Halogen_HTML_Core.text("conduit") ]), Halogen_HTML_Elements.p_([ Halogen_HTML_Core.text("A place to share your knowledge.") ]) ]) ]);
                        return Halogen_HTML_Elements.div_([ Conduit_Component_HTML_Header.header(v.currentUser)(Conduit_Data_Route.Home.value), Halogen_HTML_Elements.div([ Conduit_Component_HTML_Utils.css("home-page") ])([ Conduit_Component_HTML_Utils.whenElem(Data_Maybe.isNothing(v.currentUser))(function (v1) {
                            return banner;
                        }), Halogen_HTML_Elements.div([ Conduit_Component_HTML_Utils.css("container page") ])([ Halogen_HTML_Elements.div([ Conduit_Component_HTML_Utils.css("row") ])([ mainView, Halogen_HTML_Elements.div([ Conduit_Component_HTML_Utils.css("col-md-3") ])([ Halogen_HTML_Elements.div([ Conduit_Component_HTML_Utils.css("sidebar") ])([ Halogen_HTML_Elements.p_([ Halogen_HTML_Core.text("Popular Tags") ]), renderTags(v.tags) ]) ]) ]) ]) ]), Conduit_Component_HTML_Footer.footer ]);
                    };
                    var initialState = function (v) {
                        return {
                            tags: Network_RemoteData.NotAsked.value,
                            articles: Network_RemoteData.NotAsked.value,
                            tab: Global.value,
                            currentUser: v.currentUser,
                            page: 1
                        };
                    };
                    var handleAction = function (v) {
                        if (v instanceof Initialize) {
                            return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Data_Functor["void"](Halogen_Query_HalogenM.functorHalogenM)(Halogen_Query_HalogenM.fork(handleAction(LoadTags.value))))(function ($dollar__unused) {
                                return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (state) {
                                    if (state.currentUser instanceof Data_Maybe.Nothing) {
                                        return Data_Functor["void"](Halogen_Query_HalogenM.functorHalogenM)(Halogen_Query_HalogenM.fork(handleAction(new LoadArticles(Conduit_Api_Endpoint.noArticleParams))));
                                    };
                                    return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Data_Functor["void"](Halogen_Query_HalogenM.functorHalogenM)(Halogen_Query_HalogenM.fork(handleAction(new LoadFeed({
                                        limit: new Data_Maybe.Just(20),
                                        offset: Data_Maybe.Nothing.value
                                    })))))(function ($dollar__unused) {
                                        return Control_Monad_State_Class.modify_(Halogen_Query_HalogenM.monadStateHalogenM)(function (v1) {
                                            var $568 = {};
                                            for (var $569 in v1) {
                                                if ({}.hasOwnProperty.call(v1, $569)) {
                                                    $568[$569] = v1[$569];
                                                };
                                            };
                                            $568.tab = Feed.value;
                                            return $568;
                                        });
                                    });
                                });
                            });
                        };
                        if (v instanceof Receive) {
                            return Control_Monad_State_Class.modify_(Halogen_Query_HalogenM.monadStateHalogenM)(function (v1) {
                                var $571 = {};
                                for (var $572 in v1) {
                                    if ({}.hasOwnProperty.call(v1, $572)) {
                                        $571[$572] = v1[$572];
                                    };
                                };
                                $571.currentUser = v.value0.currentUser;
                                return $571;
                            });
                        };
                        if (v instanceof LoadTags) {
                            return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify_(Halogen_Query_HalogenM.monadStateHalogenM)(function (v1) {
                                var $576 = {};
                                for (var $577 in v1) {
                                    if ({}.hasOwnProperty.call(v1, $577)) {
                                        $576[$577] = v1[$577];
                                    };
                                };
                                $576.tags = Network_RemoteData.Loading.value;
                                return $576;
                            }))(function ($dollar__unused) {
                                return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Conduit_Capability_Resource_Tag.getAllTags(Conduit_Capability_Resource_Tag.manageTagHalogenM(dictManageTag)))(function (tags) {
                                    return Control_Monad_State_Class.modify_(Halogen_Query_HalogenM.monadStateHalogenM)(function (v1) {
                                        var $579 = {};
                                        for (var $580 in v1) {
                                            if ({}.hasOwnProperty.call(v1, $580)) {
                                                $579[$580] = v1[$580];
                                            };
                                        };
                                        $579.tags = Network_RemoteData.fromMaybe(tags);
                                        return $579;
                                    });
                                });
                            });
                        };
                        if (v instanceof LoadFeed) {
                            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (v1) {
                                var $582 = {};
                                for (var $583 in v1) {
                                    if ({}.hasOwnProperty.call(v1, $583)) {
                                        $582[$583] = v1[$583];
                                    };
                                };
                                $582.articles = Network_RemoteData.Loading.value;
                                return $582;
                            }))(function (st) {
                                return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Conduit_Capability_Resource_Article.getCurrentUserFeed(Conduit_Capability_Resource_Article.manageArticleHalogenM(dictManageArticle))(v.value0))(function (articles) {
                                    return Control_Monad_State_Class.modify_(Halogen_Query_HalogenM.monadStateHalogenM)(function (v1) {
                                        var $585 = {};
                                        for (var $586 in v1) {
                                            if ({}.hasOwnProperty.call(v1, $586)) {
                                                $585[$586] = v1[$586];
                                            };
                                        };
                                        $585.articles = Network_RemoteData.fromMaybe(articles);
                                        return $585;
                                    });
                                });
                            });
                        };
                        if (v instanceof LoadArticles) {
                            return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify_(Halogen_Query_HalogenM.monadStateHalogenM)(function (v1) {
                                var $589 = {};
                                for (var $590 in v1) {
                                    if ({}.hasOwnProperty.call(v1, $590)) {
                                        $589[$590] = v1[$590];
                                    };
                                };
                                $589.articles = Network_RemoteData.Loading.value;
                                return $589;
                            }))(function ($dollar__unused) {
                                return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Conduit_Capability_Resource_Article.getArticles(Conduit_Capability_Resource_Article.manageArticleHalogenM(dictManageArticle))(v.value0))(function (articles) {
                                    return Control_Monad_State_Class.modify_(Halogen_Query_HalogenM.monadStateHalogenM)(function (v1) {
                                        var $592 = {};
                                        for (var $593 in v1) {
                                            if ({}.hasOwnProperty.call(v1, $593)) {
                                                $592[$593] = v1[$593];
                                            };
                                        };
                                        $592.articles = Network_RemoteData.fromMaybe(articles);
                                        return $592;
                                    });
                                });
                            });
                        };
                        if (v instanceof ShowTab) {
                            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (st) {
                                return Control_Applicative.when(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Eq.notEq(eqTab)(v.value0)(st.tab))(Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify_(Halogen_Query_HalogenM.monadStateHalogenM)(function (v1) {
                                    var $596 = {};
                                    for (var $597 in v1) {
                                        if ({}.hasOwnProperty.call(v1, $597)) {
                                            $596[$597] = v1[$597];
                                        };
                                    };
                                    $596.tab = v.value0;
                                    return $596;
                                }))(function ($dollar__unused) {
                                    return Data_Functor["void"](Halogen_Query_HalogenM.functorHalogenM)(Halogen_Query_HalogenM.fork(handleAction((function () {
                                        if (v.value0 instanceof Feed) {
                                            return new LoadFeed({
                                                limit: new Data_Maybe.Just(20),
                                                offset: Data_Maybe.Nothing.value
                                            });
                                        };
                                        if (v.value0 instanceof Global) {
                                            return new LoadArticles({
                                                tag: Conduit_Api_Endpoint.noArticleParams.tag,
                                                author: Conduit_Api_Endpoint.noArticleParams.author,
                                                favorited: Conduit_Api_Endpoint.noArticleParams.favorited,
                                                limit: new Data_Maybe.Just(20),
                                                offset: Conduit_Api_Endpoint.noArticleParams.offset
                                            });
                                        };
                                        if (v.value0 instanceof Tag) {
                                            return new LoadArticles({
                                                tag: new Data_Maybe.Just(v.value0.value0),
                                                author: Conduit_Api_Endpoint.noArticleParams.author,
                                                favorited: Conduit_Api_Endpoint.noArticleParams.favorited,
                                                limit: new Data_Maybe.Just(20),
                                                offset: Conduit_Api_Endpoint.noArticleParams.offset
                                            });
                                        };
                                        throw new Error("Failed pattern match at Conduit.Page.Home (line 128, column 38 - line 134, column 79): " + [ v.value0.constructor.name ]);
                                    })())));
                                }));
                            });
                        };
                        if (v instanceof FavoriteArticle) {
                            return Conduit_Component_Part_FavoriteButton.favorite(dictManageArticle)(function (dictWander) {
                                return _article(v.value0)(dictWander);
                            });
                        };
                        if (v instanceof UnfavoriteArticle) {
                            return Conduit_Component_Part_FavoriteButton.unfavorite(dictManageArticle)(function (dictWander) {
                                return _article(v.value0)(dictWander);
                            });
                        };
                        if (v instanceof SelectPage) {
                            return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Effect_Class.liftEffect(Halogen_Query_HalogenM.monadEffectHalogenM(dictMonadAff.MonadEffect0()))(Web_Event_Event.preventDefault(Web_UIEvent_MouseEvent.toEvent(v.value1))))(function ($dollar__unused) {
                                return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (v1) {
                                    var $604 = {};
                                    for (var $605 in v1) {
                                        if ({}.hasOwnProperty.call(v1, $605)) {
                                            $604[$605] = v1[$605];
                                        };
                                    };
                                    $604.page = v.value0;
                                    return $604;
                                }))(function (st) {
                                    var offset = new Data_Maybe.Just(v.value0 * 20 | 0);
                                    return Data_Functor["void"](Halogen_Query_HalogenM.functorHalogenM)(Halogen_Query_HalogenM.fork(handleAction((function () {
                                        if (st.tab instanceof Feed) {
                                            return new LoadFeed({
                                                limit: new Data_Maybe.Just(20),
                                                offset: offset
                                            });
                                        };
                                        if (st.tab instanceof Global) {
                                            return new LoadArticles({
                                                tag: Conduit_Api_Endpoint.noArticleParams.tag,
                                                author: Conduit_Api_Endpoint.noArticleParams.author,
                                                favorited: Conduit_Api_Endpoint.noArticleParams.favorited,
                                                limit: new Data_Maybe.Just(20),
                                                offset: offset
                                            });
                                        };
                                        if (st.tab instanceof Tag) {
                                            return new LoadArticles({
                                                tag: new Data_Maybe.Just(st.tab.value0),
                                                author: Conduit_Api_Endpoint.noArticleParams.author,
                                                favorited: Conduit_Api_Endpoint.noArticleParams.favorited,
                                                limit: new Data_Maybe.Just(20),
                                                offset: offset
                                            });
                                        };
                                        throw new Error("Failed pattern match at Conduit.Page.Home (line 146, column 36 - line 152, column 94): " + [ st.tab.constructor.name ]);
                                    })())));
                                });
                            });
                        };
                        throw new Error("Failed pattern match at Conduit.Page.Home (line 95, column 18 - line 152, column 94): " + [ v.constructor.name ]);
                    };
                    return Component_HOC_Connect.component(dictMonadAff)(dictMonadAsk)()(Halogen_Component.mkComponent({
                        initialState: initialState,
                        render: render,
                        "eval": Halogen_Component.mkEval({
                            handleAction: handleAction,
                            handleQuery: Halogen_Component.defaultEval.handleQuery,
                            receive: function ($616) {
                                return Data_Maybe.Just.create(Receive.create($616));
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
module.exports = {
    Initialize: Initialize,
    Receive: Receive,
    ShowTab: ShowTab,
    LoadFeed: LoadFeed,
    LoadArticles: LoadArticles,
    LoadTags: LoadTags,
    FavoriteArticle: FavoriteArticle,
    UnfavoriteArticle: UnfavoriteArticle,
    SelectPage: SelectPage,
    Feed: Feed,
    Global: Global,
    Tag: Tag,
    tabIsTag: tabIsTag,
    component: component,
    "_article": _article,
    eqTab: eqTab
};
