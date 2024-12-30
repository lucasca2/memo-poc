"use client";

import { useState } from "react";
import { SwitcherContainer } from "./components/SwitcherContainer/SwitcherContainer";
import { Title } from "./components/Title/Title";
import { RenderCount } from "@/components/RenderCount/RenderCount";

import styles from "./StateWithoutMemo.module.scss";

export const StateWithoutMemo = () => {
  const [switcherValue, setSwitcherValue] = useState(false);

  const handleToggle = () => setSwitcherValue((prev) => !prev);

  return (
    <RenderCount className={styles.wrapper}>
      <div className={styles.content}>
        <Title>Without Memo</Title>
        <SwitcherContainer onToggle={handleToggle} enabled={switcherValue} />
      </div>
    </RenderCount>
  );
};
