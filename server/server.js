/* eslint-disable no-console */
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import swaggerJSDoc from 'swagger-jsdoc';
import routes from './routes';

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

const options = {
  swaggerDefinition: {
    info: {
      title: 'Hello World', // Title (required)
      version: '1.0.0', // Version (required)
    }
  },
  apis: ['./routes.js'], // Path to the API docs
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);


app.use('/api/v1/', routes);

app.get('*', (req, res) => {
  res.status(404).send({ message: 'That url does not exist on this server 🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫' });
});

const port = process.env.PORT || 7000;

app.listen(port);

console.log(`Find me on http://localhost:${port}`);

export default app;
