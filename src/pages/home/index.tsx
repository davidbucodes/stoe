import { HomePageView } from "@component/pages/home/view";
import { useGetProductsQuery } from "@component/store/apis/products/api";
import { Fragment } from "react";

export default function HomePage() {
  const { isLoading, data: products, isError } = useGetProductsQuery(null);

  if (isError) {
    return <Fragment>Error</Fragment>;
  }
  if (isLoading) {
    return <Fragment>Loading</Fragment>;
  }

  return <HomePageView products={products!} />;
}
