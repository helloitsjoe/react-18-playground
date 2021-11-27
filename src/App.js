import React, { Suspense, lazy } from 'react';
import Html from './Html';
// Need to figure out styled-components with renderToPipeableStream
// import Box from './components/Box';

const Button = lazy(() => import('./components/Button'));

const App = () => {
  return (
    <Html>
      <Suspense fallback="Nooooo">
        <div
          style={{ maxWidth: '700px', textAlign: 'center', margin: '2em auto' }}
        >
          <h1>You&apos;re doing great.</h1>
          <Suspense fallback="Button goes here">
            <Button type="button" onClick={() => console.log('hi there')}>
              Click
            </Button>
          </Suspense>
        </div>
      </Suspense>
    </Html>
  );
};

export default App;
