import { Styles } from "@component/pages/home/styles";
import { Dictionary, debounce, groupBy, sortBy } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Product } from "./types";

export function HomePageView({ products }: { products: Product[] }) {
  const [productsByCategories, setProductsByCategories] = useState<
    Dictionary<Product[]>
  >({});

  useEffect(() => {
    if (products) {
      const productsByCategories = groupBy(
        sortBy(products, "category" as keyof Product),
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
            <Styles.CategoryName>{category.toUpperCase()}</Styles.CategoryName>
            <CategoryProducts
              products={products}
              productWidth={productWidth}
              productHeight={productHeight}
            />
          </Styles.Category>
        ))}
      </Styles.Categories>
    </Styles.HomePage>
  );
}

function CategoryProducts({
  products,
  productWidth,
  productHeight,
}: {
  products: Product[];
  productWidth: number;
  productHeight: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const [renderScrollLeft, setRenderScrollLeft] = useState<boolean>(false);
  const [renderScrollRight, setRenderScrollRight] = useState<boolean>(false);

  const updateRenderScroll = () => {
    if (!ref.current) {
      return;
    }
    const isScrollable = ref.current.scrollWidth > ref.current.offsetWidth;
    setRenderScrollLeft(
      (isScrollable && Boolean(ref.current.scrollLeft)) || false
    );
    setRenderScrollRight(
      (isScrollable &&
        Math.floor(ref.current.scrollLeft) <
          ref.current.scrollWidth - ref.current.offsetWidth) ||
        false
    );
  };

  useEffect(() => {
    if (ref.current) {
      updateRenderScroll();
    }
  }, [ref.current]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (ref.current) {
        updateRenderScroll();
      }
    });
  }, []);
  const [scrollInterval, setScrollInterval] =
    useState<ReturnType<typeof setInterval>>();

  return (
    <Styles.Scroller>
      {renderScrollLeft && (
        <Styles.ScrollTo
          direction="left"
          onMouseDown={() => {
            console.log("click left");
            ref.current!.scrollLeft -= 200;
          }}
        />
      )}
      <Styles.CategoryProducts
        ref={ref}
        onScroll={debounce(updateRenderScroll, 10)}
      >
        {products.map((product) => (
          <Styles.ProductLink key={product.id}>
            <Styles.Product width={productWidth} height={productHeight}>
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
      {renderScrollRight && (
        <Styles.ScrollTo
          direction="right"
          onMouseDown={() => {
            console.log("click right");
            ref.current!.scrollLeft += 200;
          }}
        />
      )}
    </Styles.Scroller>
  );
}
