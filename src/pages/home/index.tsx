import { HomePageView } from "@component/pages/home/view";
import { useGetProductsQuery } from "@component/store/apis/products/api";
import { Fragment } from "react";

export default function HomePage() {
  const { isLoading, data: products, isError } = useGetProductsQuery(null);

  if (isLoading) {
    return <Fragment>Loading</Fragment>;
  }
  if (isError || !products) {
    return <Fragment>Error</Fragment>;
  }

  return <HomePageView products={products} />;
}
