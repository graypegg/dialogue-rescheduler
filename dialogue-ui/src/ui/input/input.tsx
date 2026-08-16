import type { InputHTMLAttributes } from "react";
import classes from "./input.module.css";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fieldName: string;
}

export function Input({ fieldName, className, ...rest }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <input
      {...register(fieldName)}
      className={clsx(className, classes.input)}
      aria-invalid={errors[fieldName] ? "true" : "false"}
      {...rest}
    />
  );
}
