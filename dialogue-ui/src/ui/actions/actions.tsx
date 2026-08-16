import { Children, type HTMLAttributes, type PropsWithChildren } from "react";
import classes from "./actions.module.css";
import clsx from "clsx";

interface ActionsProps extends HTMLAttributes<HTMLDivElement> {}

export function Actions({ className, children, ...rest }: PropsWithChildren<ActionsProps>) {
  return (
    <menu className={clsx(className, classes.actions)} {...rest}>
      {Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </menu>
  );
}
