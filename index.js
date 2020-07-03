self.noopTag = (function (exports) {
  'use strict';

  function index (t) {
    for (var s = t[0], i = 1, l = arguments.length; i < l; i++) {
      s += arguments[i] + t[i];
    }

    return s;
  }

  exports.default = index;

  return exports;

}({}).default);
