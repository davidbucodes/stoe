import { SharedStyles } from "@component/pages/sharedStyles";
import styled from "styled-components";

export namespace Styles {
  export const HomePage = styled(SharedStyles.Page)``;
  export const Categories = styled(SharedStyles.Flex)`
    flex-direction: column;
  `;
  export const Category = styled(SharedStyles.Flex)``;
  export const CategoryName = styled.div``;
  export const CategoryProducts = styled(SharedStyles.Flex)`
    flex-direction: row;
    overflow: auto;
  `;
  export const Product = styled.div``;
  export const ProductName = styled.div``;
  export const ProductLink = styled(SharedStyles.Link)``;
}
