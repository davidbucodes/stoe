import ErrorPage from "@component/components/pages/error";
import LoadingPage from "@component/components/pages/loading";
import { HomePageView } from "@component/pages/home/view";
import { useGetProductsQuery } from "@component/store/apis/products/api";

export default function HomePage() {
  const { isLoading, data: products, isError } = useGetProductsQuery(null);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError || !products) {
    return <ErrorPage />;
  }

  return <HomePageView products={products} />;
}
