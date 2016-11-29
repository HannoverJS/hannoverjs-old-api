const got = require('got')

function hannoverjs(path, opts) {
  if (typeof path !== 'string') {
    return Promise.reject(new TypeError(`Expected 'path' to be a string, got ${typeof path}.`))
  }

  const gotOpts = Object.assign({
    endpoint: 'https://hannoverjs-api.now.sh'
  }, opts)

  gotOpts.headers = Object.assign({
    'user-agent': 'https://github.com/hannoverjs/hannoverjs'
  }, gotOpts.headers)

  const url = /^https?/.test(path) ? path : gotOpts.endpoint + path

  return got(url, gotOpts)
}

hannoverjs.getMeetups = hannoverjs('/meetups')
hannoverjs.getTalks = hannoverjs('/talks')
hannoverjs.getTeam = hannoverjs('/team')

module.exports = hannoverjs
