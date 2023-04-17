import ErrorPage from "@component/components/pages/error";
import LoadingPage from "@component/components/pages/loading";
import { ProductPageView } from "@component/pages/product/[id].view";
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

  const selectedCurrency = useAppSelector(
    (state) => state.options.selectedCurrency
  );

  const router = useRouter();

  if (isLoadingGetProducts || isLoadingGetExchangeRates) {
    return <LoadingPage />;
  }
  if (
    isErrorGetProducts ||
    isErrorGetExchangeRates ||
    !products ||
    !exchangeRates
  ) {
    return <ErrorPage />;
  }

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
