import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { ref, watch } from 'vue';
import { ZcInput } from '@tomatoztq/zc-element';

type Story = StoryObj<typeof ZcInput> & { argTypes?: ArgTypes };

const meta: Meta<typeof ZcInput> = {
  title: 'Example/Input',
  component: ZcInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'textarea'],
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'small', ''],
    },
    disabled: {
      control: 'boolean',
    },
    clearable: {
      control: 'boolean',
    },
    showPassword: {
      control: 'boolean',
    },
    placeholder: {
      control: { type: 'text' },
    },
    modelValue: {
      control: { type: 'text' },
    },
  },
};

export const Default: Story = {
  args: {
    modelValue: 'Hello Zc Element',
    placeholder: 'Please input',
    clearable: true,
    type: 'text',
  },
  render: (args) => ({
    components: { ZcInput },
    setup() {
      const value = ref((args.modelValue as string) ?? '');
      watch(
        () => args.modelValue,
        (val) => {
          value.value = (val as string) ?? '';
        }
      );
      return { args, value };
    },
    template: `
      <div style="width: 320px;">
        <zc-input v-bind="args" v-model="value" />
      </div>
    `,
  }),
};

export const Password: Story = {
  args: {
    modelValue: '123456',
    placeholder: 'Enter password',
    type: 'password',
    showPassword: true,
  },
  render: (args) => ({
    components: { ZcInput },
    setup() {
      const value = ref((args.modelValue as string) ?? '');
      watch(
        () => args.modelValue,
        (val) => {
          value.value = (val as string) ?? '';
        }
      );
      return { args, value };
    },
    template: `
      <div style="width: 320px;">
        <zc-input v-bind="args" v-model="value" />
      </div>
    `,
  }),
};

export const WithSlots: Story = {
  args: {
    modelValue: '',
    placeholder: 'Search keyword',
  },
  render: (args) => ({
    components: { ZcInput },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <div style="width: 420px;">
        <zc-input v-bind="args" v-model="value">
          <template #prepend>https://</template>
          <template #append>.com</template>
        </zc-input>
      </div>
    `,
  }),
};

export default meta;