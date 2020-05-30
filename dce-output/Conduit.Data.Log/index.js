// Generated by purs version 0.13.8
"use strict";
var Conduit_Capability_Now = require("../Conduit.Capability.Now/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Formatter_DateTime = require("../Data.Formatter.DateTime/index.js");
var Data_Function = require("../Data.Function/index.js");
var Debug = (function () {
    function Debug() {

    };
    Debug.value = new Debug();
    return Debug;
})();
var Info = (function () {
    function Info() {

    };
    Info.value = new Info();
    return Info;
})();
var Warn = (function () {
    function Warn() {

    };
    Warn.value = new Warn();
    return Warn;
})();
var $$Error = (function () {
    function $$Error() {

    };
    $$Error.value = new $$Error();
    return $$Error;
})();
var Log = function (x) {
    return x;
};
var reason = function (v) {
    return v.reason;
};
var mkLog = function (dictNow) {
    return function (logReason) {
        return function (inputMessage) {
            var formatTimestamp = (function () {
                var $400 = Data_Either.either(Data_Function["const"]("(Failed to assign time)"))(Control_Category.identity(Control_Category.categoryFn));
                var $401 = Data_Formatter_DateTime.formatDateTime("YYYY-DD-MM hh:mm:ss a");
                return function ($402) {
                    return $400($401($402));
                };
            })();
            return Control_Bind.bind((dictNow.Monad0()).Bind1())(Conduit_Capability_Now.nowDateTime(dictNow))(function (now) {
                var headerWith = function (start) {
                    return "[" + (start + (": " + (formatTimestamp(now) + ("]\x0a" + inputMessage))));
                };
                var formattedLog = (function () {
                    if (logReason instanceof Debug) {
                        return headerWith("DEBUG");
                    };
                    if (logReason instanceof Info) {
                        return headerWith("INFO");
                    };
                    if (logReason instanceof Warn) {
                        return headerWith("WARNING");
                    };
                    if (logReason instanceof $$Error) {
                        return headerWith("ERROR");
                    };
                    throw new Error("Failed pattern match at Conduit.Data.Log (line 95, column 20 - line 99, column 34): " + [ logReason.constructor.name ]);
                })();
                return Control_Applicative.pure((dictNow.Monad0()).Applicative0())({
                    reason: logReason,
                    timestamp: now,
                    message: formattedLog
                });
            });
        };
    };
};
var message = function (v) {
    return v.message;
};
module.exports = {
    Debug: Debug,
    Info: Info,
    Warn: Warn,
    "Error": $$Error,
    message: message,
    reason: reason,
    mkLog: mkLog
};