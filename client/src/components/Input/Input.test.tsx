import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { Input } from '@components/Input';

const handleKey = jest.fn();
const handleChange = jest.fn();

const renderComponent = () =>
  render(
    <Input
      placeholder="What needs to be done?"
      name="todoAdd"
      type="text"
      handleKey={handleKey}
      handleChange={handleChange}
      value="value"
      testid="todoAddField"
    />,
  );

describe('Input component', () => {
  describe('Component exist', () => {
    it('todoAddField check that the component has been rendered #smoke', () => {
      const { getByTestId } = renderComponent();
      const input = getByTestId('todoAddField');

      expect(input).toBeInTheDocument();
    });
  });

  describe('Сomponent works', () => {
    it('todoAddField check change handler was called after type', () => {
      const { getByTestId } = renderComponent();
      const input = getByTestId('todoAddField');

      userEvent.type(input, 'test');
      expect(handleChange).toHaveBeenCalledTimes(4);

      userEvent.type(input, '{enter}');
      expect(handleChange).toHaveBeenCalled();
    });
  });
});
