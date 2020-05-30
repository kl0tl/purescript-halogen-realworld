"use strict";




















  

exports.replaceAll = function (s1) {
  return function (s2) {
    return function (s3) {
      return s3.replace(new RegExp(s1.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), s2); // eslint-disable-line no-useless-escape
    };
  };
};

exports.split = function (sep) {
  return function (s) {
    return s.split(sep);
  };
};

exports.toLower = function (s) {
  return s.toLowerCase();
};







  

exports.joinWith = function (s) {
  return function (xs) {
    return xs.join(s);
  };
};
