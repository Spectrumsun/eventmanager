import request from 'supertest';
import chai from 'chai';
import jwtDecode from 'jsonwebtoken';
import app from '../../server';
import { User } from '../../models';
import fakeData from '../faker';

const { expect } = chai;
const userToken = {};
const newUser = {};


describe('Event Manager User Test', () => {
  it('loads the api home page', (done) => {
    request(app)
      .get('/api/v1/')
      .expect(200)
      .end((err) => {
        if (err) {
          done(err);
        }
        done();
      });
  });

  it('creates a new user', (done) => {
    request(app)
      .post('/api/v1/users')
      .set('Content-Type', 'application/json')
      .send(fakeData.singupUser1)
      .expect(201)
      .end((err, res) => {
        newUser.user = res.body.user;
        expect(newUser.user).to.have.property('fullname');
        expect(newUser.user).to.have.property('email');
        expect(res.body.user.email).to.equal(fakeData.singupUser1.email);
        expect(res.body.user.fullname).to.equal(fakeData.singupUser1.fullname);
        if (err) return done(err);
        done();
      });
  });

  it('trown error if email already exisit in database', (done) => {
    request(app)
      .post('/api/v1/users')
      .set('Content-Type', 'application/json')
      .send(fakeData.singupUser1)
      .expect(409)
      .end((err, res) => {
        expect(res.body.message).to.equal('Email already used !!');
        if (err) return done(err);
        done();
      });
  });

  it('creates another user second user with fullname and email', (done) => {
    request(app)
      .post('/api/v1/users')
      .set('Content-Type', 'application/json')
      .send(fakeData.singupUser)
      .expect(201)
      .end((err, res) => {
        newUser.user2 = res.body.user;
        expect(newUser.user2).to.have.property('fullname');
        expect(newUser.user2).to.have.property('email');
        expect(res.body.user.email).to.equal(fakeData.singupUser.email);
        expect(res.body.user.fullname).to.equal(fakeData.singupUser.fullname);
        if (err) return done(err);
        done();
      });
  });

  it('user cant login if they have not confirm eamil address', (done) => {
    request(app)
      .post('/api/v1/users/login')
      .send(fakeData.loginUser)
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
      request(app)
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
    request(app)
      .post('/api/v1/users/login')
      .send(fakeData.loginUser1)
      .expect(409)
      .end((err, res) => {
        expect(res.body.message).to.equal('Email or password incorrect');
        if (err) return done(err);
        done();
      });
  });

  it('user cant login if the email is not correct.', (done) => {
    request(app)
      .post('/api/v1/users/login')
      .send(fakeData.loginUser3)
      .expect(404)
      .end((err, res) => {
        expect(res.body.message).to.equal('Email or password incorrect');
        if (err) return done(err);
        done();
      });
  });

  it('user login Successfully with correct details', (done) => {
    request(app)
      .post('/api/v1/users/login')
      .send(fakeData.loginUser2)
      .expect(200)
      .end((err, res) => {
        expect(res.body.message).to.equal(`Welcome ${fakeData.singupUser1.fullname} `);
        if (err) return done(err);
        done();
      });
  });

  it('return a token whren user successful signin', (done) => {
    request(app)
      .post('/api/v1/users/login')
      .send(fakeData.loginUser2)
      .expect(200)
      .end((err, res) => {
        userToken.token = res.body.token;
        expect(userToken.token);
        expect(res.body.message).to.equal(`Welcome ${fakeData.singupUser1.fullname} `);
        if (err) return done(err);
        done();
      });
  });
});
