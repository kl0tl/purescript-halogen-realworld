// Generated by purs version 0.13.8
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var monadEffect = new Control_Monad.Monad(function ($dollar__unused) {
    return applicativeEffect;
}, function ($dollar__unused) {
    return bindEffect;
});
var bindEffect = new Control_Bind.Bind(function ($dollar__unused) {
    return applyEffect;
}, $foreign.bindE);
var applyEffect = new Control_Apply.Apply(function ($dollar__unused) {
    return functorEffect;
}, Control_Monad.ap(monadEffect));
var applicativeEffect = new Control_Applicative.Applicative(function ($dollar__unused) {
    return applyEffect;
}, $foreign.pureE);
var functorEffect = new Data_Functor.Functor(Control_Applicative.liftA1(applicativeEffect));
module.exports = {
    functorEffect: functorEffect,
    applyEffect: applyEffect,
    applicativeEffect: applicativeEffect,
    bindEffect: bindEffect,
    monadEffect: monadEffect,
    untilE: $foreign.untilE
};