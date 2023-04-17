import type { Meta, StoryObj } from "@storybook/react";

import { ErrorPageView } from "@component/components/pages/error/view";
import { store } from "@component/store/store";
import { Provider } from "react-redux";

const meta: Meta<typeof ErrorPageView> = {
  title: "ErrorPage/ErrorPageView",
  component: ErrorPageView,
};

export default meta;
type Story = StoryObj<typeof ErrorPageView>;

export const Default: Story = {
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  args: {},
};
