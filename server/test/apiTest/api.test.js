import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../server';

const should = chai.should();

chai.use(chaiHttp);

describe('Event Manager Api end Point', () => {
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


  it('responds with status 200 for events', (done) => {
    chai
      .request(server)
      .get('/api/v1/events')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res
          .should
          .have
          .status(200);

        done();
      });
  });

  it('responds with status 200 for centers', (done) => {
    chai
      .request(server)
      .get('/api/v1/centers')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res
          .should
          .have
          .status(200);
        done();
      });
  });


  it('validator should responds with status 400 if body is not filed correctly when user try to login', (done) => {
    chai
      .request(server)
      .post('/api/v1/users/login')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
  

  it('validator should responds with status 403 if no token is present when signing in.', (done) => {
    chai
      .request(server)
      .post('/api/v1/events')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have.status(403);
        done();
      });
  });
});
