import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import models from '../models';
import faker from '../seeders/faker';

const should = chai.should();

chai.use(chaiHttp);


describe('Event Manager', () => {
  it('responds with status 200', (done) => {
    chai.request(server)
      .get('/api/v1')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have.status(200);

        done();
      });
  });

  it('responds with status 404', (done) => {
    chai
      .request(server)
      .get('/')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have
          .status(404);
        done();
      });
  });


  it('responds with status 403 if no token is found', (done) => {
    chai.request(server)
      .get('/api/v1/events')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have.status(403);

        done();
      });
  });

  it('responds with status 403 if no token is found', (done) => {
    chai.request(server)
      .get('/api/v1/centers')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        res.should.have.status(403);
        done();
      });
  });
});


/* describe('User Signin/Signup', () => {
  models
    .Recipe
    .destroy({ cascade: true, truncate: true });

  models
    .User
    .destroy({ cascade: true, truncate: true });

  models
    .Favorite
    .destroy({ cascade: true, truncate: true });

  models
    .Review
    .destroy({ cascade: true, truncate: true });

  it('raises error with duplicate user email', (done) => {
    request(app)
      .post('/api/v1/users/signup')
      .set('Content-Type', 'application/json')
      .send(fakeData.userOne)
      .expect(409)
      .end((err) => {
        if (err)
          {return done(err);}
        done();
      });
  });

  it('raises error with duplicate username', (done) => {
    request(app)
      .post('/api/v1/users/signup')
      .set('Content-Type', 'application/json')
      .send({
        FullName: 'Daddychuks',
        Email: 'chuksy@yahoo.com',
        Sex: 'male',
        UserName: 'chuks',
        Password: 'chuks',
        ConfirmPassword: 'chuks'
      })
      .expect(409)
      .end((err, res) => {
        expect(res.body.error.message)
          .to
          .equal('username already exists');
        if (err)
          {return done(err);}
        done();
      });
  });

  it('denies access upon incorrect login details', (done) => {
    request(app)
      .post('/api/v1/users/signin')
      .send({ Email: 'chuks@yahoo.com', Password: 'password' })
      .expect(409)
      .end((err, res) => {
        expect(res.body.message)
          .to
          .equal('Username or password incorrect');
        if (err)
          {return done(err);}
        done();
      });
  });

  it('ensures user cannot be created if one of email or password is lacking.', (done) => {
    request(app)
      .post('/api/v1/users/signin')
      .send({ Password: 'password' })
      .expect(406)
      .end((err, res) => {
        expect(res.body.message)
          .to
          .equal('Email Field should not be Empty');
        if (err)
          {return done(err);}
        done();
      });
  }); */
/* }); */
