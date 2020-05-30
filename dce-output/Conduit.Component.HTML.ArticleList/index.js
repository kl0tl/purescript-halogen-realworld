// Generated by purs version 0.13.8
"use strict";
var Conduit_Component_HTML_Utils = require("../Conduit.Component.HTML.Utils/index.js");
var Conduit_Component_Part_FavoriteButton = require("../Conduit.Component.Part.FavoriteButton/index.js");
var Conduit_Data_Avatar = require("../Conduit.Data.Avatar/index.js");
var Conduit_Data_PreciseDateTime = require("../Conduit.Data.PreciseDateTime/index.js");
var Conduit_Data_Route = require("../Conduit.Data.Route/index.js");
var Conduit_Data_Username = require("../Conduit.Data.Username/index.js");
var Data_Array = require("../Data.Array/index.js");
var Data_Enum = require("../Data.Enum/index.js");
var Data_EuclideanRing = require("../Data.EuclideanRing/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Unfoldable1 = require("../Data.Unfoldable1/index.js");
var Halogen_HTML_Core = require("../Halogen.HTML.Core/index.js");
var Halogen_HTML_Elements = require("../Halogen.HTML.Elements/index.js");
var Halogen_HTML_Events = require("../Halogen.HTML.Events/index.js");
var Halogen_HTML_Properties = require("../Halogen.HTML.Properties/index.js");
var Network_RemoteData = require("../Network.RemoteData/index.js");
var renderTag = function (tag) {
    return Halogen_HTML_Elements.li([ Conduit_Component_HTML_Utils.css("tag-default tag-pill tag-outline") ])([ Halogen_HTML_Core.text(tag) ]);
};
var renderPageLink = function (act) {
    return function (activeIndex) {
        return function (index) {
            return Halogen_HTML_Elements.li([ Conduit_Component_HTML_Utils.css("page-item" + Data_Monoid.guard(Data_Monoid.monoidString)(activeIndex === index)(" active")) ])([ Halogen_HTML_Elements.a([ Conduit_Component_HTML_Utils.css("page-link"), Halogen_HTML_Properties.href(""), Halogen_HTML_Events.onClick((function () {
                var $283 = act(index);
                return function ($284) {
                    return Data_Maybe.Just.create($283($284));
                };
            })()) ])([ Halogen_HTML_Core.text(Data_Show.show(Data_Show.showInt)(index)) ]) ]);
        };
    };
};
var renderPagination = function (act) {
    return function (currentIndex) {
        return function (v) {
            return Conduit_Component_HTML_Utils.whenElem(v.total > 20)(function (v1) {
                return Halogen_HTML_Elements.ul([ Conduit_Component_HTML_Utils.css("pagination") ])(Data_Functor.map(Data_Functor.functorArray)(renderPageLink(act)(currentIndex))(Data_Enum.enumFromTo(Data_Enum.enumInt)(Data_Unfoldable1.unfoldable1Array)(1)(Data_EuclideanRing.div(Data_EuclideanRing.euclideanRingInt)(v.total)(20))));
            });
        };
    };
};
var articlePreview = function (favoriteAct) {
    return function (unfavoriteAct) {
        return function (ix) {
            return function (article) {
                return Halogen_HTML_Elements.div([ Conduit_Component_HTML_Utils.css("article-preview") ])([ Halogen_HTML_Elements.div([ Conduit_Component_HTML_Utils.css("article-meta") ])([ Halogen_HTML_Elements.a([ Conduit_Component_HTML_Utils.safeHref(new Conduit_Data_Route.Profile(article.author.username)) ])([ Halogen_HTML_Elements.img([ Halogen_HTML_Properties.src(Conduit_Data_Avatar.toStringWithDefault(article.author.image)), Halogen_HTML_Properties.alt(Conduit_Data_Username.toString(article.author.username)) ]) ]), Halogen_HTML_Elements.div([ Conduit_Component_HTML_Utils.css("info") ])([ Halogen_HTML_Elements.a([ Conduit_Component_HTML_Utils.css("author"), Conduit_Component_HTML_Utils.safeHref(new Conduit_Data_Route.Profile(article.author.username)) ])([ Halogen_HTML_Core.text(Conduit_Data_Username.toString(article.author.username)) ]), Halogen_HTML_Elements.span([ Conduit_Component_HTML_Utils.css("date") ])([ Halogen_HTML_Core.text(Conduit_Data_PreciseDateTime.toDisplayWeekName(article.createdAt)) ]) ]), Halogen_HTML_Elements.div([ Conduit_Component_HTML_Utils.css("pull-xs-right") ])([ Conduit_Component_Part_FavoriteButton.favoriteButton(Conduit_Component_Part_FavoriteButton.Icon.value)(favoriteAct(ix))(unfavoriteAct(ix))(article) ]) ]), Halogen_HTML_Elements.a([ Conduit_Component_HTML_Utils.css("preview-link"), Conduit_Component_HTML_Utils.safeHref(new Conduit_Data_Route.ViewArticle(article.slug)) ])([ Halogen_HTML_Elements.h1_([ Halogen_HTML_Core.text(article.title) ]), Halogen_HTML_Elements.p_([ Halogen_HTML_Core.text(article.description) ]), Halogen_HTML_Elements.span_([ Halogen_HTML_Core.text("Read more...") ]), Halogen_HTML_Elements.ul([ Conduit_Component_HTML_Utils.css("tag-list") ])(Data_Functor.mapFlipped(Data_Functor.functorArray)(article.tagList)(renderTag)) ]) ]);
            };
        };
    };
};
var articleList = function (favoriteAct) {
    return function (unfavoriteAct) {
        var text = function (str) {
            return Halogen_HTML_Elements.div([ Conduit_Component_HTML_Utils.css("article-preview") ])([ Halogen_HTML_Core.text(str) ]);
        };
        return function (v) {
            if (v instanceof Network_RemoteData.NotAsked) {
                return text("Articles not yet loaded");
            };
            if (v instanceof Network_RemoteData.Loading) {
                return text("Loading...");
            };
            if (v instanceof Network_RemoteData.Failure) {
                return text("Error loading articles: " + v.value0);
            };
            if (v instanceof Network_RemoteData.Success && Data_Foldable.length(Data_Foldable.foldableArray)(Data_Semiring.semiringInt)(v.value0.body) === 0) {
                return text("No articles are here...yet!");
            };
            if (v instanceof Network_RemoteData.Success) {
                return Halogen_HTML_Elements.div_(Data_Array.mapWithIndex(articlePreview(favoriteAct)(unfavoriteAct))(v.value0.body));
            };
            throw new Error("Failed pattern match at Conduit.Component.HTML.ArticleList (line 32, column 41 - line 43, column 78): " + [ v.constructor.name ]);
        };
    };
};
module.exports = {
    articleList: articleList,
    articlePreview: articlePreview,
    renderTag: renderTag,
    renderPagination: renderPagination,
    renderPageLink: renderPageLink
};