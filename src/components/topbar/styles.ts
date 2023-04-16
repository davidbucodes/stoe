import { SharedStyles } from "@component/styles/shared";
import styled from "styled-components";

export namespace Styles {
  export const Topbar = styled(SharedStyles.Flex)`
    flex-direction: row;
    height: 70px;
    width: 100%;
    flex-shrink: 0;
    flex-grow: 0;
  `;
  export const Logo = styled.div`
    flex-grow: 1;
    font-family: ${({ theme }) => theme.font.logo};
    font-size: ${({ theme }) => theme.fontSize.logo};
    padding: 1vh 0 0 1vw;
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
    width: 10vw;
    min-width: 10vw;
    right: 0;
  `;
}
