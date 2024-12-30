"use client";

import { useState } from "react";
import { SwitcherContainer } from "./components/SwitcherContainer/SwitcherContainer";
import { Title } from "./components/Title/Title";
import { RenderCount } from "@/components/RenderCount/RenderCount";

import styles from "./StateWithMemoizedTitle.module.scss";

export const StateWithMemoizedTitle = () => {
  const [switcherValue, setSwitcherValue] = useState(false);

  const handleToggle = () => setSwitcherValue((prev) => !prev);

  return (
    <RenderCount className={styles.wrapper}>
      <div className={styles.content}>
        <Title>With Memo</Title>
        <SwitcherContainer onToggle={handleToggle} enabled={switcherValue} />
      </div>
    </RenderCount>
  );
};
