import React, { FC, MouseEvent } from 'react';
import { TodoStore } from '@src/store';
import { observer } from 'mobx-react';
import { TodoItem } from '@modules/TodoItem';
import { todoListWrap } from './TodoListStyle';
import { useMutation } from '@apollo/client';
import MarkUpdate from '@src/graphql/MarkUpdate.mutation.graphql';
import StatusUpdate from '@src/graphql/StatusUpdate.mutation.graphql';
import DeleteTodo from '@src/graphql/DeleteTodo.mutation.graphql';

const TodoList: FC = observer(() => {
  const [markUpdate] = useMutation(MarkUpdate);
  const [statusUpdate] = useMutation(StatusUpdate);
  const [todoDelete] = useMutation(DeleteTodo);
  const { renderTodos, query, deleteTodo, markTodo, setStatus, todoFilter } =
    TodoStore;

  return (
    <div css={todoListWrap} data-testid="todoList">
      {renderTodos.length
        ? [...renderTodos]
            .reverse()
            .map(({ id, title, mark, status }, ind, arr) => {
              const count = arr.length - ind;

              const handleClick = (
                e: MouseEvent<HTMLDivElement | HTMLButtonElement>,
              ) => {
                e.stopPropagation();
                const target = e.target as typeof e.target & {
                  getAttribute: (a: string) => string;
                };
                if (target.getAttribute) {
                  const targetName = target.getAttribute('name');

                  if (targetName === 'delete') {
                    deleteTodo(id);
                    todoDelete({
                      variables: {
                        id,
                      },
                    });
                  } else if (targetName === 'mark') {
                    const result = markTodo(id);

                    markUpdate({
                      variables: {
                        id,
                        mark: result,
                      },
                    });
                  } else {
                    todoFilter(query);
                    const result = setStatus(id);

                    statusUpdate({
                      variables: {
                        id,
                        status: result,
                      },
                    });
                  }
                }
              };

              return (
                <TodoItem
                  handleClickDel={handleClick}
                  handleClickMark={handleClick}
                  handleClickStatus={handleClick}
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
