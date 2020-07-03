# plain-tag

[![Build Status](https://travis-ci.com/WebReflection/plain-tag.svg?branch=master)](https://travis-ci.com/WebReflection/plain-tag) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/plain-tag/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/plain-tag?branch=master)

A noop/plain JS template literal tag.

```js
import plainTag from 'plain-tag';
// const plainTag  = require('plain-tag');
// <script src="//unpkg.com/plain-tag"></script>

plainTag`one ${2} three`;
// output: "one 2 three"
```

It could be used to trigger CSS minification too, through rollup plugins or others.

```js
import css from 'plain-tag';

const style = css`
  body {
    color: green;
  }
`;
```
