import React, { FC, MouseEvent } from 'react';
import { observer } from 'mobx-react';
import { Btn } from '@components/Btn';
import {
  controlBar,
  countStyle,
  titleDoneStyle,
  markStyle,
  todoStyle,
  todoDoneStyle,
} from './TodoItemStyle';

export interface ITodoItem {
  id: string;
  title: string;
  status: boolean;
  mark: boolean;
  count: number;
  handleClickDel: () => void;
  handleClickMark: () => void;
  handleClickStatus: (e: MouseEvent<HTMLDivElement>) => void;
}

const TodoItem: FC<ITodoItem> = observer(
  ({
    id,
    title,
    mark,
    status,
    count,
    handleClickDel,
    handleClickMark,
    handleClickStatus,
  }) => {
    let colorStatus = todoStyle;

    if (status) {
      colorStatus = todoDoneStyle;
    } else if (!status && mark) {
      colorStatus = markStyle;
    }

    return (
      <div
        aria-hidden="true"
        key={id}
        css={colorStatus}
        onClick={(e) => handleClickStatus(e)}
        data-testid="todoItem"
        data-status={status}
        data-mark={mark}
      >
        <div>
          <p css={countStyle}>{count}</p>
          <div css={status ? titleDoneStyle : ''} data-testid="todoItemTitle">
            {title}
          </div>
        </div>
        <div css={controlBar}>
          <Btn
            handleClick={handleClickDel}
            styleBtn="deleteBtn"
            name="delete"
            testid="deleteBtn"
          >
            Delete
          </Btn>
          <Btn
            handleClick={handleClickMark}
            styleBtn="markBtn"
            name="mark"
            testid="markBtn"
          >
            {mark ? 'UnMark' : 'Mark'}
          </Btn>
        </div>
      </div>
    );
  },
);

export { TodoItem };
