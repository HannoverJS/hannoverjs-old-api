const got = require('got')

const ENDPOINT = 'https://hannoverjs-api.now.sh'

function hannoverjs(path, opts) {
  if (typeof path !== 'string') {
    return Promise.reject(
      new TypeError(`Expected 'path' to be a string, got ${typeof path}.`)
    )
  }

  const gotOpts = Object.assign(
    {
      json: true,
      endpoint: ENDPOINT
    },
    opts
  )

  gotOpts.headers = Object.assign(
    {
      'user-agent': 'https://github.com/hannoverjs/hannoverjs'
    },
    gotOpts.headers
  )

  const url = gotOpts.endpoint + path

  return got(url, gotOpts)
}

hannoverjs.ENDPOINT = ENDPOINT
hannoverjs.getMeetups = opts => hannoverjs('/meetups', opts)
hannoverjs.getTalks = opts => hannoverjs('/talks', opts)
hannoverjs.getTeam = opts => hannoverjs('/team', opts)

module.exports = hannoverjs
