import request from 'supertest';
import chai from 'chai';
import server from '../../server';
import { User } from '../../models';
import testData from '../Faker/userFaker';

const { expect } = chai;
const validToken = {};
const adminToken = {};
const testUser = {};
const testAdmin = {};


describe('Event Manager User Test', () => {
  it('loads the api home page', (done) => {
    request(server)
      .get('/api/v1/')
      .expect(200)
      .end((err) => {
        if (err) {
          done(err);
        }
        done();
      });
  });

  it('return error if email field is empty on signup', (done) => {
    request(server).post('/api/v1/users')
      .send(testData.wronginfo)
      .end((error, res) => {
        expect(400);
        expect(res.body.errorMessage).to.include('That Email is not valid!');
        if (error) done(error);
        done();
      });
  });

  it('return error if password field is empty on signup', (done) => {
    request(server).post('/api/v1/users')
      .send(testData.wronginfo1)
      .end((error, res) => {
        console.log(res.body)
        expect(400);
        expect(res.body.errorMessage).to.include('Password Cannot be Blank cant be less than six Characters!');
        if (error) done(error);
        done();
      });
  });

  it('return error if password field is less thab six character on signup', (done) => {
    request(server).post('/api/v1/users')
      .send(testData.wronginfo1)
      .end((error, res) => {
        expect(400);
        expect(res.body.errorMessage).to.include('Password Cannot be Blank cant be less than six Characters!');
        if (error) done(error);
        done();
      });
  });

  it('return error if password does not match confrim password field', (done) => {
    request(server).post('/api/v1/users')
      .send(testData.wronginfo1)
      .end((error, res) => {
        expect(400);
        expect(res.body.errorMessage).to.include('Oops! Your passwords do not match');
        if (error) done(error);
        done();
      });
  });

  it('return error if email field is empty on login', (done) => {
    request(server).post('/api/v1/users/login')
      .send(testData.loginerror1)
      .end((error, res) => {
        expect(400);
        expect(res.body.errorMessage).to.include('That Email is not valid!');
        if (error) done(error);
        done();
      });
  });

  it('return error if password field is empty on login', (done) => {
    request(server).post('/api/v1/users/login')
      .send(testData.loginerror2)
      .end((error, res) => {
        expect(400);
        expect(res.body.errorMessage).to.include('Password Cannot be Blank!');
        if (error) done(error);
        done();
      });
  });

  it('creates a new user', (done) => {
    request(server)
      .post('/api/v1/users')
      .set('Content-Type', 'application/json')
      .send(testData.singupUser1)
      .expect(201)
      .end((err, res) => {
        testUser.user = res.body.user;
        expect(testUser.user).to.have.property('fullname');
        expect(testUser.user).to.have.property('email');
        expect(res.body.user.email).to.equal(testData.singupUser1.email);
        expect(res.body.user.fullname).to.equal(testData.singupUser1.fullname);
        if (err) return done(err);
        done();
      });
  });

  it('creates a admin new user', (done) => {
    request(server)
      .post('/api/v1/users')
      .set('Content-Type', 'application/json')
      .send(testData.adminsignup)
      .expect(201)
      .end((err, res) => {
        testAdmin.user = res.body.user;
        expect(testAdmin.user).to.have.property('fullname');
        expect(testAdmin.user).to.have.property('email');
        expect(res.body.user.email).to.equal(testData.adminsignup.email);
        expect(res.body.user.fullname).to.equal(testData.adminsignup.fullname);
        if (err) return done(err);
        done();
      });
  });

  it('trown error if email already exisit in database', (done) => {
    request(server)
      .post('/api/v1/users')
      .set('Content-Type', 'application/json')
      .send(testData.singupUser1)
      .expect(409)
      .end((err, res) => {
        expect(res.body.message).to.equal('Email already used !!');
        if (err) return done(err);
        done();
      });
  });

  it('creates another user second user with fullname and email', (done) => {
    request(server)
      .post('/api/v1/users')
      .set('Content-Type', 'application/json')
      .send(testData.singupUser)
      .expect(201)
      .end((err, res) => {
        testUser.user2 = res.body.user;
        expect(testUser.user2).to.have.property('fullname');
        expect(testUser.user2).to.have.property('email');
        expect(res.body.user.email).to.equal(testData.singupUser.email);
        expect(res.body.user.fullname).to.equal(testData.singupUser.fullname);
        if (err) return done(err);
        done();
      });
  });

  it('user cant login if they have not confirm eamil address', (done) => {
    request(server)
      .post('/api/v1/users/login')
      .send(testData.loginUser)
      .expect(400)
      .end((err, res) => {
        expect(res.body.message).to.equal('You have to first confirm Your Email');
        if (err) return done(err);
        done();
      });
  });

  it('verify email', (done) => {
    User.findOne({
      where: {
        email: 'testuser@example.com'
      },
    }).then((user) => {
      request(server)
        .get(`/api/v1/users/email/${user.emailVerfication}`)
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('Nice! Email Confirmed You are can now login!');
          if (err) return done(err);
          done();
        });
    });
  });

  it('verify admin email', (done) => {
    User.findOne({
      where: {
        email: testData.adminLogin.email
      },
    }).then((user) => {
      request(server)
        .get(`/api/v1/users/email/${user.emailVerfication}`)
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('Nice! Email Confirmed You are can now login!');
          if (err) return done(err);
          done();
        });
    });
  });

  it('return error with fake verification token', (done) => {
    User.findOne({
      where: {
        email: testData.adminLogin.email
      },
    }).then((user) => {
      request(server)
        .get('/api/v1/users/email/oijhbj3')
        .expect(400)
        .end((err, res) => {
          expect(res.body.message).to.equal('Email verification failed token is not invalid');
          if (err) return done(err);
          done();
        });
    });
  });

  it('user cant login if the password is not correct', (done) => {
    request(server)
      .post('/api/v1/users/login')
      .send(testData.loginUser1)
      .expect(409)
      .end((err, res) => {
        expect(res.body.message).to.equal('Email or password incorrect');
        if (err) return done(err);
        done();
      });
  });

  it('user cant login if the email is not correct.', (done) => {
    request(server)
      .post('/api/v1/users/login')
      .send(testData.loginUser3)
      .expect(404)
      .end((err, res) => {
        expect(res.body.message).to.equal('Email or password incorrect');
        if (err) return done(err);
        done();
      });
  });

  it('user login Successfully with correct details', (done) => {
    request(server)
      .post('/api/v1/users/login')
      .send(testData.loginUser2)
      .expect(200)
      .end((err, res) => {
        expect(res.body.message).to.equal(`Welcome ${testData.singupUser1.fullname} `);
        if (err) return done(err);
        done();
      });
  });

  it('return a token when user successful signin', (done) => {
    request(server)
      .post('/api/v1/users/login')
      .send(testData.loginUser2)
      .expect(200)
      .end((err, res) => {
        validToken.token = res.body.token;
        expect(validToken.token);
        expect(res.body.message).to.equal(`Welcome ${testData.singupUser1.fullname} `);
        if (err) return done(err);
        done();
      });
  });

  it('return a token when admin successful signin', (done) => {
    request(server)
      .post('/api/v1/users/login')
      .send(testData.adminLogin)
      .expect(200)
      .end((err, res) => {
        adminToken.token = res.body.token;
        expect(adminToken.token);
        expect(res.body.message).to.equal(`Welcome ${testData.adminsignup.fullname} `);
        if (err) return done(err);
        done();
      });
  });

  it('Fail to send password reset link if email supplied is wrong', (done) => {
    request(server)
      .post('/api/v1/users/forgotpassword')
      .expect(404)
      .send(testData.loginUser3)
      .end((error, res) => {
        expect(res.body.message).to.equal('Check your email for a password reset link');
        if (error) done(error);
        done();
      });
  });

  it('send maail with password reset when the email is found in database', (done) => {
    request(server)
      .post('/api/v1/users/forgotpassword')
      .expect(200)
      .send(testData.loginUser2)
      .end((error, res) => {
        expect(res.body.message).to.equal('Check your email for a password reset link');
        if (error) done(error);
        done();
      });
  });

  it('password reset should fail if reset token is wrong', (done) => {
    const faketoken = 'kndowpo943049304ijfbjn3i4r7uiejor8';
    request(server)
      .post(`/api/v1/users/password/reset/${faketoken}`)
      .send(testData.passwordReset)
      .expect(401)
      .end((error, res) => {
        expect(res.body.message).to.equal('Invaild or expired reset token');
        if (error) done(error);
        done();
      });
  });

  it('change password when reset tokem is vaild', (done) => {
    User.findOne({
      where: {
        email: 'testuser@example.com'
      }
    }).then((user) => {
      request(server)
        .post(`/api/v1/users/password/reset/${user.resetPasswordToken}`)
        .send(testData.passwordReset)
        .expect(200)
        .end((error, res) => {
          expect(res.body.message).to
            .equal('Password Changed. You can Login with your new password');
          if (error) done(error);
          done();
        });
    });
  });

  it('return error if user mot found in db', (done) => {
    request(server)
      .post('/api/v1/users/setadmin')
      .send({
        email: 'kakak@ksks.com',
        role: 'master'
      })
      .set('Authorization', adminToken.token)
      .expect(404)
      .end((err, res) => {
        expect(res.body.error).to.equal('No user found');
        if (err) return done(err);
        done();
      });
  });
});


export { validToken, adminToken };
