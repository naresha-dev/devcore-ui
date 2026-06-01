"use client";

import React from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  wrapperClassName?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, wrapperClassName, ...props }, ref) => {
    const id = props.id || `checkbox-${Math.random()}`;

    return (
      <div className={`${styles.wrapper} ${wrapperClassName ?? ""}`.trim()}>
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className={`${styles.checkbox} ${className ?? ""}`.trim()}
          {...props}
        />
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
