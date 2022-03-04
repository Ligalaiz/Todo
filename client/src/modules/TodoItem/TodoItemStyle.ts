import { css } from '@emotion/react';
import { color } from '@src/styles';

export const todoStyle = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;

  background-color: ${color['green-color--light']};
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
`;

export const markStyle = css`
  ${todoStyle}
  background-color: ${color['red-color--light']};
`;

export const todoDoneStyle = css`
  ${todoStyle}
  background-color: ${color['black-color--light']};
`;

export const controlBar = css`
  display: flex;
  gap: 5px;
  justify-content: space-between;
`;

export const countStyle = css`
  font-weight: 700;
  font-size: 22px;
`;

export const titleDoneStyle = css`
  text-decoration: line-through;
  text-decoration-color: ${color.primary};
`;
