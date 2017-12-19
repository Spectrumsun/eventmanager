'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fake = {
  singupUser: {
    fullname: _faker2.default.name.findName(),
    email: _faker2.default.internet.email(),
    password: '12345',
    confirmPassword: '12345'
  },
  singupUser1: {
    fullname: 'Test User',
    email: 'testuser@example.com',
    password: '12345',
    confirmPassword: '12345'
  },
  loginUser: {
    email: _faker2.default.internet.email(),
    password: '12345'
  },
  loginUser1: {
    email: 'testuser@example.com',
    password: '12345'
  },
  missingPass: {
    email: _faker2.default.internet.email()
  },
  missingName: {
    email: _faker2.default.internet.email(),
    password: '12345'
  },
  wrongPassWord: {
    email: _faker2.default.internet.email(),
    password: '12345999'
  },
  newEvent: {
    name: _faker2.default.name.findName(),
    date: _faker2.default.date.future(),
    time: '12:00',
    purpose: _faker2.default.lorem.sentences(),
    center: 1
  },
  newEvent2: {
    name: _faker2.default.name.findName(),
    date: _faker2.default.date.future(),
    time: '13:00',
    purpose: _faker2.default.lorem.sentences(),
    center: 2
  },
  newCenter: {
    name: _faker2.default.name.findName(),
    city: _faker2.default.address.city(),
    address: _faker2.default.address.streetAddress(),
    facility: _faker2.default.random.arrayElement()
  },
  newCenter1: {
    name: _faker2.default.name.findName(),
    city: _faker2.default.address.city(),
    address: _faker2.default.address.streetAddress(),
    facility: _faker2.default.random.arrayElement()
  }
};

exports.default = fake;
//# sourceMappingURL=faker.js.map