import type { NextApiRequest, NextApiResponse } from "next";

export enum Currency {
  EUR = "EUR",
  GBP = "GBP",
  JPY = "JPY",
  USD = "USD",
}
type ErrorMessage = "Method not supported";
type ResponseError = {
  error: ErrorMessage;
};
export type ResponseData = {
  exchangeRates: ExchangeRates;
};
export type ExchangeRatesApiResponse = ResponseData;

export type ExchangeRates = {
  baseCurrency: Currency.USD;
  rates: Record<Currency, number>;
};

const exchangeRates: ExchangeRates = {
  baseCurrency: Currency.USD,
  rates: {
    EUR: 0.9,
    GBP: 0.8,
    JPY: 132,
    USD: 1,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseError>
) {
  if (req.method !== "GET") {
    return res.status(400).send({
      error: "Method not supported",
    });
  }

  return res.status(200).json({ exchangeRates });
}
