/* global exports */
"use strict";

var createDate = function (y, m, d, h, mi, s, ms) {
  var date = new Date(Date.UTC(y, m, d, h, mi, s, ms));
  if (y >= 0 && y < 100) {
    date.setUTCFullYear(y);
  }
  return date;
};

var createLocalDate = function (y, m, d, h, mi, s, ms) {
  var date = new Date(y, m, d, h, mi, s, ms);
  if (y >= 0 && y < 100) {
    date.setFullYear(y);
  }
  return date;
};







  

exports.toInstantImpl = function (just) {
  return function (nothing) {
    return function (date) {
      var t = date.getTime();
      return isNaN(t) ? nothing : just(t);
    };
  };
};























  

exports.parse = function (dateString) {
  return function () {
    return new Date(dateString);
  };
};



  
