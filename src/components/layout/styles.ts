import { SharedStyles } from "@component/styles/shared";
import styled from "styled-components";

export namespace Styles {
  export const Layout = styled(SharedStyles.Flex)`
    width: 100%;
    height: 100%;
  `;
  export const PageWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    overflow: auto;
    background: repeating-linear-gradient(
        to right,
        transparent 50px,
        rgb(255 255 255 / 0.5) 50px,
        rgb(255 255 255 / 0.5) 55px
      ),
      repeating-linear-gradient(
        to bottom,
        transparent 50px,
        rgb(255 255 255 / 0.5) 50px,
        rgb(255 255 255 / 0.5) 55px
      ),
      linear-gradient(45deg, #b587be, #197fda);
  `;
}
