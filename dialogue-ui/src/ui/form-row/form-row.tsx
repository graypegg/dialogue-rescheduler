import type { HTMLAttributes, PropsWithChildren } from "react";
import classes from "./form-row.module.css";

interface FormRowProps extends HTMLAttributes<HTMLLabelElement> {
  label: string;
}

export function FormRow(props: PropsWithChildren<FormRowProps>) {
  const { label, children, ...rest } = props;

  return (
    <label className={classes.row} {...rest}>
      <div>{label}</div>
      {children}
    </label>
  );
}
