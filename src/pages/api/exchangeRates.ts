import axios from "axios";
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
export type ExchangeRatesApiResponse = ExchangeRates;
type ResponseData = ExchangeRates;
export type ExchangeRates = {
  success: boolean;
  timestamp: number;
  base: Currency.USD;
  date: string;
  rates: Record<keyof Pick<typeof Currency, "EUR" | "GBP" | "JPY">, number>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseError>
) {
  if (req.method !== "GET") {
    return res.status(400).send({
      error: "Method not supported",
    });
  }
  const result = await axios.get(
    "https://api.apilayer.com/exchangerates_data/latest",
    {
      params: {
        base: "USD",
        symbols: "EUR,GBP,JPY",
      },
      headers: {
        apikey: "dmHgNd7mluPlHzIpoB21q9hStgD0yTAi",
      },
    }
  );
  return res.status(200).json(result.data);
}
