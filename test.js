import test from 'ava' // eslint-disable-line
import hannoverjs from './'

test('default', async (t) => {
  const res = await hannoverjs('/')
  t.is(res.url, 'https://hannoverjs-api.now.sh/')
  t.is(res.statusCode, 200)
})
