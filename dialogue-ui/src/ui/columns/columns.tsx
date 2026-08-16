import classes from "./columns.module.css";
import { Children, type PropsWithChildren } from "react";
import clsx from "clsx";

interface ColumnsProps {
  layout?: "equal" | "sidebar" | "static";
}

export function Columns({ layout = "equal", children }: PropsWithChildren<ColumnsProps>) {
  return (
    <div className={clsx(classes.columns, classes[layout])}>
      {Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </div>
  );
}
