// Generated by purs version 0.13.8
"use strict";
var $foreign = require("./foreign.js");
var $$throw = function ($2011) {
    return $foreign.throwException($foreign.error($2011));
};
module.exports = {
    "throw": $$throw,
    error: $foreign.error,
    message: $foreign.message,
    throwException: $foreign.throwException
};
