import SelectCurrency from "@component/components/selectCurrency";
import { Styles } from "./styles";

export function TopbarView() {
  return (
    <Styles.Topbar>
      <SelectCurrency />
    </Styles.Topbar>
  );
}
