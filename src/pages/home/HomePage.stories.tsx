import type { Meta, StoryObj } from "@storybook/react";

import HomePage from ".";
import { exampleResponse } from "../../../mockData/products/exampleResponse";

const meta: Meta<typeof HomePage> = {
  title: "HomePage",
  component: HomePage,
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {
  parameters: {
    nextjs: {
      router: {
        basePath: "/",
      },
    },
  },
  args: {
    products: exampleResponse,
  },
};
