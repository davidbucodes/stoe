import { Currency, ExchangeRates } from "@component/pages/api/exchangeRates";

const exchangeRates: {
  baseCurrency: "USD";
  rates: Record<Currency, number>;
} = {
  baseCurrency: "USD",
  rates: {
    EUR: 0.9,
    GBP: 0.801623,
    JPY: 132,
  },
};

export default function convertCurrency({
  price,
  fromCurrency,
  toCurrency,
  exchangeRates,
}: {
  price: number;
  fromCurrency: Currency;
  toCurrency: Currency;
  exchangeRates: ExchangeRates;
}) {
  const convertedToUSD = price / exchangeRates.rates[fromCurrency];
  const convertedFromUSD = exchangeRates.rates[toCurrency] * convertedToUSD;
  return { convertedPrice: convertedFromUSD };
}
