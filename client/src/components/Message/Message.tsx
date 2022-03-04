import React, { FC, ReactNode } from 'react';
import { TodoStore } from '@src/store';
import { observer } from 'mobx-react';

const Message: FC<ReactNode> = observer(({ children }) => {
  const { isLoading, renderTodos } = TodoStore;

  if (isLoading || renderTodos.length) return null;

  return <div>{children}</div>;
});

export { Message };
