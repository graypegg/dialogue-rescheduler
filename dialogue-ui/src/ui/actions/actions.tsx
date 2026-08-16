import { Children, type HTMLAttributes, type PropsWithChildren } from "react";
import classes from "./actions.module.css";

interface ActionsProps extends HTMLAttributes<HTMLDivElement> {}

export function Actions({ children, ...rest }: PropsWithChildren<ActionsProps>) {
  return (
    <menu className={classes.actions} {...rest}>
      {Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </menu>
  );
}
