"use client";
import { RenderCount } from "@/components/RenderCount/RenderCount";

import styles from "./Title.module.scss";

type TitleProps = {
  children: React.ReactNode;
};

export const Title = ({ children }: TitleProps) => {
  return (
    <RenderCount className={styles.wrapper}>
      <h1 className={styles.title}>{children}</h1>
    </RenderCount>
  );
};

Title.displayName = "Title";
