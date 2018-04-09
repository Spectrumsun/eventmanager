import faker from 'faker';

const fake = {
  invalidToken: 'invalidtoken',
  singupUser: {
    fullname: 'johndoe',
    email: 'johndoe@example.com',
    password: '1234567',
    confirmPassword: '1234567'
  },
  singupUser1: {
    fullname: 'Test User',
    email: 'testuser@example.com',
    password: '1234567',
    confirmPassword: '1234567'
  },
  loginUser: {
    email: 'johndoe@example.com',
    password: '123445455',
  },
  loginUser1: {
    email: 'testuser@example.com',
    password: '12345',
  },
  loginUser2: {
    email: 'testuser@example.com',
    password: '1234567',
  },
  loginUser3: {
    email: 'kaka@example.com',
    password: '1234567',
  },
  passwordReset: {
    password: '1234567',
    confirmPassword: '1234567',
  },
  missingPass: {
    email: faker.internet.email(),
  },
  missingName: {
    email: faker.internet.email(),
    password: '12345',
  },
  wrongPassWord: {
    email: faker.internet.email(),
    password: '12345999',
  },
  newEvent: {
    name: faker.name.findName(),
    date: faker.date.future(),
    time: '12:00',
    purpose: faker.lorem.sentences(),
    center: 1
  },
  newEvent2: {
    name: faker.name.findName(),
    date: faker.date.future(),
    time: '13:00',
    purpose: faker.lorem.sentences(),
    center: 2
  },
  newCenter: {
    name: faker.name.findName(),
    city: faker.address.city(),
    address: faker.address.streetAddress(),
    facility: faker.random.arrayElement(),
  },
  newCenter1: {
    name: faker.name.findName(),
    city: faker.address.city(),
    address: faker.address.streetAddress(),
    facility: faker.random.arrayElement(),
  }
};

export default fake;
