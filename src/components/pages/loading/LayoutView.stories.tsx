import type { Meta, StoryObj } from "@storybook/react";

import { LoadingPageView } from "@component/components/pages/loading/view";
import { store } from "@component/store/store";
import { Provider } from "react-redux";

const meta: Meta<typeof LoadingPageView> = {
  title: "LoadingPage/LoadingPageView",
  component: LoadingPageView,
};

export default meta;
type Story = StoryObj<typeof LoadingPageView>;

export const Default: Story = {
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  args: {},
};
