// Generated by purs version 0.13.8
"use strict";
var $foreign = require("./foreign.js");
var Conduit_Foreign_Marked = require("../Conduit.Foreign.Marked/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_State_Class = require("../Control.Monad.State.Class/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var Halogen_Component = require("../Halogen.Component/index.js");
var Halogen_HTML_Elements = require("../Halogen.HTML.Elements/index.js");
var Halogen_HTML_Properties = require("../Halogen.HTML.Properties/index.js");
var Halogen_Query = require("../Halogen.Query/index.js");
var Halogen_Query_HalogenM = require("../Halogen.Query.HalogenM/index.js");
var SetInnerHTML = (function () {
    function SetInnerHTML() {

    };
    SetInnerHTML.value = new SetInnerHTML();
    return SetInnerHTML;
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
    var render = function (state) {
        return Halogen_HTML_Elements.div([ Halogen_HTML_Properties.ref(state.elemRef) ])([  ]);
    };
    var handleAction = function (v) {
        if (v instanceof SetInnerHTML) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v1) {
                return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Halogen_Query.getHTMLElementRef(v1.elemRef))(function (mbElem) {
                    return Data_Foldable.for_(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Foldable.foldableMaybe)(mbElem)(function (el) {
                        return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v2) {
                            return Effect_Class.liftEffect(Halogen_Query_HalogenM.monadEffectHalogenM(dictMonadAff.MonadEffect0()))($foreign.unsafeSetInnerHTML(el)(Conduit_Foreign_Marked.marked(v2.markdown)));
                        });
                    });
                });
            });
        };
        if (v instanceof Receive) {
            return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify_(Halogen_Query_HalogenM.monadStateHalogenM)(function (v1) {
                var $316 = {};
                for (var $317 in v1) {
                    if ({}.hasOwnProperty.call(v1, $317)) {
                        $316[$317] = v1[$317];
                    };
                };
                $316.markdown = v.value0.markdown;
                return $316;
            }))(function ($dollar__unused) {
                return handleAction(SetInnerHTML.value);
            });
        };
        throw new Error("Failed pattern match at Conduit.Component.RawHTML (line 45, column 18 - line 55, column 32): " + [ v.constructor.name ]);
    };
    return Halogen_Component.mkComponent({
        initialState: function (v) {
            return {
                elemRef: "markdown",
                markdown: v.markdown
            };
        },
        render: render,
        "eval": Halogen_Component.mkEval({
            handleAction: handleAction,
            handleQuery: Halogen_Component.defaultEval.handleQuery,
            receive: function ($323) {
                return Data_Maybe.Just.create(Receive.create($323));
            },
            initialize: new Data_Maybe.Just(SetInnerHTML.value),
            finalize: Halogen_Component.defaultEval.finalize
        })
    });
};
module.exports = {
    SetInnerHTML: SetInnerHTML,
    Receive: Receive,
    component: component,
    unsafeSetInnerHTML: $foreign.unsafeSetInnerHTML
};
