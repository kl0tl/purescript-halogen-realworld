"use strict";

exports["new"] = function () {
  return {};
};











  

exports.poke = function (k) {
  return function (v) {
    return function (m) {
      return function () {
        m[k] = v;
        return m;
      };
    };
  };
};








  
