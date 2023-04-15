import type { Meta, StoryObj } from "@storybook/react";

import { Currency } from "@component/pages/api/exchangeRates";
import { ProductPageView } from "@component/pages/product/view";
import { exampleResponse as exchangeRatesExampleResponse } from "../../store/apis/exchangeRates/exampleResponse";
import { exampleResponse as productsExampleResponse } from "../../store/apis/products/exampleResponse";

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
    product: productsExampleResponse[0],
    exchangeRates: exchangeRatesExampleResponse,
    selectedCurrency: Currency.JPY,
  },
  argTypes: {
    selectedCurrency: Currency,
  },
};
