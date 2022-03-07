import React from 'react';
import { render } from 'react-dom';
import { configure } from 'mobx';
import { Global } from '@emotion/react';
import { App } from '@src/App';
import { globalStyle } from '@src/styles';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

setTimeout(() =>
  configure({
    enforceActions: 'never',
    reactionScheduler: (f) => setTimeout(f),
  }),
);

render(
  <div className="container">
    <Global styles={globalStyle} />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </div>,
  document.getElementById('root'),
);
