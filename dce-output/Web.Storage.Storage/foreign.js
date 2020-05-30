"use strict";













  

exports._getItem = function (key) {
  return function (storage) {
    return function () {
      return storage.getItem(key);
    };
  };
};

exports.setItem = function (key) {
  return function (value) {
    return function (storage) {
      return function () {
        storage.setItem(key, value);
      };
    };
  };
};

exports.removeItem = function (key) {
  return function (storage) {
    return function () {
      storage.removeItem(key);
    };
  };
};





  
