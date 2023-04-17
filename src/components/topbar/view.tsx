import SelectCurrency from "@component/components/selectCurrency";
import { useEffect, useRef, useState } from "react";
import { Styles } from "./styles";

export function TopbarView() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref.current]);
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
          <Styles.OptionMenuPopup
            ref={ref}
            autoFocus
            onBlur={() => setTimeout(toggleOptionsMenu)}
            tabIndex={1}
          >
            <SelectCurrency onSelected={toggleOptionsMenu} />
          </Styles.OptionMenuPopup>
        )}
      </Styles.OptionMenu>
    </Styles.Topbar>
  );
}
