import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { GitLink } from '@components/GitLink';
import { Title } from '@components/Title';
import { Message } from '@components/Message';
import { Loader } from '@components/Loader';
import { Search } from '@modules/Search';
import { TodoList } from '@modules/TodoList';
import { TodoAdd } from '@modules/TodoAdd';

const Todo: FC<React.ReactNode> = observer(() => {
  return (
    <>
      <GitLink />
      <Title />
      <TodoAdd />
      <Search />
      <TodoList />
      <Message>Add todo</Message>
      <Loader />
    </>
  );
});

export { Todo };
