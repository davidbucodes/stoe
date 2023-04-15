import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroupView } from "@component/components/radioGroup/view";
import { Currency } from "@component/pages/api/exchangeRates";

const meta: Meta<typeof RadioGroupView> = {
  title: "Input/RadioGroup",
  component: RadioGroupView,
};

export default meta;
type Story = StoryObj<typeof RadioGroupView>;

export const Default: Story = {
  args: {
    options: Object.values(Currency),
  },
  argTypes: {
    selectedOption: Currency,
  },
};
