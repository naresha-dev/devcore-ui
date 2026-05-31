import React, { ReactNode } from "react";
import styles from "./FormCard.module.scss";

interface FormCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function FormCard({ children, className, style, ...props }: FormCardProps) {
  return (
    <div
      className={`${styles.componentCard} ${className ?? ""}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}
