import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TodoItem } from '@modules/TodoItem';

const meta: Meta = {
  title: 'Components | TodoItem',
  id: 'components/TodoItem',
  component: TodoItem,
  argTypes: {
    id: {
      type: 'string',
      name: 'Item ID',
      description: 'Идентификатор кнопки',
      defaultValue: '1',
    },

    key: {
      type: 'string',
      name: 'Key',
      description: 'Уникальный key для TodoItem',
      defaultValue: '1',
    },

    title: {
      type: 'string',
      name: 'Todo description',
      description: 'Содержание TodoItem',
      defaultValue: 'Прочитаь книгу',
    },

    mark: {
      type: 'boolean',
      name: 'Mark',
      description: 'Отметить TodoItem как важное',
      defaultValue: false,
    },

    status: {
      type: 'boolean',
      name: 'Status',
      description: 'Текущий статус выполнения TodoItem',
      defaultValue: false,
    },

    count: {
      type: 'string',
      name: 'Count',
      description: 'Положение TodoItem в очереди',
      defaultValue: '1',
    },

    handleClickDel: {
      name: 'Click Handler | Del btn',
      description: 'Обработчик кнопки удаления',
      action: 'hadleClick',
    },

    handleClickMark: {
      name: 'Click Handler | Mark btn',
      description: 'Обработчик кнопки выделения',
      action: 'hadleClick',
    },

    handleClickStatus: {
      name: 'Click Handler | Todo Item',
      description: 'Обработчик статуса выполнения',
      action: 'hadleClick',
    },
  },
};

export default meta;

const Template: Story = (args) => <TodoItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 1,
  key: 1,
  title: 'Todo this',
  mark: false,
  status: false,
  count: 1,
};
