"use client";
import { RenderCount } from "@/components/RenderCount/RenderCount";

import styles from "./User.module.scss";
import React from "react";

type UserProps = {
  user: {
    name: string;
    age: number;
  }
};

export const User = React.memo(({ user }: UserProps) => {
  return (
    <RenderCount className={styles.wrapper}>
      <p className={styles.text}>Name: {user.name}</p>
      <p className={styles.text}>Age: {user.age}</p>
    </RenderCount>
  );
});

User.displayName = "Title";
