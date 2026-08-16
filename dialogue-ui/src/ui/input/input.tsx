import type { InputHTMLAttributes } from "react";
import classes from "./input.module.css";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fieldName: string;
}

export function Input({ fieldName, ...rest }: InputProps) {
  const { register } = useFormContext();

  return <input className={classes.input} {...register(fieldName)} {...rest} />;
}
