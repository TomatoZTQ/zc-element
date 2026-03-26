import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { ref, watch } from 'vue';
import { ZcSwitch } from '@tomatoztq/zc-element';

type Story = StoryObj<typeof ZcSwitch> & { argTypes?: ArgTypes };

const meta: Meta<typeof ZcSwitch> = {
  title: 'Example/Switch',
  component: ZcSwitch,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'small', ''],
    },
    activeText: {
      control: { type: 'text' },
    },
    inactiveText: {
      control: { type: 'text' },
    },
  },
};

export const Default: Story = {
  args: {
    modelValue: false,
  },
  render: (args) => ({
    components: { ZcSwitch },
    setup() {
      const value = ref(Boolean(args.modelValue));
      watch(
        () => args.modelValue,
        (val) => {
          value.value = Boolean(val);
        }
      );
      return { args, value };
    },
    template: '<zc-switch v-bind="args" v-model="value" />',
  }),
};

export const WithText: Story = {
  args: {
    modelValue: true,
    activeText: 'ON',
    inactiveText: 'OFF',
    size: 'large',
  },
  render: (args) => ({
    components: { ZcSwitch },
    setup() {
      const value = ref(Boolean(args.modelValue));
      watch(
        () => args.modelValue,
        (val) => {
          value.value = Boolean(val);
        }
      );
      return { args, value };
    },
    template: '<zc-switch v-bind="args" v-model="value" />',
  }),
};

export default meta;