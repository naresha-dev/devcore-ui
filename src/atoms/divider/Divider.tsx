"use client";

import React from "react";
import styles from "./Divider.module.scss";

type Orientation = "horizontal" | "vertical";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: Orientation;
  color?: string;
  thickness?: string;
  length?: string;
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = "horizontal",
      className,
      color,
      thickness,
      length,
      style,
      ...props
    },
    ref
  ) => {
    const dividerStyle: React.CSSProperties = {
      backgroundColor: color ?? "var(--colors-border)",
      width: orientation === "horizontal" ? length ?? "100%" : thickness ?? "1px",
      height: orientation === "horizontal" ? thickness ?? "1px" : length ?? "100%",
      ...style,
    };

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={`${styles.divider} ${styles[orientation]} ${className ?? ""}`.trim()}
        style={dividerStyle}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";

export default Divider;
