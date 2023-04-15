import { Currency, ExchangeRates } from "@component/pages/api/exchangeRates";
import { Styles } from "./styles";

export function TopbarView({
  exchangeRates,
  selectedCurrency,
}: {
  exchangeRates: ExchangeRates;
  selectedCurrency: Currency;
}) {
  return <Styles.Topbar>Selected: {selectedCurrency}</Styles.Topbar>;
}
