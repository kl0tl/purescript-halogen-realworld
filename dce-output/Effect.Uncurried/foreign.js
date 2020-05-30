"use strict";

exports.mkEffectFn1 = function mkEffectFn1(fn) {
  return function(x) {
    return fn(x)();
  };
};

exports.mkEffectFn2 = function mkEffectFn2(fn) {
  return function(a, b) {
    return fn(a)(b)();
  };
};

exports.mkEffectFn3 = function mkEffectFn3(fn) {
  return function(a, b, c) {
    return fn(a)(b)(c)();
  };
};

exports.mkEffectFn4 = function mkEffectFn4(fn) {
  return function(a, b, c, d) {
    return fn(a)(b)(c)(d)();
  };
};





  

exports.mkEffectFn6 = function mkEffectFn6(fn) {
  return function(a, b, c, d, e, f) {
    return fn(a)(b)(c)(d)(e)(f)();
  };
};























  

exports.runEffectFn1 = function runEffectFn1(fn) {
  return function(a) {
    return function() {
      return fn(a);
    };
  };
};

exports.runEffectFn2 = function runEffectFn2(fn) {
  return function(a) {
    return function(b) {
      return function() {
        return fn(a, b);
      };
    };
  };
};

exports.runEffectFn3 = function runEffectFn3(fn) {
  return function(a) {
    return function(b) {
      return function(c) {
        return function() {
          return fn(a, b, c);
        };
      };
    };
  };
};

exports.runEffectFn4 = function runEffectFn4(fn) {
  return function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function() {
            return fn(a, b, c, d);
          };
        };
      };
    };
  };
};

exports.runEffectFn5 = function runEffectFn5(fn) {
  return function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return function() {
              return fn(a, b, c, d, e);
            };
          };
        };
      };
    };
  };
};

exports.runEffectFn6 = function runEffectFn6(fn) {
  return function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return function(f) {
              return function() {
                return fn(a, b, c, d, e, f);
              };
            };
          };
        };
      };
    };
  };
};



























































































  
