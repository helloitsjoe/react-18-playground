const { createServer } = require('http');
const express = require('express');
const { renderApp } = require('./render-app');

const { PORT = 3000, HOST = 'localhost' } = process.env;

const createApp = ({ host = HOST, port = PORT } = {}) => {
  const app = express();

  // Artificially add time for lazy JS imports
  app.use((req, res, next) => {
    if (req.url.endsWith('.js')) {
      setTimeout(next, 3000);
    } else {
      next();
    }
  });

  app.get('/', (req, res) => {
    renderApp(res);
  });
  app.use(express.static('dist'));
  app.use(express.static('public'));

  const server = createServer(app);

  server.listen(PORT, HOST, () => {
    console.log(`Server listening on http://${host}:${port}`);
  });
};

module.exports = { createApp };
