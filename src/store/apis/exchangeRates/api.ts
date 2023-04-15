import { ExchangeRatesApiResponse } from "@component/pages/api/exchangeRates";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const exchangeRatesApi = createApi({
  reducerPath: "exchangeRatesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  endpoints: (builder) => ({
    getExchangeRates: builder.query<ExchangeRatesApiResponse, null>({
      query: () => `exchangeRates`,
    }),
  }),
});

export const { useGetExchangeRatesQuery } = exchangeRatesApi;
