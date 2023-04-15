import { LayoutView } from "@component/components/layout/view";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return <LayoutView>{children}</LayoutView>;
}
