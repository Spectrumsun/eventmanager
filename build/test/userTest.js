'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _faker = require('./faker');

var _faker2 = _interopRequireDefault(_faker);

var _server = require('../server');

var _server2 = _interopRequireDefault(_server);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiHttp2.default);

var expect = _chai2.default.expect;

var token = '';

describe('Event Manager', function () {
  it('responds with status 400 if input fields are empty for signup', function (done) {
    _chai2.default.request(_server2.default).post('/api/v1/users/login').set('Content-Type', 'application/json').end(function (err, res) {
      res.should.have.status(400);
      expect(res.body.message).to.equal('login errors');
      done();
    });
  });

  it('responds with status 400 if input fields are empty for login', function (done) {
    _chai2.default.request(_server2.default).post('/api/v1/users').set('Content-Type', 'application/json').end(function (err, res) {
      res.should.have.status(400);
      done();
    });
  });

  it('responds with status 400 for wrong email', function (done) {
    _chai2.default.request(_server2.default).post('/api/v1/users').send(_faker2.default.loginUser).end(function (err, res) {
      res.should.have.status(400);
      done();
    });
  });

  it('responds with status 400 for wrong password', function (done) {
    _chai2.default.request(_server2.default).post('/api/v1/users').send(_faker2.default.loginUser).end(function (err, res) {
      res.should.have.status(400);
      done();
    });
  });

  it('responds with status 201 to sign up new user', function (done) {
    _chai2.default.request(_server2.default).post('/api/v1/users').send(_faker2.default.singupUser1).end(function (err, res) {
      res.should.have.status(201);
      done();
    });
  });

  it('responds with status 200 to login a user', function (done) {
    _chai2.default.request(_server2.default).post('/api/v1/users/login').send(_faker2.default.loginUser1).end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });

  it('responds with status 400 if email already exist', function (done) {
    _chai2.default.request(_server2.default).post('/api/v1/users').send(_faker2.default.loginUser).end(function (err, res) {
      res.should.have.status(400);
      done();
    });
  });
});
//# sourceMappingURL=userTest.js.map