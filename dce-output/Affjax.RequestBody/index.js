// Generated by purs version 0.13.6
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_MediaType_Common from "../Data.MediaType.Common/index.js";
var ArrayView = (function () {
    function ArrayView(value0) {
        this.value0 = value0;
    };
    ArrayView.create = function (value0) {
        return new ArrayView(value0);
    };
    return ArrayView;
})();
var Blob = (function () {
    function Blob(value0) {
        this.value0 = value0;
    };
    Blob.create = function (value0) {
        return new Blob(value0);
    };
    return Blob;
})();
var Document = (function () {
    function Document(value0) {
        this.value0 = value0;
    };
    Document.create = function (value0) {
        return new Document(value0);
    };
    return Document;
})();
var $$String = (function () {
    function $$String(value0) {
        this.value0 = value0;
    };
    $$String.create = function (value0) {
        return new $$String(value0);
    };
    return $$String;
})();
var FormData = (function () {
    function FormData(value0) {
        this.value0 = value0;
    };
    FormData.create = function (value0) {
        return new FormData(value0);
    };
    return FormData;
})();
var FormURLEncoded = (function () {
    function FormURLEncoded(value0) {
        this.value0 = value0;
    };
    FormURLEncoded.create = function (value0) {
        return new FormURLEncoded(value0);
    };
    return FormURLEncoded;
})();
var Json = (function () {
    function Json(value0) {
        this.value0 = value0;
    };
    Json.create = function (value0) {
        return new Json(value0);
    };
    return Json;
})();
var toMediaType = function (v) {
    if (v instanceof FormURLEncoded) {
        return new Data_Maybe.Just(Data_MediaType_Common.applicationFormURLEncoded);
    };
    if (v instanceof Json) {
        return new Data_Maybe.Just(Data_MediaType_Common.applicationJSON);
    };
    return Data_Maybe.Nothing.value;
};
var json = Json.create;
export {
    ArrayView,
    Blob,
    Document,
    $$String as String,
    FormData,
    FormURLEncoded,
    Json,
    json,
    toMediaType
};
