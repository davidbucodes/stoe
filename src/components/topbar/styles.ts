import { SharedStyles } from "@component/pages/sharedStyles";
import styled from "styled-components";

export namespace Styles {
  export const Topbar = styled(SharedStyles.Flex)`
    flex-direction: row;
    height: 70px;
    width: 100%;
    flex-shrink: 0;
    flex-grow: 0;
  `;
  export const TopbarTitle = styled.div`
    flex-grow: 1;
  `;
  export const OptionMenu = styled.div`
    position: relative;
  `;
  export const OptionMenuButton = styled.div`
    cursor: pointer;
    user-select: none;
  `;
  export const OptionMenuPopup = styled.div`
    position: absolute;
    top: 70px;
    background: white;
    min-width: 20vw;
    right: 0;
  `;
}
