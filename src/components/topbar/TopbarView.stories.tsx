import type { Meta, StoryObj } from "@storybook/react";

import { TopbarView } from "@component/components/topbar/view";
import { store } from "@component/store/store";
import { Provider } from "react-redux";

const meta: Meta<typeof TopbarView> = {
  title: "Layout/TopbarView",
  component: TopbarView,
};

export default meta;
type Story = StoryObj<typeof TopbarView>;

export const Default: Story = {
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};
