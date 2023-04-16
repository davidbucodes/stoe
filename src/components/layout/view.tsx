import Topbar from "@component/components/topbar";
import { PropsWithChildren } from "react";
import { Styles } from "./styles";

export function LayoutView({ children }: PropsWithChildren<{}>) {
  return (
    <Styles.Layout>
      <Topbar />
      <Styles.PageWrapper>{children}</Styles.PageWrapper>
    </Styles.Layout>
  );
}
