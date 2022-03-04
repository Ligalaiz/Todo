import React from 'react';
import { loader } from './LoaderStyle';
import { TodoStore } from '@src/store';
import { observer } from 'mobx-react';

const Loader = observer(() => {
  const { isLoading } = TodoStore;

  if (!isLoading) return null;

  return <div css={loader} />;
});

export { Loader };
