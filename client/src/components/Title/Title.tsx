import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { TodoStore } from '@src/store';
import { title, todosCount } from './TitleStyle';

const Title: FC = observer(() => {
  const { active, done } = TodoStore;

  return (
    <div css={title}>
      <h1>Todo list</h1>
      <p css={todosCount}>
        {active} more to do, {done} done
      </p>
    </div>
  );
});

export { Title };
