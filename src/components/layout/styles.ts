import { SharedStyles } from "@component/pages/sharedStyles";
import styled from "styled-components";

export namespace Styles {
  export const Layout = styled(SharedStyles.Flex)`
    background: green;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `;
  export const PageWrapper = styled.div`
    flex-grow: 1;
    overflow: auto;
  `;
}
