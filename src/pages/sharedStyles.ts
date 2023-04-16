import styled from "styled-components";

export namespace SharedStyles {
  export const Link = styled.div``;
  export const Flex = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    overflow: visible;
  `;
  export const Page = styled(Flex)`
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
      linear-gradient(45deg, pink, skyblue);
  `;
}
