import { SharedStyles } from "@component/styles/shared";
import styled from "styled-components";

export namespace Styles {
  export const Topbar = styled(SharedStyles.Flex)`
    flex-direction: row;
    height: 8vh;
    width: 100%;
    flex-shrink: 0;
    flex-grow: 0;
    background: rgb(182, 228, 171);
    background: linear-gradient(
      90deg,
      rgba(182, 228, 171, 1) 9%,
      rgba(184, 255, 255, 1) 40%
    );
    box-shadow: 0px 1px 15px -2px rgba(97, 97, 97, 0.43);
    z-index: 5;
  `;
  export const Logo = styled.div`
    flex-grow: 1;
    font-family: ${({ theme }) => theme.font.logo};
    font-size: ${({ theme }) => theme.fontSize.logo};
    padding: 0 1vh 0 2vw;
    color: #04825c;
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
