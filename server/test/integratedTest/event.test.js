import request from 'supertest';
import chai from 'chai';
import jwtDecode from 'jsonwebtoken';
import server from '../../server';
import { Event } from '../../models';
import testData from '../Faker/eventfaker';

const { expect } = chai;
const testUserToken = {};
const testUser = {};


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

  it('loads the event in database', (done) => {
    request(server)
      .get('/api/v1/event')
      .expect(200)
      .end((err) => {
        if (err) {
          done(err);
        }
        done();
      });
  });
});
