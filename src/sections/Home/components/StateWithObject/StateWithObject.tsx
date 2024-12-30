"use client";

import { useCallback, useState } from "react";
import { SwitcherContainer } from "./components/SwitcherContainer/SwitcherContainer";
import { Title } from "./components/Title/Title";
import { User } from "./components/User/User";
import { RenderCount } from "@/components/RenderCount/RenderCount";

import styles from "./StateWithObject.module.scss";

export const StateWithObject = () => {
  const [switcherValue, setSwitcherValue] = useState(false);
  const [anotherSwitcherValue, setAnotherSwitcherValue] = useState(false);

  const handleToggleSwitcherValue = useCallback(() => setSwitcherValue((prev) => !prev), []);
  
  const handleToggleAnotherSwitcherValue = useCallback(() => setAnotherSwitcherValue((prev) => !prev), []);

  const user = {
    name: "John",
    age: 25,
  }

  return (
    <RenderCount className={styles.wrapper}>
      <div className={styles.content}>
        <Title>Without Memo</Title>
        <User user={user} />
        <SwitcherContainer onToggle={handleToggleSwitcherValue} enabled={switcherValue} />
        <SwitcherContainer onToggle={handleToggleAnotherSwitcherValue} enabled={anotherSwitcherValue} />
      </div>
    </RenderCount>
  );
};
