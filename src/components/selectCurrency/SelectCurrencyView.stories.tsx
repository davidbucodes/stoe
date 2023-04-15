import type { Meta, StoryObj } from "@storybook/react";

import { SelectCurrencyView } from "@component/components/selectCurrency/view";
import { Currency } from "@component/pages/api/exchangeRates";

const meta: Meta<typeof SelectCurrencyView> = {
  title: "Input/SelectCurrency",
  component: SelectCurrencyView,
};

export default meta;
type Story = StoryObj<typeof SelectCurrencyView>;

export const Default: Story = {
  args: {
    selectedCurrency: Currency.JPY,
  },
  argTypes: {
    selectedCurrency: Currency,
  },
};
