import classes from "./spinner.module.css";
import { Icon } from "../icon/icon.tsx";
import clsx from "clsx";

interface SpinnerProps {
  className?: string;
}

export function Spinner({ className }: SpinnerProps) {
  return <Icon className={clsx(className, classes.spinner)} name="progress_activity" />;
}
