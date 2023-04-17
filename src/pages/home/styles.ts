import { SharedStyles } from "@component/styles/shared";
import styled from "styled-components";

export namespace Styles {
  export const HomePage = styled(SharedStyles.Page)``;
  export const Categories = styled(SharedStyles.Flex)`
    flex-direction: column;
  `;
  export const Category = styled(SharedStyles.Flex)``;
  export const CategoryName = styled.div`
    font-family: ${({ theme }) => theme.font.category};
    font-size: ${({ theme }) => theme.fontSize.category};
    font-weight: bold;
    padding: 5vh 0 2vh 0;
    text-align: center;
    color: #04825c;
    -webkit-text-stroke: 2px white;
  `;

  export const ScrollTo = styled.div<{ direction: "right" | "left" }>`
    ${({ direction }) => direction}: 0;
    position: absolute;
    height: 100%;
    width: 20vw;
    background: grey;
    z-index: 10;
    background: rgb(126, 126, 126);
    background: linear-gradient(
      ${({ direction }) => (direction === "left" ? 90 : 270)}deg,
      rgba(126, 126, 126, 0.6078886310904872) 9%,
      rgba(169, 169, 169, 0.505800464037123) 40%,
      rgba(227, 227, 227, 0) 100%
    );
    &:hover {
      &::before {
        background-color: lightgrey;
      }
    }

    &::before {
      cursor: pointer;
      display: block;
      position: absolute;
      content: "${({ direction }) => (direction === "right" ? ">" : "<")}";
      ${({ direction }) => direction}: 5vw;
      top: 50%;
      transform: translateY(-50%);
      font-size: 7vw;
      background-color: white;
      color: #04825c;
      font-weight: bold;
      padding: 1vw;
      text-align: center;
      border-radius: 50%;
      height: 7vw;
      width: 7vw;
      line-height: 7vw;
      border: 3px solid #04825c;
      text-align: center;
    }
  `;
  export const Scroller = styled(SharedStyles.Flex)`
    flex-direction: row;
    overflow: auto;
    position: relative;
  `;
  export const CategoryProducts = styled(SharedStyles.Flex)`
    flex-direction: row;
    overflow: auto;
    position: relative;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
  `;
  export const Product = styled.div<{ width: number; height: number }>`
    border-radius: 25%;
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    overflow: hidden;
    padding: 10px;
    position: relative;
    filter: drop-shadow(0px 0px 6px rgba(97, 97, 97, 0.2));
  `;
  export const ProductNameContainer = styled.div<{
    width: number;
    height: number;
  }>`
    position: absolute;
    text-align: center;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    display: flex;
    background: transparent;

    ::before {
      position: absolute;
      width: ${(props) => props.width}px;
      bottom: 0;
      height: 0;
      display: block;
      content: "";
      transition: height 120ms linear;
      background: rgb(70, 182, 255);
      background: linear-gradient(
        180deg,
        rgba(70, 182, 255, 0.21113689095127608) 21%,
        rgba(34, 138, 255, 0.44547563805104406) 41%,
        rgba(0, 97, 255, 0.7192575406032482) 65%
      );
    }
    &:hover::before {
      height: ${(props) => props.height}px;
    }
    &:hover > div {
      bottom: 0;
      visibility: visible;
    }
  `;
  export const ProductName = styled.div<{ width: number }>`
    visibility: hidden;
    position: absolute;
    text-align: center;
    width: ${(props) => props.width * 0.85}px;
    bottom: 100%;
    color: white;
    z-index: 5;
    font-family: ${({ theme }) => theme.font.productName};
    font-size: ${({ theme }) => theme.fontSize.productName};
    font-weight: bold;
    padding-bottom: 2vw;
    left: 50%;
    transform: translateX(-50%);
  `;
  export const ProductLink = styled(SharedStyles.Link)``;
}
