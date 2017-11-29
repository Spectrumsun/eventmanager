/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import {Center} from '../models';

const expect = chai.expect;

chai.use(chaiHttp);


