import type { Meta, StoryObj } from "@storybook/react";

import { TopbarView } from "@component/components/topbar/view";

const meta: Meta<typeof TopbarView> = {
  title: "Layout/Topbar",
  component: TopbarView,
};

export default meta;
type Story = StoryObj<typeof TopbarView>;

export const Default: Story = {};
