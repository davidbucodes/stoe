import { Styles } from "@component/pages/home/styles";
import Link from "next/link";
import { Product } from "./types";

export function HomePageView({ products }: { products: Product[] }) {
  return (
    <Styles.HomePage>
      {products?.map((product) => (
        <Styles.Product>
          <Styles.ProductName>{product.title}</Styles.ProductName>
          <Styles.ProductLink>
            <Link href={`/product/${product.id}`}>Product page</Link>
          </Styles.ProductLink>
        </Styles.Product>
      ))}
    </Styles.HomePage>
  );
}
