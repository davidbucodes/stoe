import { Currency, ExchangeRates } from "@component/pages/api/exchangeRates";

export const exampleResponse: ExchangeRates = {
  baseCurrency: Currency.USD,
  rates: {
    EUR: 0.9,
    GBP: 0.8,
    JPY: 132,
    USD: 1,
  },
};
