import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, cleanup } from '@testing-library/react';
import { TodoList } from '@modules/TodoList';
import { TodoStore } from '@src/store';

afterEach(cleanup);

describe('TodoList component', () => {
  describe('Component exist', () => {
    it('todoList check that the component has been rendered #smoke', () => {
      TodoStore.setTodosTest({
        title: 'Test',
        data: new Date().toLocaleDateString(),
        status: false,
        mark: false,
        id: '123',
      });

      const { getByTestId } = render(<TodoList />);

      expect(getByTestId('todoList')).toBeInTheDocument();
      expect(getByTestId('deleteBtn')).toBeInTheDocument();
      expect(getByTestId('markBtn')).toBeInTheDocument();
    });
  });

  describe('Сomponent works', () => {
    it('todoItem check status field in store was changed after click', () => {
      const { getByTestId } = render(<TodoList />);
      const todoItem = getByTestId('todoItem');

      userEvent.click(todoItem);

      expect(TodoStore.renderTodos[0].status).toBeTruthy();
    });

    it('markBtn check mark field in store was changed after click', () => {
      const { getByTestId } = render(<TodoList />);
      const markBtn = getByTestId('markBtn');

      userEvent.click(markBtn);

      expect(TodoStore.renderTodos[0].mark).toBeTruthy();
    });

    it('deleteBtn check renderTodos field in store was changed after click', () => {
      const { getByTestId } = render(<TodoList />);
      const deleteBtn = getByTestId('deleteBtn');

      userEvent.click(deleteBtn);

      expect(TodoStore.renderTodos).toHaveLength(0);
    });
  });
});
