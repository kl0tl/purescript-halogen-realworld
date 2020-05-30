// Generated by purs version 0.13.8
"use strict";
var Effect_AVar = require("../Effect.AVar/index.js");
var Effect_Aff = require("../Effect.Aff/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var take = function (avar) {
    return Effect_Aff.makeAff(function (k) {
        return function __do() {
            var c = Effect_AVar.take(avar)(k)();
            return Effect_Aff.effectCanceler(c);
        };
    });
};
var put = function (value) {
    return function (avar) {
        return Effect_Aff.makeAff(function (k) {
            return function __do() {
                var c = Effect_AVar.put(value)(avar)(k)();
                return Effect_Aff.effectCanceler(c);
            };
        });
    };
};
var kill = function (error) {
    var $1992 = Effect_Class.liftEffect(Effect_Aff.monadEffectAff);
    var $1993 = Effect_AVar.kill(error);
    return function ($1994) {
        return $1992($1993($1994));
    };
};
var empty = Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_AVar.empty);
module.exports = {
    empty: empty,
    take: take,
    put: put,
    kill: kill
};