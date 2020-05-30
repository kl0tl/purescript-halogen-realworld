// Generated by purs version 0.13.8
"use strict";
var Conduit_Data_PreciseDateTime = require("../Conduit.Data.PreciseDateTime/index.js");
var Conduit_Data_Profile = require("../Conduit.Data.Profile/index.js");
var Conduit_Data_Utils = require("../Conduit.Data.Utils/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Data_Argonaut_Decode_Class = require("../Data.Argonaut.Decode.Class/index.js");
var Data_Argonaut_Decode_Struct_Tolerant_DecodeJson = require("../Data.Argonaut.Decode.Struct.Tolerant.DecodeJson/index.js");
var Data_Argonaut_Decode_Struct_Tolerant_GDecodeJson = require("../Data.Argonaut.Decode.Struct.Tolerant.GDecodeJson/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Operator_Top = require("../Data.Operator.Top/index.js");
var Data_Struct_Insert_RInsert = require("../Data.Struct.Insert.RInsert/index.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Record_Builder = require("../Record.Builder/index.js");
var Type_Proxying_Symbol = require("../Type.Proxying.Symbol/index.js");
var CommentId = function (x) {
    return x;
};
var newtypeCommentId = new Data_Newtype.Newtype(function (n) {
    return n;
}, CommentId);
var decodeJsonCommentId = Data_Argonaut_Decode_Class.decodeJsonInt;
var decodeComments = function (u) {
    return Control_Bind.composeKleisliFlipped(Data_Either.bindEither)(Data_Traversable.traverse(Data_Traversable.traversableArray)(Data_Either.applicativeEither)(Conduit_Data_Profile.decodeJsonWithAuthor(Data_Argonaut_Decode_Struct_Tolerant_GDecodeJson.gDecodeJson_ConsNilCons_nonPlus()(Data_Argonaut_Decode_Class.decodeJsonString)(Data_Argonaut_Decode_Struct_Tolerant_GDecodeJson.gDecodeJson_ConsNilCons_nonPlus()(Conduit_Data_PreciseDateTime.decodeJsonPreciseDateTime)(Data_Argonaut_Decode_Struct_Tolerant_GDecodeJson.gDecodeJson_ConsNilCons_nonPlus()(decodeJsonCommentId)(Data_Argonaut_Decode_Struct_Tolerant_GDecodeJson.gDecodeJson_NilNilNil(Record_Builder.categoryBuilder)(Data_Operator_Top.top1_Either))(new Data_Symbol.IsSymbol(function ($dollar__unused) {
        return "id";
    }))()(Data_Struct_Insert_RInsert.rinsertBuilder(new Data_Symbol.IsSymbol(function ($dollar__unused) {
        return "id";
    }))(Type_Proxying_Symbol.sProxyingSProxy))(Record_Builder.semigroupoidBuilder))(new Data_Symbol.IsSymbol(function ($dollar__unused) {
        return "createdAt";
    }))()(Data_Struct_Insert_RInsert.rinsertBuilder(new Data_Symbol.IsSymbol(function ($dollar__unused) {
        return "createdAt";
    }))(Type_Proxying_Symbol.sProxyingSProxy))(Record_Builder.semigroupoidBuilder))(new Data_Symbol.IsSymbol(function ($dollar__unused) {
        return "body";
    }))()(Data_Struct_Insert_RInsert.rinsertBuilder(new Data_Symbol.IsSymbol(function ($dollar__unused) {
        return "body";
    }))(Type_Proxying_Symbol.sProxyingSProxy))(Record_Builder.semigroupoidBuilder))()()(u)))(Conduit_Data_Utils.decodeAt(Data_Argonaut_Decode_Struct_Tolerant_DecodeJson.decodeDecodeJson(Data_Argonaut_Decode_Class.decodeArray(Data_Argonaut_Decode_Class.decodeJsonJson)))("comments"));
};
module.exports = {
    CommentId: CommentId,
    decodeComments: decodeComments,
    newtypeCommentId: newtypeCommentId,
    decodeJsonCommentId: decodeJsonCommentId
};