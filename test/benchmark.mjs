import plain from '../esm/index.js';
import fake from 'fake-tag';
import noop from 'noop-tag';

const { raw: $ } = String;
const std = (raw, ...values) => $({ raw }, ...values);

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
benchmark(std);

setTimeout(benchmark, 300, plain, 'plain');
setTimeout(benchmark, 600, fake, 'fake');
setTimeout(benchmark, 900, noop, 'noop');
setTimeout(benchmark, 1200, noop, 'std');
