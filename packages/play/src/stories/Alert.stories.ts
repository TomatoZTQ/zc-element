import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { ZcAlert } from '@tomatoztq/zc-element';

type Story = StoryObj<typeof ZcAlert> & { argTypes?: ArgTypes };

const meta: Meta<typeof ZcAlert> = {
  title: 'Example/Alert',
  component: ZcAlert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'warning', 'info', 'danger', 'error'],
    },
    effect: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
    center: {
      control: 'boolean',
    },
    showIcon: {
      control: 'boolean',
    },
    closable: {
      control: 'boolean',
    },
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
  },
};

export const Default: Story = {
  args: {
    title: 'Alert Title',
    description: 'This is an alert description',
    type: 'success',
    effect: 'light',
    closable: true,
    showIcon: true,
  },
  render: (args) => ({
    components: { ZcAlert },
    setup() {
      return { args };
    },
    template: '<zc-alert v-bind="args" />',
  }),
};

export const WithSlot: Story = {
  args: {
    type: 'warning',
    effect: 'light',
    showIcon: true,
    closable: true,
  },
  render: (args) => ({
    components: { ZcAlert },
    setup() {
      return { args };
    },
    template: `
      <zc-alert v-bind="args">
        <template #title>Custom Title Slot</template>
        Custom description from default slot.
      </zc-alert>
    `,
  }),
};

export default meta;