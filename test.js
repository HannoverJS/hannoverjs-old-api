import test from 'ava'
import nock from 'nock'
import hannoverjs, { ENDPOINT, getEvents, getTalks, getOrganizers } from './'

const foo = 'bar'
const body = { foo }

nock(ENDPOINT)
  .get('/')
  .reply(200, body)
  .get('/options')
  .reply(200, body)
  .get('/events')
  .reply(200, body)
  .get('/talks')
  .reply(200, body)
  .get('/organizers')
  .reply(200, body)

test('default', async t => {
  t.is((await hannoverjs('/')).body.foo, foo)
})

test('accepts options', async t => {
  t.is((await hannoverjs('/options', {})).body.foo, foo)
})

test('getEvents', async t => {
  t.is((await getEvents()).body.foo, foo)
})

test('getTalks', async t => {
  t.is((await getTalks()).body.foo, foo)
})

test('getOrganizers', async t => {
  t.is((await getOrganizers()).body.foo, foo)
})

test('type error', async t => {
  const { name, message } = await t.throws(hannoverjs(false))
  t.is(name, 'TypeError')
  t.is(message, "Expected 'path' to be a string, got boolean.")
})
