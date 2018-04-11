import faker from 'faker';

const userfake = {
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
  wronginfo: {
    fullname: 'johndoe',
    email: '',
    password: '1234567',
    confirmPassword: '1234567'
  },
  wronginfo1: {
    fullname: 'johndoe',
    email: 'johndoe@example.com',
    password: '',
    confirmPassword: '1234567'
  },
  loginUser1: {
    email: 'testuser@example.com',
    password: '12345',
  },
  loginUser2: {
    email: 'testuser@example.com',
    password: '1234567',
  },
  loginerror1: {
    email: '',
    password: '12345',
  },
  loginerror2: {
    email: 'testuser@example.com',
    password: '',
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
  adminsignup: {
    fullname: 'test',
    email: process.env.ADMINEMAIL,
    password: process.env.ADMINTESTPASSWORD,
    confirmPassword: process.env.ADMINTESTPASSWORD
  },
  adminLogin: {
    email: process.env.ADMINEMAIL,
    password: process.env.ADMINTESTPASSWORD,
  }
};

export default userfake;
