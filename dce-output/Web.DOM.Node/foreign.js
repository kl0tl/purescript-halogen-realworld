"use strict";

var getEffProp = function (name) {
  return function (node) {
    return function () {
      return node[name];
    };
  };
};











                                                     

exports._parentNode = getEffProp("parentNode");















                                                         

exports._nextSibling = getEffProp("nextSibling");
























































































  

exports.insertBefore = function (node1) {
  return function (node2) {
    return function (parent) {
      return function () {
        return parent.insertBefore(node1, node2);
      };
    };
  };
};

exports.appendChild = function (node) {
  return function (parent) {
    return function () {
      return parent.appendChild(node);
    };
  };
};









  

exports.removeChild = function (node) {
  return function (parent) {
    return function () {
      return parent.removeChild(node);
    };
  };
};
