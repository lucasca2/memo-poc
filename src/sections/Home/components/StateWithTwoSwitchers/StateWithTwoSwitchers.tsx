"use client";

import { useState } from "react";
import { SwitcherContainer } from "./components/SwitcherContainer/SwitcherContainer";
import { Title } from "./components/Title/Title";
import { RenderCount } from "@/components/RenderCount/RenderCount";

import styles from "./StateWithTwoSwitchers.module.scss";

export const StateWithTwoSwitchers = () => {
  const [switcherValue, setSwitcherValue] = useState(false);
  const [anotherSwitcherValue, setAnotherSwitcherValue] = useState(false);

  const handleToggleSwitcherValue = () => setSwitcherValue((prev) => !prev);
  
  const handleToggleAnotherSwitcherValue = () => setAnotherSwitcherValue((prev) => !prev);

  return (
    <RenderCount className={styles.wrapper}>
      <div className={styles.content}>
        <Title>Without Memo</Title>
        <SwitcherContainer onToggle={handleToggleSwitcherValue} enabled={switcherValue} />
        <SwitcherContainer onToggle={handleToggleAnotherSwitcherValue} enabled={anotherSwitcherValue} />
      </div>
    </RenderCount>
  );
};
