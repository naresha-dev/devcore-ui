"use client";

import React from "react";
import styles from "./Required.module.scss";

interface RequiredProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string;
}

const Required = React.forwardRef<HTMLSpanElement, RequiredProps>(
  ({ className, color, style, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={`${styles.required} ${className ?? ""}`.trim()}
        style={{ color, ...style }}
        {...props}
      >
        *
      </span>
    );
  }
);

Required.displayName = "Required";

export default Required;
