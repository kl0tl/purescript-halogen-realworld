"use strict";

exports.pureE = function (a) {
  return function () {
    return a;
  };
};

exports.bindE = function (a) {
  return function (f) {
    return function () {
      return f(a())();
    };
  };
};

exports.untilE = function (f) {
  return function () {
    while (!f());
    return {};
  };
};
































  
