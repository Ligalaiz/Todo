import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { TodoItem } from '@modules/TodoItem';

const handleClickDel = jest.fn();
const handleClickMark = jest.fn();
const handleClickStatus = jest.fn();

const renderComponent = () =>
  render(
    <TodoItem
      id="1"
      title="To do this"
      status={false}
      mark={false}
      count={1}
      handleClickDel={handleClickDel}
      handleClickMark={handleClickMark}
      handleClickStatus={handleClickStatus}
    />,
  );

describe('TodoItem component', () => {
  describe('Component exist', () => {
    it('todoItem check that the component has been rendered #smoke', () => {
      const { getByTestId } = renderComponent();

      expect(getByTestId('todoItem')).toBeInTheDocument();
      expect(getByTestId('deleteBtn')).toBeInTheDocument();
      expect(getByTestId('markBtn')).toBeInTheDocument();
    });
  });

  describe('Сomponent works', () => {
    it('todoItem check click handler was called after click', () => {
      const { getByTestId } = renderComponent();
      const todoItem = getByTestId('todoItem');

      userEvent.click(todoItem);

      expect(handleClickStatus).toHaveBeenCalledTimes(1);
    });

    it('deleteBtn check click handler was called after click', () => {
      const { getByTestId } = renderComponent();
      const deleteBtn = getByTestId('deleteBtn');

      userEvent.click(deleteBtn);

      expect(handleClickDel).toHaveBeenCalledTimes(1);
    });

    it('markBtn check click handler was called after click', () => {
      const { getByTestId } = renderComponent();
      const markBtn = getByTestId('markBtn');

      userEvent.click(markBtn);

      expect(handleClickMark).toHaveBeenCalledTimes(1);
    });
  });
});
