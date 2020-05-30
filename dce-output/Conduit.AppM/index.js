// Generated by purs version 0.13.6
import * as Conduit_Api_Endpoint from "../Conduit.Api.Endpoint/index.js";
import * as Conduit_Api_Request from "../Conduit.Api.Request/index.js";
import * as Conduit_Api_Utils from "../Conduit.Api.Utils/index.js";
import * as Conduit_Capability_LogMessages from "../Conduit.Capability.LogMessages/index.js";
import * as Conduit_Capability_Navigate from "../Conduit.Capability.Navigate/index.js";
import * as Conduit_Capability_Now from "../Conduit.Capability.Now/index.js";
import * as Conduit_Capability_Resource_Article from "../Conduit.Capability.Resource.Article/index.js";
import * as Conduit_Capability_Resource_Comment from "../Conduit.Capability.Resource.Comment/index.js";
import * as Conduit_Capability_Resource_Tag from "../Conduit.Capability.Resource.Tag/index.js";
import * as Conduit_Capability_Resource_User from "../Conduit.Capability.Resource.User/index.js";
import * as Conduit_Data_Article from "../Conduit.Data.Article/index.js";
import * as Conduit_Data_Avatar from "../Conduit.Data.Avatar/index.js";
import * as Conduit_Data_Comment from "../Conduit.Data.Comment/index.js";
import * as Conduit_Data_Email from "../Conduit.Data.Email/index.js";
import * as Conduit_Data_Log from "../Conduit.Data.Log/index.js";
import * as Conduit_Data_Profile from "../Conduit.Data.Profile/index.js";
import * as Conduit_Data_Route from "../Conduit.Data.Route/index.js";
import * as Conduit_Data_Username from "../Conduit.Data.Username/index.js";
import * as Conduit_Data_Utils from "../Conduit.Data.Utils/index.js";
import * as Conduit_Env from "../Conduit.Env/index.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad_Reader_Class from "../Control.Monad.Reader.Class/index.js";
import * as Control_Monad_Reader_Trans from "../Control.Monad.Reader.Trans/index.js";
import * as Data_Argonaut_Decode_Class from "../Data.Argonaut.Decode.Class/index.js";
import * as Data_Argonaut_Decode_Struct_Tolerant_DecodeJson from "../Data.Argonaut.Decode.Struct.Tolerant.DecodeJson/index.js";
import * as Data_Argonaut_Decode_Struct_Tolerant_GDecodeJson from "../Data.Argonaut.Decode.Struct.Tolerant.GDecodeJson/index.js";
import * as Data_Argonaut_Encode_Class from "../Data.Argonaut.Encode.Class/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Operator_Top from "../Data.Operator.Top/index.js";
import * as Data_Struct_Insert_RInsert from "../Data.Struct.Insert.RInsert/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect_Aff from "../Effect.Aff/index.js";
import * as Effect_Aff_Bus from "../Effect.Aff.Bus/index.js";
import * as Effect_Aff_Class from "../Effect.Aff.Class/index.js";
import * as Effect_Class from "../Effect.Class/index.js";
import * as Effect_Console from "../Effect.Console/index.js";
import * as Effect_Now from "../Effect.Now/index.js";
import * as Effect_Ref from "../Effect.Ref/index.js";
import * as Record_Builder from "../Record.Builder/index.js";
import * as Routing_Duplex from "../Routing.Duplex/index.js";
import * as Routing_Hash from "../Routing.Hash/index.js";
import * as Type_Equality from "../Type.Equality/index.js";
import * as Type_Proxying_Symbol from "../Type.Proxying.Symbol/index.js";
var AppM = function (x) {
    return x;
};
var runAppM = function (env) {
    return function (v) {
        return Control_Monad_Reader_Trans.runReaderT(v)(env);
    };
};
var monadEffectAppM = Control_Monad_Reader_Trans.monadEffectReader(Effect_Aff.monadEffectAff);
var monadAppM = Control_Monad_Reader_Trans.monadReaderT(Effect_Aff.monadAff);
var monadAskAppM = function (dictTypeEquals) {
    return new Control_Monad_Reader_Class.MonadAsk(function ($dollar__unused) {
        return monadAppM;
    }, AppM(Control_Monad_Reader_Class.asks(Control_Monad_Reader_Trans.monadAskReaderT(Effect_Aff.monadAff))(Type_Equality.from(dictTypeEquals))));
};
var nowAppM = new Conduit_Capability_Now.Now(function ($dollar__unused) {
    return monadAppM;
}, Effect_Class.liftEffect(monadEffectAppM)(Effect_Now.now), Effect_Class.liftEffect(monadEffectAppM)(Effect_Now.nowDate), Effect_Class.liftEffect(monadEffectAppM)(Effect_Now.nowDateTime), Effect_Class.liftEffect(monadEffectAppM)(Effect_Now.nowTime));
var monadAffAppM = Effect_Aff_Class.monadAffReader(Effect_Aff_Class.monadAffAff);
var functorAppM = Control_Monad_Reader_Trans.functorReaderT(Effect_Aff.functorAff);
var bindAppM = Control_Monad_Reader_Trans.bindReaderT(Effect_Aff.bindAff);
var logMessagesAppM = new Conduit_Capability_LogMessages.LogMessages(function ($dollar__unused) {
    return monadAppM;
}, function (log) {
    return Control_Bind.bind(bindAppM)(Control_Monad_Reader_Class.ask(monadAskAppM(Type_Equality.refl)))(function (env) {
        return Effect_Class.liftEffect(monadEffectAppM)((function () {
            var v = Conduit_Data_Log.reason(log);
            if (env.logLevel instanceof Conduit_Env.Prod && v instanceof Conduit_Data_Log.Debug) {
                return Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit);
            };
            return Effect_Console.log(Conduit_Data_Log.message(log));
        })());
    });
});
var manageArticleAppM = new Conduit_Capability_Resource_Article.ManageArticle(function ($dollar__unused) {
    return monadAppM;
}, function (article) {
    var method = Conduit_Api_Request.Post.create(Data_Maybe.Just.create(Data_Argonaut_Encode_Class.encodeJson(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonArray(Data_Argonaut_Encode_Class.encodeJsonJString))(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonNil)(new Data_Symbol.IsSymbol(function ($dollar__unused) {
        return "title";
    }))())(new Data_Symbol.IsSymbol(function ($dollar__unused) {
        return "tagList";
    }))())(new Data_Symbol.IsSymbol(function ($dollar__unused) {
        return "description";
    }))())(new Data_Symbol.IsSymbol(function ($dollar__unused) {
        return "body";
    }))())())(Data_Argonaut_Encode_Class.gEncodeJsonNil)(new Data_Symbol.IsSymbol(function ($dollar__unused) {
        return "article";
    }))())())({
        article: article
    })));
    return Control_Bind.bind(bindAppM)(Conduit_Api_Utils.mkAuthRequest(monadAffAppM)(monadAskAppM(Type_Equality.refl))({
        endpoint: new Conduit_Api_Endpoint.Articles(Conduit_Api_Endpoint.noArticleParams),
        method: method
    }))(Conduit_Api_Utils.decodeWithUser(monadEffectAppM)(monadAskAppM(Type_Equality.refl))(logMessagesAppM)(nowAppM)(Conduit_Data_Article.decodeArticle));
}, function (slug) {
    return Data_Functor["void"](functorAppM)(Conduit_Api_Utils.mkAuthRequest(monadAffAppM)(monadAskAppM(Type_Equality.refl))({
        endpoint: new Conduit_Api_Endpoint.Article(slug),
        method: Conduit_Api_Request.Delete.value
    }));
}, function (slug) {
    return Control_Bind.bind(bindAppM)(Conduit_Api_Utils.mkAuthRequest(monadAffAppM)(monadAskAppM(Type_Equality.refl))({
        endpoint: new Conduit_Api_Endpoint.Favorite(slug),
        method: new Conduit_Api_Request.Post(Data_Maybe.Nothing.value)
    }))(Conduit_Api_Utils.decodeWithUser(monadEffectAppM)(monadAskAppM(Type_Equality.refl))(logMessagesAppM)(nowAppM)(Conduit_Data_Article.decodeArticle));
}, function (slug) {
    return Control_Bind.bind(bindAppM)(Conduit_Api_Utils.mkRequest(monadAffAppM)(monadAskAppM(Type_Equality.refl))({
        endpoint: new Conduit_Api_Endpoint.Article(slug),
        method: Conduit_Api_Request.Get.value
    }))(Conduit_Api_Utils.decodeWithUser(monadEffectAppM)(monadAskAppM(Type_Equality.refl))(logMessagesAppM)(nowAppM)(Conduit_Data_Article.decodeArticle));
}, function (fields) {
    return Control_Bind.bind(bindAppM)(Conduit_Api_Utils.mkRequest(monadAffAppM)(monadAskAppM(Type_Equality.refl))({
        endpoint: new Conduit_Api_Endpoint.Articles(fields),
        method: Conduit_Api_Request.Get.value
    }))(Conduit_Api_Utils.decodeWithUser(monadEffectAppM)(monadAskAppM(Type_Equality.refl))(logMessagesAppM)(nowAppM)(Conduit_Data_Article.decodeArticles));
}, function (params) {
    return Control_Bind.bind(bindAppM)(Conduit_Api_Utils.mkAuthRequest(monadAffAppM)(monadAskAppM(Type_Equality.refl))({
        endpoint: new Conduit_Api_Endpoint.Feed(params),
        method: Conduit_Api_Request.Get.value
    }))(Conduit_Api_Utils.decodeWithUser(monadEffectAppM)(monadAskAppM(Type_Equality.refl))(logMessagesAppM)(nowAppM)(Conduit_Data_Article.decodeArticles));
}, function (slug) {
    return Control_Bind.bind(bindAppM)(Conduit_Api_Utils.mkAuthRequest(monadAffAppM)(monadAskAppM(Type_Equality.refl))({
        endpoint: new Conduit_Api_Endpoint.Favorite(slug),
        method: Conduit_Api_Request.Delete.value
    }))(Conduit_Api_Utils.decodeWithUser(monadEffectAppM)(monadAskAppM(Type_Equality.refl))(logMessagesAppM)(nowAppM)(Conduit_Data_Article.decodeArticle));
}, function (slug) {
    return function (article) {
        var method = Conduit_Api_Request.Put.create(Data_Maybe.Just.create(Data_Argonaut_Encode_Class.encodeJson(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonArray(Data_Argonaut_Encode_Class.encodeJsonJString))(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonNil)(new Data_Symbol.IsSymbol(function ($dollar__unused) {
            return "title";
        }))())(new Data_Symbol.IsSymbol(function ($dollar__unused) {
            return "tagList";
        }))())(new Data_Symbol.IsSymbol(function ($dollar__unused) {
            return "description";
        }))())(new Data_Symbol.IsSymbol(function ($dollar__unused) {
            return "body";
        }))())())(Data_Argonaut_Encode_Class.gEncodeJsonNil)(new Data_Symbol.IsSymbol(function ($dollar__unused) {
            return "article";
        }))())())({
            article: article
        })));
        return Control_Bind.bind(bindAppM)(Conduit_Api_Utils.mkAuthRequest(monadAffAppM)(monadAskAppM(Type_Equality.refl))({
            endpoint: new Conduit_Api_Endpoint.Article(slug),
            method: method
        }))(Conduit_Api_Utils.decodeWithUser(monadEffectAppM)(monadAskAppM(Type_Equality.refl))(logMessagesAppM)(nowAppM)(Conduit_Data_Article.decodeArticle));
    };
});
var manageCommentAppM = new Conduit_Capability_Resource_Comment.ManageComment(function ($dollar__unused) {
    return monadAppM;
}, function (slug) {
    return function (body) {
        var method = Conduit_Api_Request.Post.create(Data_Maybe.Just.create(Data_Argonaut_Encode_Class.encodeJson(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonNil)(new Data_Symbol.IsSymbol(function ($dollar__unused) {
            return "body";
        }))())())({
            body: body
        })));
        return Data_Functor["void"](functorAppM)(Conduit_Api_Utils.mkAuthRequest(monadAffAppM)(monadAskAppM(Type_Equality.refl))({
            endpoint: new Conduit_Api_Endpoint.Comments(slug),
            method: method
        }));
    };
}, function (slug) {
    return function (id) {
        return Data_Functor["void"](functorAppM)(Conduit_Api_Utils.mkAuthRequest(monadAffAppM)(monadAskAppM(Type_Equality.refl))({
            endpoint: new Conduit_Api_Endpoint.Comment(slug, id),
            method: Conduit_Api_Request.Delete.value
        }));
    };
}, function (slug) {
    return Control_Bind.bind(bindAppM)(Conduit_Api_Utils.mkRequest(monadAffAppM)(monadAskAppM(Type_Equality.refl))({
        endpoint: new Conduit_Api_Endpoint.Comments(slug),
        method: Conduit_Api_Request.Get.value
    }))(Conduit_Api_Utils.decodeWithUser(monadEffectAppM)(monadAskAppM(Type_Equality.refl))(logMessagesAppM)(nowAppM)(Conduit_Data_Comment.decodeComments));
});
var manageTagAppM = new Conduit_Capability_Resource_Tag.ManageTag(function ($dollar__unused) {
    return monadAppM;
}, Control_Bind.bind(bindAppM)(Conduit_Api_Utils.mkRequest(monadAffAppM)(monadAskAppM(Type_Equality.refl))({
    endpoint: Conduit_Api_Endpoint.Tags.value,
    method: Conduit_Api_Request.Get.value
}))(Conduit_Api_Utils.decode(logMessagesAppM)(nowAppM)(Conduit_Data_Utils.decodeAt(Data_Argonaut_Decode_Struct_Tolerant_DecodeJson.decodeDecodeJson(Data_Argonaut_Decode_Class.decodeArray(Data_Argonaut_Decode_Class.decodeJsonString)))("tags"))));
var manageUserAppM = new Conduit_Capability_Resource_User.ManageUser(function ($dollar__unused) {
    return monadAppM;
}, function (username) {
    return Control_Bind.bind(bindAppM)(Conduit_Api_Utils.mkAuthRequest(monadAffAppM)(monadAskAppM(Type_Equality.refl))({
        endpoint: new Conduit_Api_Endpoint.Follow(username),
        method: new Conduit_Api_Request.Post(Data_Maybe.Nothing.value)
    }))(Conduit_Api_Utils.decodeWithUser(monadEffectAppM)(monadAskAppM(Type_Equality.refl))(logMessagesAppM)(nowAppM)(Conduit_Data_Profile.decodeProfileAuthor));
}, function (username) {
    return Control_Bind.bind(bindAppM)(Conduit_Api_Utils.mkRequest(monadAffAppM)(monadAskAppM(Type_Equality.refl))({
        endpoint: new Conduit_Api_Endpoint.Profiles(username),
        method: Conduit_Api_Request.Get.value
    }))(Conduit_Api_Utils.decodeWithUser(monadEffectAppM)(monadAskAppM(Type_Equality.refl))(logMessagesAppM)(nowAppM)(Conduit_Data_Profile.decodeProfileAuthor));
}, Control_Bind.bind(bindAppM)(Conduit_Api_Utils.mkAuthRequest(monadAffAppM)(monadAskAppM(Type_Equality.refl))({
    endpoint: Conduit_Api_Endpoint.User.value,
    method: Conduit_Api_Request.Get.value
}))(Conduit_Api_Utils.decode(logMessagesAppM)(nowAppM)(Conduit_Data_Utils.decodeAt(Data_Argonaut_Decode_Struct_Tolerant_DecodeJson.decodeJsonRecord(Data_Argonaut_Decode_Struct_Tolerant_GDecodeJson.gDecodeJson_ConsNilCons_Plus()(Data_Argonaut_Decode_Class.decodeJsonMaybe(Data_Argonaut_Decode_Class.decodeJsonString))(Data_Argonaut_Decode_Struct_Tolerant_GDecodeJson.gDecodeJson_ConsNilCons_nonPlus()(Conduit_Data_Email.decodeJsonEmail)(Data_Argonaut_Decode_Struct_Tolerant_GDecodeJson.gDecodeJson_ConsNilCons_Plus()(Data_Argonaut_Decode_Class.decodeJsonMaybe(Conduit_Data_Avatar.decodeJsonAvatar))(Data_Argonaut_Decode_Struct_Tolerant_GDecodeJson.gDecodeJson_ConsNilCons_nonPlus()(Conduit_Data_Username.decodeJsonUsername)(Data_Argonaut_Decode_Struct_Tolerant_GDecodeJson.gDecodeJson_NilNilNil(Record_Builder.categoryBuilder)(Data_Operator_Top.top1_Either))(new Data_Symbol.IsSymbol(function ($dollar__unused) {
    return "username";
}))()(Data_Struct_Insert_RInsert.rinsertBuilder(new Data_Symbol.IsSymbol(function ($dollar__unused) {
    return "username";
}))(Type_Proxying_Symbol.sProxyingSProxy))(Record_Builder.semigroupoidBuilder))(new Data_Symbol.IsSymbol(function ($dollar__unused) {
    return "image";
}))()(Data_Maybe.plusMaybe)(Data_Struct_Insert_RInsert.rinsertBuilder(new Data_Symbol.IsSymbol(function ($dollar__unused) {
    return "image";
}))(Type_Proxying_Symbol.sProxyingSProxy))(Record_Builder.semigroupoidBuilder))(new Data_Symbol.IsSymbol(function ($dollar__unused) {
    return "email";
}))()(Data_Struct_Insert_RInsert.rinsertBuilder(new Data_Symbol.IsSymbol(function ($dollar__unused) {
    return "email";
}))(Type_Proxying_Symbol.sProxyingSProxy))(Record_Builder.semigroupoidBuilder))(new Data_Symbol.IsSymbol(function ($dollar__unused) {
    return "bio";
}))()(Data_Maybe.plusMaybe)(Data_Struct_Insert_RInsert.rinsertBuilder(new Data_Symbol.IsSymbol(function ($dollar__unused) {
    return "bio";
}))(Type_Proxying_Symbol.sProxyingSProxy))(Record_Builder.semigroupoidBuilder))())("user"))), Conduit_Api_Utils.authenticate(monadAffAppM)(monadAskAppM(Type_Equality.refl))(logMessagesAppM)(nowAppM)(Conduit_Api_Request.login(monadAffAppM)), Conduit_Api_Utils.authenticate(monadAffAppM)(monadAskAppM(Type_Equality.refl))(logMessagesAppM)(nowAppM)(Conduit_Api_Request.register(monadAffAppM)), function (username) {
    return Control_Bind.bind(bindAppM)(Conduit_Api_Utils.mkAuthRequest(monadAffAppM)(monadAskAppM(Type_Equality.refl))({
        endpoint: new Conduit_Api_Endpoint.Follow(username),
        method: Conduit_Api_Request.Delete.value
    }))(Conduit_Api_Utils.decodeWithUser(monadEffectAppM)(monadAskAppM(Type_Equality.refl))(logMessagesAppM)(nowAppM)(Conduit_Data_Profile.decodeProfileAuthor));
}, function (fields) {
    return Data_Functor["void"](functorAppM)(Conduit_Api_Utils.mkAuthRequest(monadAffAppM)(monadAskAppM(Type_Equality.refl))({
        endpoint: Conduit_Api_Endpoint.User.value,
        method: new Conduit_Api_Request.Put(new Data_Maybe.Just(Data_Argonaut_Encode_Class.encodeJson(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonMaybe(Data_Argonaut_Encode_Class.encodeJsonJString))(Data_Argonaut_Encode_Class.gEncodeJsonCons(Conduit_Data_Email.encodeJsonEmail)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonMaybe(Conduit_Data_Avatar.encodeJsonAvatar))(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonMaybe(Data_Argonaut_Encode_Class.encodeJsonJString))(Data_Argonaut_Encode_Class.gEncodeJsonCons(Conduit_Data_Username.encodeJsonUsername)(Data_Argonaut_Encode_Class.gEncodeJsonNil)(new Data_Symbol.IsSymbol(function ($dollar__unused) {
            return "username";
        }))())(new Data_Symbol.IsSymbol(function ($dollar__unused) {
            return "password";
        }))())(new Data_Symbol.IsSymbol(function ($dollar__unused) {
            return "image";
        }))())(new Data_Symbol.IsSymbol(function ($dollar__unused) {
            return "email";
        }))())(new Data_Symbol.IsSymbol(function ($dollar__unused) {
            return "bio";
        }))())())(fields)))
    }));
});
var navigateAppM = new Conduit_Capability_Navigate.Navigate(function ($dollar__unused) {
    return monadAppM;
}, Control_Bind.bind(bindAppM)(Control_Monad_Reader_Class.asks(monadAskAppM(Type_Equality.refl))(function (v) {
    return v.userEnv;
}))(function (v) {
    return Control_Bind.discard(Control_Bind.discardUnit)(bindAppM)(Effect_Class.liftEffect(monadEffectAppM)(Control_Bind.discard(Control_Bind.discardUnit)(Effect.bindEffect)(Effect_Ref.write(Data_Maybe.Nothing.value)(v.currentUser))(function ($dollar__unused) {
        return Conduit_Api_Request.removeToken;
    })))(function ($dollar__unused) {
        return Control_Bind.discard(Control_Bind.discardUnit)(bindAppM)(Effect_Aff_Class.liftAff(monadAffAppM)(Effect_Aff_Bus.write(Data_Maybe.Nothing.value)(v.userBus)))(function ($dollar__unused) {
            return Conduit_Capability_Navigate.navigate(navigateAppM)(Conduit_Data_Route.Home.value);
        });
    });
}), (function () {
    var $216 = Effect_Class.liftEffect(monadEffectAppM);
    var $217 = Routing_Duplex.print(Conduit_Data_Route.routeCodec);
    return function ($218) {
        return $216(Routing_Hash.setHash($217($218)));
    };
})());
export {
    AppM,
    runAppM,
    functorAppM,
    bindAppM,
    monadAppM,
    monadEffectAppM,
    monadAffAppM,
    monadAskAppM,
    nowAppM,
    logMessagesAppM,
    navigateAppM,
    manageUserAppM,
    manageTagAppM,
    manageCommentAppM,
    manageArticleAppM
};
