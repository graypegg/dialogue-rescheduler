import { type HTMLAttributes, type PropsWithChildren } from "react";
import classes from "./form.module.css";
import { type FieldValues, FormProvider, type UseFormReturn } from "react-hook-form";
import clsx from "clsx";

interface FormProps<T extends FieldValues> extends Omit<
  HTMLAttributes<HTMLFormElement>,
  "onSubmit"
> {
  onSubmit: (formState: T) => void;
  form: UseFormReturn<any, any, any>;
}

export function Form<T extends FieldValues>({
  className,
  onSubmit,
  form,
  children,
  ...rest
}: PropsWithChildren<FormProps<T>>) {
  return (
    <FormProvider {...form}>
      <form
        className={clsx(className, classes.form)}
        onSubmit={form.handleSubmit(onSubmit)}
        {...rest}
      >
        {children}
      </form>
    </FormProvider>
  );
}
