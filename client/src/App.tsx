import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Todo } from '@src/screens';
import { TodoStore } from '@src/store';

const App: FC<React.ReactNode> = observer(() => {
  const { getTodos } = TodoStore;

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="app">
      <Todo />
    </div>
  );
});

export { App };
