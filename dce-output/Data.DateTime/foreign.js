"use strict";

var createUTC = function (y, mo, d, h, m, s, ms) {
  var date = new Date(Date.UTC(y, mo, d, h, m, s, ms));
  if (y >= 0 && y < 100) {
    date.setUTCFullYear(y);
  }
  return date.getTime();
};

























  
