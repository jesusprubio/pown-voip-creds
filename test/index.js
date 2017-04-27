/*
  Copyright Jesús Pérez <jesusprubio@fsf.org>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const test = require('tap').test; // eslint-disable-line import/no-extraneous-dependencies
// const lodash = require('lodash');

const handler = require('../').yargs.handler;


test('should not throw', (assert) => {
  assert.plan(1);

  handler();
  assert.ok(true);
  // TODO: We can't do more check because the handlers
  // doesn't return anythin, isn't it?
  // const res = handler();
  // assert.ok(lodash.isArray(res));
  // assert.ok(!lodash.isEmpty(res));
  // assert.hasfields(res[0], ['name', 'path', 'port', 'pass']);
});
