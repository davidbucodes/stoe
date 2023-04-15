import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
type ErrorMessage = "Method not supported";
type ResponseError = {
  error: ErrorMessage;
};
type ResponseData = ProductsApiResponse;
export type ProductsApiResponse = ApiProduct[];

export type ApiProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

interface Rating {
  rate: number;
  count: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseError>
) {
  if (req.method !== "GET") {
    return res.status(400).send({
      error: "Method not supported",
    });
  }
  const result = await axios.get("https://fakestoreapi.com/products");
  return res.status(200).json(result.data);
}
