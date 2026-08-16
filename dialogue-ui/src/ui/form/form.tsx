import { type PropsWithChildren } from "react";
import classes from "./form.module.css";
import { type FieldValues, FormProvider, type UseFormReturn } from "react-hook-form";

interface FormProps<T extends FieldValues> {
  onSubmit: (formState: T) => void;
  form: UseFormReturn<T, any, T>;
}

export function Form<T extends FieldValues>({
  children,
  onSubmit,
  form,
}: PropsWithChildren<FormProps<T>>) {
  return (
    <FormProvider {...form}>
      <form className={classes.form} onSubmit={form.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}
