import React, { FC, MouseEvent } from 'react';
import { observer } from 'mobx-react';
import * as btn from './BtnStyle';

interface IButton {
  styleBtn: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isDisabled?: boolean;
  name?: string;
  handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
  testid?: string;
}

interface LooseObject {
  [key: string]: any;
}

const Btn: FC<IButton> = observer(
  ({
    children,
    type = 'button',
    styleBtn,
    name,
    handleClick,
    isDisabled,
    isActive,
    testid,
  }) => {
    const typedObj: LooseObject = btn;

    return (
      <button
        css={
          isActive
            ? [typedObj[`${styleBtn}`], btn.active]
            : typedObj[`${styleBtn}`]
        }
        data-testid={testid}
        type={type || 'button'}
        name={name}
        onClick={handleClick}
        disabled={isDisabled}
      >
        {children}
      </button>
    );
  },
);

export { Btn };
