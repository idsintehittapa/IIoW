import React from 'react';
import { NhostClient, NhostReactProvider } from '@nhost/react';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { BrowserRouter } from 'react-router-dom';
import { AnimatedRoutes } from './Animations/AnimatedRoutes';

function App() {
  const nhost = new NhostClient({
    backendUrl: 'https://qfhbhjfjvqhuxhigjyvz.nhost.run'
  });

  return (
    <NhostReactProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </NhostApolloProvider>
    </NhostReactProvider>
  );
}

export default App;
