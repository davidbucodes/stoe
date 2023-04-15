import { Currency } from "@component/pages/api/exchangeRates";
import convertCurrency from "@component/utils/convertCurrency";
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
  const [convertedPrice, setConvertedPrice] = useState<number>(product.price);

  useEffect(() => {
    const { convertedPrice } = convertCurrency({
      price: product.price,
      fromCurrency: Currency.USD,
      toCurrency: selectedCurrency,
      exchangeRates,
    });
    setConvertedPrice(convertedPrice);
  }, [product.price, exchangeRates, selectedCurrency]);

  return (
    <Styles.ProductPage>
      <Styles.BackLink>
        <Link href="/home">Home page</Link>
      </Styles.BackLink>
      <Styles.Product>
        <Styles.ProductName>{product?.title}</Styles.ProductName>
        <Styles.ProductPrice>{convertedPrice}</Styles.ProductPrice>
      </Styles.Product>
    </Styles.ProductPage>
  );
}
