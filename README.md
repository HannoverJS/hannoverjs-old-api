# hannoverjs

[![Build Status](https://travis-ci.org/HannoverJS/hannoverjs.svg?branch=master)](https://travis-ci.org/HannoverJS/hannoverjs) [![Codecov](https://codecov.io/gh/hannoverjs/hannoverjs/branch/master/graph/badge.svg)](https://codecov.io/gh/hannoverjs/hannoverjs) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Convenience wrapper for [`got`](https://github.com/sindresorhus/got) to interact with the [HannoverJS API](https://github.com/HannoverJS/hannoverjs-api)

## Install

```
npm install hannoverjs
```

## Usage

```js
const hannoverjs = require('hannoverjs')

hannoverjs('/').then(res => {
  console.log(res.body)
})

hannoverjs.getEvents().then(res => {
  console.log(res.body)
})
```

## API

It's a `GET` request by default, but can be changed in `options`. `options` are the same as in [`got`](https://github.com/sindresorhus/got), but with some defaults.

#### `options`

###### `endpoint`

Type: `string`<br>
Default: `https://hannoverjs-api.now.sh`

###### `headers`

Type: `Object`<br>
Default: `{ 'user-agent': 'https://github.com/hannoverjs/hannoverjs' }`

###### `json`

Type: `boolean`<br>
Default: `true`

### `hannoverjs(path, [options])`

Returns the response from a custom `path`.

#### `path`

Type: `string`

Custom path which will be appended to `options.endpoint`. Must start with `/`.

### `hannoverjs.getEvents([options])`

Returns the response from `/events`.

### `hannoverjs.getTalks([options])`

Returns the response from `/talks`.

### `hannoverjs.getOrganizers([options])`

Returns the response from `/organizers`.
