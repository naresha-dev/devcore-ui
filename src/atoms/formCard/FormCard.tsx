import React, { ReactNode } from "react";
import styles from "./FormCard.module.scss";

export default function FormCard({ children }: { children: ReactNode }) {
  return <div className={styles.componentCard}>{children}</div>;
}
