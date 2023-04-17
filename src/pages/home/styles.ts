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
    padding: 10px 0;
  `;
  export const CategoryProducts = styled(SharedStyles.Flex)`
    flex-direction: row;
    overflow: auto;
  `;
  export const Product = styled.div<{ width: number; height: number }>`
    border-radius: 50px;
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    overflow: hidden;
    padding: 10px;
    position: relative;
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
