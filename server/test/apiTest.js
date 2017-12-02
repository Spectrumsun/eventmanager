import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const should = chai.should();

chai.use(chaiHttp);

describe('Event Manager', () => {
  it('responds with status 200 for HomePage', (done) => {
    chai
      .request(server)
      .get('/api/v1')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res
          .should
          .have
          .status(200);

        done();
      });
  });

  it('responds with status 404 if url not found on server', (done) => {
    chai
      .request(server)
      .get('/')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res
          .should
          .have
          .status(404);
        done();
      });
  });

  it('responds with status 403 if no token is found for events', (done) => {
    chai
      .request(server)
      .get('/api/v1/events')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res
          .should
          .have
          .status(403);

        done();
      });
  });

  it('responds with status 403 if no token is found for center', (done) => {
    chai
      .request(server)
      .get('/api/v1/centers')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have.status(403);
        done();
      });
  });
 
});
