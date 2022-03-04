import React from 'react';
import { render } from 'react-dom';
import { configure } from 'mobx';
import { Global } from '@emotion/react';
import { App } from '@src/App';
import { globalStyle } from '@src/styles';

setTimeout(() =>
  configure({
    enforceActions: 'never',
    reactionScheduler: (f) => setTimeout(f),
  }),
);

render(
  <div className="container">
    <Global styles={globalStyle} />
    <App />
  </div>,
  document.getElementById('root'),
);
