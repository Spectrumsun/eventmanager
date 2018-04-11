import request from 'supertest';
import chai from 'chai';
import server from '../../server';
import testData from '../Faker/eventfaker';
import { validToken, adminToken } from '../../test/integratedTest/user.test';

const { expect } = chai;

describe('Event Manager Center Test', () => {
  it('loads the api home page', (done) => {
    request(server)
      .get('/api/v1/')
      .expect(200)
      .end((err) => {
        if (err) {
          done(err);
        }
        done();
      });
  });


  it('return error if token is not present when adding new event', (done) => {
    request(server)
      .post('/api/v1/events')
      .send(testData.newEvent)
      .end((error, res) => {
        expect(403);
        expect(res.body.message).to.include('You need to sign up or login');
        if (error) done(error);
        done();
      });
  });


  it('return error if token is not vaild when adding new event', (done) => {
    request(server)
      .post('/api/v1/events')
      .send(testData.newEvent)
      .set('Authorization', 'jdjdjdjdjdj')
      .end((error, res) => {
        expect(403);
        expect(res.body.message).to.include('Authentication failed');
        if (error) done(error);
        done();
      });
  });


  it('return error if user is login and event name is empty', (done) => {
    request(server)
      .post('/api/v1/events')
      .send(testData.newEvent1)
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(400);
        expect(res.body.errorMessage).to.include('You must supply an Event name!');
        if (error) done(error);
        done();
      });
  });

  it('return error if user is login and event date is empty', (done) => {
    request(server)
      .post('/api/v1/events')
      .send(testData.newEvent2)
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(400);
        expect(res.body.errorMessage).to.include('You must supply a date !');
        if (error) done(error);
        done();
      });
  });


  it('return error if user is login and event time is empty', (done) => {
    request(server)
      .post('/api/v1/events')
      .send(testData.newEvent3)
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(400);
        expect(res.body.errorMessage).to.include('You must supply a time!');
        if (error) done(error);
        done();
      });
  });
  

  it('return error if user is login and event purpose is empty', (done) => {
    request(server)
      .post('/api/v1/events')
      .send(testData.newEvent4)
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(403);
        expect(res.body.errorMessage).to.include('You must supply a purpose !');
        if (error) done(error);
        done();
      });
  });

  it('return error if user is login and event center is empty', (done) => {
    request(server)
      .post('/api/v1/events')
      .send(testData.newEvent5)
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(403);
        expect(res.body.errorMessage).to.include('You must pick a center!');
        if (error) done(error);
        done();
      });
  });

  it('return error if user is login and event date is in the past', (done) => {
    request(server)
      .post('/api/v1/events')
      .send(testData.newEvent6)
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(403);
        expect(res.body.message).to.include('You cant set a Past date for the event');
        if (error) done(error);
        done();
      });
  });

  it('return error if user is login and event date is in not well formated', (done) => {
    request(server)
      .post('/api/v1/events')
      .send(testData.newEvent7)
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(403);
        expect(res.body.message).to.include('invalid date format make sure it\'s YYYY-MM-DD format');
        if (error) done(error);
        done();
      });
  });


  it('return error if user is login and event time is in not well formated', (done) => {
    request(server)
      .post('/api/v1/events')
      .send(testData.newEvent8)
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(400);
        expect(res.body.message).to.include('invalid time format make sure it\'s HH:MM format 24 hours');
        if (error) done(error);
        done();
      });
  });


  it('return error if user is login and event center is not number', (done) => {
    request(server)
      .post('/api/v1/events')
      .send(testData.newEvent88)
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(400);
        expect(res.body.message).to.include('Only Number allowed for Center');
        if (error) done(error);
        done();
      });
  });

  it('save event to database if user is login and all fields are filed corrctly', (done) => {
    request(server)
      .post('/api/v1/events')
      .send(testData.newEvent)
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(201);
        expect(res.body.message).to.include('successfully created');
        if (error) done(error);
        done();
      });
  });
  

  it('save another event to database if user is login and all fields are filed corrctly', (done) => {
    request(server)
      .post('/api/v1/events')
      .send(testData.newEvent10)
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(201);
        expect(res.body.message).to.include('successfully created');
        if (error) done(error);
        done();
      });
  });

  it('return all the event in the database', (done) => {
    request(server)
      .get('/api/v1/events')
      .end((error, res) => {
        expect(201);
        expect(res.body.message).to.include('success');
        if (error) done(error);
        done();
      });
  });

  it('return 1 all the event in the database', (done) => {
    request(server)
      .get('/api/v1/events/1')
      .end((error, res) => {
        expect(201);
        expect(res.body.message).to.include('Event');
        if (error) done(error);
        done();
      });
  });

  it('return error if event is not found in database', (done) => {
    request(server)
      .get('/api/v1/events/23')
      .end((error, res) => {
        expect(201);
        expect(res.body.message).to.include('event not found');
        if (error) done(error);
        done();
      });
  });


  it('return error if edited event date is already taken by another event save another event', (done) => {
    request(server)
      .put('/api/v1/events/1')
      .send(testData.newEvent10)
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(201);
        expect(res.body.message).to.include('Center booked for that date already');
        if (error) done(error);
        done();
      });
  });

  it('update event in database if user is login and all fields are filed corrctly', (done) => {
    request(server)
      .put('/api/v1/events/2')
      .send(testData.newEvent10)
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(201);
        expect(res.body.message).to.include('updated');
        if (error) done(error);
        done();
      });
  });  

  it('return error when u edit an event you dont own', (done) => {
    request(server)
      .put('/api/v1/events/1')
      .send(testData.newEvent14)
      .set('Authorization', adminToken.token)
      .end((error, res) => {
        expect(404);
        expect(res.body.message).to.include('You dont own any event with that id!!');
        if (error) done(error);
        done();
      });
  });  

  it('return error if you try to delete an event when not login', (done) => {
    request(server)
      .delete('/api/v1/events/1')
      .end((error, res) => {
        expect(404);
        expect(res.body.message).to.include('You need to sign up or login');
        if (error) done(error);
        done();
      });
  });  

  it('return error if you try to delete an with fake token', (done) => {
    request(server)
      .delete('/api/v1/events/1')
      .set('Authorization', 'faketoken')
      .end((error, res) => {
        expect(404);
        expect(res.body.message).to.include('Authentication failed');
        if (error) done(error);
        done();
      });
  });  

  it('delete an with when user signin is the sane has the event userid', (done) => {
    request(server)
      .delete('/api/v1/events/1')
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(404);
        expect(res.body.message).to.include('Event successfully deleted!');
        if (error) done(error);
        done();
      });
  });  

});
