import classes from "./error.module.css";
import clsx from "clsx";
import type { HTMLAttributes, PropsWithChildren } from "react";
import { Icon } from "../icon/icon.tsx";

interface ErrorProps<T extends Error> extends HTMLAttributes<HTMLDivElement> {
  error?: T;
}

export function Error<T extends Error>({
  error,
  className,
  children,
}: PropsWithChildren<ErrorProps<T>>) {
  return (
    <div className={clsx(className, classes.error)}>
      <Icon name="warning" />
      {error ? error.message : children}
    </div>
  );
}
