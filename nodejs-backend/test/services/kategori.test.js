const assert = require('assert');
const app = require('../../src/app');

describe('\'kategori\' service', () => {
  it('registered the service', () => {
    const service = app.service('kategori');

    assert.ok(service, 'Registered the service (kategori)');
  });
});
