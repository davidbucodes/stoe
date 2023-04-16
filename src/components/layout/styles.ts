import { SharedStyles } from "@component/pages/sharedStyles";
import styled from "styled-components";

export namespace Styles {
  export const Layout = styled(SharedStyles.Flex)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `;
  export const PageWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    overflow: auto;
  `;
}
