import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';
import db from '../data/db';

const expect = chai.expect;

chai.use(chaiHttp);
// import 'babel-polyfill


describe('Event-Mananger', () => {
  describe('Should load the Homepage', () => {
    it('responds with status 200', (done) => {
      chai.request(server)
        .get('/')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          done();
        });
    });
  });

  describe('Should create an EVENT', () => {
    it('responds with status 200', (done) => {
      chai.request(server)
        .post('/api/events')
        .set('Content-Type', 'application/json')
        .send({
          name: 'Dancing',
          date: '21-30-2018',
          center: 'Yaba Center',
          time: '12:00',
          purpose: '  Free style'
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res).to.be.json;
          done();
        });
    });
  });

  describe('Should update an EVENT', () => {
    it('responds with status 200', (done) => {
      chai.request(server)
        .put('/api/events/1')
        .send({
          id: '1',
          name: 'Dancing',
          date: '21-30-2018',
          center: 'Yaba Center',
          time: '12:00',
          purpose: '  Free style'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');

          done();
        });
    });
  });

  describe('Should fail  to update an EVENT not in the DB', () => {
    it('responds with status 404', (done) => {
      chai.request(server)
        .put('/api/events/1iiii')
        .send({
          name: 'Dancing',
          date: '21-30-2018',
          center: 'Yaba Center',
          time: '12:00',
          purpose: '  Free style'
        })
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });


  describe('Should delete an EVENT', () => {
    it('responds with status 200', (done) => {
      chai.request(server)
        .delete('/api/events/2')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });


  describe('Should fail for delete EVENT not in DB', () => {
    it('responds with status 404', (done) => {
      chai.request(server)
        .delete('/api/events/20')
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res).to.be.json;
          done();
        });
    });
  });
});

