import chai from 'chai';
import chaiHttp from 'chai-http';
import faker from './faker';
import server from '../server';
import models from '../models';

chai.use(chaiHttp);

const expect = chai.expect;


const token = '';

describe('Event Manager', () => {
  it('responds with status 400 if input fields are empty for signup', (done) => {
    chai.request(server)
      .post('/api/v1/users/login')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have.status(400);
        expect(res.body.message).to.equal('login errors');
        done();
      });
  });

  it('responds with status 400 if input fields are empty for login', (done) => {
    chai.request(server)
      .post('/api/v1/users')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });


  it('responds with status 400 for wrong email', (done) => {
    chai.request(server)
      .post('/api/v1/users')
      .send(faker.loginUser)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });

  it('responds with status 400 for wrong password', (done) => {
    chai.request(server)
      .post('/api/v1/users')
      .send(faker.loginUser)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });


it('responds with status 201 to sign up new user', (done) => {
    chai.request(server)
      .post('/api/v1/users')
      .send(faker.singupUser1)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });

  it('responds with status 200 to login a user', (done) => {
    chai.request(server)
      .post('/api/v1/users/login')
      .send(faker.loginUser1)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('responds with status 400 if email already exist', (done) => {
    chai.request(server)
      .post('/api/v1/users')
      .send(faker.loginUser)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
  
  
});
