"use client";

import React from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, ...props }, ref) => {
    const id = props.id || `checkbox-${Math.random()}`;

    return (
      <div className={styles.wrapper}>
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className={styles.checkbox}
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
