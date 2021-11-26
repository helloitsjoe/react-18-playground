import React from 'react';
import { hydrateRoot } from 'react-dom';
import App from './App';

// const root = createRoot(document.getElementById('root'));

// root.render(<App />);

hydrateRoot(<App />, document.getElementById('root'));
