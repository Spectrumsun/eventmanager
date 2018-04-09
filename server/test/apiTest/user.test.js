import request from 'supertest';
import chai from 'chai';
import jwtDecode from 'jsonwebtoken';
import server from '../../server';
import { User } from '../../models';
import testData from '../faker';

const { expect } = chai;
const testUserToken = {};
const testUser = {};


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
        expect(400);
        expect(res.body.errorMessage).to.include('Password Cannot be Blank cant be less than six Charaters!');
        if (error) done(error);
        done();
      });
  });

  it('return error if password field is less thab six character on signup', (done) => {
    request(server).post('/api/v1/users')
      .send(testData.wronginfo1)
      .end((error, res) => {
        expect(400);
        expect(res.body.errorMessage).to.include('Password Cannot be Blank cant be less than six Charaters!');
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

  it('return a token whren user successful signin', (done) => {
    request(server)
      .post('/api/v1/users/login')
      .send(testData.loginUser2)
      .expect(200)
      .end((err, res) => {
        testUserToken.token = res.body.token;
        expect(testUserToken.token);
        expect(res.body.message).to.equal(`Welcome ${testData.singupUser1.fullname} `);
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
          expect(res.body.message).to.equal('Password Changed. You can Login with your new password');
          if (error) done(error);
          done();
        });
    });
  });
});


export {
  testUserToken,
  testUser
};
