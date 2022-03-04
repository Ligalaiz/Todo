import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { App } from '@src/App';

describe('TodoApp component', () => {
  describe('Component exist', () => {
    it('TodoApp check that the component has been rendered #smoke', () => {
      const { getByTestId } = render(<App />);

      expect(getByTestId('todoAdd')).toBeInTheDocument();
      expect(getByTestId('todoAddField')).toBeInTheDocument();
      expect(getByTestId('todoAddBtn')).toBeInTheDocument();
    });
  });

  describe('Сomponent works', () => {
    it('todoAddField check change handler was called after type', () => {
      const { getByTestId } = render(<App />);
      const todoAddField = getByTestId('todoAddField');
      const todoAddBtn = getByTestId('todoAddBtn');

      expect(todoAddBtn).toBeDisabled();

      userEvent.type(todoAddField, 'Press Enter');
      expect(todoAddField).toHaveValue('Press Enter');

      userEvent.type(todoAddField, '{enter}');
      expect(todoAddField).not.toHaveValue('Press Enter');
    });

    it('todoAddBtn check button state is not disabled when textbox is not empty', () => {
      const { getByTestId } = render(<App />);
      const todoAddField = getByTestId('todoAddField');
      const todoAddBtn = getByTestId('todoAddBtn');

      userEvent.type(todoAddField, 'Click on button');

      expect(todoAddBtn).not.toBeDisabled();
    });
  });
});
