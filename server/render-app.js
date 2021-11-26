/* eslint-disable import/prefer-default-export */
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import App from '../src/App';

export const renderApp = res => {
  res.socket.on('error', err => {
    console.error('Fatal', err);
  });

  let didError = false;
  const { pipe, abort } = renderToPipeableStream(<App />, {
    onCompleteShell() {
      res.statusCode = didError ? 500 : 200;
      res.setHeader('Content-Type', 'text/html');
      pipe(res);
    },
    onError(err) {
      didError = true;
      console.error(err);
    },
  });

  setTimeout(abort, 20000);
};
