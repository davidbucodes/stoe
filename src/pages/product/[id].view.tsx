import { Currency } from "@component/pages/api/exchangeRates";
import convertCurrency from "@component/utils/convertCurrency/convertCurrency";
import { capitalize, range } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Styles } from "./styles";
import { ExchangeRates, Product } from "./types";

export function ProductPageView({
  product,
  exchangeRates,
  selectedCurrency,
}: {
  product: Product;
  exchangeRates: ExchangeRates;
  selectedCurrency: Currency;
}) {
  const { category, description, image, price, rating, title } = product;
  const { count: ratingCount, rate: ratingRate } = rating;

  const [convertedPrice, setConvertedPrice] = useState<number>(price);

  useEffect(() => {
    const { convertedPrice } = convertCurrency({
      price,
      fromCurrency: Currency.USD,
      toCurrency: selectedCurrency,
      exchangeRates,
    });
    setConvertedPrice(convertedPrice);
  }, [price, exchangeRates, selectedCurrency]);

  return (
    <Styles.ProductPage>
      <Styles.BackLink>
        <Link href="/home">Home page</Link>
      </Styles.BackLink>
      <Styles.Product>
        <Styles.ProductImage>
          <Image src={image} alt={title} width={200} height={200} />
        </Styles.ProductImage>
        <Styles.ProductDetailTitle>Title</Styles.ProductDetailTitle>
        <Styles.ProductDetail>{title}</Styles.ProductDetail>
        <Styles.ProductDetailTitle>Category</Styles.ProductDetailTitle>
        <Styles.ProductDetail>{capitalize(category)}</Styles.ProductDetail>
        <Styles.ProductDetailTitle>Description</Styles.ProductDetailTitle>
        <Styles.ProductDetail>{capitalize(description)}</Styles.ProductDetail>
        <Styles.ProductDetailTitle>Price</Styles.ProductDetailTitle>
        <Styles.ProductDetail>
          {convertedPrice} {selectedCurrency}
        </Styles.ProductDetail>
        <Styles.ProductDetailTitle>Rating</Styles.ProductDetailTitle>
        <Styles.ProductDetail>
          {range(Math.ceil(ratingRate)).map((i) => (
            <Styles.Star />
          ))}{" "}
        </Styles.ProductDetail>
        <Styles.ProductDetail>
          {ratingRate} ({ratingCount})
        </Styles.ProductDetail>
      </Styles.Product>
    </Styles.ProductPage>
  );
}
