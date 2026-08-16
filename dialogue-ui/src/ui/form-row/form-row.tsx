import type { HTMLAttributes, PropsWithChildren } from "react";
import classes from "./form-row.module.css";
import clsx from "clsx";

interface FormRowProps extends HTMLAttributes<HTMLLabelElement> {
  label: string;
}

export function FormRow(props: PropsWithChildren<FormRowProps>) {
  const { label, className, children, ...rest } = props;

  return (
    <label className={clsx(className, classes.row)} {...rest}>
      <div>{label}</div>
      {children}
    </label>
  );
}
