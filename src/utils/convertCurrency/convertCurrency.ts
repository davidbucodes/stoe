import { Currency, ExchangeRates } from "@component/pages/api/exchangeRates";

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

  const roundedConvertedPrice =
    Math.round((convertedFromUSD + Number.EPSILON) * 100) / 100;
  return { convertedPrice: roundedConvertedPrice };
}
