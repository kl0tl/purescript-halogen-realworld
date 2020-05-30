// Generated by purs version 0.13.8
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_String_CodeUnits = require("../Data.String.CodeUnits/index.js");
var Effect = require("../Effect/index.js");
var Effect_Ref = require("../Effect.Ref/index.js");
var Web_Event_EventTarget = require("../Web.Event.EventTarget/index.js");
var Web_HTML = require("../Web.HTML/index.js");
var Web_HTML_Event_HashChangeEvent_EventTypes = require("../Web.HTML.Event.HashChangeEvent.EventTypes/index.js");
var Web_HTML_Location = require("../Web.HTML.Location/index.js");
var Web_HTML_Window = require("../Web.HTML.Window/index.js");
var setHash = function (h) {
    return Control_Bind.bind(Effect.bindEffect)(Control_Bind.bind(Effect.bindEffect)(Web_HTML.window)(Web_HTML_Window.location))(Web_HTML_Location.setHash(h));
};
var getHash = Control_Bind.bind(Effect.bindEffect)(Control_Bind.bind(Effect.bindEffect)(Web_HTML.window)(Web_HTML_Window.location))((function () {
    var $2946 = Data_Functor.map(Effect.functorEffect)((function () {
        var $2948 = Data_Maybe.fromMaybe("");
        var $2949 = Data_String_CodeUnits.stripPrefix("#");
        return function ($2950) {
            return $2948($2949($2950));
        };
    })());
    return function ($2947) {
        return $2946(Web_HTML_Location.hash($2947));
    };
})());
var foldHashes = function (cb) {
    return function (init) {
        return function __do() {
            var ref = Control_Bind.bindFlipped(Effect.bindEffect)(Effect_Ref["new"])(Control_Bind.bindFlipped(Effect.bindEffect)(init)(getHash))();
            var win = Data_Functor.map(Effect.functorEffect)(Web_HTML_Window.toEventTarget)(Web_HTML.window)();
            var listener = Web_Event_EventTarget.eventListener(function (v) {
                return Control_Bind.bindFlipped(Effect.bindEffect)(Data_Function.flip(Effect_Ref.write)(ref))(Control_Bind.join(Effect.bindEffect)(Control_Apply.apply(Effect.applyEffect)(Data_Functor.map(Effect.functorEffect)(cb)(Effect_Ref.read(ref)))(getHash)));
            })();
            return Control_Bind.discard(Control_Bind.discardUnit)(Effect.bindEffect)(Web_Event_EventTarget.addEventListener(Web_HTML_Event_HashChangeEvent_EventTypes.hashchange)(listener)(false)(win))(function ($dollar__unused) {
                return Control_Applicative.pure(Effect.applicativeEffect)(Web_Event_EventTarget.removeEventListener(Web_HTML_Event_HashChangeEvent_EventTypes.hashchange)(listener)(false)(win));
            })();
        };
    };
};
var matchesWith = function (dictFoldable) {
    return function (parser) {
        return function (cb) {
            var go = function (a) {
                var $2951 = Data_Maybe.maybe(Control_Applicative.pure(Effect.applicativeEffect)(a))(function (b) {
                    return Data_Functor.voidRight(Effect.functorEffect)(new Data_Maybe.Just(b))(cb(a)(b));
                });
                var $2952 = Data_Foldable.indexl(dictFoldable)(0);
                return function ($2953) {
                    return $2951($2952(parser($2953)));
                };
            };
            return foldHashes(go)(go(Data_Maybe.Nothing.value));
        };
    };
};
module.exports = {
    getHash: getHash,
    setHash: setHash,
    foldHashes: foldHashes,
    matchesWith: matchesWith
};
