import request from 'supertest';
import chai from 'chai';
import jwtDecode from 'jsonwebtoken';
import server from '../../server';
import { Event } from '../../models';
import testData from '../Faker/centerFaker';
import  { validToken, testUser } from '../../test/integratedTest/user.test';

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

  it('loads the centers in database', (done) => {
    request(server)
      .get('/api/v1/center')
      .expect(200)
      .end((err) => {
        if (err) {
          done(err);
        }
        done();
      });
  });


  it('return error if token is not present when adding new center', (done) => {
    request(server)
      .post('/api/v1/centers')
      .send(testData.newCenter)
      .end((error, res) => {
        expect(403);
        expect(res.body.message).to.include('You need to sign up or login');
        if (error) done(error);
        done();
      });
  });

  it('return error if token is not vaild when adding new center', (done) => {
    request(server)
      .post('/api/v1/centers')
      .send(testData.newCenter)
      .set('Authorization', 'jdjdjdjdjdj')
      .end((error, res) => {
        expect(403);
        expect(res.body.message).to.include('Authentication failed');
        if (error) done(error);
        done();
      });
  });

  it('return error if login user is not an admin', (done) => {
    request(server)
      .post('/api/v1/centers')
      .send(testData.newCenter)
      .set('Authorization', validToken)
      .end((error, res) => {
        expect(403);
        expect(res.body.message).to.include('Authentication failed');
        if (error) done(error);
        done();
      });
  });

  it('return error if login is admin and center name is empty', (done) => {
    request(server)
      .post('/api/v1/centers')
      .send(testData.newCenter)
      .set('Authorization', validToken)
      .end((error, res) => {
        expect(403);
        expect(res.body.message).to.include('Authentication failed');
        if (error) done(error);
        done();
      });
  });


});
