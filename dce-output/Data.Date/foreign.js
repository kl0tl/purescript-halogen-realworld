"use strict";

var createDate = function (y, m, d) {
  var date = new Date(Date.UTC(y, m, d));
  if (y >= 0 && y < 100) {
    date.setUTCFullYear(y);
  }
  return date;
};

exports.canonicalDateImpl = function (ctor, y, m, d) {
  var date = createDate(y, m - 1, d);
  return ctor(date.getUTCFullYear())(date.getUTCMonth() + 1)(date.getUTCDate());
};

exports.calcWeekday = function (y, m, d) {
  return createDate(y, m - 1, d).getUTCDay();
};





  
