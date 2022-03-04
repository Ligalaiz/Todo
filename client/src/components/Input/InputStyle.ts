import { css } from '@emotion/react';
import { color } from '@src/styles';

export const input = css`
  width: calc(100% - 55px);
  padding: 10px;
  border: 2px solid ${color['gray-color']};
  border-radius: 5px;

  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);

  transition: all 0.2s ease;
  &:focus {
    border-color: ${color['green-color--light']};
  }
`;
