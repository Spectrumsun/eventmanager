/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import dbc from '../data/dbc.json';

const expect = chai.expect;

chai.use(chaiHttp);

describe('Event-Mananger', () => {
  describe('Should edit a CENTER', () => {
    it('responds with status 200', (done) => {
      chai.request(server)
        .put('/api/centers/1')
        .send({
          name: 'Suru Center',
          city: 'Lagos Main Land',
          address: 'No 22, Akerele Street Lagos',
          facility: "['radio', 'open roof', '2, 000 chairs', ]"
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res).to.be.json;
          done();
        });
    });
  });


  describe('Should fail to edit a CENTER not in the DB', () => {
    it('responds with status 404', (done) => {
      chai.request(server)
        .put('/api/centers/2221')
        .send({
          name: 'Suru Center',
          city: 'Lagos Main Land',
          address: 'No 22, Akerele Street Lagos',
          facility: "['radio', 'open roof', '2, 000 chairs', ]"
        })
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });

  describe('Should catch any invalid routes ', () => {
    it('responds with status 404', (done) => {
      chai.request(server)
        .get('/kkfkf/ff')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res).to.be.json;
          done();
        });
    });
  });
});
