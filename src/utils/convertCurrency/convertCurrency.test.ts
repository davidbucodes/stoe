import { Currency, ExchangeRates } from "@component/pages/api/exchangeRates";
import convertCurrency from "@component/utils/convertCurrency/convertCurrency";

describe("convertCurrency", () => {
  const exchangeRates: ExchangeRates = {
    baseCurrency: Currency.USD,
    rates: {
      EUR: 0.9,
      GBP: 0.8,
      JPY: 132,
      USD: 1,
    },
  };

  it("should convert from USD to USD", () => {
    const price = 1;

    const { convertedPrice } = convertCurrency({
      exchangeRates,
      fromCurrency: Currency.USD,
      toCurrency: Currency.USD,
      price,
    });

    expect(convertedPrice).toEqual(price);
  });

  it("should convert from USD to JPY", () => {
    const price = 1;

    const { convertedPrice } = convertCurrency({
      exchangeRates,
      fromCurrency: Currency.USD,
      toCurrency: Currency.JPY,
      price,
    });

    expect(convertedPrice).toEqual(132);
  });

  it("should convert from USD to EUR", () => {
    const price = 1;

    const { convertedPrice } = convertCurrency({
      exchangeRates,
      fromCurrency: Currency.USD,
      toCurrency: Currency.EUR,
      price,
    });

    expect(convertedPrice).toEqual(0.9);
  });

  it("should convert from USD to GBP", () => {
    const price = 1;

    const { convertedPrice } = convertCurrency({
      exchangeRates,
      fromCurrency: Currency.USD,
      toCurrency: Currency.GBP,
      price,
    });

    expect(convertedPrice).toEqual(0.8);
  });
});
