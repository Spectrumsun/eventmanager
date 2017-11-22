import chai  from 'chai'
import chaiHttp from 'chai-http'
import server  from '../server.js'

import dbc from '../src/data/dbc'
import db from '../src/data/db'

const expect = chai.expect;

chai.use(chaiHttp);
//import 'babel-polyfill


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
            'name': 'Dancing', 
            'date': '21-30-2018',
            "center": "Yaba Center",
            "time": "12:00",
            "purpose": "  Free style"
          })
          .end((err, res) => {
            expect(res).to.have.status(200);
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
            "id": "1",
            'name': 'Dancing', 
            'date': '21-30-2018',
            "center": "Yaba Center",
            "time": "12:00",
            "purpose": "  Free style"
          })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object')
            
            done();
          });
      });
    });

     describe('Should fail  to update an EVENT not in the DB', () => {
      it('responds with status 404', (done) => {
        chai.request(server)
          .put('/api/events/1iiii')
          .send({
            'name': 'Dancing', 
            'date': '21-30-2018',
            "center": "Yaba Center",
            "time": "12:00",
            "purpose": "  Free style"
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





    describe('Should add a new CENTER', () => {
      it('responds with status 200', (done) => {
        chai.request(server)
          .post('/api/centers')
          .set('Content-Type', 'application/json')
          .send({
            "name":  "Cms Center", 
            "city":  "Lagos Island",
            "address": "77, Lagos Island Lagos",
            "facility": "['radio', 'open roof', '2, 000 chairs', 'free wifi']"
          })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res).to.be.json;
            done();
          });
      });
    });

    describe('Should get all CENTERS', () => {
      it('responds with status 200', (done) => {
        chai.request(server)
          .get('/api/centers')
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            expect(res).to.be.json;
            done();
          });
      });
    });


    describe('Should get Single CENTER from id', () => {
      it('responds with status 200', (done) => {
        chai.request(server)
          .get('/api/centers/1')
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res).to.be.json;
            done();
          });
      });
    });



    describe('Should edit a CENTER', () => {
         it('responds with status 200', (done) => {
           chai.request(server)
             .put('/api/centers/1')
             .send({
               "name":  "Suru Center", 
               "city":  "Lagos Main Land",
               "address": "No 22, Akerele Street Lagos",
               "facility": "['radio', 'open roof', '2, 000 chairs', ]"
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
               "name":  "Suru Center", 
               "city":  "Lagos Main Land",
               "address": "No 22, Akerele Street Lagos",
               "facility": "['radio', 'open roof', '2, 000 chairs', ]"
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

