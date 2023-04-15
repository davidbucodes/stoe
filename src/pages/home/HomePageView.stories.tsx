import type { Meta, StoryObj } from "@storybook/react";

import { exampleResponse } from "../../store/apis/products/exampleResponse";
import { HomePageView } from "./view";

const meta: Meta<typeof HomePageView> = {
  title: "HomePageView",
  component: HomePageView,
};

export default meta;
type Story = StoryObj<typeof HomePageView>;

export const Default: Story = {
  parameters: {
    nextjs: {
      router: {
        basePath: "/home",
      },
    },
  },
  args: {
    products: exampleResponse,
  },
};
