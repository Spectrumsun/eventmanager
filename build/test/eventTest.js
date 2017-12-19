'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _server = require('../server');

var _server2 = _interopRequireDefault(_server);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _faker = require('./faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

var newtoken = void 0;

describe('Event Manager', function () {

  it('should not let user with un-verified Token create new event', function (done) {
    _chai2.default.request(_server2.default).post('/api/v1/events').send(_faker2.default.newEvent).set('x-token', 'fjfjfjfjfjfjjfjfjfj').end(function (err, res) {
      res.should.have.status(403);
      res.should.be.json;
      res.body.should.be.a('object');
      done();
    });
  });
});
//# sourceMappingURL=eventTest.js.map