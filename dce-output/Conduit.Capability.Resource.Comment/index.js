// Generated by purs version 0.13.8
"use strict";
var Control_Monad_Trans_Class = require("../Control.Monad.Trans.Class/index.js");
var Halogen_Query_HalogenM = require("../Halogen.Query.HalogenM/index.js");
var ManageComment = function (Monad0, createComment, deleteComment, getComments) {
    this.Monad0 = Monad0;
    this.createComment = createComment;
    this.deleteComment = deleteComment;
    this.getComments = getComments;
};
var getComments = function (dict) {
    return dict.getComments;
};
var deleteComment = function (dict) {
    return dict.deleteComment;
};
var createComment = function (dict) {
    return dict.createComment;
};
var manageCommentHalogenM = function (dictManageComment) {
    return new ManageComment(function ($dollar__unused) {
        return Halogen_Query_HalogenM.monadHalogenM;
    }, function (s) {
        var $246 = Control_Monad_Trans_Class.lift(Halogen_Query_HalogenM.monadTransHalogenM)(dictManageComment.Monad0());
        var $247 = createComment(dictManageComment)(s);
        return function ($248) {
            return $246($247($248));
        };
    }, function (s) {
        var $249 = Control_Monad_Trans_Class.lift(Halogen_Query_HalogenM.monadTransHalogenM)(dictManageComment.Monad0());
        var $250 = deleteComment(dictManageComment)(s);
        return function ($251) {
            return $249($250($251));
        };
    }, (function () {
        var $252 = Control_Monad_Trans_Class.lift(Halogen_Query_HalogenM.monadTransHalogenM)(dictManageComment.Monad0());
        var $253 = getComments(dictManageComment);
        return function ($254) {
            return $252($253($254));
        };
    })());
};
module.exports = {
    createComment: createComment,
    deleteComment: deleteComment,
    getComments: getComments,
    ManageComment: ManageComment,
    manageCommentHalogenM: manageCommentHalogenM
};