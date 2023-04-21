import { Currency, ExchangeRates } from "@component/pages/api/exchangeRates";

export default function convertCurrency({
  usdPrice,
  toCurrency,
  exchangeRates,
}: {
  usdPrice: number;
  toCurrency: Currency;
  exchangeRates: ExchangeRates;
}) {
  if (toCurrency === Currency.USD) {
    return { convertedPrice: usdPrice };
  }
  const convertedFromUSD = exchangeRates.rates[toCurrency] * usdPrice;

  const roundedConvertedPrice =
    Math.round((convertedFromUSD + Number.EPSILON) * 100) / 100;
  return { convertedPrice: roundedConvertedPrice };
}
