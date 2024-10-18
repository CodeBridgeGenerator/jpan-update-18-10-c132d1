const assert = require('assert');
const app = require('../../src/app');

describe('\'stage1\' service', () => {
  it('registered the service', () => {
    const service = app.service('stage1');

    assert.ok(service, 'Registered the service (stage1)');
  });
});
