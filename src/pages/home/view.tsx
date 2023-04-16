import { Styles } from "@component/pages/home/styles";
import { Dictionary, groupBy } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "./types";

export function HomePageView({ products }: { products: Product[] }) {
  const [productsByCategories, setProductsByCategories] = useState<
    Dictionary<Product[]>
  >({});

  useEffect(() => {
    if (products) {
      const productsByCategories = groupBy(
        products,
        "category" as keyof Product
      );
      setProductsByCategories(productsByCategories);
    }
  }, [products]);

  return (
    <Styles.HomePage>
      {Object.entries(productsByCategories).map(([category, products]) => (
        <Styles.Category key={category}>
          <Styles.CategoryName>{category}</Styles.CategoryName>
          <Styles.CategoryProducts>
            {products.map((product) => (
              <Styles.Product key={product.id}>
                <Styles.ProductLink>
                  <Link href={`/product/${product.id}`}>
                    <Styles.ProductName>{product.title}</Styles.ProductName>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={200}
                      height={200}
                    />
                  </Link>
                </Styles.ProductLink>
              </Styles.Product>
            ))}
          </Styles.CategoryProducts>
        </Styles.Category>
      ))}
    </Styles.HomePage>
  );
}
