/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import {Center} from '../models';

const expect = chai.expect;

chai.use(chaiHttp);


describe('Event Manager', () => {
  
  it('returns a token upon successful signin', (done) => {
    request(server)
      .post('/api/v1/users/signin')
      .send({Email: 'favor@yahoo.com', Password: '12345'})
      .expect(200)
      .end((err, res) => {
        userToken = res.body.token;
        expect(userToken);
        expect(res.body.message)
          .to
          .equal('Welcome favor');
        if (err) 
          return done(err);
        done();
      });
  });

  it('adds a event to the database', (done) => {
    request(server)
      .post('/api/v1/events')
      .set('authorization', userToken)
      .send(fakeData.recipe)
      .expect(200)
      .end((err, res) => {
        recipe2 = res.body.recipe;
        if (err) 
          return done(err);
        done();
      });
  });

  it('retrieves recipes from catalog', (done) => {
    request(app)
      .get('/api/v1/recipes')
      .expect(200)
      .end((err, res) => {
        if (err) 
          return done(err);
        done();
      });
  });

  it('modifies a recipe in catalog', (done) => {
    request(app)
      .put(`/api/v1/recipes/${recipe2.recipeId}`)
      .set('authorization', userToken)
      .send({Title: 'Egusi soup preparation', Description: 'This is how to prepare Egusi soup'})
      .expect(200)
      .end((err, res) => {
        if (err) 
          return done(err);
        done();
      });
  });

  it('deletes recipe from catalog', (done) => {
    request(app)
      .delete(`/api/v1/recipes/${recipe2.recipeId}`)
      .set('authorization', userToken)
      .expect(200)
      .end((err, res) => {
        if (err) 
          return done(err);
        done();
      });
  });
});