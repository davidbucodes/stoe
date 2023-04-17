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
    padding: 0 5vh 10vw;
  `;
}
