const user = {
  decodedToken: {
    id: 18,
    fullname: 'John Doe',
    role: 'user',
  },

  signupRequest: {
    fullname: 'John Doe',
    email: 'johndoe@example.com',
    password: 'password',
    confirmPassword: 'password',
  },

  signupResponse: {
    message: 'Account successfully created. Check your mail to confirm your account',
    user: {
      email: 'johndoe@example.com',
      fullname: 'John Doe'
    }
  },

  signinRequest: {
    email: 'johndoe@example.com',
    password: 'password',
  },

  signinResponse: {
    message: 'Welcome John Doe',
    token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
        .eyJpZCI6MTgsImZ1bGxuYW1lIjoiSm9obiBEb2UiLCJyb2xlIjoidXNl
        ciIsImlhdCI6MTUyMzczMzYzNCwiZXhwIjoxNTI0NDUzNjM0fQ.
        GFZKQqxQ3Oovq2N4ZXExVcXutwK0SKKH-oeCz4KmnmE`,
  },

  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
        .eyJpZCI6MTgsImZ1bGxuYW1lIjoiSm9obiBEb2UiLCJyb2xlIjoidXNl
        ciIsImlhdCI6MTUyMzczMzYzNCwiZXhwIjoxNTI0NDUzNjM0fQ.
        GFZKQqxQ3Oovq2N4ZXExVcXutwK0SKKH-oeCz4KmnmE`,

  PasswordRset: {
    password: '1234567',
    userId: '18'
  },

  adminMessage: {
    message: 'user role changed',
  },

  confirmPassword: {
    message: 'Check your email for a password reset link',
  },

  passwordChange: {
    message: 'Password Changed. You can Login with your new password'
  },

  emailVerification: {
    message: 'Nice! Email Confirmed You are can now login!'
  },

  error: {
    data: 'errorMessage'
  }

};

export default user;

