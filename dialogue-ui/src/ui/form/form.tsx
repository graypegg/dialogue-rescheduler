import type { HTMLAttributes, PropsWithChildren } from "react";
import classes from "./form.module.css";

export function Form(props: PropsWithChildren<HTMLAttributes<HTMLFormElement>>) {
  const { children } = props;

  return (
    <form className={classes.form} {...props}>
      {children}
    </form>
  );
}
