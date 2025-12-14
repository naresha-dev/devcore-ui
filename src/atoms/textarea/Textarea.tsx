"use client";

import React from "react";
import styles from "./Textarea.module.scss";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        {label && <label className={styles.label}>{label}</label>}
        <textarea
          ref={ref}
          className={`${styles.textarea} ${error ? styles.invalid : ""}`}
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

Textarea.displayName = "Textarea";

export default Textarea;
