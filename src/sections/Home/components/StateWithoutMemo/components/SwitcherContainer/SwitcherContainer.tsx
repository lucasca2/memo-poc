import { RenderCount } from "@/components/RenderCount/RenderCount";
import { Switch } from "@/components/Switch/Switch";

import styles from "./SwitcherContainer.module.scss";

type SwitcherContainerProps = {
  onToggle: () => void;
  enabled: boolean;
};

export const SwitcherContainer = ({ onToggle, enabled }: SwitcherContainerProps) => {
  return (
    <RenderCount className={styles.wrapper}>
      <Switch onToggle={onToggle} enabled={enabled} />
    </RenderCount>
  );
};

SwitcherContainer.displayName = "SwitcherContainer";
