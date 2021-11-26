const { createServer } = require('http');
const express = require('express');
const { renderApp } = require('./render-app');

const { PORT = 3000, HOST = 'localhost' } = process.env;

const createApp = ({ host = HOST, port = PORT } = {}) => {
  const app = express();

  // TODO: Send JS/CSS assets

  app.get('/', (req, res) => {
    renderApp(res);
  });

  const server = createServer(app);

  server.listen(PORT, HOST, () => {
    console.log(`Server listening on http://${host}:${port}`);
  });
};

module.exports = { createApp };
