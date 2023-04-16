import type { Meta, StoryObj } from "@storybook/react";

import { LayoutView } from "@component/components/layout/view";
import { store } from "@component/store/store";
import { Provider } from "react-redux";

const meta: Meta<typeof LayoutView> = {
  title: "Layout/LayoutView",
  component: LayoutView,
};

export default meta;
type Story = StoryObj<typeof LayoutView>;

export const Default: Story = {
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  args: {
    children: <div>Content</div>,
  },
};
