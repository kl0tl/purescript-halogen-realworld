// Generated by purs version 0.13.8
"use strict";
var Conduit_Component_HTML_Utils = require("../Conduit.Component.HTML.Utils/index.js");
var Conduit_Data_Avatar = require("../Conduit.Data.Avatar/index.js");
var Conduit_Data_Route = require("../Conduit.Data.Route/index.js");
var Conduit_Data_Username = require("../Conduit.Data.Username/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Halogen_HTML_Core = require("../Halogen.HTML.Core/index.js");
var Halogen_HTML_Elements = require("../Halogen.HTML.Elements/index.js");
var Halogen_HTML_Properties = require("../Halogen.HTML.Properties/index.js");
var header = function (currentUser) {
    return function (route) {
        var navItem = function (r) {
            return function (html) {
                return Halogen_HTML_Elements.li([ Conduit_Component_HTML_Utils.css("nav-item") ])([ Halogen_HTML_Elements.a([ Conduit_Component_HTML_Utils.css("nav-link" + Data_Monoid.guard(Data_Monoid.monoidString)(Data_Eq.eq(Conduit_Data_Route.eqRoute)(route)(r))(" active")), Conduit_Component_HTML_Utils.safeHref(r) ])(html) ]);
            };
        };
        return Halogen_HTML_Elements.nav([ Conduit_Component_HTML_Utils.css("navbar navbar-light") ])([ Halogen_HTML_Elements.div([ Conduit_Component_HTML_Utils.css("container") ])([ Halogen_HTML_Elements.a([ Conduit_Component_HTML_Utils.css("navbar-brand"), Conduit_Component_HTML_Utils.safeHref(Conduit_Data_Route.Home.value) ])([ Halogen_HTML_Core.text("conduit") ]), Halogen_HTML_Elements.ul([ Conduit_Component_HTML_Utils.css("nav navbar-nav pull-xs-right") ])([ navItem(Conduit_Data_Route.Home.value)([ Halogen_HTML_Core.text("Home") ]), Conduit_Component_HTML_Utils.whenElem(Data_Maybe.isJust(currentUser))(function (v) {
            return navItem(Conduit_Data_Route.Editor.value)([ Halogen_HTML_Elements.i([ Conduit_Component_HTML_Utils.css("ion-compose") ])([ Halogen_HTML_Core.text(" New Post") ]) ]);
        }), Conduit_Component_HTML_Utils.whenElem(Data_Maybe.isJust(currentUser))(function (v) {
            return navItem(Conduit_Data_Route.Settings.value)([ Halogen_HTML_Elements.i([ Conduit_Component_HTML_Utils.css("ion-gear-a") ])([ Halogen_HTML_Core.text(" Settings") ]) ]);
        }), Conduit_Component_HTML_Utils.maybeElem(currentUser)(function (profile) {
            return navItem(new Conduit_Data_Route.Profile(profile.username))([ Halogen_HTML_Elements.img([ Conduit_Component_HTML_Utils.css("user-pic"), Halogen_HTML_Properties.src(Conduit_Data_Avatar.toStringWithDefault(profile.image)) ]), Halogen_HTML_Core.text(Conduit_Data_Username.toString(profile.username)) ]);
        }), Conduit_Component_HTML_Utils.whenElem(Data_Maybe.isNothing(currentUser))(function (v) {
            return navItem(Conduit_Data_Route.Login.value)([ Halogen_HTML_Core.text("Log in") ]);
        }), Conduit_Component_HTML_Utils.whenElem(Data_Maybe.isNothing(currentUser))(function (v) {
            return navItem(Conduit_Data_Route.Register.value)([ Halogen_HTML_Core.text("Sign up") ]);
        }) ]) ]) ]);
    };
};
module.exports = {
    header: header
};
