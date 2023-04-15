import type { Meta, StoryObj } from "@storybook/react";

import { LayoutView } from "@component/components/layout/view";

const meta: Meta<typeof LayoutView> = {
  title: "Layout/Layout",
  component: LayoutView,
};

export default meta;
type Story = StoryObj<typeof LayoutView>;

export const Default: Story = {
  args: {
    children: <div>Content</div>,
  },
};
