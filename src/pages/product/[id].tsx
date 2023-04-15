import { ProductPageView } from "@component/pages/product/view";
import { useGetProductsQuery } from "@component/store/apis/products/api";
import { Fragment } from "react";

export default function ProductPage() {
  const { isLoading, data: products, isError } = useGetProductsQuery(null);

  if (isError) {
    return <Fragment>Error</Fragment>;
  }
  if (isLoading) {
    return <Fragment>Loading</Fragment>;
  }

  const product = products!.find(({ id }) => id === 1);
  return <ProductPageView product={product} />;
}
