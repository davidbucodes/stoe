import type { Meta, StoryObj } from "@storybook/react";

import { TopbarView } from "@component/components/topbar/view";
import { Currency } from "@component/pages/api/exchangeRates";
import { exampleResponse } from "../../store/apis/exchangeRates/exampleResponse";

const meta: Meta<typeof TopbarView> = {
  title: "TopbarView",
  component: TopbarView,
};

export default meta;
type Story = StoryObj<typeof TopbarView>;

export const Default: Story = {
  parameters: {
    nextjs: {
      router: {
        basePath: "/product/[id]",
      },
    },
  },
  args: {
    exchangeRates: exampleResponse,
    selectedCurrency: Currency.JPY,
  },
  argTypes: {
    selectedCurrency: Currency,
  },
};
