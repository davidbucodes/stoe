import Link from "next/link";
import { Styles } from "./styles";
import { Product } from "./types";

export default function ProductPage({ product }: { product: Product }) {
  return (
    <Styles.ProductPage>
      <Styles.BackLink>
        <Link href="/">Product page</Link>
      </Styles.BackLink>
      <Styles.Product>
        <Styles.ProductName>{product?.title}</Styles.ProductName>
      </Styles.Product>
    </Styles.ProductPage>
  );
}
