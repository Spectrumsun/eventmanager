import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import models from '../models';
import faker from '../seeders/faker';

const should = chai.should();

chai.use(chaiHttp);


describe('Event Manager', () => {
  it('responds with status 200', (done) => {
    chai.request(server)
      .get('/api/v1')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have.status(200);

        done();
      });
  });

  it('responds with status 404', (done) => {
    chai
      .request(server)
      .get('/')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have
          .status(404);
        done();
      });
  });


  it('responds with status 403 if no token is found', (done) => {
    chai.request(server)
      .get('/api/v1/events')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have.status(403);

        done();
      });
  });

  it('responds with status 403 if no token is found', (done) => {
    chai.request(server)
      .get('/api/v1/centers')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have.status(403);
        done();
      });
  });
});




/