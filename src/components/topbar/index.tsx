import { TopbarView } from "@component/components/topbar/view";
import { useGetExchangeRatesQuery } from "@component/store/apis/exchangeRates/api";
import { useAppSelector } from "@component/store/hooks";
import { Fragment } from "react";

export default function Topbar() {
  const selectedCurrency = useAppSelector(
    (state) => state.options.selectedCurrency
  );
  const { isLoading, data, isError } = useGetExchangeRatesQuery(null);

  if (isLoading) {
    return <Fragment></Fragment>;
  }
  if (isError || !data) {
    return <Fragment></Fragment>;
  }

  return (
    <TopbarView
      exchangeRates={data.exchangeRates}
      selectedCurrency={selectedCurrency}
    />
  );
}
