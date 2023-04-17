import { SharedStyles } from "@component/styles/shared";
import styled from "styled-components";

export namespace Styles {
  export const ErrorPage = styled(SharedStyles.Page)`
    height: 30vh;
    justify-content: center;
  `;
  export const ErrorText = styled.div`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.error};
    font-family: ${({ theme }) => theme.font.error};
  `;
}
