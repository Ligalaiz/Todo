import React, { FC, MouseEvent } from 'react';
import { TodoStore } from '@src/store';
import { observer } from 'mobx-react';
import { TodoItem } from '@modules/TodoItem';
import { todoListWrap } from './TodoListStyle';

const TodoList: FC = observer(() => {
  const { renderTodos, query, deleteTodo, markTodo, setStatus, todoFilter } =
    TodoStore;

  return (
    <div css={todoListWrap} data-testid="todoList">
      {renderTodos.length
        ? [...renderTodos]
            .reverse()
            .map(({ id, title, mark, status }, ind, arr) => {
              const count = arr.length - ind;

              const handleClickDel = () => {
                deleteTodo(id);
              };

              const handleClickMark = () => {
                markTodo(id);
              };

              const handleClickStatus = (e: MouseEvent<HTMLDivElement>) => {
                const target = e.target as typeof e.target & {
                  getAttribute: (a: string) => string;
                };
                if (
                  target.getAttribute &&
                  target.getAttribute('name') !== 'mark'
                ) {
                  setStatus(id);
                  todoFilter(query);
                }
              };

              return (
                <TodoItem
                  handleClickDel={handleClickDel}
                  handleClickMark={handleClickMark}
                  handleClickStatus={handleClickStatus}
                  key={id}
                  id={id}
                  title={title}
                  mark={mark}
                  status={status}
                  count={count}
                />
              );
            })
        : null}
    </div>
  );
});

export { TodoList };
