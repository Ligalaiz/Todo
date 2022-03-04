import { css } from '@emotion/react';
import { color } from '@src/styles';

export const baseBtn = css`
  min-width: 65px;
  max-height: 50px;
  padding: 5px;

  border-radius: 3px;

  font-weight: 600;

  transition: all 0.2s ease;
  &:enabled:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: none;
  }
`;

export const deleteBtn = css`
  ${baseBtn}
  border: 1px solid ${color.primary};

  color: ${color.primary};

  &:enabled:hover {
    border-color: ${color.primary};

    color: ${color['white-color']};

    background-color: ${color.primary};
  }
`;

export const markBtn = css`
  ${baseBtn}
  border: 1px solid ${color['green-color']};

  color: ${color['green-color']};

  &:enabled:hover {
    border-color: ${color['green-color']};

    color: ${color['white-color']};

    background-color: ${color['green-color']};
  }
`;

export const manageBtn = css`
  padding: 10px;
  border: 1px solid ${color['blue-color']};
  border-radius: 7px;

  color: ${color['blue-color']};
  font-weight: 600;

  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  transition: all 0.2s ease;
  &:disabled {
    border-color: ${color['gray-color']};

    color: ${color['gray-color']};
  }
  &:enabled {
    border-color: ${color['green-color--light']};

    color: ${color['green-color--light']};

    cursor: pointer;
  }
  &:enabled.active {
    color: ${color['white-color']};
  }
  &:enabled:hover {
    border-color: ${color['green-color--light']};

    color: ${color['white-color']};

    background-color: ${color['green-color--light']};
  }

  &:active {
    color: ${color['white-color']};
    box-shadow: none;
  }
`;

export const active = css`
  border-color: ${color['green-color--light']};

  color: ${color['white-color']}!important;

  background-color: ${color['green-color--light']};
  box-shadow: none;
`;
