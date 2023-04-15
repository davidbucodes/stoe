import type { Meta, StoryObj } from "@storybook/react";

import { exampleResponse } from "../../../mockData/products/exampleResponse";
import ProductPage from "./[id]";

const meta: Meta<typeof ProductPage> = {
  title: "ProductPage",
  component: ProductPage,
};

export default meta;
type Story = StoryObj<typeof ProductPage>;

export const Default: Story = {
  parameters: {
    nextjs: {
      router: {
        basePath: "/product/[id]",
      },
    },
  },
  args: {
    product: exampleResponse[0],
  },
};
