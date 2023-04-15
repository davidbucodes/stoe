import { ProductPageView } from "@component/pages/product/view";
import { useGetExchangeRatesQuery } from "@component/store/apis/exchangeRates/api";
import { useGetProductsQuery } from "@component/store/apis/products/api";
import { useAppSelector } from "@component/store/hooks";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function ProductPage() {
  const {
    isLoading: isLoadingGetProducts,
    data: products,
    isError: isErrorGetProducts,
  } = useGetProductsQuery(null);
  const {
    isLoading: isLoadingGetExchangeRates,
    data: exchangeRates,
    isError: isErrorGetExchangeRates,
  } = useGetExchangeRatesQuery(null);

  const router = useRouter();

  if (isLoadingGetProducts || isLoadingGetExchangeRates) {
    return <Fragment>Loading</Fragment>;
  }
  if (
    isErrorGetProducts ||
    isErrorGetExchangeRates ||
    !products ||
    !exchangeRates
  ) {
    return <Fragment>Error</Fragment>;
  }

  const selectedCurrency = useAppSelector(
    (state) => state.options.selectedCurrency
  );
  const { id: productId } = router.query;
  const product = products.find(({ id }) => String(id) === productId);
  if (!product) {
    return <Fragment>Invalid product ID</Fragment>;
  }
  return (
    <ProductPageView
      product={product}
      exchangeRates={exchangeRates.exchangeRates}
      selectedCurrency={selectedCurrency}
    />
  );
}
