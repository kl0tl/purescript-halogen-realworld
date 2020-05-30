"use strict";

function id(x) {
  return x;
}


                        
exports.fromString = id;
exports.fromArray = id;
exports.fromObject = id;

exports.jsonNull = null;

exports.stringify = function (j) {
  return JSON.stringify(j);
};

function isArray(a) {
  return Object.prototype.toString.call(a) === "[object Array]";
}

exports._caseJson = function (isNull, isBool, isNum, isStr, isArr, isObj, j) {
  if (j == null) return isNull();
  else if (typeof j === "boolean") return isBool(j);
  else if (typeof j === "number") return isNum(j);
  else if (typeof j === "string") return isStr(j);
  else if (Object.prototype.toString.call(j) === "[object Array]")
    return isArr(j);
  else return isObj(j);
};


































































  
