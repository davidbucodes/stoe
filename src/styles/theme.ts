import "styled-components";
import { CSSProperties } from "styled-components";

export const theme = {
  font: {
    logo: "fantasy" as CSSProperties["fontFamily"],
    category: "sans-serif" as CSSProperties["fontFamily"],
    productName: "monospace" as CSSProperties["fontFamily"],
  },
  fontSize: {
    logo: "5vh",
    category: "3vh",
    productName: "2vh",
  },
};

type CustomTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
