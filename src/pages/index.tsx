import HomePage from "@component/pages/home";
import { exampleResponse } from "mockData/products/exampleResponse";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <HomePage products={exampleResponse} />;
}
