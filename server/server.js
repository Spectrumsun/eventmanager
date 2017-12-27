/* eslint-disable no-console */
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import path from 'path';
import routes from './routes';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());


app.use(express.static(path.join(__dirname, '/../client/public')));
app.use(express.static(path.join(__dirname, '/../client/src')));

app.use('/api/v1/', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/public/index.html'));
  // res.status(404).send({ message: 'That url does not exist on this server 🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫' });
});

const port = process.env.PORT || 6000;

app.listen(port);

console.log(`Find me on http://localhost:${port}/api/v1`);

export default app;
