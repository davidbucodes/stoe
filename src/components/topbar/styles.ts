import styled from "styled-components";

export namespace Styles {
  export const Topbar = styled.div`
    display: flex;
    flex-direction: row;
    height: 7vh;
    flex-shrink: 0;
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
    top: 7vh;
    background: white;
    min-width: 20vw;
    right: 0;
  `;
}
