import { Currency, ExchangeRates } from "@component/pages/api/exchangeRates";
import convertCurrency from "@component/utils/convertCurrency/convertCurrency";

describe("convertCurrency", () => {
  const exchangeRates: ExchangeRates = {
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

  it("should convert from USD to JPY", () => {
    const price = 1;

    const { convertedPrice } = convertCurrency({
      exchangeRates,
      toCurrency: Currency.JPY,
      usdPrice: price,
    });

    expect(convertedPrice).toEqual(132);
  });

  it("should convert from USD to EUR", () => {
    const price = 1;

    const { convertedPrice } = convertCurrency({
      exchangeRates,
      toCurrency: Currency.EUR,
      usdPrice: price,
    });

    expect(convertedPrice).toEqual(0.9);
  });

  it("should convert from USD to GBP", () => {
    const price = 1;

    const { convertedPrice } = convertCurrency({
      exchangeRates,
      toCurrency: Currency.GBP,
      usdPrice: price,
    });

    expect(convertedPrice).toEqual(0.8);
  });
});
