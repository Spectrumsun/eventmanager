
const user = {
  decodedToken: {
    id: 18,
    fullname: 'John Doe',
    role: 'user',
  },

  signupReq: {
    fullname: 'John Doe',
    email: 'johndoe@example.com',
    password: 'password',
    confirmPassword: 'passowrd',
  },

  signupRes: {
    message: 'Account successfully created. Check your mail to confirm your account',
  },

  signinReq: {
    email: 'johndoe@example.com',
    password: '123456',
  },

  signinRes: {
    message: 'Welcome John Doe',
    email: 'johndoe@example.com',
    password: '123456'
  },

  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
          eyJpZCI6MTksImZ1bGxuYW1lIjoiQWRtaW4gT
          WFuIiwicm9sZSI6IkFETUlOMSIsImlhdCI6MTU
          yMzczODcwOSwiZXhwIjoxNTI0NDU4NzA5fQ.xvV
          -XtSw3CqqcdXyR7s4QsFLe17MasxBZr4hYAUacW0`,

  PasswordRset: {
    password: '1234567',
    userId: '18'
  }
};

export default user;


