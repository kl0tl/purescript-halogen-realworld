// Generated by purs version 0.13.8
"use strict";
var Time = (function () {
    function Time(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    };
    Time.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return new Time(value0, value1, value2, value3);
                };
            };
        };
    };
    return Time;
})();
var second = function (v) {
    return v.value2;
};
var minute = function (v) {
    return v.value1;
};
var millisecond = function (v) {
    return v.value3;
};
var hour = function (v) {
    return v.value0;
};
module.exports = {
    Time: Time,
    hour: hour,
    minute: minute,
    second: second,
    millisecond: millisecond
};
