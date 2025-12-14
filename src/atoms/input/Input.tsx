"use client";

import React from "react";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  error?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, error, helperText, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        {label && (
          <label className={styles.label} htmlFor={name}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={name}
          name={name}
          className={`${styles.input} ${error ? styles.invalid : ""}`}
          {...props}
        />
        {error && <div className={styles.error}>{error}</div>}
        {helperText && !error && (
          <div className={styles.helperText}>{helperText}</div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
