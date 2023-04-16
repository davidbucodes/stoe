import SelectCurrency from "@component/components/selectCurrency";
import { useState } from "react";
import { Styles } from "./styles";

export function TopbarView() {
  const [isOptionsMenuOpened, setIsOptionsMenuOpened] =
    useState<boolean>(false);

  function toggleOptionsMenu() {
    setIsOptionsMenuOpened(!isOptionsMenuOpened);
  }

  return (
    <Styles.Topbar>
      <Styles.Logo>MyStore</Styles.Logo>
      <Styles.OptionMenu>
        <Styles.OptionMenuButton onClick={toggleOptionsMenu}>
          Currency
        </Styles.OptionMenuButton>
        {isOptionsMenuOpened && (
          <Styles.OptionMenuPopup>
            <SelectCurrency onSelected={toggleOptionsMenu} />
          </Styles.OptionMenuPopup>
        )}
      </Styles.OptionMenu>
    </Styles.Topbar>
  );
}
