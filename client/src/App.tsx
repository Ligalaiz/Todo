import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Todo } from '@src/screens';

import { TodoStore } from '@src/store';
import { useQuery } from '@apollo/client';
import GetAllTodos from '@src/graphql/GetAllTodos.query.graphql';

const App: FC<React.ReactNode> = observer(() => {
  const { data: { todoGetAll } = {}, loading, error } = useQuery(GetAllTodos);
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
