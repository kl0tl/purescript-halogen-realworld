// Generated by purs version 0.13.8
"use strict";
var DateTime = (function () {
    function DateTime(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    DateTime.create = function (value0) {
        return function (value1) {
            return new DateTime(value0, value1);
        };
    };
    return DateTime;
})();
var time = function (v) {
    return v.value1;
};
var date = function (v) {
    return v.value0;
};
module.exports = {
    DateTime: DateTime,
    date: date,
    time: time
};