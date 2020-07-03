const noop = require('../cjs');

console.assert(noop`1${2}3` === '123');
