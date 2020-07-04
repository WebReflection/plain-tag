const plain = require('../cjs');
const fake = require('fake-tag');
const noop = require('noop-tag');

console.assert(
  plain`1${2}3` === fake`1${2}3` &&
  plain`1${2}3` === noop`1${2}3` &&
  plain`1${2}3` === '123'
);

const benchmark = (tag, name = '') => {
  if (name)
    console.time(name);
  const result = [];
  for (let i = 0; i < 10000; i++)
    result.push(tag`test ${i} for ${name}!`);
  if (name)
    console.timeEnd(name);
  return result;
};

// warmup
benchmark(plain);
benchmark(fake);
benchmark(noop);

setTimeout(benchmark, 300, plain, 'plain');
setTimeout(benchmark, 600, fake, 'fake');
setTimeout(benchmark, 900, noop, 'noop');
