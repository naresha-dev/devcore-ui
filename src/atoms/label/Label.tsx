"use client";

import React from "react";
import styles from "./Label.module.scss";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, required, ...props }, ref) => {
    return (
      <label ref={ref} className={styles.label} {...props}>
        {children}
        {required && <span className={styles.required}>*</span>}
      </label>
    );
  }
);

Label.displayName = "Label";

export default Label;
