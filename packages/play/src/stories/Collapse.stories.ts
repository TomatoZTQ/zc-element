import type { Meta, StoryObj } from '@storybook/vue3';
import { ZcCollapse, ZcCollapseItem } from '@tomatoztq/zc-element';

type Story = StoryObj<typeof ZcCollapse>;

const meta: Meta<typeof ZcCollapse> = {
  title: 'Example/Collapse',
  component: ZcCollapse,
  subcomponents: { ZcCollapseItem },
  tags: ['autodocs'],
};

export const Default: Story = {
  args: {
    accordion: false,
    modelValue: ['a'],
  },
  render: (args) => ({
    components: { ZcCollapse, ZcCollapseItem },
    setup() {
      return { args };
    },
    template: `
      <zc-collapse v-bind="args">
        <zc-collapse-item name="a" title="Title a">
          <div>This is content a</div>
        </zc-collapse-item>
        <zc-collapse-item name="b" title="Title b">
          <div>This is content b</div>
        </zc-collapse-item>
        <zc-collapse-item name="c" title="Title c disabled" disabled>
          <div>This is content c</div>
        </zc-collapse-item>
      </zc-collapse>
    `,
  }),
};

export const Accordion: Story = {
  args: {
    accordion: true,
    modelValue: ['a'],
  },
  render: (args) => ({
    components: { ZcCollapse, ZcCollapseItem },
    setup() {
      return { args };
    },
    template: `
      <zc-collapse v-bind="args">
        <zc-collapse-item name="a" title="Overview">
          <div>Accordion content a</div>
        </zc-collapse-item>
        <zc-collapse-item name="b" title="Details">
          <div>Accordion content b</div>
        </zc-collapse-item>
      </zc-collapse>
    `,
  }),
};

export default meta;