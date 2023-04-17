import "styled-components";
import { CSSProperties } from "styled-components";

export const theme = {
  font: {
    logo: "fantasy" as CSSProperties["fontFamily"],
    category: "sans-serif" as CSSProperties["fontFamily"],
    productName: "monospace" as CSSProperties["fontFamily"],
    loading: "monospace" as CSSProperties["fontFamily"],
    error: "monospace" as CSSProperties["fontFamily"],
  },
  fontSize: {
    logo: "6vh",
    category: "5vh",
    productName: "2vh",
    loading: "8vh",
    error: "7vh",
  },
};

type CustomTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
