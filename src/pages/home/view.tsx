import { Styles } from "@component/pages/home/styles";
import { Dictionary, capitalize, groupBy } from "lodash";
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

  const productWidth = 200;
  const productHeight = productWidth;

  return (
    <Styles.HomePage>
      <Styles.Categories>
        {Object.entries(productsByCategories).map(([category, products]) => (
          <Styles.Category key={category}>
            <Styles.CategoryName>{capitalize(category)}</Styles.CategoryName>
            <Styles.CategoryProducts>
              {products.map((product) => (
                <Styles.ProductLink>
                  <Styles.Product
                    width={productWidth}
                    height={productHeight}
                    key={product.id}
                  >
                    <Link href={`/product/${product.id}`}>
                      <Styles.ProductNameContainer
                        width={productWidth}
                        height={productHeight}
                      >
                        <Styles.ProductName width={productWidth}>
                          {product.title}
                        </Styles.ProductName>
                      </Styles.ProductNameContainer>

                      <Image
                        src={product.image}
                        alt={product.title}
                        width={productWidth}
                        height={productHeight}
                      />
                    </Link>
                  </Styles.Product>
                </Styles.ProductLink>
              ))}
            </Styles.CategoryProducts>
          </Styles.Category>
        ))}
      </Styles.Categories>
    </Styles.HomePage>
  );
}
