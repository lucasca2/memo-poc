"use client";

import { useCallback, useState } from "react";
import { SwitcherContainer } from "./components/SwitcherContainer/SwitcherContainer";
import { Title } from "./components/Title/Title";
import { RenderCount } from "@/components/RenderCount/RenderCount";

import styles from "./StateWithTwoSwitchersWithMemo.module.scss";

export const StateWithTwoSwitchersWithMemo = () => {
  const [switcherValue, setSwitcherValue] = useState(false);
  const [anotherSwitcherValue, setAnotherSwitcherValue] = useState(false);

  const handleToggleSwitcherValue = useCallback(() => setSwitcherValue((prev) => !prev), []);
  
  const handleToggleAnotherSwitcherValue = useCallback(() => setAnotherSwitcherValue((prev) => !prev), []);

  return (
    <RenderCount className={styles.wrapper}>
      <div className={styles.content}>
        <Title>With Memo</Title>
        <SwitcherContainer onToggle={handleToggleSwitcherValue} enabled={switcherValue} />
        <SwitcherContainer onToggle={handleToggleAnotherSwitcherValue} enabled={anotherSwitcherValue} />
      </div>
    </RenderCount>
  );
};
