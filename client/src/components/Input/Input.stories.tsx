import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input } from '@components/Input';

const meta: Meta = {
  title: 'Components | Input',
  id: 'components/Input',
  component: Input,
  argTypes: {
    placeholder: {
      type: 'string',
      name: 'Placeholder',
      description: 'Placeholder компонента Input',
      defaultValue: 'What needs to be done?',
    },

    name: {
      type: 'string',
      name: 'Input Name',
      description: 'Name компонента Input',
      defaultValue: 'todoAdd',
    },

    type: {
      type: 'string',
      name: 'Input Type',
      description: 'Type компонента Input',
      defaultValue: 'text',
    },

    className: {
      type: 'string',
      name: 'Class Name',
      description: 'Class name компонента Input',
      defaultValue: 'todoAddField',
    },

    testid: {
      type: 'string',
      name: 'Data attribute',
      description: 'Test ID компонента Input',
      defaultValue: 'todoAddField',
    },

    value: {
      type: 'string',
      name: 'Input Value',
      description: 'Value компонента Input',
    },

    handleChange: {
      name: 'Change Handler | Input',
      description: 'Обработчик ввода текста',
      action: 'hadleChange',
    },

    handleKey: {
      name: 'Press Key Handler | Input',
      description: 'Обработчик нажатия клавиши Enter',
      action: 'pressKey',
    },
  },
};

export default meta;

const Template: Story = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Placeholder text',
  name: 'todoAdd',
  type: 'text',
  value: '',
};
