"use strict";







  

exports._currentTarget = function (e) {
  return e.currentTarget;
};





















  

exports.preventDefault = function (e) {
  return function () {
    return e.preventDefault();
  };
};











  
