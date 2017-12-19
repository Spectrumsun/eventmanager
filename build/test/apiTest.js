'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _server = require('../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var should = _chai2.default.should();

_chai2.default.use(_chaiHttp2.default);

describe('Event Manager', function () {
  it('responds with status 200 for HomePage', function (done) {
    _chai2.default.request(_server2.default).get('/api/v1').set('Content-Type', 'application/json').end(function (err, res) {
      res.should.have.status(200);

      done();
    });
  });

  it('responds with status 404 if url not found on server', function (done) {
    _chai2.default.request(_server2.default).get('/').set('Content-Type', 'application/json').end(function (err, res) {
      res.should.have.status(404);
      done();
    });
  });

  it('responds with status 403 if no token is found for events', function (done) {
    _chai2.default.request(_server2.default).get('/api/v1/events').set('Content-Type', 'application/json').end(function (err, res) {
      res.should.have.status(403);

      done();
    });
  });

  it('responds with status 403 if no token is found for center', function (done) {
    _chai2.default.request(_server2.default).get('/api/v1/centers').set('Content-Type', 'application/json').end(function (err, res) {
      res.should.have.status(403);
      done();
    });
  });
});
//# sourceMappingURL=apiTest.js.map