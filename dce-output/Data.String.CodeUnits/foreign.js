"use strict";

exports.fromCharArray = function (a) {
  return a.join("");
};

exports.toCharArray = function (s) {
  return s.split("");
};

exports.singleton = function (c) {
  return c;
};

















  

exports.length = function (s) {
  return s.length;
};

exports.countPrefix = function (p) {
  return function (s) {
    var i = 0;
    while (i < s.length && p(s.charAt(i))) i++;
    return i;
  };
};

exports._indexOf = function (just) {
  return function (nothing) {
    return function (x) {
      return function (s) {
        var i = s.indexOf(x);
        return i === -1 ? nothing : just(i);
      };
    };
  };
};






































  

exports.take = function (n) {
  return function (s) {
    return s.substr(0, n);
  };
};

exports.drop = function (n) {
  return function (s) {
    return s.substring(n);
  };
};







  

exports.splitAt = function (i) {
  return function (s) {
    return { before: s.substring(0, i), after: s.substring(i) };
  };
};
