import { SharedStyles } from "@component/styles/shared";
import styled from "styled-components";

export namespace Styles {
  export const LoadingPage = styled(SharedStyles.Page)`
    height: 30vh;
    justify-content: center;
  `;
  export const LoadingText = styled.div`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.loading};
    font-family: ${({ theme }) => theme.font.loading};
  `;
}
