import { SelectCurrencyView } from "@component/components/selectCurrency/view";
import { Currency } from "@component/pages/api/exchangeRates";
import { useAppDispatch, useAppSelector } from "@component/store/hooks";
import { patchOptions } from "@component/store/slices/options";

export default function SelectCurrency() {
  const dispatch = useAppDispatch();
  const selectedCurrency = useAppSelector(
    (state) => state.options.selectedCurrency
  );

  function onSelectCurrency(selectedCurrency: Currency) {
    dispatch(
      patchOptions({
        selectedCurrency,
      })
    );
  }

  return (
    <SelectCurrencyView
      selectedCurrency={selectedCurrency}
      onCurrencySelected={onSelectCurrency}
    />
  );
}
