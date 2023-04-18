import { SharedStyles } from "@component/styles/shared";
import styled from "styled-components";

export namespace Styles {
  export const ProductPage = styled(SharedStyles.Page)``;
  export const Product = styled.div``;
  export const ProductImage = styled.div`
    float: right;
    margin-left: 50px;
    margin-bottom: 20px;
  `;
  export const ProductDetailTitle = styled.div`
    padding: 1vh 0;
    font-size: 4vh;
    font-weight: bold;
  `;
  export const ProductDetail = styled.div`
    padding: 1vh 0;
  `;
  export const BackLink = styled(SharedStyles.Link)`
    padding: 1vh 0;
    > a {
      margin-top: 50px;
      background: white;
      color: black;
      border-radius: 15%;
      padding: 5px;
    }
  `;
  export const Star = styled.div`
    background: gold;
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
    display: inline-block;
    height: 3vw;
    width: 3vw;
    line-height: 3vw;
  `;
}
