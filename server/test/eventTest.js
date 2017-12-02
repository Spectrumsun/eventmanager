import chai from 'chai'
import chaiHttp from 'chai-http';
import server from '../server';
import models from '../models';
import faker from './faker';

const expect = chai.expect;

let newtoken;

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


});
