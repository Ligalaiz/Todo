import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { Btn } from '@components/Btn';

const handleClick = jest.fn();

const renderComponent = () =>
  render(
    <Btn
      type="button"
      styleBtn="manageBtn"
      handleClick={handleClick}
      testid="todoAddBtn"
    />,
  );

describe('Btn component', () => {
  describe('Component exist', () => {
    it('todoAddBtn check that the component has been rendered #smoke', () => {
      const { getByTestId } = renderComponent();
      const btn = getByTestId('todoAddBtn');

      expect(btn).toBeInTheDocument();
    });
  });

  describe('Сomponent works', () => {
    it('todoAddBtn check click handler was called after click', () => {
      const { getByTestId } = renderComponent();
      const btn = getByTestId('todoAddBtn');

      userEvent.click(btn);
      expect(handleClick).toHaveBeenCalled();
    });

    it('todoAddBtn check button state is disabled when textbox is empty', () => {
      const { getByTestId } = render(
        <Btn
          type="button"
          styleBtn="manageBtn"
          handleClick={handleClick}
          testid="todoAddBtn"
          isDisabled
        />,
      );
      const btn = getByTestId('todoAddBtn');

      expect(btn).toBeDisabled();
    });
  });
});
