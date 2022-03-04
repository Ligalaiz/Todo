import React, { FC, KeyboardEvent, ChangeEvent } from 'react';
import { TodoStore } from '@src/store';
import { observer } from 'mobx-react';
import { todoAdd } from './TodoAddStyle';
import { Btn } from '@components/Btn';
import { Input } from '@components/Input';

export interface IState {
  title: string;
  data: string;
  status: boolean;
  mark: boolean;
  _id?: string;
  id?: string;
}

const TodoAdd: FC = observer(() => {
  const { title, setTodos, setTitle } = TodoStore;

  const initialState: IState = {
    title,
    data: new Date().toLocaleDateString(),
    status: false,
    mark: false,
  };

  const handleClick = () => {
    setTodos(initialState);
    setTitle('');
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setTitle('');
      return setTodos(initialState);
    }
    return undefined;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  return (
    <>
      <div data-testid="todoAdd" css={todoAdd}>
        <Input
          placeholder="What needs to be done?"
          name="todoAdd"
          type="text"
          handleKey={handleKey}
          handleChange={handleChange}
          value={title}
          testid="todoAddField"
        />
        <Btn
          type="button"
          styleBtn="manageBtn"
          isDisabled={!title}
          handleClick={handleClick}
          testid="todoAddBtn"
        >
          Add
        </Btn>
      </div>
    </>
  );
});

export { TodoAdd };
