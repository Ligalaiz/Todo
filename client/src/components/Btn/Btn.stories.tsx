import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Btn } from '@components/Btn';

const meta: Meta = {
  title: 'Components | Button',
  id: 'components/Button',
  component: Btn,
  argTypes: {
    children: {
      type: 'string',
      name: 'Content',
      description: 'Название кнопки',
      defaultValue: 'Button',
    },

    styleBtn: {
      type: 'string',
      name: 'Button style',
      description: 'Тип оформления кнопки',
    },

    type: {
      type: 'string',
      name: 'Type',
      description: 'Тип кнопки',
      defaultValue: 'button',
    },

    name: {
      type: 'string',
      name: 'Name',
      description: 'Name кнопки',
    },

    isDisabled: {
      type: 'boolean',
      name: 'Disabled',
      description: 'Статус disabled кнопки',
      defaultValue: false,
    },

    testid: {
      type: 'string',
      name: 'Data attribute',
      description: 'Test ID компонента Btn',
      defaultValue: 'todoBtn',
    },

    isActive: {
      type: 'boolean',
      name: 'Active state',
      description: 'Состояние active компонента Btn',
      defaultValue: 'false',
    },

    handleClick: {
      name: 'Click Handler | Todo Item',
      description: 'Обработчик клика по кнопке',
      action: 'hadleClick',
    },

    disabled: { table: { disable: true } },
  },
};

export default meta;

const Template: Story = (args) => <Btn {...args} />;

export const DeleteBtn = Template.bind({});

DeleteBtn.args = {
  children: 'Delete',
  styleBtn: 'deleteBtn',
  name: 'delete',
  disabled: false,
};

export const MarkBtn = Template.bind({});

MarkBtn.args = {
  children: 'Mark',
  styleBtn: 'markBtn',
  name: 'mark',
  disabled: false,
};

export const ManageBtn = Template.bind({});

ManageBtn.args = {
  children: 'Add',
  styleBtn: 'manageBtn',
  name: 'add',
  disabled: false,
  isActive: false,
};
