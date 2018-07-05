import request from 'supertest';
import chai from 'chai';
import server from '../../server';
import testData from '../Faker/eventfaker';
import { validToken, adminToken } from '../../test/test/user.test';

const { expect } = chai;

describe('Event Manager Event Test', () => {
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


  it(
    `return error if token is not
      present when adding new event`
    , (done) => {
      request(server)
        .post('/api/v1/events')
        .send(testData.newEvent)
        .end((error, res) => {
          expect(403);
          expect(res.body.message).to
            .include('You need to sign up or login');
          if (error) done(error);
          done();
        });
    }
  );


  it(`return error if token is not 
  vaild when adding new event`, (done) => {
      request(server)
        .post('/api/v1/events')
        .send(testData.newEvent)
        .set('Authorization', 'jdjdjdjdjdj')
        .end((error, res) => {
          expect(403);
          expect(res.body.message)
            .to.include('Authentication failed');
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
        expect(res.body.errorMessage).to
          .include('You must supply an Event name!');
        if (error) done(error);
        done();
      });
  });

  it('return no event if user does not have event', (done) => {
    request(server)
      .get('/api/v1/events')
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(400);
        expect(res.body.myevent).to
          .include('ou dont have any event Yet');
        if (error) done(error);
        done();
      });
  });

  it('return error if user is login and event start date is empty', (done) => {
    request(server)
      .post('/api/v1/events')
      .send(testData.newEvent2)
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(400);
        expect(res.body.errorMessage).to.include('You must supply the Start Date!');
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

  it('return error if user is login and start event date is in the past', (done) => {
    request(server)
      .post('/api/v1/events')
      .send(testData.newEvent6)
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(403);
        expect(res.body.message).to
          .include('You cant set a Past date for the event');
        if (error) done(error);
        done();
      });
  });

  it('return error if user is login and end event date is in the past', (done) => {
    request(server)
      .post('/api/v1/events')
      .send({
        name: 'wedding party 2',
        startDate: '2019-08-10',
        endDate: '2017-08-20',
        time: '12:00',
        purpose: 'love',
        center: 2,
      })
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(403);
        expect(res.body.message).to
          .include('You cant set a Past date for the event');
        if (error) done(error);
        done();
      });
  });

  it('return error if user is login and event end date is behind start date', (done) => {
    request(server)
      .post('/api/v1/events')
      .send({
        name: 'wedding party 2',
        startDate: '2019-08-10',
        endDate: '2018-08-20',
        time: '12:00',
        purpose: 'love',
        center: 2,
      })
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(403);
        expect(res.body.message).to
          .include('End Date can not be behind Start Date');
        if (error) done(error);
        done();
      });
  });

  it(`return error if user is login and
      'event date is in not well formated`, (done) => {
      request(server)
        .post('/api/v1/events')
        .send(testData.newEvent7)
        .set('Authorization', validToken.token)
        .end((error, res) => {
          expect(403);
          expect(res.body.message).to
            .include('invalid date format make sure it\'s YYYY-MM-DD format');
          if (error) done(error);
          done();
        });
    });


  it(
    `return error if user is login and
    event time is in not well formated`,
    (done) => {
      request(server)
        .post('/api/v1/events')
        .send(testData.newEvent8)
        .set('Authorization', validToken.token)
        .end((error, res) => {
          expect(400);
          expect(res.body.message).to
            .include('invalid time format make sure it\'s HH:MM format 24 hours');
          if (error) done(error);
          done();
        });
    }
  );


  it(
    `return error if user is login and
    event center is not number`,
    (done) => {
      request(server)
        .post('/api/v1/events')
        .send(testData.newEvent88)
        .set('Authorization', validToken.token)
        .end((error, res) => {
          expect(400);
          expect(res.body.message)
            .to.include('Only Number allowed for Center');
          if (error) done(error);
          done();
        });
    }
  );

  it(
    `save event to database if user is
    login and all fields are filed correctly`,
    (done) => {
      request(server)
        .post('/api/v1/events')
        .send({
          name: 'wedding party 2',
          startDate: '2019-08-10',
          endDate: '2019-08-20',
          time: '12:00',
          purpose: 'love',
          center: 2,
        })
        .set('Authorization', validToken.token)
        .end((error, res) => {
          expect(201);
          expect(res.body.message).to
            .include('successfully created');
          if (error) done(error);
          done();
        });
    }
  );


  it(
    `save another event to database if user
    is login and all fields are filed correctly`,
    (done) => {
      request(server)
        .post('/api/v1/events')
        .send({
          name: 'dance dance',
          startDate: '2020-3-15',
          endDate: '2020-4-16',
          time: '12:00',
          purpose: 'dacing hahha!!!',
          center: 2,
        })
        .set('Authorization', validToken.token)
        .end((error, res) => {
          expect(201);
          expect(res.body.message).to
            .include('successfully created');
          if (error) done(error);
          done();
        });
    }
  );

  it(
    `save another event to database if user
    is login and all fields are filed correctly`,
    (done) => {
      request(server)
        .post('/api/v1/events')
        .send({
          name: 'dance dance',
          startDate: '2023-7-05',
          endDate: '2023-8-08',
          time: '12:00',
          purpose: 'dacing hahha!!!',
          center: 2,
        })
        .set('Authorization', validToken.token)
        .end((error, res) => {
          expect(201);
          expect(res.body.message).to
            .include('successfully created');
          if (error) done(error);
          done();
        });
    }
  );

  it('return error if user is not sign in whats to view the event in the database', (done) => {
    request(server)
      .get('/api/v1/events')
      .end((error, res) => {
        expect(200);
        expect(res.body.message)
          .to.include('You need to sign up or login');
        if (error) done(error);
        done();
      });
  });

  it('return all the event in the database if user is signed in', (done) => {
    request(server)
      .get('/api/v1/events')
      .set('Authorization', validToken.token)
      .end((error, res) => {
        expect(200);
        expect(res.body.message)
          .to.include('success');
        if (error) done(error);
        done();
      });
  });

  it('return 1 event in the database', (done) => {
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
        expect(res.body.message).to
          .include('event not found');
        if (error) done(error);
        done();
      });
  });


  it(
    `return error if edited event date is already
     taken by another event`,
    (done) => {
      request(server)
        .put('/api/v1/events/1')
        .send({
          name: 'dance dance',
          startDate: '2023-7-05',
          endDate: '2023-8-08',
          time: '12:00',
          purpose: 'dacing hahha!!!',
          center: 2,
        })
        .set('Authorization', validToken.token)
        .end((error, res) => {
          expect(201);
          expect(res.body.message).to
            .include('Center booked from: 2023-07-05 to 2023-08-08');
          if (error) done(error);
          done();
        });
    }
  );

  it(
    `update event in database if user is
    login and all fields are filed correctly`,
    (done) => {
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
    }
  );

  it('return error when you edit an event you dont own', (done) => {
    request(server)
      .put('/api/v1/events/1')
      .send(testData.newEvent14)
      .set('Authorization', adminToken.token)
      .end((error, res) => {
        expect(404);
        expect(res.body.message)
          .to.include('You dont own any event with that id!!');
        if (error) done(error);
        done();
      });
  });

  it(`return error if you try to 
    delete an event when not login`, (done) => {
      request(server)
        .delete('/api/v1/events/1')
        .end((error, res) => {
          expect(404);
          expect(res.body.message)
            .to.include('You need to sign up or login');
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
        expect(res.body.message).to
          .include('Authentication failed');
        if (error) done(error);
        done();
      });
  });

  it(
    `should return error when deleting event not found in 
      database when user is login with the same userId has 
      the event userid`,
    (done) => {
      request(server)
        .delete('/api/v1/events/111')
        .set('Authorization', validToken.token)
        .end((error, res) => {
          expect(404);
          expect(res.body.message)
            .to.include('You dont own any event with that id!!');
          if (error) done(error);
          done();
        });
    }
  );

  it(
    'should return error when deleting id is invalided',
    (done) => {
      request(server)
        .delete('/api/v1/events/jsfa')
        .set('Authorization', validToken.token)
        .end((error, res) => {
          expect(404);
          expect(res.body.message)
            .to.include('Invalid Parameter In Url');
          if (error) done(error);
          done();
        });
    }
  );


  it(
    'delete event when user is signin in' +
    'with the same userId has the event userid',
    (done) => {
      request(server)
        .delete('/api/v1/events/1')
        .set('Authorization', validToken.token)
        .end((error, res) => {
          expect(404);
          expect(res.body.message)
            .to.include('Event successfully deleted!');
          if (error) done(error);
          done();
        });
    }
  );

  it(
    'return error for invalided url event when user is signin in',
    (done) => {
      request(server)
        .get('/api/v1/events/1swew')
        .set('Authorization', validToken.token)
        .end((error, res) => {
          expect(404);
          expect(res.body.message)
            .to.include('Invalid Parameter In Url');
          if (error) done(error);
          done();
        });
    }
  );
});
