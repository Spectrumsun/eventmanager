import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import dbc from '../data/dbc.json';

const expect = chai.expect;

chai.use(chaiHttp);


