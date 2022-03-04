import React, { FC, KeyboardEvent, ChangeEvent } from 'react';
import { observer } from 'mobx-react';
import { input } from './InputStyle';

interface IInput {
  placeholder: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKey?: (e: KeyboardEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  value: string;
  className?: string;
  testid?: string;
}

const Input: FC<IInput> = observer(
  ({
    value,
    placeholder,
    name,
    handleKey,
    handleChange,
    className,
    testid,
  }) => {
    return (
      <input
        value={value}
        onChange={handleChange}
        onKeyDown={handleKey}
        data-testid={testid}
        css={input}
        type="text"
        name={name}
        placeholder={placeholder}
        className={className}
      />
    );
  },
);

export { Input };
