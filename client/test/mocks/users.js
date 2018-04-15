
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

  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
        .eyJpZCI6MTgsImZ1bGxuYW1lIjoiSm9obiBEb2UiLCJyb2xlIjoidXNl
        ciIsImlhdCI6MTUyMzczMzYzNCwiZXhwIjoxNTI0NDUzNjM0fQ.
        GFZKQqxQ3Oovq2N4ZXExVcXutwK0SKKH-oeCz4KmnmE`,

  PasswordRset: {
    password: '1234567',
    userId: '18'
  }
};

export default user;

