import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import models from '../models';
import faker from './faker';

const should = chai.should();

chai.use(chaiHttp);

let token;
let id;
let userId;

describe('Event Manager', () => {
  it('should not let user with un-verified Token create new event', (done) => {
    chai.request(server)
      .post('/api/v1/events')
      .send(faker.newEvent)
      .set('x-token', 'fjfjfjfjfjfjjfjfjfj')
      .end((err, res) => {
        res.should.have.status(403);
        res.should.be.json;
        res.body.should.be.a('object');
        done();
      });
  });

  it('should let authorized user create new event', (done) => {
    chai.request(server)
      .post('/api/v1/events')
      .send({ email: ' johedoe@example.com', password: '123458' })
      .set('x-token', token)
      .end((err, res) => {
        console.log(res.body);
        id = res.body.id;
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        done();
      });
  });


});
