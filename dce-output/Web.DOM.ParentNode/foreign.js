"use strict";

var getEffProp = function (name) {
  return function (node) {
    return function () {
      return node[name];
    };
  };
};







                                                            

exports._querySelector = function (selector) {
  return function (node) {
    return function () {
      return node.querySelector(selector);
    };
  };
};







  
