import Link from "next/link";
import { Styles } from "./styles";
import { Product } from "./types";

export function ProductPageView({ product }: { product: Product }) {
  return (
    <Styles.ProductPage>
      <Styles.BackLink>
        <Link href="/home">Product page</Link>
      </Styles.BackLink>
      <Styles.Product>
        <Styles.ProductName>{product?.title}</Styles.ProductName>
      </Styles.Product>
    </Styles.ProductPage>
  );
}
