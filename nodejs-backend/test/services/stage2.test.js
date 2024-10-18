const assert = require('assert');
const app = require('../../src/app');

describe('\'stage2\' service', () => {
  it('registered the service', () => {
    const service = app.service('stage2');

    assert.ok(service, 'Registered the service (stage2)');
  });
});
