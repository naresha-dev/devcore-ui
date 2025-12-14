"use client";

import React, { JSX } from "react";
import styles from "./Text.module.scss";

type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "label"
  | "small"
  | "caption"
  | "code";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
type TextWeight = "light" | "normal" | "medium" | "semibold" | "bold";
type TextColor =
  | "primary"
  | "text"
  | "text-light"
  | "error"
  | "success"
  | "warning";

interface TextProps {
  variant?: TextVariant;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      variant = "p",
      size,
      weight,
      color,
      className = "",
      children,
      as,
      ...props
    },
    ref
  ) => {
    // Determine the HTML element based on variant
    const elementMap: Record<TextVariant, keyof JSX.IntrinsicElements> = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      p: "p",
      label: "label",
      small: "small",
      caption: "span",
      code: "code",
    };

    const Component = as || elementMap[variant];

    // Default sizes by variant
    const defaultSizes: Record<TextVariant, TextSize> = {
      h1: "4xl",
      h2: "3xl",
      h3: "2xl",
      h4: "xl",
      h5: "lg",
      h6: "md",
      p: "md",
      label: "sm",
      small: "sm",
      caption: "xs",
      code: "sm",
    };

    // Default weights by variant
    const defaultWeights: Record<TextVariant, TextWeight> = {
      h1: "bold",
      h2: "bold",
      h3: "semibold",
      h4: "semibold",
      h5: "semibold",
      h6: "semibold",
      p: "normal",
      label: "medium",
      small: "normal",
      caption: "normal",
      code: "normal",
    };

    const finalSize = size || defaultSizes[variant];
    const finalWeight = weight || defaultWeights[variant];

    const classNames = [
      styles.text,
      styles[variant],
      styles[`size-${finalSize}`],
      styles[`weight-${finalWeight}`],
      color && styles[`color-${color}`],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return React.createElement(Component, { ref, className: classNames, ...props }, children);
  }
);

Text.displayName = "Text";

export default Text;
