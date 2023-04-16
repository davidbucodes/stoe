import { SelectCurrencyView } from "@component/components/selectCurrency/view";
import { Currency } from "@component/pages/api/exchangeRates";
import { useAppDispatch, useAppSelector } from "@component/store/hooks";
import { patchOptions } from "@component/store/slices/options";

export default function SelectCurrency({
  onSelected,
}: {
  onSelected?: (selectedCurrency: Currency) => void;
}) {
  const dispatch = useAppDispatch();
  const selectedCurrency = useAppSelector(
    (state) => state.options.selectedCurrency
  );

  function onCurrencySelected(selectedCurrency: Currency) {
    dispatch(
      patchOptions({
        selectedCurrency,
      })
    );
    onSelected?.(selectedCurrency);
  }

  return (
    <SelectCurrencyView
      selectedCurrency={selectedCurrency}
      onCurrencySelected={onCurrencySelected}
    />
  );
}
