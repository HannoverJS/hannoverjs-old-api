import test from 'ava'
import nock from 'nock'
import hannoverjs, { ENDPOINT, getMeetups, getTalks, getTeam } from './'

const foo = 'bar'
const body = { foo }

nock(ENDPOINT)
  .get('/')
  .reply(200, body)
  .get('/options')
  .reply(200, body)
  .get('/meetups')
  .reply(200, body)
  .get('/talks')
  .reply(200, body)
  .get('/team')
  .reply(200, body)

test('default', async t => {
  t.is((await hannoverjs('/')).body.foo, foo)
})

test('accepts options', async t => {
  t.is((await hannoverjs('/options', {})).body.foo, foo)
})

test('getMeetups', async t => {
  t.is((await getMeetups()).body.foo, foo)
})

test('getTalks', async t => {
  t.is((await getTalks()).body.foo, foo)
})

test('getTeam', async t => {
  t.is((await getTeam()).body.foo, foo)
})

test('type error', async t => {
  const { name, message } = await t.throws(hannoverjs(false))
  t.is(name, 'TypeError')
  t.is(message, "Expected 'path' to be a string, got boolean.")
})
