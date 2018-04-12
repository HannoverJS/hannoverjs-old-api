const got = require('got')

const ENDPOINT = 'https://api.hannoverjs.de'

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
      'User-Agent': 'https://github.com/hannoverjs/hannoverjs'
    },
    gotOpts.headers
  )

  const url = gotOpts.endpoint + path

  return got(url, gotOpts)
}

hannoverjs.ENDPOINT = ENDPOINT
hannoverjs.getEvents = opts => hannoverjs('/events', opts)
hannoverjs.getTalks = opts => hannoverjs('/talks', opts)
hannoverjs.getOrganizers = opts => hannoverjs('/organizers', opts)

module.exports = hannoverjs
