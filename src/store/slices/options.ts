import { Currency } from "@component/pages/api/exchangeRates";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface Options {
  selectedCurrency: Currency;
}

const initialState: Options = { selectedCurrency: Currency.JPY };

const optionsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    patchOptions(state, action: PayloadAction<Partial<Options>>) {
      Object.assign(state, action.payload);
    },
  },
});

export const { patchOptions } = optionsSlice.actions;
export default optionsSlice.reducer;
