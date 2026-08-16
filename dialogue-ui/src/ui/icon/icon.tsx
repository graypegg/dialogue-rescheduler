import classes from "./icon.module.css";
import type { HTMLAttributes } from "react";
import clsx from "clsx";

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: string; // One day, I'll just make a big package for @types/material-symbols that just has a giant union type for this...
}

export function Icon({ name, className, ...rest }: IconProps) {
  return (
    <span className={clsx(className, classes.icon)} {...rest}>
      {name}
    </span>
  );
}
