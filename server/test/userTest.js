import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import models from '../models';
import faker from '../seeders/faker';

const should = chai.should();

chai.use(chaiHttp);


describe('Event Manager', () => {
  it('responds with status 400 if input fields are empty', (done) => {
    chai.request(server)
      .post('/api/v1/users/login')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });

  it('responds with status 400 if input fields are empty', (done) => {
    chai.request(server)
      .post('/api/v1/users')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });


  it('responds with status 200 to sign up new user', (done) => {
    chai.request(server)
      .post('/api/v1/users')
      .send(faker.singupUser)
      .end((err, res) => {
        res.should.have.status(201);
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

  it('responds with status 400 or if email already exisit', (done) => {
    chai.request(server)
      .post('/api/v1/users')
      .send(faker.loginUser)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
});
