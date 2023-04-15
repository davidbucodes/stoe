import { exchangeRatesApi } from "@component/store/apis/exchangeRates/api";
import { productsApi } from "@component/store/apis/products/api";
import { configureStore } from "@reduxjs/toolkit";
import optionsReducer from "./slices/options";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [exchangeRatesApi.reducerPath]: exchangeRatesApi.reducer,
    options: optionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(exchangeRatesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
