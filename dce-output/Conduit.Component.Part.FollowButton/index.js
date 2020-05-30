// Generated by purs version 0.13.8
"use strict";
var Conduit_Capability_Resource_User = require("../Conduit.Capability.Resource.User/index.js");
var Conduit_Component_HTML_Utils = require("../Conduit.Component.HTML.Utils/index.js");
var Conduit_Data_Profile = require("../Conduit.Data.Profile/index.js");
var Conduit_Data_Username = require("../Conduit.Data.Username/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_State_Class = require("../Control.Monad.State.Class/index.js");
var Control_Monad_Trans_Class = require("../Control.Monad.Trans.Class/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Lens_Fold = require("../Data.Lens.Fold/index.js");
var Data_Lens_Internal_Forget = require("../Data.Lens.Internal.Forget/index.js");
var Data_Lens_Internal_Wander = require("../Data.Lens.Internal.Wander/index.js");
var Data_Lens_Setter = require("../Data.Lens.Setter/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Maybe_First = require("../Data.Maybe.First/index.js");
var Halogen_HTML_Core = require("../Halogen.HTML.Core/index.js");
var Halogen_HTML_Elements = require("../Halogen.HTML.Elements/index.js");
var Halogen_HTML_Events = require("../Halogen.HTML.Events/index.js");
var Halogen_Query_HalogenM = require("../Halogen.Query.HalogenM/index.js");
var followButton = function (followAct) {
    return function (unfollowAct) {
        return function (author) {
            if (author.relation instanceof Conduit_Data_Profile.Following) {
                return Halogen_HTML_Elements.button([ Conduit_Component_HTML_Utils.css("btn btn-sm action-btn btn-secondary"), Halogen_HTML_Events.onClick(function (v) {
                    return new Data_Maybe.Just(unfollowAct);
                }) ])([ Halogen_HTML_Core.text(" Unfollow " + Conduit_Data_Username.toString(author.username)) ]);
            };
            if (author.relation instanceof Conduit_Data_Profile.NotFollowing) {
                return Halogen_HTML_Elements.button([ Conduit_Component_HTML_Utils.css("btn btn-sm action-btn btn-outline-secondary"), Halogen_HTML_Events.onClick(function (v) {
                    return new Data_Maybe.Just(followAct);
                }) ])([ Halogen_HTML_Elements.i([ Conduit_Component_HTML_Utils.css("ion-plus-round") ])([  ]), Halogen_HTML_Core.text(" Follow " + Conduit_Data_Username.toString(author.username)) ]);
            };
            if (author.relation instanceof Conduit_Data_Profile.You) {
                return Halogen_HTML_Core.text("");
            };
            throw new Error("Failed pattern match at Conduit.Component.Part.FollowButton (line 30, column 45 - line 47, column 20): " + [ author.relation.constructor.name ]);
        };
    };
};
var act = function (dictManageUser) {
    return function (cond) {
        return function (f) {
            return function (_author) {
                return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (st) {
                    return Data_Foldable.for_(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Foldable.foldableMaybe)(Data_Lens_Fold.preview(_author(Data_Lens_Internal_Forget.wanderForget(Data_Maybe_First.monoidFirst)))(st))(function (author) {
                        return Control_Applicative.when(Halogen_Query_HalogenM.applicativeHalogenM)(cond(author))(Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_Trans_Class.lift(Halogen_Query_HalogenM.monadTransHalogenM)(dictManageUser.Monad0())(f(author.username)))(function (mbProfile) {
                            return Data_Foldable.for_(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Foldable.foldableMaybe)(mbProfile)((function () {
                                var $304 = Control_Monad_State_Class.modify_(Halogen_Query_HalogenM.monadStateHalogenM);
                                var $305 = Data_Lens_Setter.set(_author(Data_Lens_Internal_Wander.wanderFunction));
                                return function ($306) {
                                    return $304($305($306));
                                };
                            })());
                        }));
                    });
                });
            };
        };
    };
};
var follow = function (dictManageUser) {
    return function (_author) {
        return act(dictManageUser)((function () {
            var $307 = Data_Eq.eq(Conduit_Data_Profile.eqRelation)(Conduit_Data_Profile.NotFollowing.value);
            return function ($308) {
                return $307((function (v) {
                    return v.relation;
                })($308));
            };
        })())(Conduit_Capability_Resource_User.followUser(dictManageUser))(function (dictWander) {
            return _author(dictWander);
        });
    };
};
var unfollow = function (dictManageUser) {
    return function (_author) {
        return act(dictManageUser)((function () {
            var $309 = Data_Eq.eq(Conduit_Data_Profile.eqRelation)(Conduit_Data_Profile.Following.value);
            return function ($310) {
                return $309((function (v) {
                    return v.relation;
                })($310));
            };
        })())(Conduit_Capability_Resource_User.unfollowUser(dictManageUser))(function (dictWander) {
            return _author(dictWander);
        });
    };
};
module.exports = {
    followButton: followButton,
    follow: follow,
    unfollow: unfollow
};