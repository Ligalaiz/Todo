import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Todo } from '@src/screens';

import { TodoStore } from '@src/store';
import { useQuery } from '@apollo/client';
import { GET_ALL_TODOS } from '@src/api';

const App: FC<React.ReactNode> = observer(() => {
  const { data: { todoGetAll } = {}, loading, error } = useQuery(GET_ALL_TODOS);
  const { getAllTodos, setLoading, setError } = TodoStore;

  useEffect(() => {
    if (!loading) {
      getAllTodos(todoGetAll);
    }
  }, [todoGetAll]);

  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  useEffect(() => {
    setError(error);
  }, [error]);

  return (
    <div className="app">
      <Todo />
    </div>
  );
});

export { App };
