import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { App } from '@src/App';
import { TodoStore } from '@src/store';

describe('Search component', () => {
  describe('Component exist', () => {
    it('searchField check that the component has been rendered #smoke', () => {
      const { getByTestId } = render(<App />);

      expect(getByTestId('search')).toBeInTheDocument();
      expect(getByTestId('searchField')).toBeInTheDocument();
      expect(getByTestId('allBtn')).toBeInTheDocument();
      expect(getByTestId('activeBtn')).toBeInTheDocument();
      expect(getByTestId('doneBtn')).toBeInTheDocument();
    });
  });

  describe('Сomponent works', () => {
    it('searchField check change handler was called after type', () => {
      TodoStore.setTodosTest({
        title: 'Todo content',
        data: new Date().toLocaleDateString(),
        status: false,
        mark: false,
        id: '123',
      });

      const { getByTestId, queryByText } = render(<App />);
      const searchField = getByTestId('searchField');

      userEvent.type(searchField, 'Test');
      expect(searchField).toHaveValue('Test');

      userEvent.type(searchField, '{alt}');
      expect(queryByText('Todo content')).toBeInTheDocument();

      userEvent.type(searchField, '{enter}');
      expect(queryByText('Todo content')).toBeNull();
    });
  });
});
