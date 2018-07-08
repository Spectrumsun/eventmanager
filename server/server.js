/* eslint-disable no-console */
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import cors from 'cors';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
import swaggerDocument from '../swagger.json';

// use env to store important keys
require('dotenv').config();

const app = express();

app.use(cors());

app.use(morgan('dev'));

app.use(bodyParser.json({
  type: 'application/json',
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 50000
}));
app.use(expressValidator());

app.use(express.static(path.join(__dirname, '/../client/public')));
app.use(express.static(path.join(__dirname, '/../client/src')));

// set base url for api
app.use('/api/v1/', routes);

// base usl for documentation
app.use(
  '/docs/api/v1',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.get('*', (req, res) => {
  // user express serve to load react
  res.sendFile(path.join(__dirname, '/../client/public/index.html'));
});

const port = process.env.PORT || 6000;

app.listen(port);

console.log(`Find me on http://localhost:${port}`);

export default app;
