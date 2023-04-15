import RadioGroup from "@component/components/radioGroup";
import { Currency } from "@component/pages/api/exchangeRates";
import { Styles } from "./styles";

export function SelectCurrencyView({
  selectedCurrency,
  onCurrencySelected,
}: {
  selectedCurrency: Currency;
  onCurrencySelected: (selectedCurrency: Currency) => void;
}) {
  return (
    <Styles.SelectCurrency>
      <Styles.SelectCurrencyTitle>Select currency</Styles.SelectCurrencyTitle>
      <RadioGroup
        onSelected={(selectedCurrency) =>
          onCurrencySelected(selectedCurrency as Currency)
        }
        options={Object.values(Currency)}
        selectedOption={selectedCurrency}
      />
    </Styles.SelectCurrency>
  );
}
