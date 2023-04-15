import type { Meta, StoryObj } from "@storybook/react";

import { ProductPageView } from "@component/pages/product/view";
import { exampleResponse } from "../../store/apis/products/exampleResponse";

const meta: Meta<typeof ProductPageView> = {
  title: "ProductPageView",
  component: ProductPageView,
};

export default meta;
type Story = StoryObj<typeof ProductPageView>;

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
