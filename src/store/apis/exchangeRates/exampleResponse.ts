import { Currency, ExchangeRates } from "@component/pages/api/exchangeRates";

export const exampleResponse: ExchangeRates = {
  date: "",
  success: true,
  timestamp: 1,
  base: Currency.USD,
  rates: {
    EUR: 0.9,
    GBP: 0.8,
    JPY: 132,
  },
};
