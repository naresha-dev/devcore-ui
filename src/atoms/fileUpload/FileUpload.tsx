"use client";

import React from "react";
import styles from "./FileUpload.module.scss";

interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  accept?: string;
  maxSize?: number; // in MB
}

const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({ label, error, accept = "image/*,.pdf", maxSize = 5, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file && maxSize) {
        const maxBytes = maxSize * 1024 * 1024;
        if (file.size > maxBytes) {
          alert(`File size must be less than ${maxSize}MB`);
          e.target.value = "";
          return;
        }
      }
      props.onChange?.(e);
    };

    return (
      <div className={styles.wrapper}>
        {label && <label className={styles.label}>{label}</label>}
        <input
          ref={ref}
          type="file"
          accept={accept}
          className={`${styles.input} ${error ? styles.invalid : ""}`}
          onChange={handleChange}
          {...props}
        />
        {error && <div className={styles.error}>{error}</div>}
      </div>
    );
  }
);

FileUpload.displayName = "FileUpload";

export default FileUpload;
