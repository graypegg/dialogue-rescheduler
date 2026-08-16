import type { HTMLAttributes, PropsWithChildren } from "react";
import classes from "./button.module.css";
import clsx from "clsx";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  intent: "primary" | "secondary" | "danger";
}

export function Button({ children, intent, ...rest }: PropsWithChildren<ButtonProps>) {
  return (
    <button className={clsx(classes.base, classes[intent])} {...rest}>
      {children}
    </button>
  );
}
