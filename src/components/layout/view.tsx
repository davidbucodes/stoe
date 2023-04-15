import { PropsWithChildren } from "react";
import { Styles } from "./styles";

export function LayoutView({ children }: PropsWithChildren<{}>) {
  return (
    <Styles.Layout>
      Layout
      <Styles.PageWrapper>{children}</Styles.PageWrapper>
    </Styles.Layout>
  );
}
